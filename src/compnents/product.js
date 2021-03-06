import React from 'react';
import { Card } from 'bootstrap-4-react';
import shoeData from '../shoe.json';
import { Container, Row, Col, Button } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
export default function Product() {
    return (
        <Container>
            <Row>
                {Object.keys(shoeData).map(data => {
                    return (
                            <Col col="sm" mt="2">
                                <Card key={data} style={{ width: '18rem' }}>
                                <Link key={data} to={`product/${data}`}>
                                    <Card.Image src={shoeData[data].img} alt={"Product"} />
                                    <Card.Body>
                                        <Card.Title>{shoeData[data].name} - RS : {shoeData[data].price}</Card.Title>
                                    </Card.Body>
                                    </Link>
                                    <Button primary>Add to cart</Button>
                                </Card>
                            </Col>
                        
                        )
                })}
            </Row>
        </Container>
    )
}




