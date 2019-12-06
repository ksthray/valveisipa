import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import { FaRegCopyright, FaRegHeart, FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components';

const FooterStyle = styled.div`
    .footer{
        background: rgb(248, 248, 248);
        width: 100%;
        height: auto;
        padding: 10px;
        box-sizing: border-box !important;
    }
    .icon{
        position: relative;
        top: -2px;
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
                        <Col md="4">
                            <h5>NEWS-ISIPA</h5>
                            <p className="lead">
                                C'est une plateforme de blog, active et a plein évolution, il dédié a l'isipa,
                                utiliser uniquement par les etudiants de l'isipa.
                            </p>
                        </Col>
                        <Col md="4">
                            <h5>Qu'est-ce que nous offront</h5>
                            <p className="lead">
                                News isipa offre a tout les étudiants de l'isipa, des informations qui est afficher
                                dans la valve, des informations communiquer a l'auditoire.
                            </p>
                        </Col>
                        <Col md="4">
                            <h5>Contact et Adresse</h5>
                            <div>
                                <span><FaMapMarkerAlt className="icon"/> I.S.I.P.A shaumba Gombe, Dept/Bibliothèque-Centrale</span>
                            </div>
                            <div>
                                <span><FaMobileAlt className="icon"/> Vous pouvez nous joindre sur +243 824 029 562</span>
                            </div>
                            <div>
                                <span><FaEnvelope className="icon"/> Envoyé nous un mail sur ksthray@gmail.com</span>
                            </div>
                            <div>
                                <span><FaWhatsapp className="icon"/> +243 824 029 562</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row style={{position: "relative", top: "10px", backgroundColor: "#2f3542", color: "#fff"}}>
                    <Col>
                        <p className="lead text-center text-uppercase">
                            <FaRegCopyright className="icon"/> Fais avec tout coeur <FaRegHeart className="icon"/> par Sthray Kongolo
                        </p>
                    </Col>
                </Row>    
            </div>
        </FooterStyle>
    );
}

export default Footer;
