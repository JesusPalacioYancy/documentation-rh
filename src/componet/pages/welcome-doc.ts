import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('welcome-doc')

export class WelcomeDoc extends LitElement {
  
  static styles = css`
  .recuadro {
    width: 650px;
    height: 600px;
    background-color: #e6e6e6; 
    border: 1px solid #ccc; 
  }

  .recuadro input[type="text"] {
    margin-left: 50px; 
    width: calc(70% - 20px);
    padding: 10px; 
    border: 2px solid #ccc; 
    border-radius: 4px;

  }

  .search-button {
    margin-right: 20px;
    border: none;
    color: white;
    padding: 9px 9px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #13083b; 
    transition: box-shadow 0.3s ease-in-out; 
  }

  .title {
    display: flex;
    justify-content: center; 
    align-items: flex-start;
    font-family: Arial, sans-serif;
    color: #333;
  }
  `;

  render() {
    return html`
    <div class="recuadro">
      <div class="title">
        <h3>Documentacion RH</h3>
      </div>
      <div>
        <p class="title">Bienvenido a la documentación del sistema de RH</p>
      </div>
      <input type="text" placeholder="Diguite el nombre del modulo">
      <button class="search-button">Consultar</button>
      <button>/</button>
      
      <hr>

    </div>
    `;
  }
}


