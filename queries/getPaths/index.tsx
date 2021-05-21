import { pathsData } from '@/interfaces/queries';
import { fetchGraphQL } from '@/queries/config';
import { getLanguages } from '../getLanguages';

const pathsQuery = (locale: string) => `
{
  uiPageCollection(locale: "${locale}") {
      items {
        slug
        pagePath
      }
    }
}
`;

export async function getSitemap(): Promise<
  {
    slug: string;
  }[]
> {
  const entry: pathsData = await fetchGraphQL(pathsQuery('en'));

  return entry.data.uiPageCollection.items;
}

export async function getPaths() {
  const languages = await getLanguages();
  const paths = await Promise.all(
    languages.map(async (locale) => {
      const localeCode = locale.languageCode;
      const entry: pathsData = await fetchGraphQL(pathsQuery(locale.languageCode));
      return entry.data.uiPageCollection.items.map((pageItem) => {
        if (pageItem.slug.includes('home')) {
          return {
            params: { slug: [''] },
            locale: localeCode,
          };
        }
        if (pageItem.pagePath !== null) {
          const secondPathSlug = sliceFunction(pageItem.pagePath, '/');
          secondPathSlug.push(pageItem.slug);
          return { params: { slug: secondPathSlug }, locale: localeCode };
        } else {
          return {
            params: { slug: [pageItem.slug] },
            locale: localeCode,
          };
        }
      });
    })
  );
  return paths.flat();
}

export function sliceFunction(toSlice: string, separator: string): string[] {
  const parsedString = toSlice.split(separator);

  return parsedString;
}
