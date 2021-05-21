import { ArticleQuote } from '@/Storybook/index';

// Interfaces
import { UiArticleQuote } from '@/interfaces/blocks';
export function UiArticleQuoteComp(props: { block: UiArticleQuote }) {
  const { block } = props;
  return <ArticleQuote quote={block.quote} company={block.company} by={block.by} />;
}
