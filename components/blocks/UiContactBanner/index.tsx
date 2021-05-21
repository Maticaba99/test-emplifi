import {ContactBanner } from '@/Storybook/index';
import React  from 'react';

// Interfaces
import { UiContactBanner } from '@/interfaces/blocks';

export function UiContactBannerComp(props: { block: UiContactBanner }): JSX.Element {
  const { block } = props;

  return (
    <ContactBanner
      title={block.showTitle}
      body={block.showContent}
      imgSrc={block.image.url}
      imgAlt={block.image.description}
      imgTitle={block.image.title}
      isRight={block.alignLeft}
    />
  )
}
