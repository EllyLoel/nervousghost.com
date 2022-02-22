import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { SiTwitter, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: felx-end;
`;

const SocialLink = styled.a`
  border-radius: 999px;
  padding: 0.5em;
  margin-right: 0.5em;
  outline-width: 1px;
  outline-style: solid;
  outline-color: var(--color-text-main);
  &:hover {
    background: #80808054;
  }
  & > svg {
    display: block;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export default function SocialBar() {
  return (
    <SocialContainer>
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
      <Link
        href="https://youtube.com/channel/UCr-rQkKq9L-n1-IovrIbmXQ"
        passHref
      >
        <SocialLink target="_blank">
          <SiYoutube />
        </SocialLink>
      </Link>
    </SocialContainer>
  );
}
