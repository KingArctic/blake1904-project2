import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';
import { Question } from '../../model/question';


interface IQuestionCardProps {
    question: Question;

}

export class QuestionCardComponent extends React.Component<IQuestionCardProps> {

  render() {
    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardTitle><h5 className="titles">What is my name?</h5></CardTitle>
                <Button >Danea</Button>
                <Button>Denae</Button>
                <Button>Dana</Button>
                <Button>Danae</Button>
            </CardBody>
        </Card>
    </div>
    )
  }
}