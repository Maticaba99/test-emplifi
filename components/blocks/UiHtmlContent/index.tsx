import { useState, useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { UiHtmlContent } from '@/interfaces/blocks';

export function UiHtmlCompontent(props: { block: UiHtmlContent }): JSX.Element {
  const { block } = props;
  const [text, setText] = useState(block.html.json);
  useEffect(() => {
    setText(block.html.json);
  });
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(text),
        }}
      />
    </>
  );
}
