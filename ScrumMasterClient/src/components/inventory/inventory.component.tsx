import React from 'react';
import { InventoryCardComponent } from './inventory-card.component';
import { ShopItem } from '../../model/item';

interface IInventoryState {
    itemlist: ShopItem[],
}

export class InventoryComponent extends React.Component<any, IInventoryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            itemlist: [],
        };
    }

    async componentDidMount() {
        const resp = await fetch('http://localhost:8081/shopitem', { method: 'GET', credentials: 'include' })
        const body = await resp.json();
        await this.setState({
            itemlist: body
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.itemlist.map(item => (<InventoryCardComponent item={item}/>))}
                </div>
            </div>
        )
    };
}