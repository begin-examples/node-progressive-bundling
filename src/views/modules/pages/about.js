import { html } from '../vendor/preact.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function About() {
  return html`
<section>
  <${Header}>
    <a href="/">Home</a>
  <//>
  <h1>About</h1>
  <${Footer}><//>
</section>
  `
}

