# AITechWithSandeep — Version 2

A real AI-chat starter built with Next.js and the OpenAI Responses API.

## What changed from V1
- Real server-side `/api/chat` endpoint
- OpenAI SDK integration
- API key is kept server-side in `.env.local`
- Responsive UI
- AI chat with quick prompts
- Ready to deploy to Vercel or another Node.js host

## Run locally

1. Install Node.js 20+.
2. Extract this project.
3. Run:

```bash
npm install
```

4. Copy `.env.example` to `.env.local`.
5. Put your OpenAI API key in `.env.local`.
6. Run:

```bash
npm run dev
```

7. Open `http://localhost:3000`.

## API key security

Never put your OpenAI API key in client-side JavaScript. The key is read only by `app/api/chat/route.js`.

## Cost note

The website can be free for your visitors, but calls to a paid AI API are still billed to the API account. Add rate limits/quotas before opening the site to a large public audience.

## Recommended next upgrades

- Supabase authentication
- Per-user daily message limits
- Chat history
- AI Writer
- AI Summarizer
- Prompt Helper
- YouTube Idea Generator
- Admin dashboard
- Usage analytics
- Abuse/rate limiting
- Custom domain
