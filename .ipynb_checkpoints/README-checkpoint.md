# hakyll-site

A personal website template built with [Hakyll](https://jaspervdj.be/hakyll/), compiled to `./docs` for GitHub Pages hosting.

## Customization

Before building, update the following:

1. **`site.hs`** — Set `root` to your deployed URL (e.g. `https://your-username.github.io`)
2. **`src/templates/default.html`** — Replace `My Site` in the `<title>` tag
3. **`src/templates/header.html`** — Replace the logo text and nav link labels/paths
4. **`src/templates/footer.html`** — Replace the GitHub profile URL
5. **`src/tabs/home.md`** — Replace placeholder bio with your own content
6. **`src/tabs/tab1.md`, `tab2.md`, `tab3.md`** — Rename and fill in your tab pages

To add or remove tabs:
- Add/remove `.md` files in `src/tabs/`
- Update `path_to_tabs` in `site.hs`
- Update nav links in `src/templates/header.html`

## How to Build

Requires `stack` and `ghc`.

1. Build the Haskell executable:
   ```
   stack build
   ```
2. Generate the static site:
   ```
   stack exec site rebuild
   ```
3. Preview locally (optional):
   ```
   stack exec site watch
   ```
4. Deploy to GitHub Pages:
   ```
   git add -A
   git commit -m "publish."
   git push origin
   ```

The compiled site outputs to `./docs`. Configure GitHub Pages to serve from the `docs` folder on your main branch.

## Adding Blog Posts

Create a new file in `src/blogs/` following the naming convention:

```
YYYY-MM-DD-post-title.md
```

With frontmatter:
```yaml
---
title: Your Post Title
author: Your Name
---
```

See `src/blogs/0000-00-00-example-post.md` for a template.

## Common Issues

While building, `The program 'pkg-config' version >= ??? is required but it could not be found.`: This indicates that you need to install `pkg-config`.
