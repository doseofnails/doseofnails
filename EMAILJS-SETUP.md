# EmailJS Setup Guide for Dose of Nails

This guide will help you set up EmailJS to receive booking notifications from your website.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Click **"Sign Up"** (top right)
3. Sign up using:
   - Google account, OR
   - GitHub account, OR
   - Email + password
4. Verify your email (check inbox/spam)

**Free Tier:** 200 emails/month (plenty for a small business!)

---

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - Outlook
   - Yahoo
   - Custom SMTP

#### For Gmail:
1. Select **"Gmail"**
2. Click **"Connect Account"**
3. Sign in with your Gmail account
4. Allow EmailJS to send emails on your behalf
5. **Service ID** will be generated (e.g., `service_abc123`)
   - ✍️ **SAVE THIS!** You'll need it later

---

### Step 3: Create Email Template

1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Fill in the template:

**Template Settings:**
```
Template Name: Dose of Nails - Booking Request
```

**Email Subject:**
```
🔔 New Booking from {{user_name}}
```

**Email Body (Content):**
```
New booking request received from Dose of Nails website!

📋 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: {{user_name}}
📱 Phone: {{user_phone}}
📧 Email: {{user_email}}
💅 Service: {{service}}

📝 Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Sent from: Dose of Nails Website
⏰ Time: {{reply_to}}

Please respond to the customer within 24 hours!
```

4. **Settings tab:**
   - **From Name:** `Dose of Nails Website`
   - **From Email:** (your Gmail address)
   - **To Email:** `YOUR_EMAIL@gmail.com` (where you want to receive bookings)
   - **Reply To:** `{{user_email}}` (so you can reply directly to customer)

5. Click **"Save"**
6. **Template ID** will be shown (e.g., `template_xyz789`)
   - ✍️ **SAVE THIS!** You'll need it later

---

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** (left sidebar)
2. Find **"Public Key"** section
3. Copy your public key (e.g., `aBcDeFgHiJkLmNoPqRsTuVwXyZ`)
   - ✍️ **SAVE THIS!** You'll need it later

---

### Step 5: Update Your Website Code

Now you have 3 important values:
- ✅ **Service ID:** `service_abc123`
- ✅ **Template ID:** `template_xyz789`
- ✅ **Public Key:** `aBcDeFgHiJkLmNoPqRsTuVwXyZ`

#### Update `index.html`:

Open `src-static/index.html` and find this line (around line 70):
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

Replace `YOUR_PUBLIC_KEY` with your actual public key:
```javascript
emailjs.init("aBcDeFgHiJkLmNoPqRsTuVwXyZ");
```

#### Update `js/main.js`:

Open `src-static/js/main.js` and find these lines (around line 47-48):
```javascript
const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";
```

Replace with your actual IDs:
```javascript
const serviceID = "service_abc123";
const templateID = "template_xyz789";
```

---

### Step 6: Test Your Setup

1. Open your website locally or deploy it
2. Fill out the booking form with test data:
   - Name: Test User
   - Phone: 123-456-7890
   - Email: your-email@gmail.com
   - Service: Manicure
   - Message: This is a test booking

3. Click **"Request Appointment"**
4. You should see:
   - ✅ "Sending..." message
   - ✅ Success alert
   - ✅ Email in your inbox within 1 minute

---

## 🎯 Complete Example

Here's what your code should look like after setup:

**index.html (line 70-73):**
```html
<script type="text/javascript">
  (function () {
    emailjs.init("aBcDeFgHiJkLmNoPqRsTuVwXyZ"); // Your actual public key
  })();
</script>
```

**js/main.js (line 47-48):**
```javascript
const serviceID = "service_abc123";    // Your actual service ID
const templateID = "template_xyz789";  // Your actual template ID
```

---

## 🔧 Troubleshooting

### Error: "EmailJS is not defined"
**Solution:** Make sure the EmailJS CDN script is loaded in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Error: "Invalid service ID"
**Solution:** 
1. Double-check your Service ID in EmailJS dashboard
2. Make sure you copied it correctly (no extra spaces)
3. Service ID format: `service_xxxxxxx`

