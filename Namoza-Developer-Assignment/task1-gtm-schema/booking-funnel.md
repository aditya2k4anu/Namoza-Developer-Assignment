# Booking Funnel Tracking

The booking process contains three steps.

## Step 1

Select

- Clinic Location
- Specialty

When completed, the frontend developer triggers:

booking_step_complete

Step Number = 1

---

## Step 2

Enter

- Name
- Phone
- Preferred Date

Frontend triggers

booking_step_complete

Step Number = 2

---

## Step 3

Confirm Appointment

Frontend triggers

booking_completed

Step Number = 3

---

## Funnel

100 Users

↓

Step 1

↓

Step 2

↓

Step 3

↓

Booking Complete

GA4 Funnel Exploration will display the percentage of users leaving after every step.

Marketing can then optimize the step with the highest abandonment.