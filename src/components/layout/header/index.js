import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useSettings } from 'components/settings-context';
import { ThemeContext } from '../../theme-context';
import ThemeToggle from './theme-toggle';
import IconUser from 'ui/icons/user';

import BurgerButton from './burger-button';
import BasketButton from './basket-button';
import Search from './search';
import {
  Outer,
  Nav,
  Btn,
  Logo,
  NavList,
  NavListItem,
  PreviewBar,
  IconBar
} from './styles';

export default function Header({ simple, preview }) {
  const { mainNavigation } = useSettings();
  const router = useRouter();

  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [navOpen, setNavOpen] = useState(false);

  const img = `/static/logo-${colorMode}.png`;

  return (
    <>
      {preview && (
        <PreviewBar>
          You are in preview mode (
          <a href={'/api/preview?leave=' + encodeURIComponent(router.asPath)}>
            leave
          </a>
          )
        </PreviewBar>
      )}
      <Outer simple={simple}>
        <Link href="/" passHref>
          <Logo aria-label="Logo">
            <img src={img} alt="nervous ghost" />
          </Logo>
        </Link>
        <Nav open={navOpen}>
          <NavList>
            {mainNavigation?.map((category) => {
              if (category.name !== 'frontpage-2021') {
                return (
                  <NavListItem key={category.path}>
                    <Link href={category.path}>
                      <a onClick={() => setNavOpen(false)}>{category.name}</a>
                    </Link>
                  </NavListItem>
                );
              }
            })}
          </NavList>
        </Nav>
        <IconBar>
          <ThemeToggle />
          <Link href="/account" passHref>
            <Btn as="a" aria-label="User area">
              <IconUser />
            </Btn>
          </Link>
          <Search />
          <BasketButton />
        </IconBar>
        <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
      </Outer>
    </>
  );
}
