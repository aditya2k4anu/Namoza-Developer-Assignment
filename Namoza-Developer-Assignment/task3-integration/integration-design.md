# Task 3 – Integration Design

## Integration Architecture

When a user submits the consultation form, the request is first validated on the client side using JavaScript to ensure the required fields are entered correctly. After validation, the frontend sends the form data (Name, Phone, and Clinic Preference) to a backend API endpoint over HTTPS.

The backend application is responsible for handling all business logic. It first searches HubSpot CRM using the phone number through the HubSpot CRM Search API. Since HubSpot does not automatically deduplicate contacts by phone number, this search prevents duplicate patient records.

If a contact with the same phone number already exists, the backend updates the existing record with the latest information. Otherwise, it creates a new contact using the HubSpot CRM API with the following properties:

- Name
- Phone
- Clinic Preference
- Source = Google Ads – Consultation Landing Page
- Lead Status = New Enquiry

Once HubSpot confirms the operation, the backend immediately calls the Karix WhatsApp Business API to send a confirmation message to the patient.

At the same time, a Google Ads conversion event is recorded using Google Tag Manager and GA4 through the `consultation_form_submitted` event, allowing Google Ads to optimize campaigns toward qualified consultation requests.

This architecture keeps the frontend lightweight while ensuring all sensitive API keys remain securely on the server.

---

## Biggest Failure Point

The biggest failure point is duplicate contact creation in HubSpot because the form collects only a phone number instead of an email address. HubSpot's default deduplication is based on email, so duplicate contacts can easily occur.

To avoid this, the backend always performs a CRM Search API request using the submitted phone number before creating a new contact. If an existing contact is found, it is updated instead of creating another record. This maintains a clean CRM and prevents duplicate patient histories.

---

## WhatsApp SLA Monitoring

The WhatsApp confirmation message must be delivered within two minutes.

Possible reasons for failure include:

- HubSpot API timeout
- Karix API downtime
- Network connectivity issues
- API rate limiting
- Server overload

To ensure reliability, the backend should implement retry logic with exponential backoff, maintain detailed API logs, monitor response times, and trigger alerts if message delivery exceeds the two-minute SLA. A message queue can also be used so temporary API failures do not result in lost patient notifications.