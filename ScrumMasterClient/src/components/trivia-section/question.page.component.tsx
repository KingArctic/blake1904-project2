import React from 'react';
import { Question } from '../../model/question';
import { QuestionCardComponent } from './card.question ';
import { ICategoryState, IState, IAuthState } from '../../reducers';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { fetchArrays } from '../../actions/category.action';
import { User } from '../../model/user';
import { QuestionType } from '../../model/QuestionType';


interface IQuestionProps extends RouteComponentProps {
  question: Question;
  user: IAuthState;
  currentCat: ICategoryState;
  categoryName: number;
  fetchArrays: (category: string, difficulty: number, user: User) => any;
}

interface IQuestionState {
  currentCartegory: ICategoryState;
}

export class QuestionComponent extends React.Component<IQuestionProps, IQuestionState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentCartegory: this.props.currentCat,
    };
  }

  async componentDidMount() {
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.javaQuestions.length === 0) {
        await this.props.fetchArrays("Java", this.props.user.currentUser.topicLevels.javaDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.javaScriptQuestions.length === 0) {
        await this.props.fetchArrays("JavaScript", this.props.user.currentUser.topicLevels.jsDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.hibernateQuestions.length === 0) {
        await this.props.fetchArrays("Hibernate", this.props.user.currentUser.topicLevels.hibernateDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.nodeQuestions.length === 0) {
        await this.props.fetchArrays("Node", this.props.user.currentUser.topicLevels.nodeDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.sqlQuestions.length === 0) {
        await this.props.fetchArrays("SQL", this.props.user.currentUser.topicLevels.sqlDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.springQuestions.length === 0) {
        await this.props.fetchArrays("Spring", this.props.user.currentUser.topicLevels.springDifficulty + 1, this.props.user.currentUser);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.reactQuestions.length === 0) {
        await this.props.fetchArrays("React", this.props.user.currentUser.topicLevels.reactDifficulty + 1, this.props.user.currentUser);
      }
    }
  }

  render() {
    let consoleNumber : number = +this.props.categoryName.toLocaleString();
    console.log(consoleNumber);
    let consoleString:string = '';
    switch (consoleNumber) {
      case 1:
        consoleString = '\n\n\n\n\n 1 \n\n\n\n\n';
        break;
      case 2:
        consoleString = '\n\n\n\n\n 2 \n\n\n\n\n';
        break;
      case 3:
        consoleString = '\n\n\n\n\n 3 \n\n\n\n\n';
        break;
      case 4:
        consoleString = '\n\n\n\n\n 4 \n\n\n\n\n';
        break;
      case 5:
        consoleString = '\n\n\n\n\n 5 \n\n\n\n\n';
        break;
      case 6:
        consoleString = '\n\n\n\n\n 6 \n\n\n\n\n';
        break;
      case 7:
        consoleString = '\n\n\n\n\n 7 \n\n\n\n\n';
        break;
    }

    console.log(consoleString);

    return (
      <div>
        <QuestionCardComponent question={this.props.question} />
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    user: state.auth,
    currentCat: state.category,
    categoryName: state.category.categoryName,
  }
}

const mapDispatchToProps = {
  fetchArrays: fetchArrays
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionComponent));