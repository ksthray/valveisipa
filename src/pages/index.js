import React from 'react';
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import Post from '../components/Post';
import PaginationLinks from '../components/PaginationLinks';
import styled from 'styled-components';

const IndexStyle = styled.div`

`
const IndexPage = () => {
  const postsPerPage = 2;
  let numberOfPages
  return (
    <Layout pageTitle="Acceuil"> 
      <SEO title="Home" />
      <IndexStyle>
        <div className="container">
              <StaticQuery 
                query={indexQuery} 
                render={data => {
                  numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
                  return (
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
                      <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
                      <br/>
                      <br/>
                    </div>
                  )
                }}
              />
        </div>
      </IndexStyle>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC }
      limit: 2
      ) {
        totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
