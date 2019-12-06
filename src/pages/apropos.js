import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import Footer from '../components/Footer'
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
                Nous sommes une plateforme de blog dans l'Isipa ayant pour but de mettre toutes
                informations se retrouvant dans le valve et autre qui ne sera pas afficher sur le site.
              </small>
              <h5>Notre Histoire ?</h5>
              <small>
                Au fil de temps passé a l'isipa, nous avons remarquer que les informations afficher dans la valve
                n'est pas vraiment suivi par les étudiants, il y a 30% pour des étudiants qui regarde contatement
                la valve, alors pourquoi ne pas créer un blog d'isipa qui permettra a tous ses étudiants, grace
                a leur smartphone d'avoir acces au site et regarder tous les informations qui y seront afficher.
                c'est pour cette but qu'est née <strong>News ISIPA</strong>
              </small>
            </div>
          </Col>
          <Col md="6">
            <div className="apropos">
              <h5>Publicité ?</h5>
              <small>
                Vous pouvez nous contacter pour faire une promotion de votre produit éduacatif, les
                offre de PUB commence a partie <mark>15$ le mois</mark> qui serra afficher dans la 
                sidebar du site (la partie droite du site), et <mark>30$ le mois</mark> pour que sa soit 
                afficher sur le landing ou jumbotron de la page d'accueil (la partie haut de la page apres 
                le menu)
              </small>
              <h5>Comment nous travaillons ? </h5>
              <small>
                Nous avons une étroite relations avec le Directeur Academique de l'isipa, Mr KIKUATI, puis avec
                les membres de la Bibliothèque Centrale pour avoir accès aux informations de la valve, puis 
                avec le Cp de toutes les promotions.
              </small>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <Footer/>
    </div>
  </StylePage>
)

export default AproposPage