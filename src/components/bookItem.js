import React from "react";
import Card from 'react-bootstrap/Card'; // imports the card style

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.book.thumbnailUrl}></img>
            <footer >
                {this.props.book.authors[0]}
                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}