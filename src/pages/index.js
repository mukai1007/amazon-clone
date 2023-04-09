import Head from "next/head"
import Header from "../components/Header"
import Banner from "../components/Banner"
import ProductList from "../components/ProductList"

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://static.vecteezy.com/system/resources/previews/014/018/561/original/amazon-logo-on-transparent-background-free-vector.jpg" />
      </Head>
      <Header/>
      <main className="w-full max-w-screen-2xl mx-auto h-full bg-gray-100">
        <Banner/>
        <ProductList products={products}/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()

    return { props: {
      products
    }}
}
