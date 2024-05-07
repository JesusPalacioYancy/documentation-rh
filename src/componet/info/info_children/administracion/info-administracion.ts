import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './info_granddaughter_administracion/info-admin-seguridad'
import './info_granddaughter_administracion/info-admin-entidades'
import './info_granddaughter_administracion/info-admin-general'
import './info_granddaughter_administracion/info-admin-contratos'
import './info_granddaughter_administracion/info-admin-nomina'
import './info_granddaughter_administracion/info-admin-conceptos'
import './info_granddaughter_administracion/info-admin-seleccion'
import './info_granddaughter_administracion/info-admin-puc'

@customElement('info-administracion')

export class InfoAdministracion extends LitElement {

  static styles = css`
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 25px;
      margin-right: 25px;
    }

    details { 
      background-color:  #dddddd;
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
          <summary>Seguridad</summary>
          <p>TEST</p>
          <info-admin-seguridad></info-admin-seguridad>
        </details>
        
        <details>
          <summary>Entidades</summary>
          <p>TEST</p>
          <info-admin-entidades></info-admin-entidades>
        </details>

        <details>
          <summary>General</summary>
          <p>TEST</p>
          <info-admin-general></info-admin-general>
        </details>

        <details>
          <summary>Contratos</summary>
          <p>TEST</p>
          <info-admin-contratos></info-admin-contratos>
        </details>

        <details>
          <summary>Nomina</summary>
          <p>TEST</p>
          <info-admin-nomina></info-admin-nomina>
        </details>

        <details>
          <summary>Conceptos</summary>
          <p>TEST</p>
          <info-admin-conceptos></info-admin-conceptos>
        </details>

        <details>
          <summary>Seleccion</summary>
          <p>TEST</p>
          <info-admin-selecccion></info-admin-selecccion>
        </details>

        <details>
          <summary>Puc</summary>
          <p>TEST</p>
          <info-admin-puc></info-admin-puc>
        </details>
    </div>  
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-administracion': InfoAdministracion;
  }
};