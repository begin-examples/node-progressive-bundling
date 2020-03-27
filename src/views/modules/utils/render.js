import { html, render } from '../vendor/preact.js'

export default function renderConent (page, props) {
  if (typeof window !== 'undefined') {
    let content = document.getElementById('root')
    render(
      html`<${page} ...${props}><//>`,
      content,
      content.firstElementChild
    )
  }
}
