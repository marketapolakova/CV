import Header from "../components/header/Header"
import Head from 'next/head'
import CookieConsent  from "react-cookie-consent"
import Title from "../components/title/title"



export default function Home() {
  return (
    <div>
        <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8444BFR18"></script>
<script dangerouslySetInnerHTML={{
  __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M8444BFR18');
  `
}}>
  
</script>
        </Head>
        <Title/>
      <Header/>

{/* <CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay>
  This website uses cookies to enhance the user experience.
</CookieConsent> */}
    </div>
  )
}
