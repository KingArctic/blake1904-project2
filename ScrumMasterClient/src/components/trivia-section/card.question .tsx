import React from 'react';
import { Card, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';
import { User } from '../../model/user';
import { Question } from '../../model/question';


interface IQuestionCardProps {
    question: Question;
    category: string;
    user: User;
}

interface IQuestionState {
    answers: string[];
    random: number[];
    bools: boolean[];
    reward: number;
    masterBool: boolean;

}

export class QuestionCardComponent extends React.Component<IQuestionCardProps, IQuestionState> {
    constructor(props: any) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.continue = this.continue.bind(this);

        let randomwAnswers = [this.props.question.answer, this.props.question.wrong1, this.props.question.wrong2, this.props.question.wrong3];
        let randomArray = [-1, -1, -1, -1];
        let counter = 0;

        while (counter < 4) {
            let temp = Math.floor(Math.random() * 4);
            let found = false;
            for (let i = 0; i < randomArray.length; i++) {
                if (temp === randomArray[i]) {
                    found = true;
                }
            }

            if (!found) {
                randomArray[counter] = temp;
                counter++;
            }
        }

        this.state = {
            answers: randomwAnswers,
            random: randomArray,
            bools: [true, true, true, true],
            reward: this.props.question.difficulty.points,
            masterBool: false,
        };
    }

    async continue() {
        let updateUser = this.props.user;
        console.log(this.props.user);
        updateUser.javaQuestions.splice(0, 1);
        updateUser.points += this.state.reward;
        updateUser.account.amount += this.state.reward;
        console.log(updateUser);

        const resp = await fetch('http://localhost:8081/user', {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(updateUser),
            headers: {
                'content-type': 'application/json'
            }
        });
        if (resp.status === 202) {
            console.log('success');
        }

    }

    async checkAnswer(answer: number) {
        let check = false;
        if (this.state.answers[answer] === this.props.question.answer) {
            check = true;
            for (let i = 0; i < this.state.answers.length; i++) {
                if (i !== answer) {
                    this.state.bools[i] = false;
                    await this.setState({
                        bools: {
                            ...this.state.bools,
                        }
                    })
                }
            }
            await this.setState({
                masterBool: true,
            })
        }
        this.state.bools[answer] = check;
        await this.setState({
            bools: {
                ...this.state.bools,
            }
        })

        if (!check) {
            let percentage = (this.props.question.difficulty.points) / 4;
            let newReward = this.state.reward - percentage;
            await this.setState({
                reward: newReward,
            })
        }
    }

    render() {
        return (
            <div>
                <Card id="user-info-content" >
                    <CardBody>
                        <CardTitle><h5 className="titles">{this.props.question.question}</h5></CardTitle>
                        <CardSubtitle>Current Points Able To Win: {this.state.reward}</CardSubtitle>
                        <div className="column ">
                            <Button disabled={!this.state.bools[this.state.random[0]]} onClick={() => this.checkAnswer(this.state.random[0])}>{this.state.answers[this.state.random[0]]}</Button>
                            <Button disabled={!this.state.bools[this.state.random[1]]} onClick={() => this.checkAnswer(this.state.random[1])}>{this.state.answers[this.state.random[1]]}</Button>
                            <Button disabled={!this.state.bools[this.state.random[2]]} onClick={() => this.checkAnswer(this.state.random[2])}>{this.state.answers[this.state.random[2]]}</Button>
                            <Button disabled={!this.state.bools[this.state.random[3]]} onClick={() => this.checkAnswer(this.state.random[3])}>{this.state.answers[this.state.random[3]]}</Button>
                            {this.state.masterBool && <Button onClick={this.continue}>Continue?</Button>}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}