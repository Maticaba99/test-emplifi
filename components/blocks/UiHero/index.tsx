import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { HeroBanner } from '@/Storybook/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { Layout } from '@/components/layout';

// Interfaces
import { UiHero } from '@/interfaces/blocks';

export function UiHeroComp(props: { block: UiHero }): JSX.Element {
  const { block } = props;

  return (
    <Layout>
      <HeroBanner
        title={documentToHtmlString(block.title?.json)}
        subTitle={documentToHtmlString(block.subTitle?.json)}
        body={documentToHtmlString(block.content?.json)}
        imgSrc={block.image.url}
        isRight={!block.alignTextLeft}
        imgTitle={block.image.title}
        alt={block.image.description}
        buttonChildren={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
      />
    </Layout>
  );
}
