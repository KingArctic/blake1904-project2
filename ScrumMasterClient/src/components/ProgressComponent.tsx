import React from 'react';
import java from '../assets/java.png';
import { Progress } from 'reactstrap';

interface iBarProps {
    point: number
}
class ProgressBarComponent extends React.PureComponent <iBarProps> {


    render() {
        let progress = this.props.point;
        let topic = "java";
        return (
            <div className="proContainer">
                <img src={java} className="topicImg"></img>
                <Progress animated={true} color='success' value={progress} style={{color: 'black', height: '60px', width: '400px', transitionDuration: 'background 100ms 100ms ease-in'}}>
                <h3>{progress}%</h3></Progress>
            
            </div>
            
            

        )
    }
}

export default ProgressBarComponent;