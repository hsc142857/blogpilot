# blogpilot

GitHub Pages로 운영하는 개인 블로그. Astro로 만들고, 글은 웹 관리자 화면(Sveltia CMS)에서 쓰고, 댓글은 giscus(GitHub Discussions)로 받는다.
로컬 작업 없이 **브라우저만으로 운영**한다.

## 주소 모음

| 용도 | 주소 |
| --- | --- |
| 블로그 | https://hsc142857.github.io/blogpilot/ |
| **글 관리 (관리자)** | **https://hsc142857.github.io/blogpilot/admin/** |
| 댓글 관리 | https://github.com/hsc142857/blogpilot/discussions |
| 배포 상태 | https://github.com/hsc142857/blogpilot/actions |
| RSS | https://hsc142857.github.io/blogpilot/rss.xml |
| 토큰 관리 | https://github.com/settings/personal-access-tokens |
| giscus 앱 설정 | https://github.com/settings/installations |

## 글 관리

### 로그인

관리자 화면에서 **"액세스 토큰으로 로그인"** 을 누르고 GitHub 토큰을 넣는다.
("GitHub으로 로그인" 버튼은 별도 인증 서버가 필요해서 이 구성에서는 동작하지 않는다.)

토큰이 없거나 만료됐으면 새로 만든다.

1. https://github.com/settings/personal-access-tokens/new
2. **Repository access:** Only select repositories → `hsc142857/blogpilot`
3. **Permissions → Repository permissions → Contents:** Read and write
4. 만료일(Expiration)을 정하고 생성 → 토큰을 복사해 관리자 화면에 붙여 넣기

토큰은 그 브라우저에만 저장된다. 다른 기기나 브라우저에서는 다시 입력해야 한다.
토큰이 만료되면 로그인이 풀리거나 저장이 실패하므로 위 순서대로 새로 만든다.

### 글쓰기와 반영

- 새 글 / 수정 / 삭제 / 이미지 업로드를 관리자 화면에서 한다.
- **저장하면 GitHub에 자동 커밋되고 1~2분 뒤 블로그에 반영된다.** 직접 커밋할 필요 없다.
- **초안(비공개)** 을 켜면 블로그 목록과 페이지에서 빠진다. 단, 저장소가 공개라 GitHub에서는 내용이 보인다.
- 태그는 `#` 없이 입력한다. (예: `astro`)
- 글 주소: `https://hsc142857.github.io/blogpilot/posts/<작성일>-<제목>/`
- 올린 이미지는 저장소의 `public/images/uploads/` 에 저장된다.

## 댓글 관리 (giscus)

- 방문자는 GitHub 계정으로 댓글과 반응을 남긴다.
- 글마다 첫 댓글이 달리면 Discussions의 **Announcements** 카테고리에 `posts/<글 주소>/` 이름의 토론이 자동으로 생긴다.
- 숨김·삭제·스레드 잠금·사용자 차단은 https://github.com/hsc142857/blogpilot/discussions 에서 한다.
- 댓글 창이 안 뜨면 https://github.com/settings/installations → giscus → Configure에서 `blogpilot` 이 선택되어 있는지 확인한다.
- ⚠️ 저장소의 **Discussions 기능을 끄거나 Announcements 카테고리를 지우면 댓글이 사라진다.**

## 문제 해결

| 증상 | 확인할 것 |
| --- | --- |
| 저장했는데 블로그에 안 나옴 | [Actions](https://github.com/hsc142857/blogpilot/actions)에서 빨간 ❌ 실행을 열어 오류 확인. 대개 글 머리말(제목·요약·작성일) 값 문제 |
| 관리자 화면 로그인/저장 실패 | 토큰 만료 또는 권한 부족 → 토큰 새로 만들기 |
| 댓글 창이 안 뜸 | giscus 앱이 `blogpilot`에 설치돼 있는지, Discussions가 켜져 있는지 |
| 글 페이지 404 | 배포 실패 여부(Actions) 확인. 주소에 `/blogpilot/` 이 들어가 있는지 확인 |

## 구조와 설정 (참고)

설정을 바꿔야 할 때는 GitHub 웹에서 파일을 열고 연필(✏️) 아이콘으로 수정 → Commit하면 자동 배포된다.

| 파일 | 내용 |
| --- | --- |
| `src/content/blog/*.md` | 글 (관리자 화면이 관리) |
| `src/consts.ts` | 블로그 이름·설명·작성자 |
| `src/pages/about.astro` | 소개 페이지 |
| `src/styles/global.css` | 디자인(색상·글꼴) |
| `src/components/Comments.astro` | giscus 댓글 설정 |
| `src/content.config.ts` | 글 머리말 형식(스키마) |
| `public/admin/config.yml` | 관리자 화면(Sveltia CMS) 설정 |
| `.github/workflows/deploy.yml` | 자동 배포 (main에 push → GitHub Pages) |
| `astro.config.mjs` | 사이트 주소·base 경로(`/blogpilot`) |

### 알아 둘 설정 사항

- 저장소 이름을 바꾸면 블로그 주소도 바뀐다. 이때 `astro.config.mjs`의 `base`, `public/admin/config.yml`의 `repo`·`preview_path`·`public_folder`, `src/components/Comments.astro`의 `data-repo`를 함께 고쳐야 한다.
- Sveltia CMS는 `site_url`에서 도메인만 쓰므로, `preview_path`에 `blogpilot/`을 직접 넣어 두었다.
- 수정일(`updatedDate`)이 비어 있으면 CMS가 `''`로 저장할 수 있다. 그래서 스키마가 빈 값을 "수정일 없음"으로 처리하고, CMS는 빈 항목을 파일에 적지 않도록(`omit_empty_optional_fields`) 설정했다.
- GitHub Pages는 저장소 Settings → Pages에서 Source가 **GitHub Actions** 로 설정되어 있다.

### 로컬 실행 (필요할 때만)

```bash
git clone https://github.com/hsc142857/blogpilot.git
cd blogpilot
npm install
npm run dev
```

http://localhost:4321/blogpilot/ 에서 미리보기.
