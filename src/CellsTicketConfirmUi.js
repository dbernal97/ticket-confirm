import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsTicketConfirmUi-styles.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import {password} from '@bbva-web-components/bbva-foundations-microillustrations/bbva-foundations-microillustrations.js';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-panel-token/bbva-web-panel-token.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-ticket-confirm-ui></cells-ticket-confirm-ui>
```

##styling-doc

@customElement cells-ticket-confirm-ui
*/
export class CellsTicketConfirmUi extends LitElement {
  static get is() {
    return 'cells-ticket-confirm-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-ticket-confirm-ui-shared-styles')
    ];
  }
  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="1" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  _panelSection(){
    return html`
      <div class="panel-section">
        <bbva-web-panel-token>
          <div slot="image" id="image-panel">${password}</div>
        
          <p id="panel-title">Habilita tu BBVA móvil y genera tu código ingresando a la aplicación:</p>
          <p id="bold-text">Menu > Token > Generar Token BBVA</p>
        </bbva-web-panel-token>
      </div>
    `
  }

  _infoSection(){
    return html`
      <div class="info-section">
        <h2>Por seguridad, debes habilitar tu token BBVA</h2>
        <p>Para continuar con tus operaciones es necesario que habilites tu token digital en la App BBVA. Ahí recibirás los códigos de seguridad para que tus operaciones puedan realizarse con éxito.</p>
        <bbva-web-button-default id="btn">Ya habilité mi BBVA móvil</bbva-web-button-default>
      </div>
    `
  }

  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._infoSection()}
        ${this._panelSection()}
      </div>
    `;
  }
}
