import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe (will fail gracefully at runtime if key is dummy, but allows build to succeed)
const stripeKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummy";
const stripe = new Stripe(stripeKey, {
  apiVersion: "2026-05-27.dahlia" as any,
});

const baseProducts = {
  "ai-assistant": {
    name: "DI Asistento Kūrimas",
    price: 47,
  },
};

const allUpsells = {
  "upsell-mazo-verslo-paketas": {
    name: "Mažo Verslo Paketas (6 AI specialistai)",
    price: 27,
  },
  "upsell-svetaines": {
    name: "Svetainės kūrimas nuo 0 (Be programavimo)",
    price: 47,
  },
  "upsell-ai-akademija": {
    name: "AI Akademija (VIP Paketas)",
    price: 147,
  },
};

export async function POST(req: Request) {
  try {
    if (!stripeKey) {
      return NextResponse.json(
        { error: "Stripe raktas nekonfigūruotas serveryje." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { baseProduct, upsells } = body;

    if (!baseProduct || !baseProducts[baseProduct as keyof typeof baseProducts]) {
      return NextResponse.json({ error: "Neteisingas pagrindinis produktas" }, { status: 400 });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Add base product
    const base = baseProducts[baseProduct as keyof typeof baseProducts];
    lineItems.push({
      price_data: {
        currency: "eur",
        product_data: {
          name: base.name,
        },
        unit_amount: base.price * 100, // Stripe uses cents
      },
      quantity: 1,
    });

    // Add selected upsells
    if (Array.isArray(upsells)) {
      for (const upsellId of upsells) {
        const upsell = allUpsells[upsellId as keyof typeof allUpsells];
        if (upsell) {
          lineItems.push({
            price_data: {
              currency: "eur",
              product_data: {
                name: upsell.name,
              },
              unit_amount: upsell.price * 100,
            },
            quantity: 1,
          });
        }
      }
    }

    // Create Stripe Checkout Session
    const origin = req.headers.get("origin") || "https://vibelab.lt";
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `https://www.skool.com/vibelab-9189/about`,
      cancel_url: `${origin}/pirkti?product=${baseProduct}`,
      customer_creation: "always",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json(
      { error: "Klaida kuriant mokėjimo sesiją" },
      { status: 500 }
    );
  }
}
