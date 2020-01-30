import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MediaDevice from "../components/mediaDevice"
import styled from "styled-components"

const DivRed = styled.div`
  backgroud-color: red;
`
const DivBlue = styled.div`
  backgroud-color: blue;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people I've done an upgrade</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <MediaDevice
      mobile={
        <DivRed>
          <h2>Mobile</h2>
          <span>testo mobile</span>
          <div className="sottoclsmobile">
            <h3>Testo mobile</h3>
          </div>
        </DivRed>
      }
      desktop={
        <DivBlue>
          <h2>desktop</h2>
          <p>testo desktop</p>
          <div className="sottoclsdesktop">
            <h4>Testo desktop</h4>
          </div>
        </DivBlue>
      }
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
