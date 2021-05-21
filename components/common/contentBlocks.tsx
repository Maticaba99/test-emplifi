import { Fragment } from 'react';
import { ComponentShow } from './componentShow';
import { contentIClean } from '@/interfaces/blocks';
import { pageData } from '@/interfaces/queries';

export const ContentBlocks = (props: { content: contentIClean[]; articles?: pageData['articles'] }): JSX.Element => {
  const { content } = props;
  return <>{content.length > 0 ? content.map((block, index) => <Fragment key={index}>{ComponentShow(block, props?.articles)}</Fragment>) : null}</>;
};
