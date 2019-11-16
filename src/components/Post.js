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

const Post = ({ title, author, slug, date, body, fluid}) => (
    <Card style={{marginBottom: "20px"}}>
        <Link to={slug}>
            <Img className="card-image-top" fluid={fluid} style={{width: "100%", height: "300px"}} />
        </Link>
        <CardBody>
            <CardTitle style={{textTransform: "uppercase"}}>
                <Link to={slug}>{title}</Link>
            </CardTitle>
            <CardSubtitle>
                <span className="text-info">{date}</span> Par {` `}
                <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <Link to={slug} className="btn btn-outline-primary float-right text-uppercase">
                lire suite
            </Link>
        </CardBody>
    </Card>
)

export default Post