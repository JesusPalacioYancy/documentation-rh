import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('info-contratacion')
export class InfoContratacion extends LitElement {


  static styles = css`

    details { 
      background-color:  #f6f8fa;
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
          <summary>Trabajadores</summary>
          <p>TEST</p>
        </details>
        
        <details>
          <summary>En proceso de contratación</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Otros sí</summary>
          <p>TEST</p>
        </details>

        <details>
          <summary>Informe documentación</summary>
          <p>TEST</p>
        </details>
    </div>  

    `;
  };
};


declare global {
  interface HTMLElementTagNameMap {
    'info-contratacion': InfoContratacion;
  }
};