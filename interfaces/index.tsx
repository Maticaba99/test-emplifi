import { ButtonProps } from '@/Storybook/components/Button/Button';
import { IconsType } from '@/Storybook/assets/icons';
import { Document } from '@contentful/rich-text-types';
import { contentIClean } from './blocks';

export type navigationLink = externalLink | internalLink;
export type ctaType = ButtonProps['type'];

export interface uiPageQuery {
  data: {
    uiPageCollection: {
      items: uiPage[];
    };
  };
}
export interface uiPage {
  title: string;
  slug: string;
  blocksCollection: {
    items: contentIClean[];
  };
  pageScripts: pageScripts;
  seo: SeoPage;
}
export interface uiSubMenu {
  __typename: 'UiSubMenu';
  displayTitle: string;
  menuColumnsCollection: {
    items: {
      displayTitle: string;
      linksCollection: {
        items: navigationLink[];
      };
    }[];
  };
}
export interface externalLink {
  __typename: 'ExternalNavigationLink';
  displayTitle: string;
  css: string;
  externalLink: string;
  target: string;
  icon: IconsType;
}
export interface internalLink {
  css: string;
  displayTitle: string;
  querystring: string;
  target: string;
  internalLink: {
    title: string;
    slug: string;
  };
  __typename: 'InternalNavigationLink';
}
export interface pageScripts {
  headerStartScripts: string;
  headerEndScripts: string;
  bodyStartScripts: string;
  bodyEndScripts: string;
}
export interface SeoPage {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogimage: imagesI;
  twitterimage: imagesI;
  ogtype: string;
}

export interface richText {
  json: Document;
}
export interface imagesI {
  description: string;
  title: string;
  url: string;
}
