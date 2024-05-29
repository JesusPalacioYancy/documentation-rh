import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './info-granddaughter-nomina/info-nom-novedades'
import './info-granddaughter-nomina/info-nom-informes'
import './info-granddaughter-nomina/info-nom-vacaciones'
import './info-granddaughter-nomina/info-nom-migraciones'
import './info-granddaughter-nomina/info-nom-primas'
import './info-granddaughter-nomina/info-nom-bono-navidad'
import './info-granddaughter-nomina/info-nom-liquidacion-empleados'

@customElement('info-nomina')
export class InfoNomina extends LitElement {
  static styles = css`
    div{
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
          <summary>Novedades</summary>
          <p>TEST</p>
          <info-nom-novedades></info-nom-novedades>
        </details>
        
        <details>
          <summary>Informes</summary>
          <p>TEST</p>

          <info-nom-informes></info-nom-informes>
        </details>

        <details>
          <summary>Liquidacion nomina</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Nomina Electronica</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Prestamos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Cesantias</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Vacaciones</summary>
          <p>TEST</p>
          <info-nom-vacaciones></info-nom-vacaciones>
        </details>

        <details>
          <summary>Migraciones</summary>
          <p>TEST</p>
          <info-nom-migraciones></info-nom-migraciones>
        </details>

        <details>
          <summary>Primas</summary>
          <p>TEST</p>
          <info-nom-primas></info-nom-primas>
        </details>

        <details>
          <summary>Bono Navidad</summary>
          <p>TEST</p>
          <info-nom-bono-navidad></info-nom-bono-navidad>
        </details>

        <details>
          <summary>Liquidacion Empleados</summary>
          <p>TEST</p>
          <info-nom-liquidacion-empleados></info-nom-liquidacion-empleados>
        </details>
    </div>  
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-nomina': InfoNomina;
  }
};