// Prayer Request form — stores submissions locally (client-side).
// NOTE: this uses the browser's localStorage, which only persists on THIS device/browser.
// For a real multi-device private inbox for the pastor, connect this form to a backend
// (e.g. Google Sheets via Apps Script, Firebase, or an email service) — see README notes.

const LW_KEY = 'lw_prayer_requests';

function lwGetRequests() {
  try { return JSON.parse(localStorage.getItem(LW_KEY)) || []; }
  catch (e) { return []; }
}

function lwSaveRequests(list) {
  localStorage.setItem(LW_KEY, JSON.stringify(list));
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('prayerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const contact = form.contact.value.trim();
    const category = form.querySelector('input[name="category"]:checked')?.value || 'General';
    const message = form.message.value.trim();
    const confidential = form.confidential.checked;

    if (!name || !message) {
      showToast('Please share your name and prayer request.');
      return;
    }
    if (!confidential) {
      showToast('Please confirm the confidentiality note to continue.');
      return;
    }

    const requests = lwGetRequests();
    requests.unshift({
      id: 'pr_' + Date.now(),
      name, contact, category, message,
      status: 'new',
      createdAt: new Date().toISOString()
    });
    lwSaveRequests(requests);

    form.reset();
    document.querySelectorAll('.radio-chip').forEach(c => c.classList.remove('checked'));
    document.getElementById('prayerConfirm').style.display = 'block';
    document.getElementById('prayerForm').style.display = 'none';
    window.scrollTo({ top: document.getElementById('prayerConfirm').offsetTop - 120, behavior: 'smooth' });
  });

  const again = document.getElementById('prayerAgainBtn');
  if (again) {
    again.addEventListener('click', () => {
      document.getElementById('prayerConfirm').style.display = 'none';
      document.getElementById('prayerForm').style.display = 'block';
    });
  }
});
