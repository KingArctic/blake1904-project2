import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import CategoryCardComponent from './card.category';
import { IAuthState, IState, ICategoryState } from '../../reducers';
import SignInComponent from '../sign-in/sign-in.component';
import { getProgress, getCategories } from '../../actions/category.action';
import { connect } from 'react-redux';



interface IQuestionTypeProps extends RouteComponentProps {
     category: ICategoryState;
     user: IAuthState;
     getProgress: (userID: number) => any;
     getCategories: () => any
 }
export class CategoryPageComponent extends React.Component<IQuestionTypeProps>{

    componentDidMount = () => {
        this.props.getProgress(0);
        this.props.getCategories();
      };

    render() {
        if(this.props.user && this .props.user.currentUser){
            let user = this.props.user.currentUser
        return (
            <div className="container">
            <div className="row" >
            {this.props.category.categoryList.map( thisCategory => (
                <CategoryCardComponent key={'catagory ' + thisCategory.qTypeId} category = {thisCategory} 
                difficulty={user.topicLevels.javaDifficulty}/>
            ))}
            </div>
            </div>
        )
    }else {
    return(
      <div>
      <div> <SignInComponent/></div>
      </div>
    )
  }
}
}
const mapStateToProps = (state: IState) => {
    return {
      user: state.auth,
      category: state.category
  
    }
  }
  
  const mapDispatchToProps = {
    getProgress: getProgress,
    getCategories: getCategories,
  }
  
  export default withRouter (connect(mapStateToProps, mapDispatchToProps)(CategoryPageComponent));