import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

/**
 * @customElement
 * @polymer
 */
class ItemCard extends PolymerElement {
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
                width: 128px;
                height: 128px;
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
            <img src$="[[contact.picture.large]]" alt$="[[contact.login.username]]" class="picture">
            <div class="information">
                <p class="name">[[contact.name.first]]</p>
                <p class="name">[[contact.name.last]]</p>
            </div>
            <div class="settings">
                <paper-icon-button icon="info" id="info" class="info"></paper-icon-button>
                <paper-icon-button icon="editor:mode-edit" id="edit" class="edit"></paper-icon-button>
                <paper-icon-button icon="delete" id="delete" class="delete"></paper-icon-button>
                <paper-icon-button icon="more-vert" id="more" class="more"></paper-icon-button>
            </div>
            <template is="dom-if" if="[[flag]]">
                <div class="popup">
                    <paper-icon-button icon="image:crop-original" id="picture"></paper-icon-button>
                    <paper-icon-button icon="image:crop-original" id="picture2"></paper-icon-button>
                </div>
            </template>
        </div>
    `;
  }
  
  static get properties() {
    return {
      contact: {
        type: Object,
        value: {},
        notify: true
      }
    };
  }
}

window.customElements.define('item-card', ItemCard);
