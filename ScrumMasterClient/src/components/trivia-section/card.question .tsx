import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';
import { Question } from '../../model/question';

interface IQuestionProps {
    question: Question;
    user: User;
}

export class questionCardComponent extends React.Component<IQuestionProps> {

  render() {
    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardTitle><h5 className="titles">{this.props.question.question}</h5></CardTitle>
                <Button >{this.props.question.wrongAnswerA}</Button>
                <Button>{this.props.question.wrongAnswerB}</Button>
                <Button>{this.props.question.wrongAnswerC}</Button>
                <Button>{this.props.question.answer}</Button>
            </CardBody>
        </Card>
    </div>
    )
  }
}