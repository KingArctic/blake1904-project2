import React from 'react';
import { InventoryCardComponent } from './inventory-card.component';
import { ShopItem } from '../../model/item';
import { IAuthState, IState } from '../../reducers';
import { UserPageComponent } from '../user-page/user.page.component';
import { connect } from 'react-redux';

interface IInventoryProps {
    user?: IAuthState;
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

    async componentDidMount() {

        if (this.props.user) {
            if (this.props.user.currentUser) {
                let user = this.props.user.currentUser;
                console.log(user);
                const resp = await fetch('http://localhost:8081/' + user.userId + '/inventory', { method: 'GET', credentials: 'include' })
                const body = await resp.json();
                await this.setState({
                    itemlist: body
                });
            }
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

const mapStateToProps = (state: IState) => {
    return {
        user: state.auth

    }
}



export default (connect(mapStateToProps)(UserPageComponent));