import React from 'react';
import { ResourceFeatureCard } from '@/Storybook/index';
import { Layout } from '@/components/layout';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiResourceFeatureCard } from '@/interfaces/blocks';

export function UiResourceFeatureCardComp(props: { block: UiResourceFeatureCard }): JSX.Element {
  const { block } = props;

  return (
    <Layout>
      <ResourceFeatureCard
        meta={block.cardSubTitle}
        imgSrc={block.mobileImage.url}
        imgSrcDesktop={block.desktopImage.url}
        imgAlt={block.desktopImage.description}
        imgTitle={block.desktopImage.description}
        title={block.cardTitle}
        paragraph={block.cardContent}
        buttonChildren={<LinkHandlerButton cta={block.cta} />}
        variations={block.variation ? '1' : '2'}
        position={block.cardPosition ? 'left' : 'right'}
      />
    </Layout>
  );
}
