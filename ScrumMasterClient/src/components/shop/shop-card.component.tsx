import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export class ShopCardComponent extends React.Component {
    render() {
        return (
            <div className="shop-card-container">
                <div>
                    <Card style={{ color: '#FF00FF', backgroundColor: '#2F2F2F', borderWidth: 5, borderColor: '#AF00FF', flexDirection: 'row', margin: '10px 0px 10px 0px' }}>
                        <CardImg src="https://img.icons8.com/material/4ac144/256/camera.png" alt="Avatar" style={{ width: '100px', height: '100px', alignSelf: 'center', margin: '50px 100px 50px 100px' }} />
                        <CardBody>
                            <CardTitle style={{ textAlign: 'center' }}>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        <Button style={{ alignSelf: 'center', margin: '0px 50px 0px 50px', width: '150px', height: '75px' }}>Button</Button>
                    </Card>
                </div>
            </div>
        )
    };
}