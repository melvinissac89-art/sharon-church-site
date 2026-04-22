# Sharon Fellowship Church Website

A premium, production-ready website with Decap CMS integration.

## CMS Setup (Netlify Identity & Git Gateway)

To manage content for the Vercel-hosted site, follow these mandatory steps to enable authentication:

### 1. Connect to Netlify
- Go to [app.netlify.com](https://app.netlify.com).
- Click **"Add new site"** → **"Import an existing project"**.
- Connect to the GitHub repo: `melvinissac89-art/sharon-church-site`.
- Deploy the site (the URL doesn't need to be public, it's only for the auth backend).

### 2. Enable Identity
- Go to your site dashboard on Netlify.
- Go to **Site settings** → **Identity**.
- Click **Enable Identity**.
- Set **Registration preference** to **Invite only** (highly recommended).
- Set **External providers** (optional, e.g., Google/GitHub).

### 3. Enable Git Gateway
- In the same **Identity** tab, scroll down to **Services** → **Git Gateway**.
- Click **Enable Git Gateway**.
- Connect your GitHub account.

### 4. Invite Admin
- Go to the **Identity** tab (main menu).
- Click **Invite users** and enter the pastor's email.
- They will receive an invitation to create a password.

### 5. Access CMS
- Visit `https://your-vercel-domain.com/admin` (or `localhost:3000/admin`).
- Log in using the email and password set up in Step 4.

## Technical Details
- **Frontend**: Next.js (App Router)
- **CMS**: Decap CMS (static integration)
- **Auth**: Netlify Identity + Git Gateway
- **Deployment**: Vercel
