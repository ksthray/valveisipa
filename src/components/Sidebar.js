import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import {Card, /*CardSubtitle,*/ CardTitle, CardBody, Form, FormGroup, Input} from 'reactstrap';
import styled from 'styled-components';
import pub from '../images/pizza.jpg';

const SidebarStyle = styled.div`
    .card{
        margin-bottom: 20px;
    }
`

const Sidebar = () => (
    <SidebarStyle>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    NewsLetter
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Entrer votre adresse email" 
                        />
                    </FormGroup>
                    <button className="btn btn-outline-success text-uppercase">
                        Souscrire
                    </button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Publicité
                </CardTitle>
                <img 
                    src={pub}
                    alt="Pub"
                    style={{width: "310px", height: "200px;"}} 
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
                                <Link to={node.frontmatter.path}>
                                    <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.frontmatter.path}>
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
                        path
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default Sidebar;
