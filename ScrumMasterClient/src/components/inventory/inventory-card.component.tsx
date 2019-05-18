import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Progress } from 'reactstrap';

interface IInvCardProp {
    rarity: number;
}

interface IInvCardState {
    rarity: string;
}

export class InventoryCardComponent extends React.Component<IInvCardProp, IInvCardState> {
    constructor(props) {
        super(props);
        switch (this.props.rarity) {
            case 1:
                this.state = { rarity: 'common' };
                break;
            case 2:
                this.state = { rarity: 'uncommon' };
                break;
            case 3:
                this.state = { rarity: 'rare' };
                break;
            case 4:
                this.state = { rarity: 'epic' };
                break;
            case 5:
                this.state = { rarity: 'legendary' };
                break;
            case 6:
                this.state = { rarity: 'divine' };
                break;
            default:
                this.state = { rarity: 'common' };
                break;
        }
    }
    render() {
        return (
            <div className="shop-card-container">
                <div>
                    <Card id={this.state.rarity} style={{ backgroundColor: '#2F2F2F', borderWidth: 10, flexDirection: 'row', width: '1140px', margin: '10px 0px 10px 0px' }}>
                        <CardImg src="https://img.icons8.com/material/4ac144/256/camera.png" alt="Avatar" style={{ width: '100px', height: '100px', alignSelf: 'center', margin: '50px 100px 50px 100px' }} />
                        <CardBody>
                            <CardTitle style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>Card title ({this.state.rarity.toUpperCase()})</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            {/* <Progress animated={true} color='success' value={75} style={{backgroundColor: 'black', height: '50px', transitionDuration: '10s'}}>75</Progress> */}
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    };
}