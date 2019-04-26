import React, {Component} from "react";
import API from "../utils/API";
class Books extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        API
            .getAllBooks()
            .then(response => this.setState({ books: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="books">
                <h1>Books</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>authors</th>
                            <th>description</th>
                            <th>image</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.authors}</td>
                                <td>{book.description}</td>
                                <td>{book.image}</td>
                                <td>{book.link}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Books;