import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { QuestionType } from '../../model/QuestionType';
import java from '../../assets/java.png';
import ProgressBarComponent from '../ProgressComponent';


interface IQuestionTypeProps {
    category: QuestionType;
}

export class CategoryCardComponent extends React.Component<IQuestionTypeProps> {

  render() {
    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardImg ><img
                        alt={this.props.category.category}
                        className={this.props.category.category}
                        src={java} /></CardImg>
                <CardTitle><h5 className="titles">{this.props.category.category}</h5></CardTitle>
                <div >
                <CardText className="clevel">0</CardText>
                <ProgressBarComponent point={0} />
                </div>
            </CardBody>
        </Card>
    </div>
    )
  }
}