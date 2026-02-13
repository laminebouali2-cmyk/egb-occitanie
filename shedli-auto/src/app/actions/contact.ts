"use server";

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(formData: FormData): Promise<ContactResult> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const type = (formData.get("type") as string) || "rappel";
  const vehicle = (formData.get("vehicle") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";

  if (!name || name.length < 2) {
    return { success: false, error: "Veuillez entrer votre nom." };
  }

  if (!phone) {
    return { success: false, error: "Veuillez entrer votre numéro de téléphone." };
  }

  const phoneClean = phone.replace(/[\s.\-()]/g, "");
  if (!/^(?:\+33|0033|0)[1-9]\d{8}$/.test(phoneClean)) {
    return { success: false, error: "Numéro de téléphone invalide." };
  }

  const typeLabels: Record<string, string> = {
    rappel: "Demande de rappel",
    devis: "Demande de devis",
    rdv: "Prise de rendez-vous",
    question: "Question",
  };

  const submission = {
    name,
    phone: phoneClean,
    type,
    typeLabel: typeLabels[type] || type,
    vehicle,
    message,
    timestamp: new Date().toISOString(),
  };

  // Send via Resend API if configured (free tier: 100 emails/month)
  // Set RESEND_API_KEY and CONTACT_EMAIL in your .env.local
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || "shedliauto@gmail.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Shedli Auto <noreply@shedliauto.com>",
          to: [toEmail],
          subject: `${submission.typeLabel} — ${name}`,
          html: `
            <div style="font-family: -apple-system, sans-serif; max-width: 480px;">
              <h2 style="color: #0D9488; font-size: 18px;">Nouvelle demande de contact</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 120px;">Type</td><td style="padding: 8px 0; font-weight: 600;">${submission.typeLabel}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;">Téléphone</td><td style="padding: 8px 0; font-weight: 600;"><a href="tel:${phoneClean}" style="color: #0D9488;">${phone}</a></td></tr>
                ${vehicle ? `<tr><td style="padding: 8px 0; color: #666;">Véhicule</td><td style="padding: 8px 0;">${vehicle}</td></tr>` : ""}
                ${message ? `<tr><td style="padding: 8px 0; color: #666;">Message</td><td style="padding: 8px 0;">${message}</td></tr>` : ""}
              </table>
              <p style="margin-top: 20px; font-size: 12px; color: #999;">${submission.timestamp}</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        console.error("[contact] Resend API error:", await res.text());
      }
    } catch (err) {
      console.error("[contact] Email send failed:", err);
    }
  }

  console.log("[contact] New submission:", JSON.stringify(submission, null, 2));

  return { success: true };
}
