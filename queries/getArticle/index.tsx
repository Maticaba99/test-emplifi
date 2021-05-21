import { fetchGraphQL } from '@/queries/config';

// Interface
import { articleData } from '@/interfaces/queries';
import { UiArticle } from '@/interfaces/blocks';

const articleQuery = (id: string) => `
{
    articleCollection(limit: 1, where: {sys: {id: "${id}"}}) {
      items {
        displayTitle: title
        subTitle
        image {
          title
          description
          url
        }
        postMeta
        publishedDate
        author {
          photo {
            title
            description
            url
          }
          fullName
          firstName
          lastName
        }
        category {
          displayTitle
        }
        channel {
          displayTitle
        }
        topicCollection(limit: 15) {
          items {
            displayTitle
          }
        }
        content {
          json
          links {
            entries {
              inline {
                __typename
                ... on UiGroupedBrandBlock {
                  threeIconParagraph {
                    displayTitle: title
                    displayContent: content
                    icon1
                    icon1SubTitle
                    icon2
                    icon3
                    icon3SubTitle
                    threeCardGroup {
                      cardsCollection(limit: 3) {
                        items {
                          title
                          content
                          image {
                            title
                            description
                            url
                          }
                          rightIconName
                          blueBackgroundColor
                        }
                      }
                    }
                  }
                  brandBlock {
                    brandBlockTitle: title
                    brandBlockContent: content
                    mobileImage {
                      title
                      description
                      url
                    }
                    image {
                      title
                      description
                      url
                    }
                  }
                }
              }
            }
            assets {
              block {
                title
                url
                description
              }
            }
          }
        }
      }
    }
  }
  
  
`;

export async function getArticle(id: string): Promise<UiArticle['article']> {
  const entry: articleData = await fetchGraphQL(articleQuery(id));
  const article = entry.data.articleCollection.items[0];

  return article;
}
