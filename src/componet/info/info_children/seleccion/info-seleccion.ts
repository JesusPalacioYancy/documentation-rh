import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('info-seleccion')
export class InfoSeleccion extends LitElement {

  static styles = css`
    div{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 25px;
      margin-right: 25px;
    } 

    details { 
      background-color: #dddddd;
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
          <summary>Candidatos</summary>
          <p>TEST</p>
        </details>
    </div>  

    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-seleccion': InfoSeleccion;
  }
};