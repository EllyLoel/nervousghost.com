import React from 'react';
import { Outer, Btn } from './styles';
import { SiTwitter, SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';

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
