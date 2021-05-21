import { UiThreeIconParagraphComp, UiBrandBlockComp } from '../';

// Interfaces
import { UiGroupedBrandBlock } from '@/interfaces/blocks';

export function UiGroupedBrandBlockComp(props: { block: UiGroupedBrandBlock }): JSX.Element {
  const { block } = props;
  return (
    <>
      <UiThreeIconParagraphComp block={block.threeIconParagraph} />
      <UiBrandBlockComp block={block.brandBlock} />
    </>
  );
}
