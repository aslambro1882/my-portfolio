import React from 'react';
import './Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import projectOne from '../../images/projects/1.png';
import projectTwo from '../../images/projects/2.png';
import projectThree from '../../images/projects/3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Projects = () => {

    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };

    return (
        <div className="my-5 px-2">
            <Container>
                <h1 style={{ fontWeight: '700', color: '#2c3e50' }}>My All works that I did!</h1>
                <Row className="mt-2 g-4" xs={1} md={2} lg={3}>
                    {/* <Slider {...settings}> */}
                    <Col>
                        <div className="card-parent">
                            <img src={projectOne} alt="" />
                            <div className="card-overlay">
                                <div className="card-textt">
                                    <h5>MJ CARZ Web application</h5>
                                    <p>This is a full stack website. This is a car selling  web application.</p>
                                    <button className="projectBtn">More Details</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card-parent">
                            <img src={projectTwo} alt="" />
                            <div className="card-overlay">
                                <div className="card-textt">
                                    <h5>RedX Courier Web application</h5>
                                    <p>This is a full stack website. This is delivery related web application.</p>
                                    <button className="projectBtn">More Details</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card-parent">
                            <img src={projectThree} alt="" />
                            <div className="card-overlay">
                                <div className="card-textt">
                                    <h5>Red onion Restaurant application</h5>
                                    <p>Restaurant website building by React Js. Full responsive and state managed by Context.</p>
                                    <button className="projectBtn">More Details</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* </Slider> */}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;