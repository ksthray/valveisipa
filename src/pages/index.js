import React, { useState } from 'react';
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import Post from '../components/Post';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  /*Row,
Col*/} from 'reactstrap';
import styled from 'styled-components';
import imagefirst from '../images/tablet.jpg';
import imagesec from '../images/laptop.jpg';
//import Robot from '../images/robot.jpg';
//import mobile from '../images/mobile.jpg';

const IndexStyle = styled.div`
  .header-index{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
  }
  .container{
    position: relative;
    top: 500px;
  }
  

`
const Slide = styled.div`
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
          <img src={item.src} alt={item.altText} style={{width: "100%", height: "100vh"}}/>
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
        <div className="container">
          <StaticQuery query={indexQuery} render={data => (
            <div className="post">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post 
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  path={node.frontmatter.path}
                  body={node.excerpt}
                />
              ))} 
            </div>
          )}/>
        </div>
      </IndexStyle>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
