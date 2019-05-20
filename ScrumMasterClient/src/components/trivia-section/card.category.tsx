import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { QuestionType } from '../../model/QuestionType';
import java from '../../assets/java.png';
import ProgressBarComponent from '../ProgressComponent';
import { withRouter, RouteComponentProps } from 'react-router';


interface IQuestionTypeProps extends RouteComponentProps {
    category: QuestionType;
    difficulty: number;
}

export class CategoryCardComponent extends React.Component<IQuestionTypeProps> {




  render() {
   
    return (
      
        <div>
        <Card id="category-info-content" >
            <CardBody >
            <div >
                <div ><img
                        alt="category"
                        className="topicImg"
                        src={java} /></div>
                        
                <CardTitle ><h5 className="titles">{this.props.category.category}</h5></CardTitle>
                <div >
                <CardText className="clevel">{this.props.difficulty}</CardText>
                </div>
                <ProgressBarComponent point= {this.props.difficulty} />
                </div>
            </CardBody>
        </Card>
    </div>
    )
  } 
}



export default withRouter (CategoryCardComponent);
