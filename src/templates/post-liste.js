import React from 'react';
import Layout from '../components/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'

const postListe = props => {
    const posts =  props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext

    return (
        <Layout pageTitle={`Page: ${currentPage}`}>
            {posts.map(({node}) => (
                <div>
                    <Post 
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                </div>
            ))}
            <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages}/>
        </Layout>
    );
}

export const postListeQuery = graphql`
    query postListeQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            limit: $limit
            skip: $skip
        ) {
            edges{
                node{
                    id
                    frontmatter{
                        title
                        date(formatString: "DD/MM/YYYY")
                        author
                        image{
                            childImageSharp{
                                fluid(maxWidth: 650, maxHeight: 371) {
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

export default postListe
