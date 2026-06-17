import { html, LitElement } from 'lit';

import 'https://esm.sh/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js'
import '@lion/ui/define/lion-select-rich.js';
import '@lion/ui/define/lion-option.js';

export class LionDemo extends LitElement {
  render() {
    return html`
    <lion-select-rich id="select" name="favoriteColor" label="Favorite color">
    <lion-option .choiceValue="${'red'}">Red</lion-option>
    <lion-option .choiceValue="${'hotpink'}">Hotpink</lion-option>
    <lion-option .choiceValue="${'blue'}">Blue</lion-option>
  </lion-select-rich>
  
  <Load this example in Chrome older than v99.
  <p>Click the button and check the console. You should see something like this:</p>
  <button id="remove-select" @click=${() => this.shadowRoot.querySelector('#select')?.remove?.()}>Remove lion-select-rich</button>
    `;
  }
}
customElements.define('lion-demo', LionDemo);