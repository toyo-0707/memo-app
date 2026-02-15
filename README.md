This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Memo-app

A simple full-stack memo application built with Next.js (App Router), Prisma, and PostgreSQL.

## Feature

- Create, Read, Update, Delete (CRUD) memos
- Server Actions for data mutations
- Zod validation
- PostgreSQL with Prisma ORM
- Tailwind CSS for styling

## Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma (with PostgreSQL adapter)
- PostgreSQL (Docker)
- Zod
- Tailwind CSS

## Architecture

- Server Components for data fetching
- Client Components for interactive forms
- Server Actions for mutations
- Prisma as the data access layer

## Why Server Actions?

Server Actions simplify data mutation by:

- Removing the need for custom API routes
- Keeping database logic on the server
- Improving type safety between client and server

## Future Improvements

- Authentication
- Role-based access control
- Better error handling
- Toast notifications
- E2E testing

---

Built for learning modern full-stack development.
