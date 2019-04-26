import React, { Component } from "react";
import API from "../utils/API";

class Add extends Component {

    state = {
        title: "",
        authors: "",
        description: "",
        image: "",
        link: ""
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        API
            .addNewBook(this.state)
            .then(response => {
                alert(`Added new book named: ${response.data.title}`)
                this.setState({
                    title: "",
                    authors: "",
                    description: "",
                    image: "",
                    link: ""
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="add">
                <h1>Add New Book</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="title"
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="github">authors</label>
                        <input
                            type="text"
                            className="form-control"
                            name="authors"
                            placeholder="authors"
                            onChange={this.handleInputChange}
                            value={this.state.authors}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="description"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="image"
                            onChange={this.handleInputChange}
                            value={this.state.image}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">link</label>
                        <input
                            type="text"
                            className="form-control"
                            name="link"
                            placeholder="link"
                            onChange={this.handleInputChange}
                            value={this.state.link}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
}

export default Add;