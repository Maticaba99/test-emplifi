const DELIVERY_API_KEY = process.env.DELIVERY_API_KEY;
const PREVIEW_API_KEY = process.env.PREVIEW_API_KEY;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
export const graphqlUrl = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;
export async function fetchGraphQL(query: any, preview = false): Promise<any> {
  try {
    const result = await fetch(graphqlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview ? PREVIEW_API_KEY : DELIVERY_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    }).then((response) => response.json());
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
