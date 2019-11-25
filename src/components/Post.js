import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
} from 'reactstrap';
import { FaRegCalendarAlt, FaRegBell, FaFeatherAlt } from 'react-icons/fa'
import styled from 'styled-components'

const StyleCard = styled.div`
    .card:hover{
        box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.220)!important;
    }
    .card-image-top{
        width: 100%;
        height: 325px;
        transform: scale(1);
        transition: transform 0.5s ease;
    }
    .card-image-top:hover{
        transform: scale(1.6);
    }
    .overflow{
        overflow: hidden;
    }
    .icons{
        position: relative;
        top: -2px;
    }

`

const Post = ({ title, author, slug, date, body, fluid}) => ( 
    <StyleCard>
        <Card style={{marginBottom: "20px"}}>
            <div className="overflow">
                <Link to={slug}>
                    <Img className="card-image-top" fluid={fluid}/>
                </Link>
            </div>
            <CardBody>
                <CardTitle style={{textTransform: "uppercase", fontWeight: "500"}}>
                    <Link style={{color: "rgb(255, 84, 17)"}} to={slug}><FaRegBell className="icons"/> {title}</Link>
                </CardTitle>
                <CardSubtitle style={{color: "rgb(255, 84, 17)"}}>
                    <span style={{color: "rgb(255, 84, 17)"}}><FaRegCalendarAlt className="icons"/> Depuis {date}</span> <br/>
                    <span style={{color: "rgb(255, 84, 17)"}}><FaFeatherAlt className="icons"/> {author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={slug} className="btn btn-outline-warning float-right text-uppercase">
                    lire la suite
                </Link>
            </CardBody>
        </Card>
    </StyleCard>
)

export default Post