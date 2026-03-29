## DEPLOY REQUEST
Date: 2026-03-29
Project: EduEcosystem (Sarit Classes Frontend)
Changed Files:
- Sarit Classes website code/index.html
- Sarit Classes website code/optional.html
- Sarit Classes website code/pyq.html
- Sarit Classes website code/about-us.html
- Sarit Classes website code/contact.html
- Sarit Classes website code/ebook-store.html
- Sarit Classes website code/terms.html
- Sarit Classes website code/privacy.html
- Sarit Classes website code/optional-*.html (24 files)
- Sarit Classes website code/pyq-*.html (10 files)
- Sarit Classes website code/notes-*.html (20 files)

New Endpoints Added:
- /optional-[subject].html
- /pyq-[subject].html
- /notes-[subject].html

Services Needing Redeploy:
- [ ] backend
- [x] frontend (Sarit Classes Static Hosting)

Test After Deploy:
- GET https://saritclasses.com/optional.html should show 25 subjects.
- GET https://saritclasses.com/pyq.html should show 10 subjects.
- Verify glassmorphism design on mobile.
