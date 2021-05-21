import Link from 'next/link';
import { Button, Typography } from '@/Storybook/index';

// Interfaces
import { UiHero } from '@/interfaces/blocks';

export function LinkHandlerButton(props: { cta: UiHero['cta']; ctaType?: UiHero['ctaType']; typography?: boolean }) {
  const { ctaType, cta, typography } = props;
  let type = ctaType || 'Primary';
  let target = cta?.target || null;
  let link = '';
  switch (cta?.__typename) {
    case 'InternalNavigationLink':
      link = `/${cta.internalLink.slug}`;
      break;
    case 'ExternalNavigationLink':
      link = cta.externalLink;
      target = cta?.target || '_blank';
      break;
  }
  if (typography) {
    return (
      <Link href={link}>
        <a target={target}>
          <Typography type="HomeHeroCopy">{cta?.displayTitle}</Typography>
        </a>
      </Link>
    );
  }
  return (
    <Link href={link}>
      <a target={target}>
        <Button type={type}>{cta?.displayTitle}</Button>
      </a>
    </Link>
  );
}
