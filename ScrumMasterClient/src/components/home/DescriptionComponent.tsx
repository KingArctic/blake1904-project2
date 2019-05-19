import React from 'react';
import cave from '../../assets/cave.png';
import dragon from '../../assets/dragon.png';
import chest from '../../assets/chest.png';
import sword from '../../assets/msword.png';
import icon from '../../assets/snitch.png';
import help from '../../assets/bulb.png';
import { CardText, Card, CardBody, CardTitle } from 'reactstrap';

const Description = () => {
    return (

        <Card id="description" >
        <CardBody>
            <CardTitle><h2>Do you have what it takes to become the next Scrum Master?</h2></CardTitle>
            <CardText >Follow the path of the code maker, increase your knowledge
            in Java, JavaScript, React, Node, Hibernate, Spring, SQL, and more.</CardText>
            <CardText>Refresh your head in a pool of  multiple choice questions 
            enter the dark cave <img className="smallIcons"src={cave} alt=""/>  to be challenge with our code maker open ended programming syntax input box. <br/>
            where your experience points double, use the sword <img className="smallIcons" src={sword} alt=""/>to slide the dragon's doubt <img  className="smallIcons" src={dragon} alt=""/> and get the loot <img className="smallIcons" src={chest} alt=""/> to buy <br/>
            available items at the store including customized icons <img className="smallIcons" src={icon} alt=""/> and question helpers.<img className="smallIcons" src={help} alt=""/><br/>
            </CardText>
            <CardText> <h4>The user with the most points overall will be named, The Scrum Master.</h4></CardText>
        </CardBody>
    </Card>
    )
}

export default Description;