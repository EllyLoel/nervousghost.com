import React from 'react';
import Link from 'next/link';

import { useSettings } from 'components/settings-context';
import { ThemeContext } from '../../theme-context';

import { Outer, Logo, NavList } from './styles';

export default function Footer() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const { mainNavigation } = useSettings();

  const img = `/static/logo-${colorMode}.png`;

  return (
    <Outer>
      <Link href="/">
        <a aria-label="Logo">
          <Logo>
            <img src={img} alt="nervous ghost" />
          </Logo>
        </a>
      </Link>
      <NavList>
        <h5>menu</h5>
        {mainNavigation?.map((category) => {
          if (category.name !== 'frontpage-2021') {
            return (
              <li key={category.path}>
                <Link href={category.path}>
                  <a>{category.name}</a>
                </Link>
              </li>
            );
          }
        })}
      </NavList>
    </Outer>
  );
}
