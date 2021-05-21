import { fetchGraphQL } from '../config';
import compress from 'graphql-query-compress';
import { getArticle } from '../getArticle';

// Interfaces

import { uiPageQuery } from '@/interfaces/index';
import { pageData } from '@/interfaces/queries';

const getPageQuery = (slug: string) => {
  return `
  {
    uiPageCollection(where: {slug: "${slug}"}, limit: 1) {
      items {
        title
        slug
        seo {
          metaTitle
          metaDescription
          canonicalUrl
          noIndex
          noFollow
          ogimage {
            title
            description
            url
          }
          twitterimage {
            title
            description
            url
          }
          ogtype
        }
        blocksCollection(limit: 20) {
          items {
            __typename
            ...htmlContent
            ...rawHtml
            ...hero
            ...htmlContent
            ...productBanner
            ...threeCardGroup
            ...resourceCardGroup
            ...teamMembers
            ...heroArea
            ...quoteBlock
            ...brandBlock
            ...testimonials
            ...featureGroup
            ...secondaryContentArea
            ...preFooterCta
            ...groupedBrandBlock
            ...threeIconParagraph
            ...articleCallToAction
            ...article
            ...articleQuote
            ...articleBanner
            ...resourceFeatureCard
            ...resourceFeaturePost
            ...shortBanner
            ...contactBanner
          }
        }
      }
    }
  }
  
  fragment htmlContent on UiHtmlContent {
    html {
      json
    }
  }
  
  fragment rawHtml on UiRawHtml {
    rawHtml
  }
  
  fragment hero on UiHero {
    image {
      title
      description
      url
    }
    title {
      json
    }
    subTitle {
      json
    }
    content {
      json
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
    alignTextLeft
  }
  
  fragment productBanner on UiProductBanner {
    image {
      title
      description
      url
    }
    title {
      json
    }
    content {
      json
    }
    cta {
      __typename
      ...externalLink
      ...internalLink
    }
    ctaType
    alignTextLeft
  }
  
  fragment threeCardGroup on UiThreeCardGroup {
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
  
  fragment resourceCardGroup on UiResourceCardGroup {
    resourceCardsCollection(limit: 5) {
      items {
        title
        subTitle
        content
        cta {
          __typename
          ...externalLink
          ...internalLink
        }
        ctaType
        image {
          title
          description
          url
        }
      }
    }
  }
  
  fragment teamMembers on UiTeamMembers {
    teamMembersCollection(limit: 4) {
      items {
        image {
          title
          description
          url
        }
        name
        role
        bio
        socialLinksCollection(limit: 3) {
          items {
            displayTitle
            css
            externalLink
            target
            icon
          }
        }
      }
    }
  }
  
  fragment heroArea on UiHeroArea {
    mobileImage {
      description
      title
      url
    }
    desktopImage {
      description
      title
      url
    }
    heroTitle: title
    heroContent: content
    alightTextLeft
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
    defaultHeroType
  }
  
  fragment quoteBlock on UiQuoteBlock {
    quote
    quoteBy
    companyName
    backgroundImage {
      description
      title
      url
    }
    logoImagesCollection(limit: 10) {
      items {
        title
        description
        url
      }
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
  }
  
  fragment brandBlock on UiBrandBlock {
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
  
  fragment testimonials on UiTestimonials {
    testimonialsCollection(limit: 3) {
      items {
        photo {
          title
          description
          url
        }
        quote {
          json
        }
        personName
        designation
        company
        companyLogo {
          title
          description
          url
        }
        storyLink {
          __typename
          ...internalLink
          ...externalLink
        }
      }
    }
  }
  
  fragment featureGroup on UiFeatureGroup {
    featuresCollection(limit: 3) {
      items {
        title
        content {
          json
        }
        icon
      }
    }
  }
  
  fragment secondaryContentArea on UiSecondaryContentArea {
    secondaryContentTitle: title
    content {
      json
    }
    mobileImage {
      title
      description
      url
    }
    desktopImage {
      title
      description
      url
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
  }
  
  fragment groupedBrandBlock on UiGroupedBrandBlock {
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
  
  fragment threeIconParagraph on UiThreeIconParagraph {
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
  
  fragment articleCallToAction on UiArticleCallToAction {
    image {
      title
      description
      url
    }
    displayTitle: title
    content {
      json
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }
  
  fragment articleQuote on UiArticleQuote {
    quote
    company
    by
  }
  
  fragment article on UiArticle {
    article {
      sys {
        id
      }
    }
  }
  
  fragment resourceFeatureCard on UiResourceFeatureCard {
    cardTitle: title
    cardSubTitle: subTitle
    cardContent: content
    cardPosition: position
    variation
    mobileImage {
      url
      description
    }
    desktopImage {
      url
      description
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }
  
  fragment resourceFeaturePost on UiResourceFeaturedPost {
    mobileImage {
      title
      description
      url
    }
    desktopImage {
      title
      description
      url
    }
    displayTitle: title
    displaySubTitle: subTitle
    displayContent: content
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
  }
  
  fragment articleBanner on UiArticleBanner {
    mobileImage {
      title
      description
      url
    }
    desktopImage {
      title
      description
      url
    }
    quote
    quoteBy
    designation
    company
  }
  
  fragment internalLink on InternalNavigationLink {
    displayTitle
    css
    querystring
    internalLink {
      title
      slug
    }
    target
  }
  
  fragment externalLink on ExternalNavigationLink {
    displayTitle
    css
    externalLink
    target
    icon
  }
  
  fragment preFooterCta on UiPreFooterCta {
    footerTitle: title
    footerContent: content
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    ctaType
  }
  
  fragment shortBanner on UiShortBanner {
    showTitle: title
    showContent: content
    image {
      title
      description
      url
    }
    cta {
      __typename
      ...internalLink
      ...externalLink
    }
    type
  }
  
  fragment contactBanner on UiContactBanner {
    showTitle: title
    showContent: content
    image {
      title
      description
      url
    }
    alignLeft
  }
  

`;
};

export async function getPageContent(slug: string) {
  const query = compress(getPageQuery(slug));
  const entry: uiPageQuery = await fetchGraphQL(query);
  const page = entry.data.uiPageCollection.items[0];
  let data: pageData = {
    page,
    articles: null,
  };
  /*   if (slug.includes('article')) {
    const artMap = Promise.all(
      page.blocksCollection.items.map(async (block) => {
        if (block.__typename === 'UiArticle') {
          const article = await getArticle(block.article.sys.id);
          return article;
        }
      })
    );

    const articles = (await artMap).filter((item) => {
      return item !== undefined;
    });
    data.articles = articles[0];
    return data;
  } */

  return data;
}
