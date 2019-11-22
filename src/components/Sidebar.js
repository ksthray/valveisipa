import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import {Card, CardTitle, CardBody, CardText} from 'reactstrap';
import styled from 'styled-components';
import pub from '../images/pizza.jpg';

const SidebarStyle = styled.div`
    .card{
        margin-bottom: 20px;
        position: relative;
    }
    .card-title{
     
    }
`

const Sidebar = ({ author, authorFluid }) => (  
    <SidebarStyle>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
                    <CardText className="text-center">{author.bio}</CardText>
                    <CardText className="text-center"><strong>{author.dept}</strong></CardText>
                </CardBody>
            </Card>
        )}
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Publicité
                </CardTitle>
                <img 
                    src={pub}
                    alt="Pub"
                    style={{width: "310px", height: "170px;"}} 
                />
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Dernier News
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={(data) => (
                    <div>
                        {data.allMarkdownRemark.edges.map(({node}) => (
                            <Card key={node.id}> 
                                <Link to={node.fields.slug}>
                                    <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.fields.slug}>
                                           {node.frontmatter.title} 
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}/>
            </CardBody> 
        </Card>
    </SidebarStyle>
)

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 3
        ) {
            edges{
                node{
                    id
                    frontmatter{
                        title
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default Sidebar;
