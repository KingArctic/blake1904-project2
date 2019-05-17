import React from 'react';
import java from '../assets/java.png';
import { Progress } from 'reactstrap';

class ProgressBarComponent extends React.PureComponent {


    render() {
        let progress = 50;
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