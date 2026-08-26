# GitHub Portfolio Starter

A simple project portfolio designed for GitHub Pages. It uses only HTML, CSS, and a small amount of JavaScript, so there is no framework, package manager, or build step.

## What the site includes

- Intro / hero section
- Expandable project cards
- Filters for School, Research, Clubs, and Personal projects
- Detailed project summaries with:
  - Overview
  - Your role
  - Process
  - Outcome
  - Skills / tools
- A Project Appendix for full reports, PDFs, presentations, posters, and links
- Contact section
- Responsive mobile layout

## 1. Personalize the site

Open `index.html`.

Replace:

- `YOUR NAME`
- `Your Name`
- `YOUR-USERNAME`
- `your.email@example.com`
- the LinkedIn placeholder
- the sample project titles and text

## 2. Add a project

In `index.html`, find the comment:

`PROJECT 1: Duplicate this entire <details> block to add another project.`

Copy one complete `<details class="project-card" ...>` block and edit its content.

Available categories are:

- `school`
- `research`
- `club`
- `personal`

For example:

```html
<details class="project-card" data-category="research">
```

The category controls which filter shows the project.

## 3. Add your full project files

Put PDFs, images, posters, or other downloadable files in the `project-files` folder.

For example:

`project-files/psychology-final-project.pdf`

Then change the appendix link from:

```html
<a href="#">Open full project ↗</a>
```

to:

```html
<a href="project-files/psychology-final-project.pdf" target="_blank" rel="noopener">
  Open full project ↗
</a>
```

You can also link to another GitHub repository, Google Drive file, published paper, or external website.

### Important privacy note

Anything committed to a public GitHub repository can be publicly accessible. Before uploading schoolwork, remove private data, student numbers, private feedback, unpublished confidential lab information, or anything you do not have permission to publish.

## 4. Add project images

Put images in:

`assets/images/`

You can then add them to a project with normal HTML:

```html
<img src="assets/images/my-project-image.png" alt="Short description of the image">
```

## 5. Publish with GitHub Pages

The simplest setup is a personal GitHub Pages site.

1. Create a GitHub repository named exactly:
   `YOUR-USERNAME.github.io`
2. Upload all files from this starter folder to the root of the repository.
3. In the repository, open:
   `Settings → Pages`
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder.
6. Save.

Your portfolio will then be available at:

`https://YOUR-USERNAME.github.io`

If you use a different repository name, GitHub Pages can also publish it as a project site.

## Suggested project-summary formula

For each project, try to answer these questions:

**Preview:** What did I make/do, in one sentence?

**Overview:** What was the problem, assignment, research question, or goal?

**My role:** What was I personally responsible for?

**Process:** What tools, methods, concepts, or decisions did I use?

**Outcome:** What did I produce or learn? Was there a measurable result?

**Skills:** What 3–6 skills would an employer/professor notice?

## Suggested portfolio order

Don't organize only by date. Put the projects you are proudest of near the top.

A useful mix is:

1. Strongest / most impressive project
2. Research or technical project
3. School project showing analysis or writing
4. Leadership / club project
5. Creative or personal project

You can add more as needed.
