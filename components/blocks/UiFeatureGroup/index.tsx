import { useState, useEffect } from 'react';
import { FeatureGroup, Feature } from '@/Storybook/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Interfaces
import { UiFeatureGroup } from '@/interfaces/blocks';
import { Document } from '@contentful/rich-text-types';

export function UiFeatureGroupComp(props: { block: UiFeatureGroup }): JSX.Element {
  const { block } = props;

  const [content, setContent] = useState<Array<Document>>([]);
  const contentArray = block.featuresCollection.items;

  useEffect(() => {
    const auxContent: Document[] = [];
    contentArray.map((item) => {
      auxContent.push(item.content.json);
    });
    setContent(auxContent);
  }, [block]);
  return (
    <FeatureGroup>
      {block.featuresCollection.items.length > 0 &&
        block.featuresCollection.items.map((item, index) => {
          return <Feature key={index} title={item.title} icon={item.icon} paragraph={documentToHtmlString(content[index])} />;
        })}
    </FeatureGroup>
  );
}
