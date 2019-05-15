import React from 'react';
import { InventoryCardComponent } from './inventory-card.component';

interface IInventoryState {
    numlist: number[],
}

export class InventoryComponent extends React.Component<any, IInventoryState> {
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
                    {this.state.numlist.map(number => (<InventoryCardComponent />))}
                </div>
            </div>
        )
    };
}