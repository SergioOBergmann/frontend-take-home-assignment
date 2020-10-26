import styled from 'styled-components';

import { MOBILE_BREAKPOINT } from '../../styles/global';

export const Logo = styled.img`
  width: 95px;
  margin-left: 37px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 65px !important;
    margin-left: 16px !important;
  }
`;

export const Bg = styled.div`
  align-items: center;
  width: 100%;
  height: 79px;
  background: #ffffff;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 56px !important;
  }
`;
