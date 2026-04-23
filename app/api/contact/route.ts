import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, services } = await request.json();

  const { error } = await resend.emails.send({
    from: 'Forma Contact <info@madebyforma.nl>',
    to: 'info@madebyforma.nl',
    replyTo: email,
    subject: `Nieuwe aanvraag van ${name}`,
    html: `
      <h2>Nieuwe contactaanvraag</h2>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Diensten:</strong> ${services.length > 0 ? services.join(', ') : 'Geen geselecteerd'}</p>
      <p><strong>Bericht:</strong><br/>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
