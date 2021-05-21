import { useState, useEffect } from 'react';
import { SecondaryContentArea } from '@/Storybook/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiSecondaryContentArea } from '@/interfaces/blocks';
import { Document } from '@contentful/rich-text-types';

export function UiSecondaryContentAreaComp(props: { block: UiSecondaryContentArea }): JSX.Element {
  const { block } = props;

  const [paragraph, setParagraph] = useState<Document>();

  useEffect(() => {
    setParagraph(block.content.json);
  }, [block.content.json]);
  return (
    <SecondaryContentArea
      imgSrc={block.mobileImage.url}
      imgSrcDesktop={block.desktopImage.url}
      imgAlt={block.desktopImage.description}
      imgTitle={block.desktopImage.title}
      title={block.secondaryContentTitle}
      paragraph={documentToHtmlString(paragraph)}
      buttonChildren={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
    />
  );
}
