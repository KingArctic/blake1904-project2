import React from 'react';
import { Card, CardBody, Row, CardTitle } from 'reactstrap';

interface iQuote {
    quote: string;
    author: string;
}
export class QuoteComponent extends React.Component<any,iQuote> {
    constructor(props: any) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        }
    }
    componentDidMount = async () => {
         
            const resp = await fetch('http://quotes.stormconsultancy.co.uk/random.json');
            const body = await resp.json();
            // const {author, quote} = body;
            console.log(body);
            this.setState({
                author: body.author,
                quote: body.quote
            })
        }
        
    

    render() {
        return (
     
<Card id="quote-card-content">
<CardBody className="justify-content-center text-center">    
    <Row className="justify-content-center"><CardTitle><h5  className="quote">{this.state.quote}</h5></CardTitle></Row>
    <Row className="justify-content-center"><CardTitle><h5 className="author">{this.state.author}</h5></CardTitle></Row>
</CardBody>
</Card>

        );
    } 
}

export default QuoteComponent;