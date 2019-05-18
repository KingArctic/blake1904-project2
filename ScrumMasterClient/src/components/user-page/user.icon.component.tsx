import React from 'react';
import { User } from '../../model/user';
import { RouteComponentProps } from 'react-router';

interface IUserIconProps {
    user: User;
}
export class UserIconComponent extends React.Component<IUserIconProps> {

    render() {
            return (
                <div>
                    <img
                        alt="..."
                        className="avatar"
                        src="https://img.icons8.com/material/4ac144/256/camera.png" />
                </div>
            )
    }
}