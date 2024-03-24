import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);
const mailgunClient = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
});

export async function POST(request: any) {
  const requestBody = await request.json();

  const text = `
    <strong>De:</strong> ${requestBody.name} (${requestBody.email})
    <br/>
    <strong>Mensaje:</strong> ${requestBody.message}
  `;

  const msg = {
    from: `Mailgun Sender <${process.env.SENDER_EMAIL}>`,
    to: [`${process.env.SENDER_EMAIL}`],
    subject: "Nuevo mensaje desde la página de Hostal Sep7imo Arte",
    text: text,
    html: text,
  };

  try {
    await mailgunClient.messages.create(
      "sandboxa5f75967fbb84189a195cccf1b5dea92.mailgun.org",
      msg,
    );
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }

  return new Response("Hello, Next.js!");
}
