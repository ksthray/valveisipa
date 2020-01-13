import React from "react"

import Layout from "../components/layout"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Vous étes dans une page d'erreur !!!">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={'/'}>
      Retour a la page d'acceuil
    </Link>
  </Layout>
)

export default NotFoundPage
