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
  fetchArrays: (category: string, difficulty: number, user: User, history: any) => any;
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
    const test = this.state.currentCartegory.currentCategory;
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.javaQuestions.length === 0) {
        await this.props.fetchArrays("Java", this.props.user.currentUser.topicLevels.javaDifficulty + 1, this.props.user.currentUser, this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.javaScriptQuestions.length === 0) {
        await this.props.fetchArrays("JavaScript", this.props.user.currentUser.topicLevels.jsDifficulty + 1, this.props.user.currentUser, this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.hibernateQuestions.length === 0) {
        await this.props.fetchArrays("Hibernate", this.props.user.currentUser.topicLevels.hibernateDifficulty + 1, this.props.user.currentUser,this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.nodeQuestions.length === 0) {
        await this.props.fetchArrays("Node", this.props.user.currentUser.topicLevels.nodeDifficulty + 1, this.props.user.currentUser ,this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.sqlQuestions.length === 0) {
        await this.props.fetchArrays("SQL", this.props.user.currentUser.topicLevels.sqlDifficulty + 1, this.props.user.currentUser, this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.springQuestions.length === 0) {
        await this.props.fetchArrays("Spring", this.props.user.currentUser.topicLevels.springDifficulty + 1, this.props.user.currentUser, this.props.history);
      }
    }
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser.reactQuestions.length === 0) {
        await this.props.fetchArrays("React", this.props.user.currentUser.topicLevels.reactDifficulty + 1, this.props.user.currentUser,this.props.history);
      }
    }
  } 

  render() {
    console.log(this.props.currentCat.currentCategory);
    let thisUser;
    if(this.props.user && this.props.user.currentUser && this.props.user.currentUser.javaQuestions){

    return (
      <div>
        <QuestionCardComponent question={this.props.user.currentUser.javaQuestions[0]} user={thisUser} category={this.props.currentCat.currentCategory.category}/>
        
      </div>
    )
  } else {
    return (
      <div>IDK</div>
    )
  }
}
}

const mapStateToProps = (state: IState) => {
  return {
    user: state.auth,
    currentCat: state.category
  }
}

const mapDispatchToProps = {
  fetchArrays: fetchArrays
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionComponent));