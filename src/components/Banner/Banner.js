import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../images/myImg.jpg";
import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="banner-area">
            <Container>
                <Row className="d-flex align-items-center px-3">
                    <Col xs={12} md={6} lg={7}>
                        <div className="banner-intro">
                            <h5>Hey!</h5>
                            <h1>
                                I'm Maruf Bin Solaiman.
                            </h1>
                            <h3>
                                I am a{' '} <span>
                                    <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            'Frontend Developer',
                                            1000,
                                            'React Developer',
                                            1000,
                                            'Competitive Programmer',
                                            1000
                                        ]}
                                    />
                                </span>
                            </h3>
                            <p>
                                I am working front end design and development with HTML, CSS,
                                JavaScript, React. I can make dynamic and responsive website for
                                mobile.
                            </p>
                            <div className="social-link">
                                <a href="https://www.facebook.com/Aslam266" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/maruf-bin-sulaiman/"
                                    target="_blank"
                                >
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a
                                    href="https://github.com/aslambro1882"
                                    target="_blank"
                                >
                                    <i class="fab fa-github-square"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <div className="banner-img">
                            <img src={myImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
