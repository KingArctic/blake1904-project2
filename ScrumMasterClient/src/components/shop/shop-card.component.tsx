import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { ShopItem } from '../../model/item';
import naru from '../../assets/naruto.png';
import bat from '../../assets/batmanhead.png';
import har from '../../assets/harry.png';
import tmnt from '../../assets/rafael.png';
// import { IAuthState } from '../../reducers';
// GET THE USER FROM REDUX
// SAVE THE NEW ITEM
// SENT TO DB
// index
// question


interface IItemProp {
    item: ShopItem;
    
}

interface IStateItem {
    item: string;
    // user: IAuthState;
}


export class ShopCardComponent extends React.Component<IItemProp, IStateItem> {
    render() {
        let itemIcon = "";
        console.log(this.props.item.itemName);
        switch (this.props.item.itemName) {
            case "naruto":
                itemIcon = naru;
                break;
            case "Batman":
                itemIcon = bat;
                break;
            case "TMNT":
                itemIcon = tmnt;
                break;
            case "Harry Potter":
                itemIcon = har;
                break;
            default:
                itemIcon = "https://img.icons8.com/material/4ac144/256/camera.png";
        }

        const saveItemToBag = (e) => {
            const {itemName, itemId} = this.props.item
            console.log(itemName);
            // console.log(this.state.user.currentUser);

            // this.setState({
            //     item: itemName 
            // })
        }
        return (
            <div className="shop-card-container">
                <div>
                    <Card id={this.props.item.rarity.rarityName} style={{ backgroundColor: '#2F2F2F', borderWidth: 10, flexDirection: 'row', width: '1140px', margin: '10px 0px 10px 0px' }}>
                        <CardImg src={itemIcon} alt="Avatar" style={{ width: '100px', height: '100px', alignSelf: 'center', margin: '50px 100px 50px 100px' }} />
                        <CardBody>
                            <CardTitle style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>{this.props.item.itemName}({this.props.item.rarity.rarityName.toUpperCase()})</CardTitle>
                            <CardSubtitle>{this.props.item.effect}</CardSubtitle>
                        </CardBody>
                        <Button style={{ alignSelf: 'center', margin: '0px 50px 0px 50px', width: '150px', height: '75px' }} onClick={saveItemToBag}>Buy! {this.props.item.rarity.price}</Button>
                    </Card>
                </div>
            </div>
        )
    };
}