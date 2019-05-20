import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { User } from '../../model/user';
import { Question } from '../../model/question';


interface IQuestionCardProps {
    question: Question;

}

export class QuestionCardComponent extends React.Component<IQuestionCardProps> {

  render() {
  const answers = ['answer', 'wrong 1', 'wrong 2', 'wrong 3']
  let random = [-1, -1, -1, -1];
  let counter = 0;

  while (counter < 4) {
      let temp = Math.floor(Math.random() * 4);
      let found = false;
      for (let i = 0; i < random.length; i++) {
          if (temp === random[i]) {
              found = true;
          }
      }

      if (!found) {
          random[counter] = temp;
          counter++;
      }
  }

  console.log(answers);
  console.log(random);

    return (
        <div>
        <Card id="user-info-content" >
            <CardBody>
                <CardTitle><h5 className="titles">What is my name?</h5></CardTitle>
                <div className="column ">
                <Button >{answers[random[0]]}</Button>
                <Button>{answers[random[1]]}</Button>
                <Button>{answers[random[2]]}</Button>
                <Button>{answers[random[3]]}</Button>
                </div>
            </CardBody>
        </Card>
    </div>
    )
  }
}