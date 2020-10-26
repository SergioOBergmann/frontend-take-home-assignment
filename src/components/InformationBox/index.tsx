import * as React from 'react';
import {
  InformationBoxDiv,
  PrimaryMessage,
  Label,
  Value,
  SecondaryMessage,
  Text
} from './styles';

type InformationBoxProps = {
  desktopPrimaryMessageLabel: string;
  mobilePrimaryMessageLabel: string;
  primaryMessageValue: string;
  secondaryMessage: JSX.Element;
};

const InformationBox = ({
  desktopPrimaryMessageLabel,
  mobilePrimaryMessageLabel,
  primaryMessageValue,
  secondaryMessage
}: InformationBoxProps): JSX.Element => {
  return (
    <>
      <InformationBoxDiv>
        <PrimaryMessage>
          <Label className="desktop">{desktopPrimaryMessageLabel}</Label>
          <Label className="mobile">{mobilePrimaryMessageLabel}</Label>
          <Value>{primaryMessageValue}</Value>
        </PrimaryMessage>
        <SecondaryMessage>
          <Text>{secondaryMessage}</Text>
        </SecondaryMessage>
      </InformationBoxDiv>
    </>
  );
};

export default InformationBox;
