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

const Post = ({ title, author, path, date, body, fluid, tags}) => (
    <Card style={{marginBottom: "20px"}}>
        <Img className="card-image-top" fluid={fluid} style={{width: "100%", height: "300px"}} />
        <CardBody>
            <CardTitle style={{textTransform: "uppercase"}}>
                <Link to={path}>{title}</Link>
            </CardTitle>
            <CardSubtitle>
                <span className="text-info">{date}</span> Par {` `}
                <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <Link to={path} className="btn btn-outline-primary float-right text-uppercase">
                lire suite
            </Link>
        </CardBody>
    </Card>
)

export default Post