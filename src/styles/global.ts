import styled from 'styled-components';

export const MOBILE_BREAKPOINT = 560;
export const LOCALE = 'en';

export const Root = styled.div`
  display: block;
  width: 100%;
  min-height: 880px;
  height: 100%;

  background: #f4f8fa;
`;

export const Body = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const PageTitle = styled.span`
  height: 32px;
  margin: 54px auto auto auto;

  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  text-align: center;

  color: #1b31a8;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    height: 26px;
    margin: 23px auto auto auto;

    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.225px;
  }
`;

export const InputGroup = styled.div`
  flex-direction: row;
  margin-top: 40px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-wrap: wrap;
    margin-top: 36px;
  }
`;

export const InputDiv = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 230px;
  &:not(:last-child) {
    flex: 0 0 50%;
    margin-right: 18px;
    max-width: 230px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 100%;
    flex: 1;
    margin-right: 0;
    max-width: 100%;
    &:not(:last-child) {
      flex: 1;
      margin-right: 0;
      max-width: 100%;
    }
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export const InputLabel = styled.label`
  width: 100%;
  margin-bottom: 4px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1c1e1f;
`;

export const PrimaryButton = styled.button`
  height: 56px;

  background: #1b31a8;
  border: 1px solid transparent;
  border-radius: 32px;

  font-weight: 600;

  text-align: center;

  color: #ffffff;
`;
