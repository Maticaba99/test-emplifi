import React from 'react';
import { PreFooterCTA } from '@/Storybook/index';
import { Layout } from '@/components/layout';

// Interfaces
import { UiPreFooterCta } from '@/interfaces/blocks';
import { LinkHandlerButton } from '@/components/common/handleLink';

export function UiPreFooterCtaComp(props: { block: UiPreFooterCta }): JSX.Element {
  const { block } = props;

  return (
    <Layout>
      <PreFooterCTA
        header={block.footerTitle}
        paragraph={block.footerContent}
        children={<LinkHandlerButton cta={block.cta} ctaType={block.ctaType} />}
      />
    </Layout>
  );
}
