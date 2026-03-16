# AO3 Interactive Fic — Project Notes

## What is an iframe?

An **iframe** (inline frame) is an HTML element that lets you embed one HTML document inside another. Think of it like a window within a page — the content inside the iframe is completely separate from the parent page, with its own HTML, CSS, and JavaScript that don't interfere with each other.

---

## The AO3 iframe Workaround

AO3 has two main restrictions that make interactive fics tricky:

- **No JavaScript** is allowed in AO3 works  
- **iframes** can only point to a small whitelist of approved websites — but AO3 itself is on that whitelist

This is where the workaround comes in.

Since AO3 trusts AO3 links, we can iframe a **second AO3 work**. That second work contains a simple link to an externally hosted page. When the reader clicks it, the iframe loads the external page — bypassing AO3's restrictions entirely, because the navigation happens **inside the iframe**, not on the main page.

This technique was originally developed by  
[mystyrust](https://archiveofourown.org/users/mystyrust) and documented in the  
[#html_cinematic_universe](https://archiveofourown.org/series/2759878) series.

---

## The Chain

```
Main Fic (AO3)
└── iframe → Orphaned Fic (AO3) ← AO3 allows this
    └── reader clicks link
        └── iframe loads → Hosted Phone (GitHub Pages)
```


---

## File Structure

### Local Development (2 files)

```
your-project/
├── index.html   ← the fic (story text + iframe pointing to phone.html)
└── phone.html   ← the full phone UI (HTML, CSS, JavaScript)
```




During local development the iframe points directly to `phone.html`.  
No orphaned fic or external hosting needed — **Live Server** handles everything.

---

### Final AO3 Setup (3 parts)

```
Main Fic (AO3)
└── contains iframe pointing to the orphaned fic URL

Orphaned Fic (AO3)
└── contains a link pointing to the hosted phone URL

Hosted Phone (GitHub Pages)
└── phone.html — the actual interactive phone UI
```



---

## Why Orphan the Second Fic?

The second AO3 work only exists as a **technical middleman** — it has no story content and isn't meant to be read on its own.

Orphaning it removes your account from it so it doesn't clutter your works page, while keeping it **publicly accessible** for the iframe to load.

---

## Local Development Setup

1. Clone this repository  
2. Open in **VS Code**  
3. Install the **Live Server** extension  
4. Right-click `index.html` → **Open with Live Server**  
5. Any changes you save will instantly refresh in the browser
