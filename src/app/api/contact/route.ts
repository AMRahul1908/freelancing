import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, type, message } = await req.json();
        const phoneNumber = process.env.CONTACT_WHATSAPP_NUMBER;

        if (!phoneNumber) {
            return NextResponse.json({ error: "WhatsApp number not configured" }, { status: 500 });
        }

        const text = `Hello! My name is ${name}.
Email: ${email}
Project Type: ${type}
Message: ${message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Return the URL for the client to open
        return NextResponse.json({ url: whatsappUrl });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
