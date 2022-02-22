import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { ThemeContext } from '../components/theme-context';
import GlobalStyle from 'ui/global';
import ThemeToggle from '../components/layout/header/theme-toggle';
import Newsletter from 'components/newsletter';
import SocialBar from 'components/social';

const Main = styled.main`
  height: 100vh;
  margin: 0;
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/static/bg-${({ colorMode }) => colorMode}.png");
  background-size: cover;
`;

const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
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

const SocialBarWrapper = styled.div`
  display: flex;
`;

const LandingPage = () => {
  const newsletterRef = useRef(null);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const img = `/static/logo-${colorMode}.png`;

  useEffect(() => {
    if (isNewsletterOpen) {
      newsletterRef.current.focus();
    }
  }, [isNewsletterOpen]);

  return (
    <Main colorMode={colorMode}>
      <GlobalStyle />
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
      <Logo src={img} alt="nervous ghost logo" />
      <Links>
        <Link href="/portfolio" passHref>
          <A>Portfolio</A>
        </Link>
        <Link href="/shop" passHref>
          <A>Shop</A>
        </Link>
        <button
          onClick={() => {
            setIsNewsletterOpen(true);
          }}
        >
          Newsletter
        </button>
      </Links>
      <SocialBarWrapper>
        <SocialBar />
      </SocialBarWrapper>
      {isNewsletterOpen && (
        <Newsletter
          forwardedRef={newsletterRef}
          setIsNewsletterOpen={setIsNewsletterOpen}
        />
      )}
    </Main>
  );
};

export default LandingPage;
