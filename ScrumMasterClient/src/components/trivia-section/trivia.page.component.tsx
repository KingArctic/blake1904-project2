import React from 'react';
import { RouteComponentProps } from 'react-router';
import { QuestionType } from '../../model/QuestionType';
import { Question } from '../../model/question';
import { CategoryCardComponent } from './card.category';


interface IQPageProps extends RouteComponentProps {
    question: Question;
    category: QuestionType;
}
export class QuestionPageComponent extends React.Component<IQPageProps>{

    render() {
        return (
            <div>
                <CategoryCardComponent category={this.props.category} />
            </div>
        )
    }
}