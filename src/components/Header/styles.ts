import styled from 'styled-components'
import { cores, fontes } from '../../styles'

export const Header = styled.header`
  background-color: ${cores.corPrincipal};
  border-bottom: 6px solid ${cores.corSecundaria};
  margin: 80px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 12px;
  align-items: center;

  h1 {
    font-family: ${fontes.titulo};
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 1px;
    flex: 1;
    color: ${cores.corTexto};
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 8px;
      margin-left: 16px;
    }

    span {
      font-weight: 600;
      color: ${cores.corTexto};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`
