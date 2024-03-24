## Snapshift

This is an AI image manipulation SaaS

**Setting up Clerk Webhooks**

1. Visit the Clerk website > Dashboard > Webhooks
2. Enter your deployed URL link + add the webhook URL
3. In our case it's URL + `api/webhooks/clerk`
4. Down at the website, tick events: in our case `user` related ones
5. Create `CREATE` button
6. At the redirected page, check and copy `Signing Secret` key
7. Add to your `.env`
