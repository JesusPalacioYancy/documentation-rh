import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './../info/info-father'

@customElement('welcome-doc')

export class WelcomeDoc extends LitElement {
  
  static styles = css`
  .box {
    width: 650px;
    height: 610px;
    background-color: #d1d1d1; 
    border: 1px solid #cccccc; 
    border-radius: 10px;
    overflow: auto;
  }

  .box input[type="text"] {
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
    font-size: 24px;
  }

  
  .menssage {
    font-size: 17px;
    display: flex;
    justify-content: center; 
    align-items: flex-start;
    font-family: Arial, sans-serif;
    color: #333;
  }


   /* Estilos del scrollbar */
   .box::-webkit-scrollbar {
      width: 3px;
    }

    .box::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .box::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }

    .box::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;

  render() {
    return html`
    <div class="box">
      <div class="title">
        <h3>Documentacion RH</h3>
      </div>
      <div>
        <p class="menssage">Bienvenido a la documentación del sistema de RH</p>
      </div>
      <input type="text" placeholder="Diguite el nombre del modulo">
      <button class="search-button">Consultar</button>
      <button>/</button>
      <hr>
      <info-father></info-father>
    </div>
    `;
  }
}


