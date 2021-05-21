import { Fragment } from 'react';
import { UiQuoteBlock } from '@/interfaces/blocks';
import { QuoteBlock, QuoteBlockImage } from '@/Storybook/index';
import { LinkHandlerButton } from '@/components/common/handleLink';

export function UiQuoteBlockComp(props: { block: UiQuoteBlock }) {
  const { block } = props;
  return (
    <QuoteBlock
      quote={block.quote}
      companyName={block.companyName}
      by={block.quoteBy}
      buttonChildren={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
      imagesChildren={
        <Fragment>
          {block.logoImagesCollection.items.length > 0 &&
            block.logoImagesCollection.items.map((item, key) => {
              return <QuoteBlockImage key={key} imgSrc={item.url} imgAlt={item.description} imgTitle={item.title} />;
            })}
        </Fragment>
      }
    />
  );
}
