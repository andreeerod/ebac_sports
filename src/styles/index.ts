import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#141a0f',
  corFundo: '#f7fbef',
  corPrincipal: '#84cc16',
  corSecundaria: '#f97316'
}

export const fontes = {
  titulo: "'Bebas Neue', sans-serif",
  texto: 'Barlow, sans-serif'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: ${fontes.texto};
    color: ${cores.corTexto}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`
