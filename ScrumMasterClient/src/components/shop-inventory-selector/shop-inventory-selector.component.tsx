import React from 'react';
import { ShopComponent } from '../shop/shop.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { Button } from 'reactstrap';

interface ISelectorState {
    showShop: boolean,
}

export class SISelectorComponent extends React.Component<any, ISelectorState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showShop: true,
        };
        this.changeBool = this.changeBool.bind(this);
    }

    async changeBool() {
        let newBool = this.state.showShop;
        await this.setState({
            showShop: !newBool
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.changeBool} style={{ marginBottom: '20px' }}>Change Bag!</Button>
                {this.state.showShop && <div>
                    <ShopComponent />
                </div>}
                {!this.state.showShop && <div>
                    <InventoryComponent />
                </div>}
            </div>
        );
    }
}