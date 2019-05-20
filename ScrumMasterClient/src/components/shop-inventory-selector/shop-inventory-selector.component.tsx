import React from 'react';
import { ShopComponent } from '../shop/shop.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { Button } from 'reactstrap';
import { IAuthState, IState } from '../../reducers';
import { connect } from 'react-redux';

interface ISelectorState {
    showShop: boolean,
}
interface ISelectorProps {
    user: IAuthState;
}

export class SISelectorComponent extends React.Component<ISelectorProps, ISelectorState> {
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
                    <InventoryComponent user={this.props.user.currentUser}/>
                </div>}
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        user: state.auth

    }
}



export default (connect(mapStateToProps)(SISelectorComponent));