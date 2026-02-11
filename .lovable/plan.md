

# IVF Patient Companion — Implementation Plan

## Design System
- **Color palette**: Soft pastel blue, lavender, light pink, warm white backgrounds
- **Typography**: Clean, rounded, high-readability fonts with generous spacing
- **Components**: Rounded cards with gentle shadows, large touch-friendly buttons, friendly icons from Lucide
- **Tone**: All copy will be empathetic, calm, and reassuring — no clinical or alarming language

## Pages (Phase 1 — All Core Pages with Mock Data)

### 1. Landing Page
- Warm hero section: "You are not alone in your IVF journey"
- Brief feature highlights (timeline tracking, emotional support, medication reminders)
- Login / Sign Up call-to-action buttons
- Soft gradient background with calming visual elements

### 2. Login / Sign Up Page
- Simple form with email & password
- Privacy reassurance text ("Your data is private and secure")
- Option to mention partner access setup later
- Clean, centered layout

### 3. Patient Dashboard (Main Hub)
- **Treatment Timeline**: Visual stepper — Stimulation → Egg Retrieval → Embryo Transfer → Two-Week Wait
- **Today's Medications**: Cards with checkmark confirmation
- **Next Appointment**: Date/time card
- **Emotional Check-in**: Tap to select mood (Calm, Low, Anxious, Sad, Overwhelmed) with soft emoji/icons
- **Gentle Progress Indicator**: Non-pressuring visual

### 4. Medication & Reminders Page
- List of medications with dosage and schedule
- Time-based display with morning/afternoon/evening grouping
- "Taken / Not Taken" toggle buttons
- Friendly guidance text alongside each medication

### 5. Emotional Support & AI Chatbot Page
- Chat-style interface with pre-filled supportive messages
- Breathing exercise / relaxation suggestion cards
- Disclaimer: "This is support, not medical diagnosis"
- Calm, conversational UI design

### 6. Partner Support Page
- "Emotional Support Suggested Today" card
- Gentle action suggestions (kind message, quiet time, patience)
- Privacy-respecting, opt-in design
- Warm, inclusive tone

### 7. Symptom Tracking Page
- Daily logging form: Pain, Bloating, Mood, Spotting (slider/select inputs)
- Color-coded indicators: Normal (green) | Monitor (yellow) | Contact Clinic (soft orange)
- Reassuring language throughout
- Weekly summary view

### 8. Clinic Communication Page
- Secure messaging interface mockup (doctor/clinic thread)
- Upload area for reports/prescriptions
- Clean, organized message list

### 9. Notifications Page
- Notification center with tabs/filters: Medications, Appointments, Support
- Gentle visual cues (soft badges, no aggressive red alerts)
- Calm wording for all notifications

### 10. Settings & Privacy Page
- Reminder management toggles
- AI features on/off controls
- Partner access management
- Privacy & data security information section

## Navigation
- **Mobile**: Bottom navigation bar with 4-5 key icons (Home, Meds, Chat, Track, Settings)
- **Desktop**: Side navigation or top bar adapting gracefully
- Mobile-first responsive design throughout

## Technical Approach
- All pages use mock/placeholder data (ready for backend integration later)
- React Router for page navigation
- Card-based, component-driven layout
- No backend required initially — authentication and data can be added in a future phase

