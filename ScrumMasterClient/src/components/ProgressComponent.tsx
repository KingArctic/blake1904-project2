import React from 'react';

import { Progress } from 'reactstrap';

interface iBarProps {
    point: number
}
class ProgressBarComponent extends React.PureComponent <iBarProps> {


    render() {
        let progress = this.props.point;
        return (
            <div className="columns">
                <Progress animated={true} color='success' value={progress} style={{color: 'black', height: '60px', width: '200px', transitionDuration: 'background 100ms 100ms ease-in'}}>
                <h3>{progress}%</h3></Progress>
            
            </div>
            
            

        )
    }
}

export default ProgressBarComponent;