import styled from 'styled-components'

import { cores, fontes } from '../../styles'

export const Produto = styled.div``

export const Titulo = styled.h3`
  font-family: ${fontes.titulo};
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.5px;
  line-height: 1.1;
  min-height: 56px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 10px;
    border: 3px solid ${cores.corPrincipal};
  }
`

export const Prices = styled.div`
  margin: 16px 0;

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 20px;
    color: ${cores.corSecundaria};
  }
`

export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`
export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;

  li {
    background-color: ${cores.corPrincipal};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: bold;
  }
`
export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-color: ${cores.corPrincipal};
  transition: background-color 0.2s, color 0.2s;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  font-family: ${fontes.texto};
  color: ${cores.corTexto};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    background-color: ${cores.corSecundaria};
    color: #fff;
  }
`
