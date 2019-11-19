import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import {Card, CardBody, CardSubtitle} from 'reactstrap';

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <Layout pageTitle={post.title}>
            <SEO title={post.title} />
                    <Card>
                        <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                        <CardBody>
                            <CardSubtitle>
                                <span className="text-info">{post.date} By {` `}</span>
                                <span className="text-info">{post.author}</span>
                            </CardSubtitle>
                            <div 
                                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
                            />
                        </CardBody>
                    </Card>
        </Layout>
    );
}

export const postQuery = graphql` 
    query blogPostBySlug($slug: String!){
        markdownRemark( fields: {slug: {eq: $slug} }) {
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid 
                        }
                    }
                }
            }
        }
    }
`

export default SinglePost;
