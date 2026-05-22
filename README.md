# J. Rich Management Group Website

Production-ready Next.js website for jrichmgmt.org.

## Local setup
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy with Vercel
1. Create a GitHub repository.
2. Upload these files to the repository.
3. Go to Vercel > Add New Project > Import GitHub repo.
4. Keep defaults and click Deploy.
5. In Vercel, go to Project Settings > Domains and add:
   - jrichmgmt.org
   - www.jrichmgmt.org

## Cloudflare DNS records
In Cloudflare > DNS, add/update:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| A | @ | 76.76.21.21 | DNS only or Proxied |
| CNAME | www | cname.vercel-dns.com | DNS only or Proxied |

Vercel may show slightly different DNS instructions. Follow Vercel if it differs.

## Contact form
The contact form currently uses FormSubmit and sends messages to admin@jrichmgmt.org. The first submission will require email verification from FormSubmit.

## Property listing integration
The Properties/Projects section is ready for future IDX/MLS integration. Replace the placeholder cards with your IDX provider embed or API data once selected.


## Build Fix Notes
This corrected package pins Next.js and Tailwind CSS to compatible stable versions and removes unavailable social media icon imports from lucide-react.
