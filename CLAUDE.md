# Repository rules

## Git identity

Commits in this repository must be authored with a GitHub noreply address
(`<id>+<username>@users.noreply.github.com`), never with a private email
address. Once pushed, an address in commit metadata is public forever.

To enforce this on the account, enable both options under
GitHub → Settings → Emails:

- Keep my email addresses private
- Block command line pushes that expose my email

## Commit messages

Do not add `Co-Authored-By`, `Generated with ...`, session links or similar
attribution lines to commit messages or pull request descriptions.

## Project

Static website template — plain HTML, CSS and JavaScript, no build step and no
dependencies. All editable content lives in `assets/js/config.js`; the other
files are not meant to be edited by users of the template.
