import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import styled from 'styled-components';
import logo from '../images/logo.png';

const FooterStyle = styled.div`
    .footer{
        background: rgb(248, 248, 248);
        width: 100%;
        height: auto;
        padding: 10px;
        box-sizing: border-box !important;
    }
    img{
        width: 50px;
        height: 50px;
    }
    
    @media screen and (max-width: 325px) {
        .footer{
            padding: 0;
            text-align: center;
            img {
                width: 25px;
                height: 25px;
            }
            .span{
                font-size: 16px;
            }
            p {
                font-size: 15px;
            }
        }
        .lead{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 365px) {
        .footer{
            padding: 0;
            text-align: center;
            img {
                width: 30px;
                height: 30px;
            }
            .span{
                font-size: 18px;
            }
            p {
                font-size: 17px;
            }
        }
        .lead{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 380px) {
        .footer{
            padding: 0;
            text-align: center;
            img {
                width: 32px;
                height: 32px;
            }
            .span{
                font-size: 19px;
            }
            p {
                font-size: 18px;
            }
        }
        .lead{
            font-size: 17px;
        }
    }
    @media screen and (max-width: 415px) {
        .footer{
            padding: 0;
            text-align: center;
            img {
                width: 32px;
                height: 32px;
            }
            .span{
                font-size: 19px;
            }
            p {
                font-size: 18px;
            }
        }
        .lead{
            font-size: 17px;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container-fluid footer">
                <Container>
                    <Row>
                        <Col md="4" xs="12">
                            <img src={logo} alt="logo du site" /><span className="span">NEWS-ISIPA</span>
                            <p className="lead">
                                News isipa c'est une plateforme de l'isipa qui vous sert des informations 
                                et des donnnées tres important afficher dans la valve, ils vous informe. Nous 
                                sommes une nouvelle generation des etudiants.
                            </p>
                        </Col>
                        <Col md="4">
                            <h5>Nous sommes</h5>
                            <p className="lead">
                                News isipa c'est une plateforme de l'isipa qui vous sert des informations 
                                et des donnnées tres important afficher dans la valve, ils vous informe. Nous 
                                sommes une nouvelle generation des etudiants.
                            </p>
                        </Col>
                        <Col md="4">
                            <h5>Contact et Adresse</h5>
                            <p className="lead">
                                News isipa c'est une plateforme de l'isipa qui vous sert des informations 
                                et des donnnées tres important afficher dans la valve, ils vous informe. Nous 
                                sommes une nouvelle generation des etudiants.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Row style={{backgroundColor: "#2f3542", color: "#fff"}}>
                    <Col>
                        <p className="lead text-center text-uppercase">
                            Fais avec tout coeur par Sthray Kongolo
                        </p>
                    </Col>
                </Row>    
            </div>
        </FooterStyle>
    );
}

export default Footer;
