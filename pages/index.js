import Header from "../components/header/Header"
import Head from 'next/head'



export default function Home() {
  return (
    <div>
        <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <title>Markéta Poláková</title>
        </Head>
      <Header/>
    </div>
  )
}
