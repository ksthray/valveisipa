import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import authors from '../utils/authors'
import {Card, CardBody, CardSubtitle} from 'reactstrap';

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name ===  post.author)
    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
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
    query blogPostBySlug($slug: String!, $imageUrl: String!){
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
        file(relativePath: {eq: $imageUrl}) {
            childImageSharp{
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SinglePost;
