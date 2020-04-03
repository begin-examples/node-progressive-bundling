import { html } from '../vendor/preact.js'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default function Home(props) {
  props = props || {}
  let files = props.files || []
  let items = files.map(CacheItem)
  return html`
<section>
  <${Header}>
    <a href="/">Home</a>
    <a href="/about">About</a>
  <//>
  <ul>
    ${items}
  </ul>
  <form
    method=post
    action=/cache
  >
    <button
      style="
       font-size: 1rem;
       padding: 0.5rem 0.75rem;
       color: white;
       background-image: linear-gradient(45deg, #007AAC, #9C24FF);
       border: none;
       border-radius: 2px;
      "
    >
      clear cache
    </button>
  </form>
</section>
  `
}

let CacheItem = item => {
  return html`
<li>${ item.key } &rarr; ${ item.file }</li>
  `
}

