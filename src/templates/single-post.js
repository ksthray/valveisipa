import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import authors from '../utils/authors' 
import {Card, CardBody, CardSubtitle} from 'reactstrap';  
import { FaRegCalendarAlt, FaFeatherAlt } from 'react-icons/fa';
import { DiscussionEmbed } from 'disqus-react';

const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name ===  post.author) 

    const baseUrl = "https://gatsbytutorial-co-uk/"

    const disqusShortname = 'https-gatsbytutorial-co-uk';
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }

    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
            <SEO title={post.title} />
            <Card>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                <CardBody>
                    <CardSubtitle style={{padding: "10px"}}>
                        <span className="text-info text-uppercase">
                            <FaFeatherAlt style={{position: "relative", top: "-2px"}}/> {post.author}
                        </span> 
                        <br/>
                        <span className="text-info">
                            <FaRegCalendarAlt style={{position: "relative", top: "-2px"}}/> Posté, le {post.date}
                        </span>
                    </CardSubtitle>
                    <div 
                        style={{padding: "10px"}}
                        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
                    />
                </CardBody>
            </Card>
            <div>
                <h3 className="text-center text-uppercase">
                    Reagissez par des commentaire
                </h3>
                <br/>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
            </div>
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
                date(formatString: "DD/MM/YYYY")
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
