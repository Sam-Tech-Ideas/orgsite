import React from 'react'
import Hero from '../assets/components/Hero'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Serv from '../components/Serv'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        <Serv/>
        <Contact/>
      </Layout>
    </div>
  )
}

export default Home