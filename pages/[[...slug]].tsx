import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ContentBlocks } from '../components/common/contentBlocks';
// Queries
import { getPageContent } from '@/queries/getPages';
import { getPaths } from '@/queries/getPaths';
import { getSiteConfig } from '@/queries/getSiteConfig';

// Components
import { HeadComponent, HeaderComp, FooterComp } from '../components/layout';
// Interfaces
import { siteConfigI } from '../interfaces/siteConfig';
import { pageData } from '@/interfaces/queries';

function Index(props: { data: pageData /* ; siteConfig: siteConfigI  */ }) {
  const { data /* , siteConfig  */ } = props;
  console.log(data);
  const router = useRouter();
  if (router.isFallback) {
    return 'Loading...';
  }
  return (
    <>
      {/* <HeadComponent
        defaultData={{ scripts: siteConfig?.siteLevelPageScripts, seo: siteConfig?.seoConfiguration, siteUrl: siteConfig?.siteUrl }}
        pageData={{ seo: data?.page.seo }}
      /> */}
      {/*    <HeaderComp data={siteConfig?.headerConfiguration} /> */}
      <ContentBlocks articles={data?.articles} content={data?.page.blocksCollection.items} />
      {/*  <FooterComp data={siteConfig?.footerConfiguration} /> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths();
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  let slug = '';
  let path = '';
  if (Array.isArray(params.slug)) {
    path = params.slug.join('/');
    slug = params.slug.pop();
  } else {
    slug = params.slug;
  }
  if (!slug) {
    slug = 'home';
  }
  // getPage
  const data = await getPageContent(slug);

  // getSiteConfig
  /* const siteConfig = await getSiteConfig(); */
  return {
    props: {
      data,
      /* siteConfig, */
    },
    revalidate: 1,
  };
};

export default Index;
