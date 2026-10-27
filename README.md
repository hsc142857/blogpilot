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

## 관리

- **글 관리:** https://hsc142857.github.io/blogpilot/admin/ (Sveltia CMS)
  - "액세스 토큰으로 로그인"을 선택하고, 이 저장소에 `Contents: Read and write` 권한을 준 GitHub fine-grained token을 입력한다.
  - 저장하면 `main`에 커밋되고 Actions가 자동 배포한다.
- **댓글 관리:** https://github.com/hsc142857/blogpilot/discussions (giscus, Announcements 카테고리)
  - 댓글 숨김·삭제, 스레드 잠금은 Discussions 화면에서 한다.
