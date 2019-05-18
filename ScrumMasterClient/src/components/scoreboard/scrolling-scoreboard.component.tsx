import React from 'react';

interface IScoreboardState {
    stringlist: string[],
}

export class ScrollingScoreboardComponent extends React.Component<any, IScoreboardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            stringlist: ['Arctic', 'Antarctic', 'Cookie', 'Enzo', 'Ruby', 'Diamond', 'Diane', 'Kuhulain', 'Melody', 'Dusk', 'Rosa', 'Deku', 'Uravity', 'AllMight', 'Ingenium', 'EraserHead', 'Nezu', 'Midnight', 'GroundZero'],
        };
    }

    render() {

        let list = ``;

        for (let i = 0; i < this.state.stringlist.length; i++) {
            list += `#${i + 1}-${this.state.stringlist[i]} `;
        }

        return (
            <div id='scrolling-scoreboard'>
                {list}
            </div>
        )
    };
}