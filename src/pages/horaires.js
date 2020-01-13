import React from 'react';

import Header from '../components/header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { p1a, p1c, p1d } from '../utils/horairesCours'
import { Row, Col } from 'reactstrap'

const HorairesStyle = styled.div`
    .content{
        position: relative;
        top: 85px;
    }
    .bar{
        width: 100%;
        height: 70px;
        padding-top: 15px;
        position: relative;
        top: 80px;
        background: linear-gradient(217deg, rgba(255, 84, 17), rgb(246, 75, 2), rgb(220, 67, 0) 70.71%),
                    linear-gradient(127deg, rgba(255, 99, 35), rgb(246, 85, 2), rgb(202, 57, 0) 70.71%),
                    linear-gradient(336deg, rgba(255, 80, 40), rgb(216, 77, 2), rgb(202, 57, 0) 70.71%);
            h2{
                color: white;
            }
    }
    .fouter{
        position: relative !important;
        top: 86px;
    }
    tr, th, td{
        border: 1px solid black;
        padding: 5px;
    }
`

const horaires = () => {
    
    return (
        <HorairesStyle>
            <div>
                <Header/>
            </div>
            <div className="container-fluid bar text-center text-uppercase">
                <h2>horaires de chaque promotion</h2>
            </div>
            <div className="container-fluid content">
                <Row>
                    <Col md="4">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{
                                        backgroundColor: "black", color: "white"}}
                                    >
                                        P1A
                                    </th>
                                </tr>
                                <tr>
                                    <th>Jour</th>
                                    <th>Heure</th>
                                    <th>Cours</th>
                                    <th>Profs</th>
                                </tr>
                            </thead>
                            {p1a.map(hor => (
                                <tbody>
                                    <tr key={hor.id}>
                                        <td rowSpan="2">{hor.jour}</td>
                                        <td>{hor.heuremat}</td>
                                        <td>{hor.courmat}</td>
                                        <td className="text-center text-uppercase">{hor.profmat}</td>
                                    </tr>
                                    <tr key={hor.id}>
                                        <td>{hor.heuremid}</td>
                                        <td>{hor.courmid}</td>
                                        <td className="text-center text-uppercase">{hor.profmid}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </Col>
                    <Col md="4">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{
                                        backgroundColor: "black", color: "white"}}
                                    >
                                        P1C
                                    </th>
                                </tr>
                                <tr>
                                    <th>Jour</th>
                                    <th>Heure</th>
                                    <th>Cours</th>
                                    <th>Profs</th>
                                </tr>
                            </thead>
                            {p1c.map(hors => (
                                <tbody>
                                    <tr key={hors.id}>
                                        <td rowSpan="2">{hors.jour}</td>
                                        <td>{hors.heuremat}</td>
                                        <td>{hors.courmat}</td>
                                        <td className="text-center text-uppercase">{hors.profmat}</td>
                                    </tr>
                                    <tr key={hors.id}>
                                        <td>{hors.heuremid}</td>
                                        <td>{hors.courmid}</td>
                                        <td className="text-center text-uppercase">{hors.profmid}</td> 
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </Col>
                    <Col md="4">
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-center" style={{
                                        backgroundColor: "black", color: "white"}}
                                    >
                                        P1D
                                    </th>
                                </tr>
                                <tr>
                                    <th>Jour</th>
                                    <th>Heure</th>
                                    <th>Cours</th>
                                    <th>Profs</th>
                                </tr>
                            </thead>
                            {p1d.map(hors => (
                                <tbody>
                                    <tr key={hors.id}>
                                        <td rowSpan="2">{hors.jour}</td>
                                        <td>{hors.heuremat}</td>
                                        <td>{hors.courmat}</td>
                                        <td className="text-center text-uppercase">{hors.profmat}</td>
                                    </tr>
                                    <tr key={hors.id}>
                                        <td>{hors.heuremid}</td>
                                        <td>{hors.courmid}</td>
                                        <td className="text-center text-uppercase">{hors.profmid}</td> 
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </Col>
                </Row>
            </div>
            <div className="fouter">
                <Footer/>
            </div>
        </HorairesStyle>
    );
}

export default horaires;
