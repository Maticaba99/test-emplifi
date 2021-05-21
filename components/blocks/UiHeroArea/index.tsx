import React from 'react';
import { HeroArea } from '@/Storybook/index';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiHeroArea } from '@/interfaces/blocks';

export function UiHeroAreaComp(props: { block: UiHeroArea }): JSX.Element {
  const { block } = props;
  return (
    <HeroArea
      type={block.defaultHeroType ? 'default' : 'default-alt'}
      position={block.alightTextLeft ? 'left' : 'right'}
      imgSrc={block.mobileImage.url}
      imgAlt={block.heroTitle}
      imgTitle={block.heroTitle}
      desktopImgSrc={block.desktopImage.url}
      title={block.heroTitle}
      body={block.heroContent}
      buttonChildren={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
    />
  );
}
