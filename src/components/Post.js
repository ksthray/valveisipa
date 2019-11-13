import React from 'react';
import { Link } from 'gatsby';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle} from 'reactstrap';

const Post = ({ title, author, path, date, body}) => (
    <Card style={{marginBottom: "10px"}}>
        <CardBody>
            <CardTitle style={{textTransform: "uppercase"}}>
                <Link to={path}>{title}</Link>
            </CardTitle>
            <CardSubtitle>
                <span className="text-info">{date}</span> Par {` `}
                <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <Link to={path} className="btn btn-outline-primary float-right">
                Lire la suite
            </Link>
        </CardBody>
    </Card>
)

export default Post