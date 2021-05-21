import React, { useState, useEffect } from 'react';
import { ArticleEditorialFooter, ArticleEditorialSocialIcon, ArticleRenderer, ArticleArea } from '@/Storybook/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactDOMServer from 'react-dom/server';

// Interfaces
import { UiArticle } from '@/interfaces/blocks';
import { Layout } from '@/components/layout';
import { pageData } from '@/interfaces/queries';
import { ContentBlocks } from '@/components/common/contentBlocks';
import { UiGroupedBrandBlockComp } from '../UiGroupedBrandBlock';
export function UiArticleComp(props: { block: UiArticle; articles: pageData['articles'] }) {
  const type = 'Area';
  const [bodyHTML, setBodyHTML] = useState(documentToHtmlString(props?.articles?.content.json));

  useEffect(() => {
    if (bodyHTML.includes('#Image')) {
      props?.articles?.content.links.assets?.block.length > 0 &&
        props?.articles?.content.links.assets?.block.map((item, index) => {
          if (bodyHTML.includes(`<p>#Image${index}</p>`)) {
            const replace = bodyHTML.replace(`<p>#Image${index}</p>`, `<image src=${item.url} title=${item.title} alt=${item.title} />`);
            setBodyHTML(replace);
          }
        });
    }
    if (bodyHTML.includes('#Component')) {
      props?.articles?.content.links.entries.inline.length > 0 &&
        props?.articles?.content.links.entries.inline.map((item, index) => {
          const comp = ReactDOMServer.renderToString(<UiGroupedBrandBlockComp block={item} />);
          const replace = bodyHTML.replace(`<p>#Component${index}</p>`, comp);
          setBodyHTML(replace);
        });
    }
  });

  return (
    <>
      <Layout>
        <ArticleArea
          type={type}
          imgSrc={props.articles?.image.url}
          imgSrcDesktop={props.articles?.image.url}
          imgAlt={props.articles?.image.description}
          imgTitle={props.articles?.image.title}
          meta={props.articles?.postMeta}
          title={props.articles?.displayTitle}
          subTitle={props.articles?.subTitle}
          paragraph={documentToHtmlString(props.articles?.content?.json)}
        />

        <ArticleRenderer articleBody={bodyHTML} />
        <ArticleEditorialFooter
          by={props.articles?.author.fullName}
          articlePublished={props.articles?.publishedDate}
          socialChildrens={
            <>
              <ArticleEditorialSocialIcon iconName="twitter" iconSize={20} iconColour="#003A5D" href="#" target="" anchor={true} />
              <ArticleEditorialSocialIcon iconName="facebook" iconSize={20} iconColour="#003A5D" />
              <ArticleEditorialSocialIcon iconName="linkedin" iconSize={20} iconColour="#003A5D" />
              <ArticleEditorialSocialIcon iconName="envelope" iconSize={20} iconColour="#003A5D" />
            </>
          }
        />
      </Layout>
    </>
  );
}
