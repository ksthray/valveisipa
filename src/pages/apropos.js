import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import styled from 'styled-components'
import { Container, Row, Col, Card, CardImg} from 'reactstrap'
import image from '../images/businessman.jpg'

const StylePage = styled.div`
  .stylepage{
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
        text-align: center;
        text-transform: uppercase;
      }
  }
  .card{
    padding: 0;
    position: relative;
    top: 10px;
  }
  .apropos{
    padding: 20px;
    position: relative;
    top: 10px;
    h5{
      color: rgb(255, 84, 17);
      border-bottom: 1px solid rgb(255, 84, 17);
    }
  }
`

const AproposPage = () => (
  <StylePage>
    <SEO title="A propos" />
    <Header/>
    <div className="stylepage">
      <h2>A propos</h2>
    </div>
    <Container>
      <Row>
        <Col>
          <Card>
            <CardImg width="100%" src={image} alt="nous sommes news-isipa"/>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className="apropos">
            <h5>Qui sommes nous ?</h5>
            <small>
              Nous sommes une plateforme de blog dans l'Isipa ayant pour de mettre toutes
              informations se retrouvant dans le valve sue le site internet
            </small>
          </div>
        </Col>
        <Col md="6"></Col>
      </Row>
    </Container>
  </StylePage>
)

export default AproposPage