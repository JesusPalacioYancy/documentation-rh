import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './info_children/contratacion/info-contratacion'
import './info_children/seleccion/info-seleccion'
import './info_children/administracion/info-administracion'
import './info_children/nomina/info-nomina'

@customElement('info-father')
export class InfoFather extends LitElement {
  static styles = css`
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 25px;
  }

  details { 
    background-color:  #b9b8b8;
    width: 100%;
    margin-bottom: 1rem;   
    border-radius: 8px;  
    border: 1px solid #838383;
    color: #000000;
    position: relative;  
    font-family: Arial, sans-serif;
    max-width: 600px;
  }

  details summary {  
    font-weight: 400;
    font-size: 1.25rem;
    padding: 1rem;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  details p {
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    background: #e1effd;
    border-left: 2px solid #364f6b;
  }

  details[open] {
    background: #ffffff;
  }

  details[open] summary {
    font-weight: 600;
  }
  `;

  render() {
    return html`
    <div>
        <details>
          <summary>Home</summary>
          <p>El atributo open lo usaremos en HTML en nuestra etiqueta details, y nos va a permitir que el elemento desplegable este siempre abierto al recargar la página. Esto nos puede servir para mostrar cierta información importante que queramos que se vea sin ningún tipo de interactividad por parte del usuario, pero que queremos que forme parte de nuestros elementos desplegables.</p>
        </details>
        
        <details>
          <summary>Dashboar</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Administración</summary>
          <p>TEST</p>
          <info-administracion></info-administracion>
        </details>

        <details>
          <summary>Contratación</summary>
          <p>El atributo open lo usaremos en HTML en nuestra etiqueta details, y nos va a permitir que el elemento desplegable este siempre abierto al recargar la página. Esto nos puede servir para mostrar cierta información importante que queramos que se vea sin ningún tipo de interactividad por parte del usuario, pero que queremos que forme parte de nuestros elementos desplegables.</p>
          <info-contratacion></info-contratacion>
        </details>

        <details>
          <summary>Nomina</summary>
          <p>TEST</p>
          <info-nomina></info-nomina>
        </details>

        <details>
          <summary>Selección</summary>
          <p>TEST</p>
          <info-seleccion></info-seleccion>
        </details>
    </div>  
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-father': InfoFather;
  }
};