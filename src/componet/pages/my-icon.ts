import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-icon')
export class MyIcon extends LitElement {
  static styles = css`
    :host{
      position: fixed;
      z-index: 10000;
      cursor: pointer;
      top: 1%;
      left: 55%;
    }

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
      cursor: inherit;
    }
    
    .search-button:hover {
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
  `;

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  handleMouseDown(event: MouseEvent) {
    if(!event.button){
      this.isDragging = true;
      this.offsetX = event.clientX - this.getBoundingClientRect().left;
      this.offsetY = event.clientY - this.getBoundingClientRect().top;
      this.style.cursor = 'grabbing';
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
      event.preventDefault();
    };
  };

  handleMouseMove = (event : MouseEvent) => {
    if (this.isDragging){
      const lef = event.clientX - this.offsetX
      const top = event.clientY - this.offsetY
      const rightBoundary = window.innerWidth - this.offsetWidth
      const boottonBoundary = window.innerHeight - this.offsetHeight

      this.style.left = `${Math.min(Math.max(0, lef), rightBoundary)}px`;
      this.style.top = `${Math.min(Math.max(0, top), boottonBoundary)}px`;
    };
  };

  handleMouseUp = (event : MouseEvent) => {
    if (!event.button){
      this.isDragging = false;
      this.style.cursor = 'pointer'
      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('mouseup', this.handleMouseUp)
    }
  }

  handleClick() {
    const myIconClickEvent = new CustomEvent('my-icon-click', {bubbles: true, composed: true})
    this.dispatchEvent(myIconClickEvent);
  };

  render() {
    return html`
      <button class="search-button" @dblclick="${this.handleClick}" @mousedown="${this.handleMouseDown}">
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