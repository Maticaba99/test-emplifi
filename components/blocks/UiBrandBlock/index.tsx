import { UiBrandBlock } from '@/interfaces/blocks';
import { BrandBlock } from '@/Storybook/index';

export function UiBrandBlockComp(props: { block: UiBrandBlock }) {
  const { block } = props;
  return (
    <>
      <BrandBlock
        imgSrc={block.image.url}
        imgSrcMobile={block.mobileImage.url}
        imgAlt={block.image.description}
        title={block.brandBlockTitle}
        body={block.brandBlockContent}
      />
    </>
  );
}
