import { UiResourceCardGroup } from '@/interfaces/blocks';
import { ResourceCard, ResourceCardGroup } from '@/Storybook/index';
import { LinkHandlerButton } from '@/components/common/handleLink';

export function UiResourceCardGroupComp(props: { block: UiResourceCardGroup }) {
  const { block } = props;
  return (
    <ResourceCardGroup>
      {block.resourceCardsCollection.items.length > 0 &&
        block.resourceCardsCollection.items.map((item, index) => {
          return (
            <ResourceCard
              hideButton={!item.cta}
              key={index}
              meta={item.subTitle}
              header={item.title}
              paragraph={item.content}
              image={<img src={item.image?.url} title={item.image?.title} alt={item.image?.description} />}
              buttonChildren={item.cta && <LinkHandlerButton cta={item.cta} ctaType={item.ctaType} />}
            />
          );
        })}
    </ResourceCardGroup>
  );
}
