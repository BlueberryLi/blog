---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).

---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
name: "My Awesome Project"
text: "A VitePress Site"
tagline: My great project tagline
actions:
- theme: brand
text: Markdown Examples
link: /markdown-examples
- theme: alt
text: API Examples
link: /api-examples

features:
- title: Feature A
  details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
- title: Feature B
  details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
- title: Feature C
  details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
