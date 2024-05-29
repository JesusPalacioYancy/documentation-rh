import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./componet/pages/my-icon";
import "./componet/pages/welcome-doc";

@customElement("my-container")
export class MyContainer extends LitElement {
  static styles = css`
  :host {
    position: relative;
  }
  .content {
    position: fixed;
    z-index: 9999;
    right: 0;
    top: 42px;
    max-width: 100%;
    max-width: calc(100% - 100px)
  }
  `;

  constructor() {
    super();
    this.handleMyIconClick = this.handleMyIconClick.bind(this);
  };

  private showWelcomeDoc: boolean = false;

  handleMyIconClick() {
    this.showWelcomeDoc = !this.showWelcomeDoc;
    this.requestUpdate();
  };

  render() {
    return html`
      <div>
        <my-icon @my-icon-click="${this.handleMyIconClick}"></my-icon>
        ${this.showWelcomeDoc ? html`
        <div class="content">
            <welcome-doc></welcome-doc>
        </div>
        ` : null}
      </div>
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    'my-container': MyContainer;
  }
};