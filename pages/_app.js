import 'the-new-css-reset/css/reset.css'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (<>
    <Component {...pageProps} />
  </>)
}
