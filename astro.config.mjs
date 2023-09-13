import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alcba.lesterong.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
