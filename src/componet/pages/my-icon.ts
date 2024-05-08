import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

export const myIconClickEvent = new CustomEvent('my-icon-click');

@customElement('my-icon')

export class MyIcon extends LitElement {

  static styles = css`
    .search-button {
      border: none;
      color: white;
      padding: 1px 6px;
      cursor: pointer;
      width: 45px; 
      height: 45px; 
      border-radius: 50%; 
      background-color: #13083b; 
      transition: box-shadow 0.3s ease-in-out;
    }

    .search-button:hover {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
  `;

  handleClick() {
    this.dispatchEvent(myIconClickEvent);
  };

  render() {
    return html`
      <button class="search-button" @click="${this.handleClick}">
        <h3>?</h3>
      </button>
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyIcon;
  }
};