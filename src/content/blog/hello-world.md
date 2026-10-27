---
title: '첫 글: blogpilot을 시작합니다'
description: 'Astro와 GitHub Pages로 블로그를 만든 과정과 글 쓰는 방법'
pubDate: 2026-10-27
tags: ['astro', 'github-pages']
---

블로그를 열었습니다. 이 블로그는 **GitHub 공개 저장소**에 있는 Markdown 파일로 만들어지고,
`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드해서 GitHub Pages에 배포합니다.

## 새 글 쓰는 방법

1. `src/content/blog/` 폴더에 `my-post.md` 파일을 만듭니다.
2. 맨 위에 frontmatter를 적습니다.

```md
---
title: '글 제목'
description: '한 줄 요약'
pubDate: 2026-10-28
tags: ['태그']
---

본문을 Markdown으로 작성합니다.
```

3. 커밋하고 push하면 몇 분 안에 블로그에 반영됩니다.

> `draft: true`를 넣으면 목록과 배포에서 제외됩니다.
