import {ShortBanner } from '@/Storybook/index';
import React  from 'react';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiShortBanner } from '@/interfaces/blocks';

export function UiShortBannerComp(props: { block: UiShortBanner }): JSX.Element {
  const { block } = props;

  return (
    <ShortBanner
      type={block.type ? "Executive" : "Articles"}
      title={block.showTitle}
      paragraph={block.showContent}
      imgSrc={block.image.url}
      buttonChildren={<LinkHandlerButton cta={block.cta} />}
    />
  )
}
