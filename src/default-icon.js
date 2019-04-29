import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

/**
 * `default-icon`
 * Default icon.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DefaultIcon extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: rgba(0,0,0,0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: currentcolor;
        }
      </style>

      <!-- shadow DOM goes here -->
      <iron-icon icon="polymer"></iron-icon>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'default-icon',
      },
    };
  }
}

window.customElements.define('default-icon', DefaultIcon);
