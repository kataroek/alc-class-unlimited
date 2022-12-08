import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

const mode = 'prod'; // dev || prod
const siteURL =
  mode === 'prod'
    ? 'https://www.alc-class-unlimited.com'
    : 'https://test-wacul.site';
const basePath = mode === 'prod' ? '/' : '/alc/alc-class-unlimited';

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  base: basePath,
  integrations: [tailwind()]
});
