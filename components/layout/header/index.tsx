import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkHandlerButton } from '@/components/common/handleLink';
import {
  Header,
  HeaderMenuContainer,
  HeaderMenuItem,
  HeaderOtherMenusContainer,
  HeaderOtherMenuItem,
  HeaderSubMenuContainer,
  HeaderSubMenuItem,
  TranslationButtonGroup,
  TranslationButton,
  Typography,
  Icon,
} from '@/Storybook/index';

// Interface
import { siteConfigI } from '@/interfaces/siteConfig';
import { externalLink, internalLink, uiSubMenu } from '@/interfaces/index';

export function HeaderComp(props: { data: siteConfigI['headerConfiguration'] }): JSX.Element {
  const { data } = props;
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isProductSubMenuOpen, setProductSubMenuOpen] = useState<boolean>(false);
  const [isCustomerStoriesSubMenuOpen, setCustomerStoriesSubMenuOpen] = useState<boolean>(false);
  const [isCompanySubMenuOpen, setCompanySubMenuOpen] = useState<boolean>(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false);

  const openMenu = (isMenuOpen: boolean) => {
    let value = isMenuOpen;
    value = !value;
    setMenuOpen(value);
  };

  const openProductSubMenu = (isProductSubMenuOpen: boolean) => {
    let value = isProductSubMenuOpen;
    value = !value;
    setProductSubMenuOpen(value);
  };

  const openCompanySubMenu = (isCompanySubMenuOpen: boolean) => {
    let value = isCompanySubMenuOpen;
    value = !value;
    setCompanySubMenuOpen(value);
  };

  const openCustomerStoriesSubMenu = (isCustomerStoriesSubMenuOpen: boolean) => {
    let value = isCustomerStoriesSubMenuOpen;
    value = !value;
    setCustomerStoriesSubMenuOpen(value);
  };

  const openLanguage = (isLanguageMenuOpen: boolean) => {
    let value = isLanguageMenuOpen;
    value = !value;
    setLanguageMenuOpen(value);
  };

  const selectLanguage = () => {
    setLanguageMenuOpen(false);
  };

  const router = useRouter();

  const openSubMenu = (title: string) => {
    let click = {
      isOpen: null,
      onClick: null,
    };
    switch (title) {
      case 'Products':
        return (click = {
          isOpen: isProductSubMenuOpen,
          onClick: () => openProductSubMenu(isProductSubMenuOpen),
        });
      case 'Company':
        return (click = {
          isOpen: isCompanySubMenuOpen,
          onClick: () => openCompanySubMenu(isCompanySubMenuOpen),
        });
      default:
        console.log('Need to add case in openSubMenu switch');
        break;
    }
  };

  return (
    <Header
      isMenuOpen={isMenuOpen}
      onClick={() => openMenu(isMenuOpen)}
      menuChildren={
        <HeaderMenuContainer isMenuOpen={isMenuOpen}>
          {data.mainMenu.subMenusCollection.items.length > 0 &&
            data.mainMenu.subMenusCollection.items.map((item: internalLink | externalLink | uiSubMenu, index) => {
              if (item.__typename == 'UiSubMenu') {
                const open = openSubMenu(item.displayTitle);
                return (
                  <HeaderMenuItem
                    key={index}
                    text={item.displayTitle}
                    isSubMenuOpen={open && open.isOpen}
                    onClick={open && open.onClick}
                    subMenuLinksChildren={
                      <HeaderSubMenuContainer>
                        {item.menuColumnsCollection.items.length > 0 &&
                          item.menuColumnsCollection.items.map((column, indx) => (
                            <Fragment key={indx}>
                              {column.linksCollection.items.length > 0 &&
                                column.linksCollection.items.map((subItem, idx) => {
                                  const link =
                                    subItem.__typename === 'ExternalNavigationLink' ? subItem.externalLink : `/${subItem.internalLink.slug}`;
                                  const target =
                                    subItem.__typename === 'ExternalNavigationLink' ? subItem.target || '_blank' : subItem.target || null;
                                  return (
                                    <Link key={idx} href={link}>
                                      <a target={target}>
                                        <HeaderSubMenuItem text={subItem.displayTitle} isActive={router.asPath === link} />
                                      </a>
                                    </Link>
                                  );
                                })}
                            </Fragment>
                          ))}
                      </HeaderSubMenuContainer>
                    }
                  />
                );
              } else {
                const link = item.__typename === 'ExternalNavigationLink' ? item.externalLink : `/${item.internalLink.slug}`;
                const target = item.__typename === 'ExternalNavigationLink' ? item.target || '_blank' : item.target || null;
                return (
                  <Link href={link} key={index}>
                    <a target={target}>
                      <HeaderMenuItem text={item.displayTitle} />
                    </a>
                  </Link>
                );
              }
            })}
        </HeaderMenuContainer>
      }
      miscMenuChildren={
        <HeaderOtherMenusContainer
          isMenuOpen={isMenuOpen}
          topRow={
            <>
              {data.utilityNavigationCollection.items.length > 0 &&
                data.utilityNavigationCollection.items.map((item, index) => {
                  const link = item.__typename === 'ExternalNavigationLink' ? item.externalLink : `/${item.internalLink.slug}`;
                  const target = item.__typename === 'ExternalNavigationLink' ? item.target || '_blank' : item.target || null;
                  return (
                    <Link href={link} key={index}>
                      <a target={target}>
                        <HeaderOtherMenuItem text={item.displayTitle} link={link} />
                      </a>
                    </Link>
                  );
                })}
            </>
          }
          bottomRow={
            <>
              {!isLanguageMenuOpen && (
                <button
                  className="emplifi-header__transition-button emplifi-header__transition-button--mobile"
                  onClick={() => openLanguage(isLanguageMenuOpen)}
                >
                  <Typography type="HomeMiscLink" as="span">
                    {data.languagesCollection.items[0].displayTitle}
                  </Typography>
                  <Icon name="chevron-down" color={'#1e1e1e'} size={15} />
                </button>
              )}
              <button
                className={`emplifi-header__transition-button emplifi-header__transition-button--desktop ${
                  isLanguageMenuOpen ? 'emplifi-header__transition-button--is-active' : ''
                }`}
                onClick={() => openLanguage(isLanguageMenuOpen)}
              >
                <Typography type="HomeMiscLink" as="span">
                  {data.languagesCollection.items[0].displayTitle}
                </Typography>
                <Icon name="chevron-down" color={'#1e1e1e'} size={15} />
              </button>
              <TranslationButtonGroup>
                {isLanguageMenuOpen &&
                  data.languagesCollection.items.length > 0 &&
                  data.languagesCollection.items.map((item, index) => (
                    <TranslationButton key={index} text={item.displayTitle} isActive={false} onClick={() => selectLanguage()} />
                  ))}
              </TranslationButtonGroup>
            </>
          }
        />
      }
    />
  );
}
