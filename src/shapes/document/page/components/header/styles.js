import styled from 'styled-components';

import { responsive } from 'ui';

export const Header = styled.div`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const HeaderInner = styled.div`
  ${responsive.smPlus} {
    width: max-content;
    max-width: 800px;
  }

  // Paragraph generated by the ContentTransformer
  p {
    font-size: 20px;
    line-height: 36px;
    font-weight: 500;
  }
`;

export const Byline = styled.div`
  font-size: 16px;
  padding-bottom: 15px;
  span {
    margin-right: 10px;
  }
`;
