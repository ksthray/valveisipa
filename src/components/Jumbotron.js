import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap'
import styled from 'styled-components'
import Image from '../images/businessman.jpg';

const StyleJumbo = styled.div`
    .jumbo{
        height: 300px;
        background: url(${Image}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        position: relative;
        z-index:-2;
        top: 81px;
        width: 100%;
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
        color: white;
        h1{
            text-transform: uppercase;
            border-right: 3px solid rgb(255, 84, 17);
            animation: type 4s steps(25);
            overflow: hidden;
            white-space: nowrap;
            width: 25ch;
        }
        p{
            letter-spacing: 2px;
        }
        @keyframes type{
            0%{ width: 0ch;}
            100%{width: 25ch}
        }
    }
    @media screen and (max-width: 770px) {
        body{
            margin: 0;
            padding: 0;
        }
        .display-3{
            font-size: 3.4rem;
        }
    }
    @media screen and (max-width: 415px) {
        body{
            margin: 0;
            padding: 0;
        }
        .jumbo{
            display none;
        }
    }
    @media screen and (max-width: 375px) {
        body{
            margin: 0;
            padding: 0;
        }
        .jumbo{
            display none;
        }
    }
    //Iphone 5/5S/E/6 simple
    @media screen and (max-width: 325px) {
        body{
            margin: 0;
            padding: 0;
        }
        .jumbo{
            display none;
        }
        .display-3{

        }
    }
`

const Jumbotron = () => (
    <StyleJumbo>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div> 
            <Container>
                <div className="content-text">
                    <h1 className="display-3">Bienvenue sur <span style={{color: "rgb(255, 84, 17)"}}>news</span> isipa<span style={{color: "rgb(255, 84, 17)"}}>.</span></h1>
                    <p className="lead">
                        News isipa c'est une plateforme de l'isipa qui vous sert des informations 
                        et des donnnées tres important afficher dans la valve, ils vous informe. Nous 
                        sommes une nouvelle generation des etudiants.
                    </p>
                </div>
            </Container>
        </Jumbo>
    </StyleJumbo>
)

export default Jumbotron;
