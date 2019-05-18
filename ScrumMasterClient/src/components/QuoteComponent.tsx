import React from 'react';

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
            <div className="something" >
            <div className="quoteContainer">
                <h3 className="quote">{this.state.quote}</h3>
                <p className="author">{this.state.author}</p>
            </div>
            <div className="Description">
            <h2>Do you have what it takes to become the next Scrum Master?</h2>
            <p>Follow the path of the code maker, increase your knowledge, slay the dragon of inner ignorance, get the loot, become the next next Scrum Master. </p>
            </div>
            </div>
        );
    } 
}

export default QuoteComponent;