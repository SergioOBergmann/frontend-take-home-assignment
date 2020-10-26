import * as React from 'react';
import { CardDiv, Icon, Title, Display, CardButton } from './styles';

type CardProps = {
  iconImg: any;
  iconText: string;
  title: string;
  display?: string;
  buttonText?: string;
  children?: React.ReactNode;
};

const Card = ({
  iconImg,
  iconText,
  title,
  display = 'Saving Goal',
  buttonText = 'Confirm',
  children
}: CardProps): JSX.Element => {
  return (
    <>
      <CardDiv>
        <Icon src={iconImg} alt={iconText} />
        <Title>{title}</Title>
        <Display>{display}</Display>

        {children}

        <CardButton>{buttonText}</CardButton>
      </CardDiv>
    </>
  );
};

export default Card;
