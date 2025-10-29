# Cursor for Designers Presentation

This presentation is built with [Slidev](https://sli.dev/), a modern presentation framework for developers.

## Running the Presentation

### Development Mode

```bash
pnpm presentation:dev
```

This will start a local server at `http://localhost:3030` where you can view and edit the presentation with hot-reload.

### Build for Production

```bash
pnpm presentation:build
```

Builds a static SPA version of the presentation for deployment.

### Export to PDF

```bash
pnpm presentation:export
```

Exports the presentation as a PDF file.

## Editing the Presentation

Edit `slides.md` to modify the presentation content. Slidev uses enhanced Markdown with:

- **Frontmatter**: Configure themes, layouts, and settings
- **Markdown**: Write slide content naturally
- **Vue Components**: Use interactive components when needed
- **Layouts**: Pre-built layouts for different slide types

## Slide Navigation

- **Arrow Keys** or **Space**: Navigate between slides
- **F**: Toggle fullscreen
- **O**: Toggle overview mode
- **D**: Toggle dark mode
- **C**: Toggle camera (for presenter view)

## Adding New Slides

Separate slides with `---`:

```md
---
layout: center
---

# Slide 1

Content here

---

# Slide 2

More content
```

## Features

- 🎨 **Themes**: Beautiful default theme with customization
- 📝 **Markdown**: Write naturally with enhanced syntax
- 🧩 **Components**: Interactive Vue components
- 🎥 **Recording**: Built-in recording support
- 📤 **Export**: PDF, PNG, or SPA
- ⚡️ **Fast**: Instant hot-reload with Vite
