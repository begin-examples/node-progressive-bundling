import { html } from '../vendor/preact.js'

export default function Header(props) {
  props = props || {}
  return html`
<header ...${props}></header>
  `
}
