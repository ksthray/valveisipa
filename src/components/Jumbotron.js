import React from 'react';
import { Jumbotron as Jumbo, Container } from 'reactstrap'
import styled from 'styled-components'
import Image from '../images/businessman.jpg';
import ImageMobile from '../images/friends.jpg';

const StyleJumbo = styled.div`
    .jumbo{
        height: 300px;
        background: url(${Image}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        position: relative;
        z-index:-2;
        top: 81px;
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
        text-align: center;
        h1{
            text-transform: uppercase;
            font-size: 40px;
            font-weight: 500;
            font-family: consolas;
            border-right: 3px solid white;
            animation: type 4s steps(25);
            overflow: hidden;
            white-space: nowrap;
            width: 25ch;
        }
        @keyframes type{
            0%{ width: 0ch;}
            100%{width: 25ch}
        }
        p{
            font-size: 18px;
            text-align: left;
            font-family: consolas;
            letter-spacing: 3px;
        }
    }
    @media screen and (max-width: 1025px) {
        .content-text h1{
            margin-left: 280px;
            text-transform: uppercase;
            font-size: 30px;
        }
    }
    //Iphone 6/7/8 Plus
    @media screen and (max-width: 420px) {
        .jumbo{
            background: url(${ImageMobile}) no-repeat fixed bottom;
        }
        .content-text h1{
            margin-left: 0;
            text-transform: uppercase;
            font-size: 22px;
        }
        .content-text p{
            text-align: left;
            font-size: 16px;
            letter-spacing: 3px;
        }
    }
    //Iphone 5/5S/E/6 simple
    @media screen and (max-width: 325px) {
        body{
            margin: 0;
            padding: 0;
        }
        .jumbo{
            background: url(${ImageMobile}) no-repeat fixed bottom;
            width: 100%;
        }
        .content-text h1{
            margin-left: 0;
            text-transform: uppercase;
            font-size: 19px;
        }
        .content-text p{
            text-align: left;
            font-size: 14px;
            letter-spacing: 2px;
        }
    }
`

const Jumbotron = () => (
    <StyleJumbo>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div> 
            <Container>
                <div className="content-text">
                    <h1>Bienvenue sur news isipa.</h1>
                    <p>
                        Newsipa c'est une plateforme de l'isipa qui vous sert des informations 
                        et des donnnées tres important afficher dans la valve, ils vous informe. Nous 
                        sommes une nouvelle generation des etudiants.
                    </p>
                </div>
            </Container>
        </Jumbo>
    </StyleJumbo>
)

export default Jumbotron;
