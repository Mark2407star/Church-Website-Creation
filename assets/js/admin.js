// ============ Pastor's Private Admin Dashboard ============
// This is a CLIENT-SIDE password gate suitable for keeping casual visitors out.
// It is NOT the same as server-side security. Anyone with technical knowledge
// and access to the page source could bypass it. Do not use this page for
// highly sensitive information. For real, secure, multi-device admin access,
// this should be rebuilt with a proper backend/login system.

// Default password: LivingWord2026!
// To change it: open a browser console anywhere and run
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourNewPassword'))
//     .then(buf => console.log(Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')))
// then paste the printed hash into ADMIN_HASH below.
const ADMIN_HASH = '0fc08727d005ffa8020e584d9f9853463f4dbda2f6ebb132eafe170aa743ddd5';
const SESSION_KEY = 'lw_admin_session';
const REQUESTS_KEY = 'lw_prayer_requests';

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getRequests() {
  try { return JSON.parse(localStorage.getItem(REQUESTS_KEY)) || []; }
  catch (e) { return []; }
}
function saveRequests(list) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(list));
}

document.addEventListener('DOMContentLoaded', () => {
  const gate = document.getElementById('adminGate');
  const dash = document.getElementById('adminDash');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const logoutBtn = document.getElementById('logoutBtn');

  function unlock() {
    gate.style.display = 'none';
    dash.style.display = 'block';
    renderRequests();
  }

  // Restore session for this browser tab only (cleared on browser close)
  if (sessionStorage.getItem(SESSION_KEY) === '1') {
    unlock();
  }

  loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pass = document.getElementById('adminPass').value;
    const hash = await sha256(pass);
    if (hash === ADMIN_HASH) {
      sessionStorage.setItem(SESSION_KEY, '1');
      loginError.style.display = 'none';
      unlock();
    } else {
      loginError.style.display = 'block';
    }
  });

  logoutBtn?.addEventListener('click', () => {
    sessionStorage.removeItem(SESSION_KEY);
    dash.style.display = 'none';
    gate.style.display = 'block';
    document.getElementById('adminPass').value = '';
  });

  function statusBadge(status) {
    const map = {
      new: ['New', 'var(--magenta)'],
      prayed: ['Prayed', 'var(--teal)']
    };
    const [label, color] = map[status] || map.new;
    return `<span class="pill" style="border-color:${color}55;"><span class="dot" style="background:${color}; box-shadow:0 0 0 4px ${color}30;"></span>${label}</span>`;
  }

  function renderRequests() {
    const list = getRequests();
    const container = document.getElementById('requestList');
    const empty = document.getElementById('emptyState');
    const countEl = document.getElementById('reqCount');
    const filter = document.getElementById('statusFilter')?.value || 'all';

    countEl.textContent = list.length;

    const filtered = filter === 'all' ? list : list.filter(r => r.status === filter);

    if (!filtered.length) {
      container.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    container.innerHTML = filtered.map(r => `
      <div class="glass glass-card glass-top-accent" style="--accent:${r.status === 'prayed' ? 'var(--grad-cool)' : 'var(--grad-hero)'}; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:14px; flex-wrap:wrap;">
          <div>
            <h3 style="font-size:17px; margin-bottom:4px;">${escapeHTML(r.name)}</h3>
            <p style="color:var(--muted-2); font-size:13px;">${new Date(r.createdAt).toLocaleString()} · ${escapeHTML(r.category)}${r.contact ? ' · ' + escapeHTML(r.contact) : ''}</p>
          </div>
          ${statusBadge(r.status)}
        </div>
        <p style="margin-top:14px; color:var(--text); font-size:15px; line-height:1.6;">${escapeHTML(r.message)}</p>
        <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;">
          ${r.status !== 'prayed'
            ? `<button class="btn btn-ghost" data-action="prayed" data-id="${r.id}">✅ Mark as Prayed</button>`
            : `<button class="btn btn-ghost" data-action="new" data-id="${r.id}">↩ Mark as New</button>`}
          <button class="btn btn-ghost" data-action="delete" data-id="${r.id}">🗑 Delete</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        let list = getRequests();
        if (action === 'delete') {
          if (confirm('Delete this prayer request permanently?')) {
            list = list.filter(r => r.id !== id);
          }
        } else {
          list = list.map(r => r.id === id ? { ...r, status: action } : r);
        }
        saveRequests(list);
        renderRequests();
      });
    });
  }

  document.getElementById('statusFilter')?.addEventListener('change', renderRequests);

  document.getElementById('clearAllBtn')?.addEventListener('click', () => {
    if (confirm('This will permanently delete ALL prayer requests stored in this browser. Continue?')) {
      saveRequests([]);
      renderRequests();
    }
  });

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str ?? '';
    return div.innerHTML;
  }
});
