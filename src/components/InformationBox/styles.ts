import styled from 'styled-components';

import { MOBILE_BREAKPOINT } from '../../styles/global';

export const InformationBoxDiv = styled.div`
  flex-direction: column;
  height: 168px;
  margin-top: 31px;

  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 134px;
    margin-top: 30px;
  }
`;

export const PrimaryMessage = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 102px;
  padding: 0 32px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 64px;
    padding: 0 24px;
  }
`;

export const Label = styled.span`
  font-weight: 500;

  &.mobile {
    display: none;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 16px;
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
`;

export const Value = styled.span`
  flex-grow: 0;
  max-width: 407px;

  font-weight: 500;
  font-size: 40px;
  line-height: 40px;

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  letter-spacing: -0.266667px;

  color: #0079FF;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 264px
    font-size: 26px;
    line-height: 32px;
    letter-spacing: -0.216667px;
  }
`;

export const SecondaryMessage = styled.div`
  flex-direction: row;
  align-items: center;
  height: 66px;
  padding: 0 32px;

  background: #f4f8fa;
  border-radius: 0 0 4px 4px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 0 24px;
    height: 70px;
  }
`;

export const Text = styled.label`
  flex: 1;

  font-size: 12px;
  line-height: 16px;
`;
