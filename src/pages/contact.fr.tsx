import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/fr"
import SEO from "../components/seo"
import ContactForm from "../components/pages/contact-form"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <ContactForm/>
  </Layout>
)
