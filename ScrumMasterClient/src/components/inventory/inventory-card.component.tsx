import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { ShopItem } from '../../model/item';

interface IInvCardProp {
    item: ShopItem;
}

export class InventoryCardComponent extends React.Component<IInvCardProp> {
    render() {
        return (
            <div className="shop-card-container">
                <div>
                    <Card id={this.props.item.rarity.rarityName} style={{ backgroundColor: '#2F2F2F', borderWidth: 10, flexDirection: 'row', width: '1140px', margin: '10px 0px 10px 0px' }}>
                        <CardImg src="https://img.icons8.com/material/4ac144/256/camera.png" alt="Avatar" style={{ width: '100px', height: '100px', alignSelf: 'center', margin: '50px 100px 50px 100px' }} />
                        <CardBody>
                            <CardTitle style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>{this.props.item.itemName}({this.props.item.rarity.rarityName.toUpperCase()})</CardTitle>
                            <CardSubtitle>{this.props.item.effect}</CardSubtitle>
                            {/* <Progress animated={true} color='success' value={75} style={{backgroundColor: 'black', height: '50px', transitionDuration: '10s'}}>75</Progress> */}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    };
}