import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import devil from '../../assets/devil.png';
import tnt from '../../assets/dragonball.png';
import harry from '../../assets/harry.png';
import sugarskull from '../../assets/sugarskull.png';
import naruto from '../../assets/naruto.png';
import dragonball from '../../assets/dragonball.png';
import dragon from '../../assets/badDragon.png';

const CurrentItems = () => {
return (
    <Container>
       
            <Row>
            <Col>Rarity</Col>
            <Col>Item</Col>
            </Row>
            <Row>
            <Col>Common</Col>
            <Col><img className="smallIcons" src={dragonball}></img></Col>
            </Row>
            <Row>
            <Col>Rare</Col>
            <Col><img className="smallIcons" src={devil}></img></Col>
            </Row>
            <Row>
            <Col>Epic</Col>
            <Col><img className="smallIcons" src={naruto}></img></Col>
            </Row>
            <Row>
            <Col>Legendary</Col>
            <Col><img className="smallIcons"src={dragon}></img></Col>
            </Row>
            </Container>
       
)
}

export default CurrentItems;