import React from 'react';
import { ShopCardComponent } from './shop-card.component';

interface IShopState {
    numlist: number[],
}

export class ShopComponent extends React.Component<any, IShopState> {
    constructor(props: any) {
        super(props);
        this.state = {
            numlist: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.numlist.map(number => (<ShopCardComponent />))}
                </div>
            </div>
        )
    };
}