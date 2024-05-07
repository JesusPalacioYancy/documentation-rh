import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('info-nom-primas')

export class InfoNomPrimas extends LitElement {
  
  static styles = css`

    div{
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 26px;
      margin-right: 26px;
    }

    details { 
      background-color: #f0f0f0;
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
          <summary>Primas de servicios</summary>
          <p>TEST</p>
        </details>
        
        <details>
          <summary>Primas extralegales</summary>
          <p>TEST</p>
        </details>
    </div>  

    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'info-nom-primas': InfoNomPrimas;
  }
};