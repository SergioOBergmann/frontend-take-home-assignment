import styled from 'styled-components';

const ArrowButton = styled.button`
  width: 48px;
  height: 56px;

  background: #e1e8ed;
  border: 1px solid transparent;
`;

const ArrowButtonSpan = styled.span`
  width: 11.313708px;
  height: 11.313708px;

  border: solid #657786;
  display: inline-block;
`;

export const PreviousButton = styled(ArrowButton as any)`
  border-radius: 4px 0px 0px 4px;
`;

export const PreviousButtonSpan = styled(ArrowButtonSpan as any)`
  margin-left: 8.8px;

  border-width: 0 0 2px 2px;
  transform: rotate(45deg);
`;

export const Content = styled.div`
  flex-direction: column;
  flex: 1;
  width: 100%;

  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-sizing: border-box;
`;

export const MonthSpan = styled.span`
  margin-top: 6px;

  font-weight: 600;
  font-size: 20px;

  text-align: center;
  letter-spacing: -0.166667px;
`;

export const YearSpan = styled.span`
  font-size: 16px;
  line-height: 20px;

  text-align: center;
`;

export const NextButton = styled(ArrowButton as any)`
  border-radius: 0px 4px 4px 0px;
`;

export const NextButtonSpan = styled(ArrowButtonSpan as any)`
  margin-right: 4.8px;

  border-width: 2px 0 0 2px;
  transform: rotate(135deg);
`;
