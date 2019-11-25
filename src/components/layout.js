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
import Section from './Section'
import { Row, Col} from 'reactstrap'
import styled from 'styled-components'

const LayoutStyle = styled.div`
  .title{
    width: 100%;
    height: 70px;
    padding-top: 15px;
    position: relative;
    top: 49px;
    color: white;
    background: linear-gradient(217deg, rgba(255, 84, 17), rgb(246, 75, 2), rgb(220, 67, 0) 70.71%),
                linear-gradient(127deg, rgba(255, 99, 35), rgb(246, 85, 2), rgb(202, 57, 0) 70.71%),
                linear-gradient(336deg, rgba(255, 80, 40), rgb(216, 77, 2), rgb(202, 57, 0) 70.71%);
  }
  @media screen and (max-width: 420px) {
    .text-center h2{
      font-size: 25px;
    }
  }
  @media screen and (max-width: 415px) {
    .title{
      position: relative;
      top: 85px;
    }
    .cadre{
      position: relative;
      top: 82px !important;
    }
    .text-center h2{
      font-size: 32px;
    }
  }
  @media screen and (max-width: 375px) {
    .title{
      position: relative;
      top: 85px;
    }
    .cadre{
      position: relative;
      top: 75px !important;
    }
    .text-center h2{
      font-size: 28px;
    }
  }
  @media screen and (max-width: 365px) {
    .title{
      position: relative;
      top: 80px;
    }
    .cadre{
      position: relative;
      top: 70px !important;
    }
  }
//Iphone 5/5S/E/6 simple
  @media screen and (max-width: 325px) {
    .title{
      position: relative;
      top: 80px;
    }
    .cadre{
      position: relative;
      top: 70px !important;
    }
    .text-center h2{
      font-size: 22px;
    }
  }
  .container-fluid{
    position: relative;
    top: 15px;
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
        <div className="container cadre" style={{padding: "10px", position: "relative", top: "42px"}}>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <Section/>
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
