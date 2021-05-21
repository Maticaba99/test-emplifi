import fs from 'fs';
import { getSiteConfig } from '../queries/getSiteConfig';
import { getSitemap } from '../queries/getPaths';

export async function generateSitemap(): Promise<void> {
  // Get languages
  const { headerConfiguration, seoConfiguration, siteUrl } = await getSiteConfig();
  const { languagesCollection } = headerConfiguration;

  const languages = languagesCollection.items;
  try {
    const { robotsTxt } = seoConfiguration;
    if (process.env.NODE_ENV === 'production') {
      //const APP_NAME = process.env.customKey.toLowerCase();
      //const path = "/public/" + APP_NAME + "/favicons/favicon.ico";
      //console.log("Move ICO File");
      fs.mkdirSync('public/sitemap', { recursive: true });
      //fs.copyFileSync(path, 'public/favicon.ico');
    }

    const sitemapPaths = getSitemap();
    const pagesPath = languages.map(async (lang): Promise<{
      sitemapLang: string[];
      lang: {
        displayTitle: string;
        languageCode: string;
      };
    }> => {
      const sitemapLang = (await sitemapPaths).map((sitemapitem) => {
        const date = new Date();
        // Need path from data
        /*  if (sitemapitem.page_path !== null) {
                const pathWithLang = `${lang.languageCode}/${sitemapitem.page_path}`;
                if (!sitemapitem.page_path.includes('wild-card') && sitemapitem.page_path !== 'page-not-found' && sitemapitem.page_path !== 'error') {
                  const fullPath = `<url><loc>${siteUrl}${pathWithLang}</loc> <lastmod>${date.toISOString()}</lastmod> <priority>0.50</priority></url>`;
                  return fullPath;
                }
              } else { */
        const pathWithLang = `${lang.languageCode}/${sitemapitem.slug}`;
        const fullPath = `<url><loc>${siteUrl}${pathWithLang}</loc> <lastmod>${date.toISOString()}</lastmod> <priority>0.50</priority></url>`;
        return fullPath;
        /*     } */
      });

      return {
        sitemapLang,
        lang,
      };
    });

    const pagePathsLangArray = [];
    // Add urlSet to entire sitemap string
    pagesPath.map(async (item) => {
      const valueLang = (await item).sitemapLang.join('');
      const sitemapLang = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${valueLang}</urlset>`;

      const name = `pages_${(await item).lang.languageCode}`;
      pagePathsLangArray.push(name);
      fs.writeFileSync(`public/sitemap/${name}.xml`, sitemapLang);
    });

    // Sitemap index
    const sitemapIndexContent = pagePathsLangArray
      .map((fileName) => {
        const date = new Date();
        return `<sitemap><loc>${siteUrl}sitemap/${fileName}.xml</loc><lastmod>${date.toISOString()}</lastmod></sitemap>`;
      })
      .join('');

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapIndexContent}</sitemapindex>
    `;

    const robots = `${robotsTxt}
    Sitemap: ${siteUrl}sitemap.xml`;
    // set response content header to xml
    fs.writeFileSync('public/robots.txt', robots);
    fs.writeFileSync('public/sitemap.xml', sitemapIndex);
  } catch (err) {
    console.log(err);
  }
}
