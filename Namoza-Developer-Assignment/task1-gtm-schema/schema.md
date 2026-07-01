# GTM Event Schema – OrthoNow

## Objective

Implement complete event tracking for OrthoNow's website to measure user interactions, optimize conversion funnels, and improve campaign performance.

---

| Event Name | Trigger Type | Key Parameters | GA4 Report / Audience |
|------------|-------------|---------------|-----------------------|
| page_view | Page View | page_title, page_location, page_referrer | Pages & Screens |
| appointment_started | Custom Event | clinic_location, specialty, source | Funnel Exploration |
| booking_step_complete | Custom Event | step_number, step_name, clinic_location | Funnel Exploration |
| booking_completed | Custom Event | booking_id, clinic_location, specialty | Conversions |
| call_now_click | Click (tel:) | phone_number, page_name, clinic_location | Google Ads Conversion |
| whatsapp_click | Click (wa.me) | page_name, clinic_location, source | Audience Building |
| patient_guide_download | Form Submit | patient_name, phone, pdf_name | Lead Generation |
| clinic_page_view | Page View | clinic_name, city, page_type | Engagement |
| blog_scroll_25 | Scroll Depth | article_title, category, scroll_percent | Content Engagement |
| blog_scroll_50 | Scroll Depth | article_title, category, scroll_percent | Content Engagement |
| blog_scroll_75 | Scroll Depth | article_title, category, scroll_percent | Content Engagement |
| blog_scroll_100 | Scroll Depth | article_title, category, scroll_percent | Engaged Readers Audience |