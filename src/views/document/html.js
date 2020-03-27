import Head from './head.js'
import Script from './script.js'

export default function HTML (props) {
  props = props || {}
  let scripts = props.scripts
    ? (Array.isArray(props.scripts) &&
    props.scripts.map(src => Script({src})))
    : ''
  return `
<!DOCTYPE html>
<html lang="en">
${Head({styles: ''})}
<body>
  <div id="root">
    ${props.children}
  </div>
  ${scripts}
</body>
</html>
`
}

