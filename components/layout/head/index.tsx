import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { uiPage } from '@/interfaces/index';
import { siteConfigI } from '@/interfaces/siteConfig';

export function HeadComponent(props: {
  pageData: {
    seo: uiPage['seo'];
  };
  defaultData: {
    seo: siteConfigI['seoConfiguration'];
    scripts: siteConfigI['siteLevelPageScripts'];
    siteUrl: string;
  };
}): JSX.Element {
  /*   const APP_NAME = process.env.customKey.toLowerCase();
  const pathBrand = './' + APP_NAME + '/favicons'; */
  const { defaultData, pageData } = props;
  /*   const { asPath } = useRouter(); */
  /*   const currentUrl = defaultData.siteUrl + asPath.substring(1);
  const index = pageData?.seo?.noIndex ? 'noindex' : 'index';
  const follow = pageData?.seo?.noFollow ? 'nofollow' : 'follow'; */
  /*   const GTM_ID = process.env.GTM_ID; */
  return (
    <>
      <NextSeo
        title={pageData.seo?.metaTitle}
        description={pageData.seo?.metaDescription}
        nofollow={!pageData?.seo?.noFollow}
        noindex={!pageData?.seo?.noIndex}
        twitter={{
          cardType: defaultData?.seo?.twitterCard,
          site: defaultData?.seo?.twitterSite,
          handle: defaultData?.seo?.twitterCreator,
        }}
        openGraph={{
          type: pageData?.seo?.ogtype,
          title: pageData?.seo?.metaTitle,
          description: pageData?.seo?.metaDescription,
          images: [defaultData?.seo?.defaultFacebookImage],
        }}
      />
      <Head>
        {/* GTM */}
        {/*       <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      /> */}
        {/* Page */}

        {/*     <div
        dangerouslySetInnerHTML={{
          __html: `${defaultData.scripts.headerStartScripts}`,
        }}
      /> */}
        {/*  {pageData.seo && pageData.seo.metaTitle && <title>{pageData.seo.metaTitle}</title>} */}

        {/*       <link rel="canonical" href={currentUrl} />
      {pageData.seo && pageData.seo.metaDescription && <meta name="description" content={pageData.seo.metaDescription} />} */}

        {/* Robots */}

        {/*       <meta name="robots" content={`${index}, ${follow}`} /> */}
        {/* Twitter */}
        {/*       {defaultData.seo && defaultData.seo.twitterCreator && <meta name="twitter:creator" content={defaultData.seo.twitterCreator} />} */}
        {/*       {defaultData.seo && defaultData.seo.twitterSite && <meta name="twitter:site" content={defaultData.seo.twitterSite} />} */}

        {/*       {defaultData.seo && defaultData.seo.twitterCard && <meta name="twitter:card" content={defaultData.seo.twitterCard} />} */}
        {/* 
      {pageData.seo && pageData.seo.metaTitle && <meta name="twitter:title" content={pageData.seo.metaTitle} />} */}
        {/* 
      {pageData.seo && pageData.seo.metaDescription && <meta name="twitter:description" content={pageData.seo.metaDescription} />} */}

        {/* {pageData.seo && pageData.seo.twitterimage && pageData.seo.twitterimage.url ? (
        <meta name="twitter:image" content={pageData.seo.twitterimage.url} />
      ) : (
        defaultData.seo &&
        defaultData.seo.defaultTwittterImage &&
        defaultData.seo.defaultTwittterImage.url && <meta name="twitter:image" content={defaultData.seo.defaultTwittterImage.url} />
      )} */}
        {/* OG */}
        {/*       {pageData.seo && pageData.seo.metaTitle && <meta name="og:title" content={pageData.seo.metaTitle} />} */}

        {/*       {pageData.seo && pageData.seo.ogtype && <meta name="og:type" content={pageData.seo.ogtype} />} */}

        {/*  {pageData.seo && pageData.seo.ogimage && pageData.seo.ogimage.url ? (
        <meta name="og:image" content={pageData.seo.ogimage.url} />
      ) : (
        defaultData.seo &&
        defaultData.seo.defaultFacebookImage &&
        defaultData.seo.defaultFacebookImage.url && <meta name="og:image" content={defaultData.seo.defaultFacebookImage.url} />
      )} */}

        {/*  {pageData.seo && pageData.seo.metaDescription && <meta name="og:description" content={pageData.seo.metaDescription} />} */}

        {/*       <meta name="og:url" content={currentUrl} /> */}
        {/*  <div
        dangerouslySetInnerHTML={{
          __html: `${defaultData.scripts.headerEndScripts}`,
        }}
      /> */}

        {/*       <link rel="apple-touch-icon" sizes="180x180" href={pathBrand + '/apple-touch-icon.png'} />
      <link rel="icon" type="image/png" sizes="32x32" href={pathBrand + '/favicon_32x32.png'} />
      <link rel="icon" type="image/png" sizes="16x16" href={pathBrand + '/favicon_16x16.png'} />
      <link rel="manifest" href={pathBrand + '/manifest.json'} />
      <link rel="mask-icon" href={pathBrand + '/safari-pinned-tab.svg'} color="#5bbad5" />
      <link rel="shortcut icon" href={pathBrand + '/favicon.ico'} type="image/x-icon" />
      <link rel="icon" href={pathBrand + '/favicon.ico'} type="image/x-icon" />
      <meta name="msapplication-config" content={pathBrand + '/browserconfig.xml'}></meta> */}
      </Head>
    </>
  );
}