### Error: "Invalid template ID"
**Solution:**
1. Double-check your Template ID in EmailJS dashboard
2. Make sure you copied it correctly
3. Template ID format: `template_xxxxxxx`

### Emails not arriving
**Solution:**
1. Check your spam/junk folder
2. Verify "To Email" in template settings
3. Check EmailJS dashboard → "Email History" for errors
4. Make sure you haven't exceeded free tier (200/month)

### Form submits but no email
**Solution:**
1. Open browser console (F12) → Check for errors
2. Verify all 3 credentials are correct (Service ID, Template ID, Public Key)
3. Check form field names match template variables:
   - `name="user_name"` → `{{user_name}}`
   - `name="user_email"` → `{{user_email}}`
   - `name="user_phone"` → `{{user_phone}}`
   - `name="service"` → `{{service}}`
   - `name="message"` → `{{message}}`

---

## 📊 EmailJS Dashboard

Monitor your emails at: [EmailJS Dashboard](https://dashboard.emailjs.com)

You can see:
- ✅ Total emails sent
- ✅ Emails remaining this month
- ✅ Email history (success/failed)
- ✅ Error logs

---

## 🔐 Security Notes

✅ **Good News:** Your EmailJS public key is safe to expose in client-side code
✅ **Protected:** EmailJS rate-limits requests to prevent abuse
✅ **Private:** Your Gmail password is NEVER exposed
✅ **Secure:** All emails are sent through EmailJS servers (not directly from browser)

---

## 💰 Pricing

**Free Tier (Current):**
- 200 emails/month
- Unlimited services
- Unlimited templates
- Email support

**Pro Tier ($15/month):**
- 1,000 emails/month
- Everything in Free
- Priority support
- Custom domain email

**For Dose of Nails:** Free tier is perfect! 200 bookings/month is excellent for a small business.

---

## 🎨 Customization

### Auto-Reply to Customers

Create a second template to send confirmation to customers:

1. Create new template: "Customer Confirmation"
2. Set "To Email" to: `{{user_email}}`
3. Email body:
```
Dear {{user_name}},

Thank you for booking with Dose of Nails! 💅

We've received your request for: {{service}}

📞 We'll contact you at {{user_phone}} within 24 hours to confirm your appointment.

Best regards,
Dose of Nails Team

---
Follow us on Instagram: @doseofnails
WhatsApp: +62 857-2485-4406
```

4. Update `main.js` to send both emails:
```javascript
// Send to yourself
emailjs.sendForm(serviceID, templateID, this)
  .then(function() {
    // Send confirmation to customer
    return emailjs.sendForm(serviceID, "template_customer_confirm", this);
  })
  .then(function() {
    alert("✅ Booking confirmed! Check your email.");
  });
```

---

## ✅ Checklist

Before going live, make sure:

- [ ] EmailJS account created
- [ ] Email service connected (Gmail)
- [ ] Email template created and tested
- [ ] Public key added to `index.html`
- [ ] Service ID added to `main.js`
- [ ] Template ID added to `main.js`
- [ ] Test booking submitted successfully
- [ ] Email received in inbox
- [ ] Auto-reply works (if enabled)
- [ ] Form resets after submission
- [ ] Error messages display properly

---

## 📞 Need Help?

**EmailJS Support:**
- Documentation: https://www.emailjs.com/docs
- Support: support@emailjs.com

**Your Implementation:**
- Check browser console for errors (F12)
- Review this guide step-by-step
- Verify all IDs are correct

---

## 🎉 You're Done!

Your website can now receive booking notifications via email! 🚀

**What happens now:**
1. Customer fills booking form → submits
2. EmailJS sends email to your inbox
3. You receive booking details
4. You contact customer within 24 hours
5. Happy customer! 💅✨

---

**Made with 💅 for Dose of Nails**