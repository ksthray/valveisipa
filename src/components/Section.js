import React from 'react';
import styled from 'styled-components';
import { FaRegHdd, FaRegSun, FaRegHandshake, FaRegPaperPlane } from 'react-icons/fa';
import { Container, Col, Row} from 'reactstrap';

const SectionStyle =  styled.div`
    .section{
        padding: 20px;
        height: 400px;
        background: linear-gradient(217deg, rgba(255, 84, 17), rgb(246, 75, 2), rgb(220, 67, 0) 70.71%),
                    linear-gradient(127deg, rgba(255, 99, 35), rgb(246, 85, 2), rgb(202, 57, 0) 70.71%),
                    linear-gradient(336deg, rgba(255, 80, 40), rgb(216, 77, 2), rgb(202, 57, 0) 70.71%);
        h1{
            text-align: center;
            color: rgb(241, 241, 241);
        }
        p{
            text-align: center;
            color: rgba(223, 223, 223, 0.8);
            font-size: 17px;
        }
    }
    .promotion{
        position: relative;
        top: 40px;
        h6{
            text-align: center;
            color: rgb(241, 241, 241);
            position: relative;
            top: 25px;
        }
    }
    .icon-gest{
        font-size: 45px;
        color: rgb(241, 241, 241);
        position: relative;
        left: 100px;
    }
    .bottom-bar{
        padding: 10px;
        width: 80%;
        height: auto;
        background-color: white;
        position: relative;
        top: 75px;
        left: 100px;
        h6, p{ 
            color: black !important;
        }
        h6{
            font-size: 25px;
            font-weight: bold;
            color: rgb(255, 84, 17) !important;
        }
        p{
            position: relative;
            top: 15px;
            color: rgb(223, 223, 223);
            text-transform: lowercase;
            font-weight: 300;
        }
    }
`

const Section = () => {
    return (
        <SectionStyle>
            <div className="container-fluid section">
                <Container>
                    <Row>
                        <Col>
                            <h1>Pourquoi <strong>NEWS ISIPA ?</strong></h1>
                            <p>
                                Les étudiants n'ont pas toujours habituer a regarder la valve,
                                mais ils se connectent tout les jours a l'internet, c'est en se
                                bassant la dessus que <strong>NEWS ISIPA</strong> a pu se creer,
                                un site qui va leurs permettrent de voir tous les informations afficher
                                dans la valve a travers leur phone.
                            </p>
                        </Col>
                    </Row>
                    <div className="promotion">
                        <Row>
                            <Col md="3">
                                <FaRegHdd className="icon-gest"/>
                                <h6>Gestion Informatique</h6>
                            </Col>
                            <Col md="3">
                                <FaRegSun className="icon-gest"/>
                                <h6>Maintenance et Réseaux</h6>
                            </Col>
                            <Col md="3">
                                <FaRegHandshake className="icon-gest"/>
                                <h6>Duane et Finance</h6>
                            </Col>
                            <Col md="3">
                                <FaRegPaperPlane className="icon-gest"/>
                                <h6>Numerique et Communication</h6>
                            </Col>
                            <div className="bottom-bar">
                                <Row>
                                    <Col md="3">
                                        <h6><strong>2 ans</strong></h6>
                                        <p>d'éxperience</p>
                                    </Col>
                                    <Col md="3">
                                        <h6><strong>+2000</strong></h6>
                                        <p>étudiants satisfait</p>
                                    </Col>
                                    <Col md="3">
                                        <h6><strong>3 sites</strong></h6>
                                        <p>Shaumba - Muchi - Kitega</p>
                                    </Col>
                                    <Col md="3">
                                        <h6><strong>24/24</strong></h6>
                                        <p>Toujours active</p>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </SectionStyle>
    );
}

export default Section;
