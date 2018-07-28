import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */
class FormElement extends PolymerElement {
  static get template() {
    return html`
      <style>
            :host {
                width: 100%;
                height: 100%;
            }

            .container {
                margin-bottom: 1px;
                border-bottom: 1px solid #CCCCCC;
            }

            .picture {
                border-radius: 50%;
            }

            .name {
                text-transform: uppercase;
                margin: 0px;
                padding: 0px;
                font-weight: bold;
            }

            .settings {
                width: 100%;
                background-color: #F4F4F4;
            }

            .info {
                color: #1C3A94;
            }

            .edit {
                color: #77d800;
            }

            .delete {
                color: #ff0000;
            }

            .more {
                color: #000000;
            }
        </style>
        <div class="container">
            <paper-input id="nameInput" value="[[name]]" label="Escribe tu nombre"></paper-input>
            <paper-input id="lastInput" value="[[lastName]]" label="Escribe tus apellidos"></paper-input>
            <paper-input id="urlInput" value="[[url]]" label="Escribe tu la URL de la imagen de perfil"></paper-input>
            <paper-button on-click="saveButtonClick">Guardar</paper-button>
        </div>
    `;
  }
  
  static get properties() {
    return {
      name : {
        type : String,
        value : ''
      },
      lastName : {
        type : String,
        value : ''
      },
      url : {
        type : String,
        value : ''
      }
    };
  }
  
  saveButtonClick() {
    const name = this.$.nameInput.value;
    const lastName = this.$.lastInput.value;
    const url = this.$.urlInput.value;
    
    this.dispatchEvent(new CustomEvent('save-form-event', {
      composed : true,
      bubbles : true,
      detail : {
        picture: {
          large: url
        },
        name: {
          first: name,
          last: lastName
        }
      }
    }));
  }
}

window.customElements.define('form-element', FormElement);
