import React, { useState } from 'react';
import SEO from "../components/seo";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, 
  Card, 
  CardTitle, 
  CardText, 
  CardImg, 
  CardImgOverlay,
  Row,
  Col} from 'reactstrap';
import styled from 'styled-components';
import imagefirst from '../images/tablet.jpg';
import imagesec from '../images/laptop.jpg';
//import Robot from '../images/robot.jpg';
import mobile from '../images/mobile.jpg';

const IndexStyle = styled.div`
  .header-index{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
  }
  .card, .card-img{
    width: 318px;
    height: 270px;
  }
  .card-img-overlay{
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
    width: 318px;
    height: 270px;
  }
  .container-fluid{
    margin-top: 548px;
    padding: 20px;
    background-color: #fff   ;
  }

`
const Slide = styled.div`
  .img{
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
  }
  .text-caption{
    font-size: 25px;
    text-transform: uppercase;
    bottom: 240px;
    font-weight: 700;
  }
`
const items = [
  {
    src: `${imagefirst}`,
    altText: 'Slide 1',
    caption: 'Nous sommes News-ISIPA',
    para: 'Une plateforme qui permet aux etudiants detre au courant de tout les activités qui se passe au sein de'
  },
  {
    src: `${imagesec}`,
    altText: 'Slide 2',
    caption: 'Nous sommes Xonde',
    para: 'Une startUp qui vous permet de concevoir de site un internet et le gerer pour vous en moins prix'
  },
  {
    src: `${imagefirst}`,
    altText: 'Slide 3',
    caption: 'Nous sommes MOMENTO',
    para: 'Un service pour vous assister dans vos evenements, mariage, anniversaire, collation etc...'
  }
];

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Slide>
          <img className="img" src={item.src} alt={item.altText} style={{width: "100%", height: "100vh"}}/>
          <CarouselCaption className="text-caption" captionText={item.para} captionHeader={item.caption}/>
        </Slide>
      </CarouselItem>
    );
  });
  return (
    <Layout>
      <SEO title="Home" />
      <IndexStyle>
        <div className="header-index">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
        <br/>
        <div className="container-fluid">
          <Row>
            <Col md="3">
              <Card inverse>
                <div className="overlay"></div>
                <CardImg width="100%" src={mobile} alt="Image robot" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md="3">
              <Card inverse>
                <CardImg width="100%" src={mobile} alt="Image robot" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md="3">
              <Card inverse>
                <CardImg width="100%" src={mobile} alt="Image robot" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md="3">
              <Card inverse>
                <CardImg width="100%" src={mobile} alt="Image robot" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <CardText>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
      </IndexStyle>
    </Layout>
  )
}

export default IndexPage
