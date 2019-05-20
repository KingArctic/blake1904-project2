import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { QuestionType } from '../../model/QuestionType';
import java from '../../assets/java.png';
import sql from '../../assets/postgres.png';
import js from '../../assets/js.png';
import spring from '../../assets/spring.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';
import hibernate from '../../assets/hibernate.png';
import ProgressBarComponent from '../ProgressComponent';
import { withRouter, RouteComponentProps } from 'react-router';


interface IQuestionTypeProps extends RouteComponentProps {
  category: QuestionType;
  difficulty: number;
}

let catIcon = "";
export class CategoryCardComponent extends React.Component<IQuestionTypeProps> {




  render() {
    switch (this.props.category.category) {
      case "Hibernate":
        catIcon = hibernate;
        break;
      case "Java":
        catIcon = java;
        break;
      case "Node":
        catIcon = node;
        break;
      case "JavaScript":
        catIcon = js;
        break;
      case "Spring":
        catIcon = spring;
        break;
      case "React":
        catIcon = react;
        break;
      case "Hibernate":
        catIcon = hibernate;
        break;
        case "SQL":
          catIcon = sql;
          break;
      default:
        catIcon = java;
    }
    return (

      <div>
        <Card id="category-info-content" >
          <CardBody >
            <div >
              <div ><img
                alt="category"
                className="topicImg"
                src={catIcon} /></div>

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



export default withRouter(CategoryCardComponent);
