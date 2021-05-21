import { contentIClean } from '@/interfaces/blocks';
import { pageData } from '@/interfaces/queries';
import {
  UiHeroComp,
  UiHtmlCompontent,
  UiRawHtmlComponent,
  UiHeroProductBanner,
  UiThreeCardGroupComp,
  UiResourceCardGroupComp,
  UiTeamMembersComp,
  UiHeroAreaComp,
  UiQuoteBlockComp,
  UiBrandBlockComp,
  UiTestimonialComp,
  UiFeatureGroupComp,
  UiSecondaryContentAreaComp,
  UiPreFooterCtaComp,
  UiThreeIconParagraphComp,
  UiGroupedBrandBlockComp,
  UiResourceFeatureCardComp,
  UiResourceFeaturedPostComp,
  UiArticleQuoteComp,
  UiArticleCTAComp,
  UiArticleComp,
  UiShortBannerComp,
  UiContactBannerComp,
} from '../blocks';

export function ComponentShow(block: contentIClean, articles?: pageData['articles']): JSX.Element {
  const BlockComponents = {
    /*     UiHtmlContent: <UiHtmlCompontent block={block} />, */
    UiHero: <UiHeroComp block={block} />,
    /*  UiHeroArea: <UiHeroAreaComp block={block} />,
    UiRawHtml: <UiRawHtmlComponent block={block} />,
    UiProductBanner: <UiHeroProductBanner block={block} />,
    UiThreeCardGroup: <UiThreeCardGroupComp block={block} />,
    UiResourceCardGroup: <UiResourceCardGroupComp block={block} />,
    UiTeamMembers: <UiTeamMembersComp block={block} />,
    UiTestimonials: <UiTestimonialComp block={block} />,
    UiBrandBlock: <UiBrandBlockComp block={block} />,
    UiQuoteBlock: <UiQuoteBlockComp block={block} />,
    UiFeatureGroup: <UiFeatureGroupComp block={block} />,
    UiSecondaryContentArea: <UiSecondaryContentAreaComp block={block} />,
    UiPreFooterCta: <UiPreFooterCtaComp block={block} />,
    UiThreeIconParagraph: <UiThreeIconParagraphComp block={block} />,
    UiGroupedBrandBlock: <UiGroupedBrandBlockComp block={block} />,
    UiResourceFeatureCard: <UiResourceFeatureCardComp block={block} />,
    UiResourceFeaturedPost: <UiResourceFeaturedPostComp block={block} />,
    UiArticleQuote: <UiArticleQuoteComp block={block} />,
    UiArticleCallToAction: <UiArticleCTAComp block={block} />,
    UiArticle: <UiArticleComp block={block} articles={articles} />,
    UiResourceFeaturePost: <UiResourceFeaturedPostComp block={block} />,
    UiShortBanner: <UiShortBannerComp block={block} />,
    UiContactBanner: <UiContactBannerComp block={block} />, */
  };

  const defaultValue = <h1>No Component Found! {block?.__typename}</h1>;

  return BlockComponents[block.__typename] ? BlockComponents[block.__typename] : defaultValue;
}
