import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { HeroProductBanner } from '@/Storybook/index';
import { LinkHandlerButton } from '@/components/common/handleLink';
import { Layout } from '@/components/layout';

// Interfaces
import { UiProductBanner } from '@/interfaces/blocks';

export function UiHeroProductBanner(props: { block: UiProductBanner }): JSX.Element {
  const { block } = props;
  return (
    <Layout>
      <HeroProductBanner
        title={documentToHtmlString(block.title.json)}
        body={documentToHtmlString(block.content.json)}
        imgSrc={block.image.url}
        isRight={!block.alignTextLeft}
        imgTitle={block.image.title}
        alt={block.image.description}
        buttonChildren={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
      />
    </Layout>
  );
}
