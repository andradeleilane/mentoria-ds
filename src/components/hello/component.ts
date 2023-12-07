import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('eco-hello')
export class EcoHello extends LitElement {
    render() {
        return html `
            <h1>Hello My first Component</h1>
        `
    }
}