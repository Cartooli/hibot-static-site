/*
 * hibot-static-site — your page, configured here.
 * Edit the CONFIG object below. No build step, no server. Just save and refresh.
 */
const CONFIG = {
  name: "Your Name",
  bio: "One line about you. What you make, what you're into.",
  avatar: "", // optional image URL, e.g. "assets/me.jpg" — leave "" to hide
  contactEmail: "you@example.com", // shown as a mailto link; leave "" to hide
  links: [
    { label: "My website", url: "https://example.com" },
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "A project I'm proud of", url: "https://example.com/project" },
  ],
};

/* ---- Rendering. You usually don't need to touch anything below. ---- */

// Only allow http(s) and mailto links — blocks javascript: and other unsafe schemes.
function safeUrl(url) {
  try {
    const u = new URL(url, window.location.href);
    return ["http:", "https:", "mailto:"].includes(u.protocol) ? u.href : "#";
  } catch {
    return "#";
  }
}

function el(tag, props = {}, text) {
  const node = document.createElement(tag);
  Object.assign(node, props);
  if (text != null) node.textContent = text; // textContent escapes automatically
  return node;
}

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${CONFIG.name} — Link in Bio`;
  document.getElementById("name").textContent = CONFIG.name;
  document.getElementById("bio").textContent = CONFIG.bio;
  document.getElementById("footer-name").textContent = `© ${new Date().getFullYear()} ${CONFIG.name}`;

  const avatar = document.getElementById("avatar");
  if (CONFIG.avatar) {
    avatar.src = safeUrl(CONFIG.avatar);
    avatar.alt = CONFIG.name;
  } else {
    avatar.remove();
  }

  const nav = document.getElementById("links");
  CONFIG.links.forEach((link) => {
    const a = el("a", { href: safeUrl(link.url), className: "link-btn" }, link.label);
    a.target = "_blank";
    a.rel = "noopener";
    nav.appendChild(a);
  });

  const contact = document.getElementById("contact");
  if (CONFIG.contactEmail) {
    const a = el("a", { href: `mailto:${encodeURIComponent(CONFIG.contactEmail)}` }, "Email me");
    contact.appendChild(a);
  } else {
    contact.remove();
  }
});
