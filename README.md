# hibot-static-site

A clean personal page / link-in-bio. **No build step, no backend, no API keys** — open the file and it works. This is one of the [Hi&nbsp;Bot](https://code.hibot.space) starter templates: clone it, change a few lines, make it yours.

## What it is

A single page that shows your name, a short bio, an optional photo, and a list of links. Everything is configured in one file. It's the safest place to start coding: you can read every line, and nothing runs on a server.

## Run it

No installation. Either:

- **Double-click `index.html`** to open it in your browser, or
- Serve the folder (nicer for development):
  ```bash
  python3 -m http.server 8000
  ```
  then open <http://127.0.0.1:8000>.

## Customize it

Open **`assets/site.js`** and edit the `CONFIG` object at the top — your name, bio, photo, links, and contact email. Save and refresh. That's the whole job.

```js
const CONFIG = {
  name: "Your Name",
  bio: "One line about you.",
  links: [{ label: "GitHub", url: "https://github.com/yourname" }],
};
```

Colors and spacing live in `assets/style.css`.

## A note on safety

This page has **no form and stores no data** — the contact option is a plain `mailto:` link. Links are checked so only `http(s)` and `mailto` addresses render. If you add a form later, sanitize and escape anything a visitor types (see the `hibot-fastapi-starter` and `hibot-flask-guestbook` templates for how).

## Deploy

It's just static files — host them anywhere free:

- **GitHub Pages:** push this repo, then Settings → Pages → deploy from `main`.
- Or drag the folder into any static host.

## Legal

`TERMS_OF_SERVICE.md` and `PRIVACY_POLICY.md` are **plain-language templates — review them before you publish.** They are not legal advice.

---

New to building? **[Set up Cursor](https://cursor.com/referral?code=6FIM46PRQZQB)** (AI code editor — 50% off your first month through our link*) and read the guides at **[code.hibot.space](https://code.hibot.space)**.

<sub>*Referral link — you get 50% off your first month and we may earn a commission, at no extra cost to you.</sub>

MIT licensed. © Hi, Bot.
