import React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { User } from '../../model/user';
import { Question } from '../../model/question';
import { QuestionCardComponent } from './card.question ';


interface IQuestionProps {
    question: Question;
    user: User;
}

export class QuestionComponent extends React.Component<IQuestionProps> {

  render() {
    return (
        <div>
        <QuestionCardComponent question={this.props.question}/>
    </div>
    )
  }
}