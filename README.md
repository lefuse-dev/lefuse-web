# Lefuse website

The Lefuse company website is a static Jekyll site published from the repository’s `main` branch with GitHub Pages.

## Local development

The production-compatible Ruby version is pinned in `.ruby-version` and `.tool-versions`.

```sh
bundle install
bundle exec jekyll serve
```

The local site is then available at `http://127.0.0.1:4000/`.

Run a production build with:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

GitHub Pages owns the Jekyll dependency set through the `github-pages` gem, keeping local output aligned with branch publishing.

## Content model

- Company history and brand narrative live on `/about/`.
- Current product facts are centralized in `_data/products.yml` and rendered on the home and products pages.
- Site-wide metadata and structured data are generated in shared includes.
- Legacy paths are handled by `jekyll-redirect-from` and are intentionally omitted from the sitemap.

## Publishing and domain

- Source: `main` branch, repository root.
- Custom domain: `www.lefuse.com` (recorded in `CNAME`).
- Canonical origin: `https://www.lefuse.com`.
- Apex DNS should continue to use GitHub Pages’ documented A records, with `www` as a CNAME to the GitHub Pages host. DNS changes are managed outside this repository.

No analytics script is installed.
