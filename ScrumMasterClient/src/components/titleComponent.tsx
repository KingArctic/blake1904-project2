import React from 'react';
import titleImg from '../assets/scrumMaster.png';

export class TitleComponent extends React.PureComponent {

    render() {
            return (
                <div>
                    <img
                        alt="scrum Master"
                        className="titleImg"
                        src={titleImg} />
                </div>
            )
    }
}