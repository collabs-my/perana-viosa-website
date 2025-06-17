// Google Calendar Integration Utilities

export interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

export interface CalendarEvent {
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees: Array<{
    email: string;
    displayName?: string;
  }>;
  reminders: {
    useDefault: boolean;
    overrides?: Array<{
      method: string;
      minutes: number;
    }>;
  };
}

// Service duration mapping
const serviceDurations: Record<string, number> = {
  audit: 45,
  consultation: 60,
  discovery: 30,
};

// Service titles mapping
const serviceTitles: Record<string, string> = {
  audit: "Free Marketing Audit",
  consultation: "Strategy Consultation", 
  discovery: "Discovery Call",
};

/**
 * Creates a Google Calendar event object from booking data
 */
export function createCalendarEvent(bookingData: BookingData): CalendarEvent {
  const { service, date, time, name, email, phone, company, message } = bookingData;
  
  // Parse date and time
  const startDateTime = new Date(`${date}T${time}:00`);
  const duration = serviceDurations[service] || 30;
  const endDateTime = new Date(startDateTime.getTime() + duration * 60000);
  
  // Format datetime strings for Google Calendar
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  const summary = `${serviceTitles[service]} - ${name}${company ? ` (${company})` : ''}`;
  
  let description = `Marketing consultation with ${name}\n\n`;
  description += `Service: ${serviceTitles[service]}\n`;
  description += `Duration: ${duration} minutes\n`;
  if (company) description += `Company: ${company}\n`;
  if (phone) description += `Phone: ${phone}\n`;
  description += `Email: ${email}\n\n`;
  if (message) description += `Notes: ${message}\n\n`;
  description += `Meeting Link: [To be added by host]\n\n`;
  description += `Agenda:\n`;
  description += `- Review current marketing situation\n`;
  description += `- Identify key challenges and opportunities\n`;
  description += `- Discuss potential solutions\n`;
  description += `- Next steps and recommendations`;

  return {
    summary,
    description,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone,
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone,
    },
    attendees: [
      {
        email,
        displayName: name,
      },
      {
        email: 'hello@peranaviosa.com', // Replace with your business email
        displayName: 'Perana Viosa Team',
      },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 1 day before
        { method: 'email', minutes: 60 }, // 1 hour before
        { method: 'popup', minutes: 15 }, // 15 minutes before
      ],
    },
  };
}

/**
 * Creates a Google Calendar link for manual addition
 */
export function createGoogleCalendarLink(bookingData: BookingData): string {
  const { service, date, time, name, email } = bookingData;
  
  const startDateTime = new Date(`${date}T${time}:00`);
  const duration = serviceDurations[service] || 30;
  const endDateTime = new Date(startDateTime.getTime() + duration * 60000);
  
  const title = encodeURIComponent(`${serviceTitles[service]} - ${name}`);
  const details = encodeURIComponent(`Marketing consultation with ${name} (${email})`);
  const startTime = startDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const endTime = endDateTime.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${startTime}/${endTime}`,
    details: details,
    add: email,
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Sends booking confirmation email (placeholder for email service integration)
 */
export async function sendBookingConfirmation(bookingData: BookingData): Promise<boolean> {
  try {
    // This is where you would integrate with your email service
    // Examples: SendGrid, Mailgun, AWS SES, etc.
    
    const emailData = {
      to: bookingData.email,
      subject: `Booking Confirmed: ${serviceTitles[bookingData.service]}`,
      html: generateConfirmationEmail(bookingData),
    };
    
    // Placeholder for actual email sending
    console.log('Email would be sent:', emailData);
    
    // For now, return true to simulate successful sending
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}

/**
 * Generates HTML content for confirmation email
 */
function generateConfirmationEmail(bookingData: BookingData): string {
  const { service, date, time, name } = bookingData;
  const startDateTime = new Date(`${date}T${time}:00`);
  const duration = serviceDurations[service] || 30;
  
  const formattedDate = startDateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  const formattedTime = startDateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #ee3331;">Booking Confirmed!</h1>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for booking a ${serviceTitles[service]} with Perana Viosa. We're excited to help you transform your marketing!</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Appointment Details</h3>
          <p><strong>Service:</strong> ${serviceTitles[service]}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${formattedTime}</p>
          <p><strong>Duration:</strong> ${duration} minutes</p>
        </div>
        
        <h3>What to Expect</h3>
        <ul>
          <li>We'll send you a meeting link 24 hours before the appointment</li>
          <li>Please review any materials we send in advance</li>
          <li>Come prepared with questions about your marketing challenges</li>
          <li>We'll provide actionable insights you can implement immediately</li>
        </ul>
        
        <p>If you need to reschedule or have any questions, please reply to this email or call us at [Your Phone Number].</p>
        
        <p>Looking forward to speaking with you!</p>
        
        <p>Best regards,<br>
        The Perana Viosa Team</p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
          Perana Viosa - Multidimensional Marketing Agency<br>
          <a href="https://peranaviosa.com">peranaviosa.com</a>
        </p>
      </div>
    </body>
    </html>
  `;
}

/**
 * Validates available time slots (placeholder for actual calendar checking)
 */
export async function checkAvailability(date: string, time: string): Promise<boolean> {
  // This is where you would check against your actual calendar
  // For now, return true for all slots
  return true;
}
