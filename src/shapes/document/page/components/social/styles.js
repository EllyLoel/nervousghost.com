import styled from 'styled-components';
import { responsive } from 'ui';

export const Btn = styled.button`
  border-radius: 0.375em;
  padding: 0.5em;
  &:hover {
    background: #efefef;
  }
  & > svg {
    display: block;
  }
`;

export const Outer = styled.div`
  display: flex;

  ${responsive.mdPlus} {
    align-items: flex-end;
    flex-direction: column;
    width: 60px;
    position: fixed;
    transform: translateX(-85px);
    top: 167px;
    transform: translateX(-85px);
  }
`;
