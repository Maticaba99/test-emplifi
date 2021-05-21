import { ThreeIconParagraph } from '@/Storybook/index';
import { UiThreeCardGroupComp } from '../UiThreeCardGroup';

// Interfaces
import { UiThreeIconParagraph } from '@/interfaces/blocks';

export function UiThreeIconParagraphComp(props: { block: UiThreeIconParagraph }): JSX.Element {
  const { block } = props;
  return (
    <ThreeIconParagraph
      title={block.displayTitle}
      iconOneTitle={block.icon1SubTitle}
      iconThreeTitle={block.icon3SubTitle}
      body={block.displayContent}
      children={<UiThreeCardGroupComp block={block.threeCardGroup} />}
    />
  );
}
