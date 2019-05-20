import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { QuestionType } from '../../model/QuestionType';
import java from '../../assets/java.png';
import ProgressBarComponent from '../ProgressComponent';
import { withRouter, RouteComponentProps } from 'react-router';
import { QuestionCardComponent } from './card.question ';
import { User } from '../../model/user';
import { connect } from 'react-redux';
import { sendToQuestions } from '../../actions/category.action';


interface IQuestionTypeProps extends RouteComponentProps {
  category: QuestionType;
  difficulty: number;
  question: User;
  sendToQuestions: (currentCategory: QuestionType, history:any) => any;
}

interface IQuestionTypeState {
  currCat: QuestionType,
}

export class CategoryCardComponent extends React.Component<IQuestionTypeProps, IQuestionTypeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currCat: this.props.category,
    };
  }

  render() {
    return (
      <div>
        <Card id="category-info-content" onClick={() => this.props.sendToQuestions(this.state.currCat, this.props.history)}>
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
              <ProgressBarComponent point={this.props.difficulty} />
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = {
  sendToQuestions: sendToQuestions
}


export default withRouter(connect(undefined,mapDispatchToProps)(CategoryCardComponent));
