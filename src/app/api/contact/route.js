import { Resend } from "resend";

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 150,
  message: 5000,
};

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const contact = Object.fromEntries(
    Object.entries(MAX_LENGTHS).map(([field, maxLength]) => [
      field,
      typeof payload[field] === "string" ? payload[field].trim() : "",
    ]),
  );

  if (
    !contact.name ||
    !contact.email ||
    !contact.subject ||
    !contact.message ||
    Object.entries(MAX_LENGTHS).some(([field, maxLength]) => contact[field].length > maxLength) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
  ) {
    return Response.json({ message: "Please check the form fields and try again." }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return Response.json(
      { message: "The email service is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  let sendResult;
  try {
    sendResult = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: contact.email,
      subject: `Portfolio contact: ${contact.subject}`,
      text: [
        `Name: ${contact.name}`,
        `Email: ${contact.email}`,
        `Phone: ${contact.phone || "Not provided"}`,
        `Subject: ${contact.subject}`,
        "",
        contact.message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Resend request failed:", error);
    return Response.json({ message: "Could not connect to the email service. Please try again later." }, { status: 502 });
  }

  if (sendResult.error) {
    console.error("Resend rejected contact email:", sendResult.error);
    return Response.json({ message: "Could not send the email. Please try again later." }, { status: 502 });
  }

  return Response.json({ message: "Message sent." });
}