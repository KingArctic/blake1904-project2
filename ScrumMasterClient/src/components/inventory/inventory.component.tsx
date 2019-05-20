import React from 'react';
import { InventoryCardComponent } from './inventory-card.component';
import { ShopItem } from '../../model/item';
import { IAuthState, IState } from '../../reducers';
import { UserPageComponent } from '../user-page/user.page.component';
import { connect } from 'react-redux';
import { User } from '../../model/user';

interface IInventoryProps {
    user?: User;
}

interface IInventoryState {
    itemlist: ShopItem[],
}

export class InventoryComponent extends React.Component<IInventoryProps, IInventoryState> {
    constructor(props: any) {
        super(props);
        this.state = {
            itemlist: [],
        };
    }

    componentDidMount = async () => {

        if (this.props.user) {
                let user = this.props.user;
                console.log(user);
                const resp = await fetch('http://localhost:8081/user/inventory/' + user.userId, { method: 'GET', credentials: 'include' })
                const body = await resp.json();
                await this.setState({
                    itemlist: body
                });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.itemlist.map(item => (<InventoryCardComponent key={item.itemId} item={item} />))}
                </div>
            </div>
        )
    };
}
