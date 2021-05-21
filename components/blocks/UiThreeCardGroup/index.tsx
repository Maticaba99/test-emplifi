import { Fragment } from 'react';
import { Card, ThreeCardGroup, TheeCardGroupIcon } from '@/Storybook/index';

// Interfaces
import { UiThreeCardGroup } from '@/interfaces/blocks';
import colours from '@/Storybook/assets/colours';

export function UiThreeCardGroupComp(props: { block: UiThreeCardGroup }) {
  const { block } = props;
  return (
    <ThreeCardGroup>
      {block.cardsCollection.items.length > 0 &&
        block.cardsCollection.items.map((item, index) => {
          return (
            <Fragment key={index}>
              <Card
                blue={item.blueBackgroundColor}
                header={item.title}
                paragraph={item.content}
                image={item.image && item.image.url}
                imageProps={{ alt: item.image && item.image.description, title: item.image && item.image.title }}
              />
              {item.rightIconName && <TheeCardGroupIcon name={item.rightIconName} size={55} colour={colours.white} />}
            </Fragment>
          );
        })}
    </ThreeCardGroup>
  );
}
