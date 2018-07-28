import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ReduxMixin} from "../redux/reduxMixin.js";
import '@polymer/paper-button/paper-button.js';
import './item-card.js';
import './form-element.js';

/**
 * @customElement
 * @polymer
 */
class HelloGerryApp extends ReduxMixin(PolymerElement) {
  static get template() {
    return html`
<style>
            .title{
                width: 100%;
                height: 6%;
                margin: 0px;
            }
            .container{
                width: 100%;
                height: 94%;
                overflow-y: scroll;
                overflow-x: hidden;
                display: flex;
                justify-content: space-between;
            }
            .container::-webkit-scrollbar-track{
                background-color: #F4F4F4;
                border-radius: 3px;
            }
            .container::-webkit-scrollbar{
                width: 3px;
                background-color: #F4F4F4;
            }
            .container::-webkit-scrollbar-thumb{
                border-radius: 3px;
                background-color: #000000;
            }
        </style>
      <template is="dom-if" if="[[logged]]">
            <paper-button on-click="logout">LogOut</paper-button>
            <h2 class="title">[[title]]</h2>
            <div class="container">
                <template is="dom-repeat" items="[[contacts]]" as="contact">
                    <item-card contact="[[contact]]"></item-card>
                </template>
            </div>
        </template>
        <template is="dom-if" if="[[!logged]]">
            <form-element on-save-form-event="saveFormEvent"></form-element>
            <paper-button on-click="login">LogIn</paper-button>
        </template>
    `;
  }
  
  static get properties() {
    return {
      logged: {
        type: Boolean,
        statePath: 'session.isLogged',
        observer: '_loggedChanged'
      },
      contacts: {
        type: Array,
        value: []
      }
    };
  }
  
  connectedCallback() {
    super.connectedCallback();
    const state = this.getState();
    
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
      .then(request => {
        return request.json();
      })
      .then(data => {
        this.set('contacts', data.results);
      })
      .catch(error => {
        console.log('Bad request loaded.');
      });
  }
  
  saveFormEvent(event) {
    const formInfo = event.detail;
    this.push('contacts', formInfo);
  }
  
  login() {
    this.dispatch(
      {
        type: 'CHANGE_LOGGED',
        logged: true,
      }
    );
  }
  
  logout() {
    this.dispatch(
      {
        type: 'CHANGE_LOGGED',
        logged: false,
      }
    );
  }
  
  _loggedChanged() {
    const domRepeat = this.shadowRoot.querySelector('dom-repeat');
    if (domRepeat) {
      domRepeat.render();
    }
  }
}

window.customElements.define('hello-gerry-app', HelloGerryApp);
