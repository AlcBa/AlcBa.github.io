import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bayuhao.org',
  compressHTML: true,

  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: 'noopener noreferrer nofollow',
          },
        ],
      ],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
