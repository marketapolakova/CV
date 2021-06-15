import Header from "../components/header/Header"
import Head from 'next/head'
import Title from "../components/title/title"



export default function Home() {
  return (
    <div>
        <Head>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <Title/>
      <Header/>
    </div>
  )
}
