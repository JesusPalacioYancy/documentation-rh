import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('info-admin-general')
export class InfoAdminGeneral extends LitElement {
  static styles = css`
    div{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 26px;
      margin-right: 26px;
    }

    details { 
      background-color:  #f0f0f0;
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
          <summary>Datos de la Empresa</summary>
          <p>TEST</p>
        </details>
        
        <details>
          <summary>Areas de la Empresa</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Grupos de trabajo</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Cargos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Vacantes</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Estados Contratos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipos Contratos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Jornadas Laborales</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipos Documentos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipos Documentos Plantillas</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipo de Novedades</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipo Trabajador</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Sub Tipo Trabajador</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Bancos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Tipo de Cuentas</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Centros de Costos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Festividades</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Departamentos</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Ciudades</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Motivos generales</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Riesgos Laborales</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Cie10</summary>
          <p>TEST</p>
        </details>
    </div>  
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-admin-general': InfoAdminGeneral;
  }
};