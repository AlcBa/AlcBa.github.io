import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bayuhao.org',

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: 'noopener noreferrer nofollow',
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
