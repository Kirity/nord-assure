# NORD / ASSURE — Version 3 design and marketing specification

## Positioning

**Customer:** Small and midsized engineering, automation, maritime and technical-service firms in Norway, particularly businesses that depend on contractors, remote access, project files, industrial systems and supplier requirements.

**Brand promise (provisional):** Independent, evidence-led cyber health assessments that turn operational uncertainty into practical priorities.

**Primary CTA:** Request an assessment. **Secondary CTA:** View/download a fictional sample report.

## Visual language

| Token | Hex | Role |
|---|---|---|
| Norwegian navy | `#00205B` | Brand, headings, primary CTAs |
| Norwegian red | `#BA0C2F` | Highlights, priority indicators |
| White | `#FFFFFF` | Primary canvas |
| Ink | `#0B1C37` | Body headlines |
| Light blue-grey | `#F5F8FC` | Alternating section backgrounds |
| Muted slate | `#5F7189` | Secondary copy |

Typography uses system-safe `Avenir Next`, `Segoe UI` and `Inter` fallbacks; no font download needed. Navigation, headings and controls use adequate contrast. Layout is responsive from phones to wide monitors. No stock-hacker photography.

## Design inspirations (not copies)

- ITSECOPS: high-impact hero and restrained, purposeful animation.
- Enteliq: narrow service proposition and tangible sample deliverable.
- Ivolv: readability and confident negative space.
- Lumiar: credible engineering-first tone and reduced photography.

## Site flow

1. **Hero** — what we do, for whom, primary CTA, report preview.
2. **The challenge** — client requirements, IT/OT overlap, decision overload.
3. **Services** — one flagship assessment and two specialist extensions.
4. **Scope** — Understand / Review / Prioritize / Explain, clearly bounded.
5. **Sample report** — interactive example plus downloadable six-page fictional PDF.
6. **Process** — agree scope, review authorized evidence, prioritize.
7. **Founder** — grounded experience, no employer endorsements or invented credentials.
8. **Conversion** — clear enquiry form and working provider integration path.

## Interaction specification

- Smooth anchors, but obey `prefers-reduced-motion`.
- Small floating report UI / orbit visuals: decorative only.
- Reveal animation never hides content if scripts fail.
- Report tabs support mouse, touch, left/right arrows, Home/End.
- Mobile menu with ARIA expanded states and Escape close.
- Contact form validates required fields and email, shows submission status.
- In **unconfigured mode**, contact form prepares a copyable message; it does **not** pretend to send.
- In **configured mode**, submits over HTTPS to a verified Formspree endpoint.

## Content and compliance guardrails

- Never claim ISO 27001/IEC 62443 certification of the consultancy without evidence.
- Cite experience without claiming that the former employers endorse this company.
- Disclose that risk graphics and PDF case details are fictional.
- Explain what's not included in the baseline review (penetration testing, intrusive scanning, continuous monitoring and certification audits).
- Do not collect or publish customer network diagrams, credentials or assessment evidence on a static website.
- Use a real, approved company email and business registration information before going live commercially.

## Suggested next iteration

Once the name and founder details are approved, add an actual professional portrait, a real Norwegian phone/email contact method, a verified domain and lawful privacy/legal notices. Only then consider customer testimonials with permission. Avoid adding more animation or service categories until client interviews validate the offer.
