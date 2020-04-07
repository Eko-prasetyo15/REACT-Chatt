import React, { Component } from 'react';


export default class chattFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', content: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const id = Date.now();
        this.props.addchatt({id, name: this.state.value, content: this.state.content, sent: true })
        this.setState({ value: '', content: '' })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <label className="badge badge-primary">
                        Name :
                    </label>
                    <br></br>
            <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
            <br></br>
            <input className ="form-control form-control-lg" type="text" name="content" value={this.state.content} onChange={this.handleChange} />
                </div>
            
                <input className= "btn btn-primary" type="submit" value="Submit" />
            </form>
        );
    }
}