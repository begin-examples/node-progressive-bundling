import { html } from '../vendor/preact.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function Home() {
  return html`
<section>
  <${Header}>
    <a href="/about">About</a>
  <//>
  <h1>Progressive Bundling</h1>
  <${Footer}><//>
</section>
  `
}

