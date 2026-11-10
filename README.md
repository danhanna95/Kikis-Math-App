# Danny’s Learning Studio — Render edition

Grade 7 English and Religion tutor with a shared family-code sign-in. Separate source branch `danny-learning-studio`; Caitlin’s service uses `main`.

Build: `npm ci && npm run build`. Start: `npm start`. Tests: `npm test`.

Required server environment variables: `APP_ACCESS_CODE` and `OPENAI_API_KEY`. Never put their values in source. Render supplies `PORT` and `RENDER_EXTERNAL_URL`. Server binds to 0.0.0.0. Public readiness route: `/healthz`. Sign-in uses a signed 30-day HttpOnly/Secure/SameSite cookie; login attempts are rate-limited. Changing the family code invalidates previous sessions. Sign out with the studio’s button.

Photos: up to six pages, HEIC support, automatic resizing, previews and rotation. Photos and notes stay in the browser on the device; they do not sync across devices. The new Render domain has separate storage from the previous ChatGPT Site. Download a learning backup on the previous site, then restore it here to transfer notes and conversations; upload photos again. This migration preserves the earlier site.

Book editions/current chapters await the family’s pages. The tutor has general original reviews, not a complete copy of either textbook.
