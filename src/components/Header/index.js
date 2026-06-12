import {Link} from 'react-router-dom';
import styled from 'styled-components';

import HeaderIcones from '../HeaderIcones';
import HeaderLogo from '../HeaderLogo';

const HeaderContainer = styled.header`
    display: flex;
    background-color: #fafaf0;
    justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <HeaderLogo/>
      </Link>
      <Link to={'/autenticacao'}>
        <HeaderIcones/>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
