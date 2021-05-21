import { ArticleCallToAction } from '@/Storybook/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiArticleCallToAction } from '@/interfaces/blocks';
export function UiArticleCTAComp(props: { block: UiArticleCallToAction }) {
  const { block } = props;
  return (
    <ArticleCallToAction
      backgroundColor={'#1A4073'}
      imgSrc={block.image.url}
      imgAlt={block.image.description}
      imgTitle={block.image.title}
      title={block.displayTitle}
      articleBody={documentToHtmlString(block.content.json)}
      buttonChildren={<LinkHandlerButton cta={block.cta} /* ctaType={block.} */ />}
    />
  );
}
