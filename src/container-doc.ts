import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./componet/pages/my-icon.ts";
import "./componet/pages/welcome-doc.ts";

@customElement("my-container")

export class MyContainer extends LitElement {

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
        ${this.showWelcomeDoc ? html`<welcome-doc/>` : null}
      </div>
    `;
  };
};
