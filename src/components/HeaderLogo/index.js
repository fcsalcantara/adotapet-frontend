import styled from 'styled-components';

import logo from '../../assets/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    margin-left: 10px;
`;

const LogoImg = styled.img`
    display: flex;
    max-height: 25px;
    margin: 15% 10px 15% 0px;
`;

function HeaderLogo() {
   return (
      <LogoContainer>
         <LogoImg src={logo} alt="Logo"></LogoImg>
         <p><strong> adota</strong>pet</p>
      </LogoContainer>
   );
}

export default HeaderLogo;
