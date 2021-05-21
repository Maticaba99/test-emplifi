import { IconsType } from '@/Storybook/assets/icons';
import { Document } from '@contentful/rich-text-types';
import { richText, imagesI, navigationLink, ctaType, externalLink } from '.';

export type contentIClean = UiMenuColumn &
  UiHtmlContent &
  UiRawHtml &
  UiHero &
  UiHeroArea &
  UiProductBanner &
  UiThreeCardGroup &
  UiResourceCardGroup &
  UiTeamMembers &
  UiTestimonials &
  UiBrandBlock &
  UiQuoteBlock &
  UiFeatureGroup &
  UiSecondaryContentArea &
  UiPreFooterCta &
  UiThreeIconParagraph &
  UiGroupedBrandBlock &
  UiResourceFeatureCard &
  UiResourceFeaturedPost &
  UiArticleCallToAction &
  UiArticleBanner &
  UiArticleQuote &
  UiArticle &
  UiShortBanner &
  UiContactBanner;

export interface UiMenuColumn {
  __typename: string;
  displayTitle: string;
  linksCollection: { items: navigationLink[] };
}

export interface UiHtmlContent {
  html: richText;
  __typename: string;
}

export interface UiRawHtml {
  __typename: string;
  rawHtml: string;
}

export interface UiHero {
  __typename: string;
  image: imagesI;
  title: richText;
  subTitle: richText;
  content: richText;
  ctaType: ctaType;
  cta: navigationLink;
  alignTextLeft: boolean;
}

export interface UiHeroArea {
  __typename: string;
  desktopImage: imagesI;
  mobileImage: imagesI;
  heroTitle: string;
  heroContent: string;
  ctaType: ctaType;
  cta: navigationLink;
  alightTextLeft: boolean;
  defaultHeroType: boolean;
}

export interface UiProductBanner {
  __typename: string;
  image: imagesI;
  title: richText;
  content: richText;
  ctaType: ctaType;
  cta: navigationLink;
  alignTextLeft: boolean;
}

export interface UiThreeCardGroup {
  __typename: string;
  cardsCollection: {
    items: {
      blueBackgroundColor: boolean;
      content: string;
      image: imagesI;
      rightIconName: IconsType;
      title: string;
    }[];
  };
}

export interface UiResourceCardGroup {
  __typename: string;
  resourceCardsCollection: {
    items: {
      content: string;
      ctaType: ctaType;
      cta: navigationLink;
      image: imagesI;
      subTitle: string;
      title: string;
    }[];
  };
}

export interface UiTeamMembers {
  __typename: string;
  teamMembersCollection: {
    items: {
      bio: string;
      image: imagesI;
      name: string;
      role: string;
      socialLinksCollection: {
        items: externalLink[];
      };
    }[];
  };
}

export interface UiTestimonials {
  __typename: string;
  testimonialsCollection: {
    items: {
      company: string;
      companyLogo: imagesI;
      designation: string;
      personName: string;
      photo: imagesI;
      quote: richText;
      storyLink: navigationLink;
    }[];
  };
}

export interface UiBrandBlock {
  __typename: string;
  brandBlockContent: string;
  brandBlockTitle: string;
  image: imagesI;
  mobileImage: imagesI;
}

export interface UiQuoteBlock {
  __typename: string;
  backgroundImage: string;
  companyName: string;
  ctaType: ctaType;
  cta: navigationLink;
  logoImagesCollection: {
    items: imagesI[];
  };
  quote: string;
  quoteBy: string;
}

export interface UiFeatureGroup {
  __typename: string;
  featuresCollection: {
    items: {
      title: string;
      icon: IconsType;
      content: richText;
    }[];
  };
}

export interface UiSecondaryContentArea {
  __typename: string;
  secondaryContentTitle: string;
  content: richText;
  icon: IconsType;
  cta: navigationLink;
  ctaType: ctaType;
  desktopImage: imagesI;
  mobileImage: imagesI;
}

export interface UiPreFooterCta {
  __typename: string;
  footerTitle: string;
  footerContent: string;
  cta: navigationLink;
  ctaType: ctaType;
}

export interface UiThreeIconParagraph {
  __typename: string;
  displayTitle: string;
  displayContent: string;
  icon1: IconsType;
  icon1SubTitle: string;
  icon2: IconsType;
  icon3: IconsType;
  icon3SubTitle: string;
  threeCardGroup: UiThreeCardGroup;
}

export interface UiGroupedBrandBlock {
  __typename: string;
  threeIconParagraph: UiThreeIconParagraph;
  brandBlock: UiBrandBlock;
}
export interface UiResourceFeatureCard {
  __typename: string;
  cardTitle: string;
  cardSubTitle: string;
  cardPosition: string;
  cardContent: string;
  variation: string;
  desktopImage: imagesI;
  mobileImage: imagesI;
  cta: navigationLink;
}

export interface UiResourceFeaturedPost {
  __typename: string;
  displayTitle: string;
  displaySubTitle: string;
  displayContent: string;
  desktopImage: imagesI;
  mobileImage: imagesI;
  cta: navigationLink;
}

export interface UiArticleBanner {
  __typename: string;
  mobileImage: imagesI;
  desktopImage: imagesI;
  quote: string;
  quoteBy: string;
  designation: string;
  company: string;
  socialLinksCollection: {
    items: externalLink[];
  };
}

export interface UiArticleCallToAction {
  __typename: string;
  image: imagesI;
  displayTitle: string;
  content: richText;
  cta: navigationLink;
}

export interface UiArticleQuote {
  __typename: string;
  quote: string;
  company: string;
  by: string;
}

export interface UiArticle {
  __typename: string;
  article: {
    sys: {
      id: string;
    };
    image: imagesI;
    displayTitle: string;
    subTitle: string;
    postMeta: string;
    content: {
      json: Document;
      links: {
        assets: {
          block: imagesI[];
        };
        entries: {
          inline: contentIClean[];
        };
      };
    };
    publishedDate: string;
    author: {
      photo: imagesI;
      fullName: string;
      firstName: string;
      lastName: string;
    };
    category: {
      displayTitle: string;
    };
    channel: {
      displayTitle: string;
    };
    topicCollection: {
      items: {
        displayTitle: string;
      }[];
    };
  };
}
export interface UiShortBanner {
  __typename: string;
  showTitle: string;
  showContent: string;
  image: imagesI;
  cta: navigationLink;
  type: string;
}

export interface UiContactBanner {
  __typename: string;
  showTitle: string;
  showContent: string;
  image: imagesI;
  alignLeft: boolean;
}
