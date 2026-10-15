# Mamudou Saho – Portfolio

Personal portfolio of **Mamudou Saho**, full-stack developer and frontend instructor at JCC.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Cache Components, fully static output)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) with semantic light/dark design tokens
- [next-themes](https://github.com/pacocoursey/next-themes) for the theme toggle
- [lucide-react](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/) for icons
- [Formspree](https://formspree.io/) for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Editing content

All content (profile, experience, projects, skills, links) lives in
[`src/content/site.ts`](src/content/site.ts):

- **Experience dates:** replace `"Current"` / `"Ongoing"` with real periods.
- **Résumé:** put a PDF in `public/` and set `profile.resume` to show a download link.
- **Project source links:** add `repo: "https://github.com/..."` to a project.
- **New project:** append to `projects` and add its screenshot to `public/`.

## Deployment

Deploy on [Vercel](https://vercel.com/) with the **Next.js** framework preset. Social preview
images use the Vercel production URL automatically; set `NEXT_PUBLIC_SITE_URL` if you add a
custom domain.
