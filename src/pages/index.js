import React from 'react';
import Link from 'next/link';

import { ThemeContext } from '../components/theme-context';
import styled from 'styled-components';
import GlobalStyle from 'ui/global';
import { SiTwitter, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';

const Main = styled.main`
  height: 100vh;
  margin: 0;
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50%;
`;

const Links = styled.section`
  display: flex;
  gap: 1em;
`;

const A = styled.a`
  padding: 0.5em 1em;
  border-width: 2px;
  border-style: solid;
  border-color: var(--color-text-main);
  border-radius: 999px;
  color: var(--color-text-main);
  text-decoration: none;
`;

const SocialLink = styled.a`
  border-radius: 0.375em;
  padding: 0.5em;
  &:hover {
    background: #efefef;
  }
  & > svg {
    display: block;
  }
`;

const SocialBar = styled.div`
  display: flex;
`;

const LandingPage = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const img = `/static/logo-${colorMode}.png`;
  return (
    <Main>
      <GlobalStyle />
      <Logo src={img} alt="nervous ghost logo" />
      <Links>
        <Link href="/portfolio" passHref>
          <A>Portfolio</A>
        </Link>
        <Link href="/shop" passHref>
          <A>Shop</A>
        </Link>
        <Link href="/shop" passHref>
          <A>Newsletter</A>
        </Link>
      </Links>
      <SocialBar>
        <Link href="https://www.twitter.com/nervousgh0st" passHref>
          <SocialLink target="_blank">
            <SiTwitter />
          </SocialLink>
        </Link>
        <Link href="https://www.instagram.com/nervousgh0st/" passHref>
          <SocialLink target="_blank">
            <SiInstagram />
          </SocialLink>
        </Link>
        <Link href="https://www.tiktok.com/@nervousgh0st" passHref>
          <SocialLink target="_blank">
            <SiTiktok />
          </SocialLink>
        </Link>
        <Link href="https://www.youtube.com/nervousghost" passHref>
          <SocialLink target="_blank">
            <SiYoutube />
          </SocialLink>
        </Link>
      </SocialBar>
    </Main>
  );
};

export default LandingPage;
