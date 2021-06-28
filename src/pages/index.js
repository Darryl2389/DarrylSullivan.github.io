import * as React from "react"
import Layout from "../components/layout";
import HeroSection from "../components/HeroSection"
import Image from "../pages/images"
import SEO from "../components/seo"
import "../components/image.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
        <Layout>
          <SEO title="Home"/>
          <HeroSection/>
          <Image/>
        </Layout>
)

export default IndexPage
