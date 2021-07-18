import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from "../components/Header"
import Login from '../components/Login'

export default function Home({session}) {
  if(!session){
    return <Login />
  }
  else{
    return (
      <div>
        <Head>
          <title>Facebook Clone</title>
        </Head>
  
        {/* Header */}
        <Header/>
  
        <main>
          {/* sidebar */}
          {/* feed */}
          {/* widgets */}
        </main>
  
      </div>
    )
  }
}

export async function getServerSideProps(context){
  // get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}