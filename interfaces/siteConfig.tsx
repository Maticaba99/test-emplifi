import { imagesI, navigationLink, pageScripts, uiSubMenu } from '.';
import { contentIClean } from './blocks';

export interface siteConfigQuery {
  data: {
    siteConfigurationCollection: {
      items: siteConfigI[];
    };
  };
}

export interface siteConfigI {
  footerConfiguration: {
    copyright: string;
    logo: imagesI;
    blocksCollection: {
      items: contentIClean[];
    };
    linksCollection: {
      items: navigationLink[];
    };
  };
  headerConfiguration: {
    logo: imagesI;
    utilityNavigationCollection: {
      items: navigationLink[];
    };
    mainMenu: {
      subMenusCollection: {
        items: navigationLink[] | uiSubMenu[];
      };
    };
    utilityNavigationCta: navigationLink;
    languagesCollection: {
      items: {
        displayTitle: string;
        languageCode: string;
      }[];
    };
  };
  seoConfiguration: {
    twitterSite: string;
    twitterCreator: string;
    defaultTwittterImage: imagesI;
    defaultFacebookImage: imagesI;
    robotsTxt: string;
    twitterCard: string;
  };
  siteLevelPageScripts: pageScripts;
  siteUrl: string;
}
