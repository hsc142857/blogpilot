export const SITE_TITLE = 'blogpilot';
export const SITE_DESCRIPTION = 'GitHub Pages로 운영하는 개인 블로그';
export const AUTHOR = 'hsc142857';

/** base 경로(/blogpilot)를 붙인 내부 링크를 만든다. */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
