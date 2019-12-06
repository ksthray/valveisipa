import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import { FaEnvelope, FaWhatsapp, FaMobileAlt } from 'react-icons/fa'

const ContactStyle =  styled.div`
  .top{
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
  .main{
    position: relative;
    top: 60px;
  }
  .footer{
    position: relative !important;
    top: 86px;
  }
`
const ContactPage = () => (
    <ContactStyle>
      <SEO title="Contact"/>
      <Header/>
      <div className="top text-uppercase text-center">
        <h2>contact</h2>
      </div>
      <br/>
      <div className="container main">
        <Row>
            <Col md="6">
              <h5>Contact</h5>
              <small>
                Vous pouvez nous contaccter par ces numeros
                <div>
                  <span><FaWhatsapp className="icon"/> +243 824 029 562</span>
                </div>
                <div>
                  <span><FaMobileAlt className="icon"/> +243 821 109 782</span>
                </div>
              </small>
              <br/>
              <small>
                Vous pouvez nous écrire par mail
                <div>
                  <span><FaEnvelope className="icon"/> Notre adresse e-amil: ksthray@gmail.com</span>
                </div>
                <div>
                  <span><FaEnvelope className="icon"/> Deuxieme adresse: isipacontact@gmail.com</span>
                </div>
              </small>    
            </Col>
            <Col md="6">
              <h5>Adresse</h5>
                <small>
                  Vous pouvez nous voire, notre adresse est, Isipa shaumba, Gombe Kinshasa N23
                  Reference UNESS, Departement, la Bibliothèque-Centrale
                </small>    
            </Col>
          </Row>
      </div>
      <br/>
      <Footer className="footer"/>
    </ContactStyle>
)

export default ContactPage