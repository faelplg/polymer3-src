// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol.
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class Polymer3Src extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      icon: {
        type: Boolean,
        value: false,
        observer: 'toggleCheckbox'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    super();
    // Resolve warning about scroll performance
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = 'Component Message';
  }

  ready(){
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log('this.tagName', this.tagName, this.shadowRoot.querySelector('#polymer-checkbox'));
    this.shadowRoot.querySelector('#polymer-checkbox').focus();
  }

  toggleCheckbox(){
    if(this.icon && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./default-icon.js').then(DefaultIcon => {
        console.log("DefaultIcon loaded");
      }).catch((reason) => {
        console.log("DefaultIcon failed to load", reason);
      });
      this.loadComplete = true;
    }
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
      </style>
      <h1>Polymer experiment 3.0</h1>
      <p>[[message]]</p>
      <paper-checkbox id="polymer-checkbox"
        toggles
        noink
        checked={{icon}}>Polymer component.</paper-checkbox>
      <template is="dom-if" if=[[icon]]>
        <default-icon><p>lazy loading...</p></default-icon>
      </template>
    `;
  }
}

// Register the element with the browser.
customElements.define('polymer3-src', Polymer3Src);
