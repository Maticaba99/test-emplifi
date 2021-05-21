import { useState, useEffect } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Testimonials, Testament } from '@/Storybook/index';
import { Layout } from '@/components/layout';
import { LinkHandlerButton } from '@/components/common/handleLink';

// Interfaces
import { UiTestimonials } from '@/interfaces/blocks';
import { Document } from '@contentful/rich-text-types';

export function UiTestimonialComp(props: { block: UiTestimonials }) {
  const { block } = props;

  const [content, setContent] = useState<Array<Document>>([]);
  const contentArray = block.testimonialsCollection.items;

  useEffect(() => {
    const auxContent: Document[] = [];
    contentArray.map((item) => {
      auxContent.push(item.quote.json);
    });
    setContent(auxContent);
  }, [block]);
  return (
    <Layout>
      <Testimonials
        testimonialsChildren={
          <>
            {block.testimonialsCollection.items.map((item, index) => {
              return (
                <Testament
                  key={index}
                  logoSrc={item.companyLogo.url}
                  logoAlt={item.companyLogo.description}
                  logoTitle={item.companyLogo.title}
                  photoSrc={item.photo.url}
                  photoAlt={item.photo.description}
                  photoTitle={item.photo.title}
                  quote={documentToHtmlString(content[index])}
                  name={item.personName}
                  position={item.designation}
                  company={item.company}
                  cta={<LinkHandlerButton key={index} cta={item.storyLink} typography={true} />}
                />
              );
            })}
          </>
        }
      />
    </Layout>
  );
}
