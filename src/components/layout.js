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
import styled from 'styled-components'

const LayoutStyle = styled.div`
  .title{
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    padding-top: 15px;
    position: relative;
    top: 50px;
  }
  @media screen and (max-width: 420px) {
    .text-center h2{
      font-size: 25px;
    }
  }
  @media screen and (max-width: 325px) {
    .text-center h2{
      font-size: 22px;
    }
  }
`

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
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
      <LayoutStyle>
        <Header siteTitle={data.site.siteMetadata.title} /> 
        <Jumbotron />
        <div className="text-center title">
            <h2 style={{textTransform: "uppercase"}}>
              {pageTitle}
            </h2>
        </div>
        <div className="container" style={{padding: "10px", position: "relative", top: "42px"}}>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
            </Col>
          </Row>
        </div>
      </LayoutStyle>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
