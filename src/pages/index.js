import React from 'react';
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import Post from '../components/Post';
import styled from 'styled-components';

const IndexStyle = styled.div`

`
const IndexPage = () => {
  return (
    <Layout pageTitle="Titre de la Page"> 
      <SEO title="Home" />
      <IndexStyle>
        <div className="container">
              <StaticQuery query={indexQuery} render={data => (
                <div className="post">
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post 
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      date={node.frontmatter.date}
                      slug={node.fields.slug}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  ))} 
                </div>
              )}/>
        </div>
      </IndexStyle>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            image{
              childImageSharp{
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
