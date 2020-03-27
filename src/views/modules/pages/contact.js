import { html } from '../vendor/preact.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function Contact() {
  return html`
<section>
  <${Header}>
    <h1>Contact</h1>
  <//>
  <${Footer}><//>
</section>
  `
}


