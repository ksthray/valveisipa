/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"  
import Jumbotron from './Jumbotron'
import Sidebar from './Sidebar'
import { Row, Col} from 'reactstrap'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Jumbotron/>
        <div className="container">
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
