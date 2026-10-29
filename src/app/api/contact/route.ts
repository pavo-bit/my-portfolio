import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const data = {
            service_id: 'service_bc9q58e',
            template_id: 'template_9ep5bko',
            user_id: 'MRXEtibdESiBYBXyM',
            template_params: {
                from_name: name,
                from_email: email,
                subject: subject || 'No Subject',
                message: message
            }
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('EmailJS Error:', errorText);
            return NextResponse.json({ error: 'Failed to send email via EmailJS.' }, { status: response.status });
        }

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
}
