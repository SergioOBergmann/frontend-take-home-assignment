import * as React from 'react';

import originLogo from './../../icons/logo.svg';
import { Bg, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Bg>
        <Logo src={originLogo} alt="Origin" />
      </Bg>
    </>
  );
};

export default Header;
