# blogpilot

Astro로 만든 블로그. `main`에 push하면 GitHub Actions가 빌드해 GitHub Pages에 배포한다.

- 주소: https://hsc142857.github.io/blogpilot/
- 글 위치: `src/content/blog/*.md`

## 로컬 실행

```bash
npm install
npm run dev
```

## 새 글

`src/content/blog/`에 Markdown 파일을 추가한다. frontmatter: `title`, `description`, `pubDate`, `tags`(선택), `draft`(선택).
