# Google Calendar Integration Setup

This document explains how to set up the Google Calendar integration for the booking system.

## Current Implementation

The booking system currently includes:

✅ **Complete booking flow** with 4 steps:
1. Service selection
2. Date & time selection  
3. Contact information form
4. Confirmation with calendar link

✅ **Google Calendar link generation** - Creates a link that opens Google Calendar with pre-filled event details

✅ **Email confirmation system** (placeholder) - Ready for email service integration

✅ **Modern, responsive UI** - Clean design with progress indicators and animations

## To Enable Full Google Calendar API Integration

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Calendar API
4. Create credentials (OAuth 2.0 or Service Account)

### 2. Install Google Calendar API Client

```bash
npm install googleapis
```

### 3. Environment Variables

Add to your `.env.local` file:

```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALENDAR_ID=your_calendar_id
```

### 4. Update Calendar Integration

Replace the placeholder functions in `/src/lib/calendar.ts` with actual Google Calendar API calls:

```typescript
import { google } from 'googleapis';

// Initialize Google Calendar API
const calendar = google.calendar('v3');

// Actual implementation for creating calendar events
export async function createGoogleCalendarEvent(bookingData: BookingData) {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  
  // Set credentials
  auth.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  });
  
  const event = createCalendarEvent(bookingData);
  
  const response = await calendar.events.insert({
    auth,
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    resource: event,
  });
  
  return response.data;
}
```

## Email Integration Options

### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 2: Mailgun
```bash
npm install mailgun-js
```

### Option 3: AWS SES
```bash
npm install aws-sdk
```

## Current Features

### Booking Page (`/book`)
- **Multi-step wizard** with progress indicator
- **Service selection** with pricing and descriptions
- **Calendar picker** with available dates
- **Time slot selection** with business hours
- **Contact form** with validation
- **Booking summary** before confirmation
- **Success page** with next steps

### Calendar Integration
- **Google Calendar link** generation
- **Event details** with all booking information
- **Automatic reminders** (1 day, 1 hour, 15 minutes)
- **Attendee management** with client and business emails

### UI/UX Features
- **Responsive design** works on all devices
- **Smooth animations** with Framer Motion
- **Loading states** during form submission
- **Error handling** for failed bookings
- **Accessibility** with proper ARIA labels

## Navigation Integration

The booking system is integrated throughout the site:

- **Hero section** "Book Free Audit Call" button → `/book`
- **Header** "Book Free Call" button → `/book`
- **Mobile menu** "Book Free Call" button → `/book`

## Customization

### Services
Edit the `services` array in `/src/app/book/page.tsx` to modify:
- Service titles and descriptions
- Pricing
- Duration
- Badges

### Time Slots
Modify the `timeSlots` array to change available appointment times.

### Business Information
Update the email addresses and business details in `/src/lib/calendar.ts`.

## Testing

1. Visit `http://localhost:3000/book`
2. Complete the booking flow
3. Check browser console for generated calendar event data
4. Test the Google Calendar link in the confirmation step

## Production Deployment

Before deploying to production:

1. Set up actual Google Calendar API integration
2. Configure email service for confirmations
3. Add proper error handling and logging
4. Set up webhook for calendar event updates
5. Add payment processing if needed
6. Configure proper environment variables

## Security Considerations

- Store API keys securely in environment variables
- Use OAuth 2.0 for user authentication if needed
- Validate all form inputs on both client and server
- Implement rate limiting for booking submissions
- Add CSRF protection for forms
