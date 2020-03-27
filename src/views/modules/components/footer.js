import { html } from '../vendor/preact.js'

export default function Footer(props) {
  props = props || {}
  return html`
<footer ...${props}>
  <a href="/cache">Cache</a>
</footer>
  `
}
