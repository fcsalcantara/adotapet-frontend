import {useEffect, useState} from 'react';
import {read} from '../../services/animais.service';
import styled from 'styled-components';
import {Titulo} from '../Titulo';

const ListaAnimaisContainer = styled.section`
    //background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const AnimaisContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

const animaisApi = await read();

const nomeTipoAnimal = (tipo) => {
  switch (tipo) {
    case 'CAO':
      return 'Cachorro';
    case 'GATO':
      return 'Gato';
    default:
      return 'Desconhecido';
  }
};

function ListaAnimais() {
  const [animais, setAnimais] = useState([]);
  useEffect(() => {
    setAnimais(animaisApi);
  }, []);

  return (
    <ListaAnimaisContainer>
      <Titulo
        cor="#EB9B00"
        tamanho="26px"
        alinhamento="center"
      >
        Veja os pets disponíveis para adoção!
      </Titulo>
      <AnimaisContainer>
        {
          animais.map(animal => (
            <div key={animal.id || animal.nome} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>
                {animal.nome} ({nomeTipoAnimal(animal.tipo)})
              </p>

              <img
                src={`data:image/jpeg;base64,${animal.foto}`}
                alt={animal.nome}
                style={{ height: '20vh', marginRight: '10px', objectFit: 'cover' }}
              />
            </div>
          ))
        }
      </AnimaisContainer>
    </ListaAnimaisContainer>
  );
}

export default ListaAnimais;
