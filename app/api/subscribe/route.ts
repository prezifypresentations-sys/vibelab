import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Jūsų nurodytas Formos ID
    const FORM_ID = "9428738";

    const formData = new URLSearchParams();
    formData.append("email_address", email);

    // Siunčiame užklausą tiesiai į jūsų Kit formą
    const response = await fetch(
      `https://app.kit.com/forms/${FORM_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Kit API klaida:", error);
    return NextResponse.json(
      { error: "Vidinė serverio klaida" },
      { status: 500 }
    );
  }
}
