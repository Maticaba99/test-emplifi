import { fetchGraphQL } from '@/queries/config';
import { siteConfigI, siteConfigQuery } from '@/interfaces/siteConfig';

const query = `
{
  siteConfigurationCollection(limit: 1) {
    items {
      siteUrl
      headerConfiguration {
        logo {
          title
          description
          url
        }
        utilityNavigationCollection(limit: 10) {
          items {
            __typename
            ...externalNavigationLink
            ...internalNavigationLink
          }
        }
        mainMenu {
          subMenusCollection(limit: 10) {
            items {
              __typename
              ...externalNavigationLink
              ...internalNavigationLink
              ...uiSubMenu
            }
          }
        }
        languagesCollection(limit: 10) {
          items {
            displayTitle
            languageCode
          }
        }
        utilityNavigationCta {
          __typename
          ...externalNavigationLink
          ...internalNavigationLink
        }
      }
      footerConfiguration {
        logo {
          title
          description
          url
        }
        linksCollection(limit: 10) {
          items {
            __typename
            ...externalNavigationLink
            ...internalNavigationLink
          }
        }
        copyright
        blocksCollection {
          items {
            __typename
            ...uiRawHtml
          }
        }
      }
      seoConfiguration {
        twitterSite
        twitterCreator
        defaultTwitterImage {
          title
          description
          url
        }
        defaultFacebookImage {
          title
          description
          url
        }
        robotsTxt
        twittercard
      }
      siteLevelPageScripts {
        headerStartScripts
        headerEndScripts
        bodyStartScripts
        bodyEndScripts
      }
    }
  }
}

fragment uiRawHtml on UiRawHtml {
  rawHtml
}

fragment externalNavigationLink on ExternalNavigationLink {
  displayTitle
  css
  externalLink
  target
}

fragment internalNavigationLink on InternalNavigationLink {
  displayTitle
  css
  querystring
  internalLink {
    title
    slug
  }
  target
}

fragment uiSubMenu on UiSubMenu {
  displayTitle
  menuColumnsCollection(limit: 10) {
    items {
      displayTitle
      linksCollection(limit: 10) {
        items {
          __typename
          ...externalNavigationLink
          ...internalNavigationLink
        }
      }
    }
  }
}

  `;

export async function getSiteConfig(): Promise<siteConfigI> {
  const siteConfig: siteConfigQuery = await fetchGraphQL(query);
  const data = siteConfig.data.siteConfigurationCollection.items[0];
  return data;
}
