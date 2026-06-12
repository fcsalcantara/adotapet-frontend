import styled from 'styled-components';

import perfil from '../../assets/perfil.svg';

const IconesUl = styled.ul`
    display: flex;
    vertical-align: center;
    align-items: center;
`;

const IconeLi = styled.li`
    margin-right: 40px;
    max-height: 30px;
    cursor: pointer;
`;

const icones = [perfil];

function HeaderIcones() {
   return (
      <IconesUl>
         {icones.map((icone) => (<IconeLi><img src={icone} alt="icone"/></IconeLi>))}
      </IconesUl>
   );
}

export default HeaderIcones;
