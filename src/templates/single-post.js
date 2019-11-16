import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import {Row, Col, Card, CardBody, CardSubtitle} from 'reactstrap';

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={post.title} />
            <h1 style={{textTransform: "uppercase"}}>{post.title}</h1>
            <Row>
                <Col md="8">
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
                </Col>
                <Col md="4"> 
                    <Sidebar/>
                </Col>
            </Row>
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
