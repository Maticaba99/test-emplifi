import { fetchGraphQL } from '@/queries/config';

// Interface
import { languageData, language } from '@/interfaces/queries';

const pathsQuery = `
{
    languageCollection{
      items{
        displayTitle
        languageCode
      }
    }
  }
`;

export async function getLanguages(): Promise<language[]> {
  const entry: languageData = await fetchGraphQL(pathsQuery);
  const languages = entry.data.languageCollection.items.map((item) => {
    return item;
  });

  return languages;
}
