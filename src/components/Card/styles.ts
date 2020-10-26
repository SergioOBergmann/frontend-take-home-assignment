import styled from 'styled-components';

import { MOBILE_BREAKPOINT, PrimaryButton } from '../../styles/global';

export const CardDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: 40px auto auto auto;
  padding: 40px;
  width: 478px;
  height: 518px;

  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 8px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: calc(100% - 48px - 2px);
    min-width: 310px;
    height: 100%;
    margin: 24px auto auto auto;
    padding: 24px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 32px;
    height: 32px;
    margin-top: 4px;
  }
`;

export const Title = styled.span`
  margin-top: 4px;

  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.266667px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.2px;
  }
`;

export const Display = styled.span`
  margin-top: 2px;

  font-size: 16px;
  line-height: 20px;

  color: #657786;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin-top: 0;
    font-size: 14px;
  }
`;

export const CardButton = styled(PrimaryButton as any)`
  margin: 31px 40px auto 40px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    margin: 36px -8px auto -8px;
  }
`;
