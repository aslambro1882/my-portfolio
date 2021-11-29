import React from "react";
import './Blogs.css';
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Blogs = () => {
    return (
        <div>
            <Container>
                <h1 style={{ fontWeight: '700', color: '#2c3e50' }}>My Blogs</h1>
                <Row className="mt-2 g-4" xs={1} md={2} lg={3}>
                    <Col>
                        <Card style={{ width: "18rem", height: "100%", boxShadow: '0 5px 5px gray' }}>
                            <Card.Img
                                variant="top"
                                src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/07/react.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Web Development With React</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <button className="blogBtn">Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem", height: '100%', boxShadow: '0 5px 5px gray' }}>
                            <Card.Img
                                variant="top"
                                src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/07/react.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Web Development With React</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <button className="blogBtn">Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem", height: "100%", boxShadow: '0 5px 5px gray' }}>
                            <Card.Img
                                variant="top"
                                src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2019/07/react.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Web Development With React</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <button className="blogBtn">Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;
