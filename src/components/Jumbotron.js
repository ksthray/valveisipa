import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap'
import styled from 'styled-components'
import Image from '../images/friends.jpg';

const StyleJumbo = styled.div`
    .jumbo{
        height: 300px;
        background: url(${Image}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        position: relative;
        z-index:-2;

    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    .content-text{
        text-align: center;
    }
`

const Jumbotron = () => (
    <StyleJumbo>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div> 
            <Container>
                <div className="content-text">
                    <h1>Bienvenue sur NEWZ-ISIPA</h1>
                    <p>
                        Newsipa c'est une nouvelle plateforme de l'isipa qui vous sert des informations 
                        et des donnnées tres important afficher dans la valve, ils vous informe
                    </p>
                </div>
            </Container>
        </Jumbo>
    </StyleJumbo>
)

export default Jumbotron;
