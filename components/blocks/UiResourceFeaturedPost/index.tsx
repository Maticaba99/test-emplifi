import React from 'react';
import { ResourceFeaturedPost } from '@/Storybook/index';
import { Layout } from '@/components/layout';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiResourceFeaturedPost } from '@/interfaces/blocks';

export function UiResourceFeaturedPostComp(props: { block: UiResourceFeaturedPost }): JSX.Element {
  const { block } = props;

  return (
    <Layout>
      <ResourceFeaturedPost
        imgSrc={block.mobileImage.url}
        imgSrcDesktop={block.desktopImage.url}
        imgAlt={block.desktopImage.description}
        imgTitle={block.desktopImage.title}
        meta={block.displaySubTitle}
        title={block.displayTitle}
        paragraph={block.displayContent}
        buttonChildren={<LinkHandlerButton cta={block.cta} />}
      />
    </Layout>
  );
}
