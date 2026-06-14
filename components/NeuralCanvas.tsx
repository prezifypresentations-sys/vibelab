"use client";

import { useRef, useEffect, useCallback } from "react";

/*──────────────────────────────────────────────────────────────
  CONFIG
──────────────────────────────────────────────────────────────*/
const GOLD = { r: 255, g: 222, b: 89 };
const ELECTRIC = { r: 11, g: 95, b: 255 };
const WHITE = { r: 241, g: 245, b: 251 };

const NODE_COUNT_DESKTOP = 100;
const NODE_COUNT_MOBILE = 55;
const CONNECTION_DIST = 200;
const MOUSE_RADIUS = 250;
const PULSE_INTERVAL = 800;
const DATA_STREAM_INTERVAL = 1500;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: typeof GOLD;
  pulsePhase: number;
  pulseSpeed: number;
  opacity: number;
}

interface Pulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  color: typeof GOLD;
}

interface DataStream {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  trail: { x: number; y: number; alpha: number }[];
}

/*──────────────────────────────────────────────────────────────
  COMPONENT
──────────────────────────────────────────────────────────────*/
export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const streamsRef = useRef<DataStream[]>([]);
  const lastPulseRef = useRef(0);
  const lastStreamRef = useRef(0);
  const dprRef = useRef(1);

  const initNodes = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const count = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
    const nodes: Node[] = [];

    for (let i = 0; i < count; i++) {
      const isGold = Math.random() > 0.55;
      const baseRadius = 1.5 + Math.random() * 2.5;
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: baseRadius,
        baseRadius,
        color: isGold ? GOLD : ELECTRIC,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        opacity: 0.4 + Math.random() * 0.45,
      });
    }
    nodesRef.current = nodes;
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
    const nodes = nodesRef.current;
    const pulses = pulsesRef.current;
    const streams = streamsRef.current;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, w, h);

    /*── Update & draw connections ──*/
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
          // Blend colors
          const c1 = nodes[i].color;
          const c2 = nodes[j].color;
          const mr = (c1.r + c2.r) / 2;
          const mg = (c1.g + c2.g) / 2;
          const mb = (c1.b + c2.b) / 2;

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${mr},${mg},${mb},${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    /*── Update nodes ──*/
    for (const node of nodes) {
      // Mouse interaction
      const mdx = node.x - mouse.x;
      const mdy = node.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

      if (mDist < MOUSE_RADIUS && mDist > 0) {
        const force = (MOUSE_RADIUS - mDist) / MOUSE_RADIUS;
        const angle = Math.atan2(mdy, mdx);
        node.vx += Math.cos(angle) * force * 0.3;
        node.vy += Math.sin(angle) * force * 0.3;
      }

      // Damping
      node.vx *= 0.985;
      node.vy *= 0.985;

      // Move
      node.x += node.vx;
      node.y += node.vy;

      // Wrap around
      if (node.x < -20) node.x = w + 20;
      if (node.x > w + 20) node.x = -20;
      if (node.y < -20) node.y = h + 20;
      if (node.y > h + 20) node.y = -20;

      // Pulse animation
      node.pulsePhase += node.pulseSpeed;
      const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
      node.radius = node.baseRadius + pulse * 2;

      // Draw node
      const { r, g, b } = node.color;
      const glowSize = node.radius * 5;

      // Glow
      const grad = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, glowSize
      );
      grad.addColorStop(0, `rgba(${r},${g},${b},${node.opacity * 0.4 * (0.5 + pulse * 0.5)})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${node.opacity * (0.6 + pulse * 0.4)})`;
      ctx.fill();
    }

    /*── Spawn & draw pulses (data traveling along connections) ──*/
    if (time - lastPulseRef.current > PULSE_INTERVAL && nodes.length > 1) {
      lastPulseRef.current = time;
      // Find a pair of connected nodes
      for (let attempt = 0; attempt < 10; attempt++) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a === b) continue;
        const dx = nodes[b].x - nodes[a].x;
        const dy = nodes[b].y - nodes[a].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST * 1.5) {
          pulses.push({
            fromIdx: a,
            toIdx: b,
            progress: 0,
            speed: 0.015 + Math.random() * 0.015,
            color: Math.random() > 0.5 ? GOLD : ELECTRIC,
          });
          break;
        }
      }
    }

    // Draw pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;
      if (p.progress > 1) {
        pulses.splice(i, 1);
        continue;
      }

      const from = nodes[p.fromIdx];
      const to = nodes[p.toIdx];
      if (!from || !to) { pulses.splice(i, 1); continue; }

      const px = from.x + (to.x - from.x) * p.progress;
      const py = from.y + (to.y - from.y) * p.progress;
      const { r, g, b } = p.color;
      const alpha = Math.sin(p.progress * Math.PI);

      // Bright pulse dot
      const pGrad = ctx.createRadialGradient(px, py, 0, px, py, 20);
      pGrad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
      pGrad.addColorStop(0.4, `rgba(${r},${g},${b},${alpha * 0.5})`);
      pGrad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(px, py, 20, 0, Math.PI * 2);
      ctx.fillStyle = pGrad;
      ctx.fill();

      // Core bright dot
      ctx.beginPath();
      ctx.arc(px, py, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.9})`;
      ctx.fill();
    }

    /*── Data streams (long-range glowing trails) ──*/
    if (time - lastStreamRef.current > DATA_STREAM_INTERVAL) {
      lastStreamRef.current = time;
      const startEdge = Math.random();
      let sx: number, sy: number, tx: number, ty: number;

      if (startEdge < 0.25) {
        sx = 0; sy = Math.random() * h;
        tx = w; ty = Math.random() * h;
      } else if (startEdge < 0.5) {
        sx = w; sy = Math.random() * h;
        tx = 0; ty = Math.random() * h;
      } else if (startEdge < 0.75) {
        sx = Math.random() * w; sy = 0;
        tx = Math.random() * w; ty = h;
      } else {
        sx = Math.random() * w; sy = h;
        tx = Math.random() * w; ty = 0;
      }

      streams.push({
        x: sx, y: sy,
        targetX: tx, targetY: ty,
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        trail: [],
      });
    }

    for (let i = streams.length - 1; i >= 0; i--) {
      const s = streams[i];
      s.progress += s.speed;
      if (s.progress > 1.2) {
        streams.splice(i, 1);
        continue;
      }

      s.x = s.x + (s.targetX - s.x) * s.speed * 3;
      s.y = s.y + (s.targetY - s.y) * s.speed * 3;

      // Add to trail
      s.trail.push({ x: s.x, y: s.y, alpha: 1 });

      // Fade trail
      for (let t = s.trail.length - 1; t >= 0; t--) {
        s.trail[t].alpha -= 0.02;
        if (s.trail[t].alpha <= 0) {
          s.trail.splice(t, 1);
        }
      }

      // Draw trail
      if (s.trail.length > 1) {
        for (let t = 1; t < s.trail.length; t++) {
          const prev = s.trail[t - 1];
          const curr = s.trail[t];
          const alpha = curr.alpha * 0.5;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${alpha})`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Head glow
        const head = s.trail[s.trail.length - 1];
        if (head) {
          const hGrad = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 16);
          hGrad.addColorStop(0, `rgba(255,255,255,0.9)`);
          hGrad.addColorStop(0.4, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0.6)`);
          hGrad.addColorStop(1, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0)`);
          ctx.beginPath();
          ctx.arc(head.x, head.y, 16, 0, Math.PI * 2);
          ctx.fillStyle = hGrad;
          ctx.fill();
        }
      }
    }

    /*── Central "brain" glow ──*/
    const cx = w * 0.5;
    const cy = h * 0.42;
    const breathe = Math.sin(time * 0.001) * 0.15 + 0.85;
    const brainGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 350 * breathe);
    brainGrad.addColorStop(0, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0.08)`);
    brainGrad.addColorStop(0.5, `rgba(${ELECTRIC.r},${ELECTRIC.g},${ELECTRIC.b},0.04)`);
    brainGrad.addColorStop(1, `rgba(0,0,0,0)`);
    ctx.beginPath();
    ctx.arc(cx, cy, 350 * breathe, 0, Math.PI * 2);
    ctx.fillStyle = brainGrad;
    ctx.fill();

  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodesRef.current.length === 0) initNodes(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("mouseleave", handleLeave);

    let isVisible = true;
    
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible) {
          // Resume animation if it was paused
          if (!animRef.current) {
            animRef.current = requestAnimationFrame(loop);
          }
        }
      },
      { threshold: 0 }
    );
    
    if (canvas) observer.observe(canvas);

    const loop = (time: number) => {
      if (!isVisible) {
        // Stop requesting frames when not visible
        animRef.current = 0;
        return;
      }
      const w = window.innerWidth;
      const h = window.innerHeight;
      draw(ctx, w, h, time);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (canvas) observer.unobserve(canvas);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [draw, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ pointerEvents: "auto" }}
      aria-hidden="true"
    />
  );
}
