import { uiPage, imagesI } from '.';
import { contentIClean, UiArticle } from './blocks';
import { Document } from '@contentful/rich-text-types';

// Languages
export interface languageData {
  data: {
    languageCollection: {
      items: language[];
    };
  };
}
export interface language {
  displayTitle: string;
  languageCode: string;
}

// Paths
export interface pathsData {
  data: {
    uiPageCollection: {
      items: paths[];
    };
  };
}

export interface paths {
  slug: string;
  pagePath: string;
}

// Articles
export interface articleData {
  data: {
    articleCollection: {
      items: UiArticle['article'][];
    };
  };
}

// Pages

export interface pageData {
  page: uiPage;
  articles: UiArticle['article'];
}
