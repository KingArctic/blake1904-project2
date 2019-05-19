import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { ShopItem } from '../../model/item';


interface IItemProp {
    item: ShopItem;
}

export class ShopCardComponent extends React.Component<IItemProp> {
    render() {
        return (
            <div className="shop-card-container">
                <div>
                    <Card style={{ color: '#FF00FF', backgroundColor: '#2F2F2F', borderWidth: 5, borderColor: '#AF00FF', flexDirection: 'row', margin: '10px 0px 10px 0px' }}>
                        <CardImg src="https://img.icons8.com/material/4ac144/256/camera.png" alt="Avatar" style={{ width: '100px', height: '100px', alignSelf: 'center', margin: '50px 100px 50px 100px' }} />
                        <CardBody>
                            <CardTitle style={{ textAlign: 'center' }}>{this.props.item.itemName}</CardTitle>
                            <CardSubtitle>{this.props.item.rarity.rarityName}</CardSubtitle>
                            <CardText>{this.props.item.effect}</CardText>
                        </CardBody>
                        <Button style={{ alignSelf: 'center', margin: '0px 50px 0px 50px', width: '150px', height: '75px' }}>Buy! {'/n/n' + this.props.item.rarity.price}</Button>
                    </Card>
                </div>
            </div>
        )
    };
}