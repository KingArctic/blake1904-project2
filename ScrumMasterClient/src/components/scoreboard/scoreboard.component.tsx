import React from 'react';
import { ScoreboardCardComponent } from './scoreboard-card.component';

interface IScoreboardState {
    numlist: number[],
}

export class ScoreboardComponent extends React.Component<any, IScoreboardState> {
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
                    {this.state.numlist.map(number => (<ScoreboardCardComponent />))}
                </div>
            </div>
        )
    };
}