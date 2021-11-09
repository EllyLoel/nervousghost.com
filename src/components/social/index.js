import React from 'react';
import { SiTwitter, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';
import { Outer, Btn } from './styles';

export default function SocialBar() {
  return (
    <Outer>
      <Btn>
        <SiTwitter />
      </Btn>
      <Btn>
        <SiInstagram />
      </Btn>
      <Btn>
        <SiTiktok />
      </Btn>
      <Btn>
        <SiYoutube />
      </Btn>
    </Outer>
  );
}
