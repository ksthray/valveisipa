import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import {Card, CardTitle, CardBody, CardText, CardImg} from 'reactstrap';
import { FaRegClock, FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';
import pub from '../images/gear.jpg';

const SidebarStyle = styled.div`
    .card{
        margin-bottom: 20px;
        position: relative;
    }
    .card-title{
     
    }
    .icon{
        position: relative;
        top: -2px;
    }

`

const Sidebar = ({ author, authorFluid }) => (  
    <SidebarStyle>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3"><strong>{author.name}</strong></CardTitle>
                    <CardText className="text-center">{author.bio}</CardText>
                    <CardText className="text-center"><strong>{author.dept}</strong></CardText>
                </CardBody>
            </Card>
        )}
        <Card>
            <CardBody>
                <CardTitle style={{color: "rgb(255, 84, 17)", fontWeight: "500"}} className="text-center text-uppercase">
                    Publicité
                </CardTitle>
                <CardImg bottom width="100%"
                    src={pub}
                    alt="Pub"
                />
                <CardText style={{color: "blue"}}>
                    <Link to="http://facebook.com">
                        <FaFacebookF className="icon"/> http://momento.facebook.com
                    </Link>
                </CardText>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle style={{color: "rgb(255, 84, 17)", fontWeight: "500"}} className="text-center text-uppercase">
                    <FaRegClock className="icon"/> Recent News
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
