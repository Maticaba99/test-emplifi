import Link from 'next/link';
import { siteConfigI } from '@/interfaces/siteConfig';
import { AltFooter, Typography } from '@/Storybook/index';

export function FooterComp(props: { data: siteConfigI['footerConfiguration'] }) {
  const { data } = props;
  console.log();
  const copyright = data.copyright.includes('{year}') && data.copyright.replace('{year}', new Date().getFullYear().toString());
  return (
    <>
      <AltFooter
        children={
          data.linksCollection.items.length > 0 &&
          data.linksCollection.items.map((item, index) => {
            let target = item.target;
            let link = '';
            if (item.__typename === 'ExternalNavigationLink') {
              target = item.target || '_blank';
              link = item.externalLink;
            }
            if (item.__typename === 'InternalNavigationLink') {
              link = `/${item.internalLink.slug}`;
            }
            return (
              <Link href={link} key={index}>
                <a target={target}>
                  <li className="footer-alt-footer__links-link">
                    <Typography type="AltFooterLink">{item.displayTitle}</Typography>
                  </li>
                </a>
              </Link>
            );
          })
        }
        imgAlt={data.logo.description}
        imgSrc={data.logo.url}
        imgTitle={data.logo.title}
        copyright={<Typography type="Copyright">{copyright}</Typography>}
      />
    </>
  );
}
