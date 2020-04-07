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
        this.props.addchatt({ id, name: this.state.value, content: this.state.content, sent: true })
        this.setState({ value: '', content: '' })
        event.preventDefault();
    }

    render() {
        return (
            <form className="footer" onSubmit={this.handleSubmit}>
                <div className="card" >
                    <li className="list-group-item borderless d-flex  align-items-center li">
                        <div className="speech-bubble col-3">
                            <div className="form-label-group mb-0">
                                <input type="text" name="value" className="form-control border-2 py-4 bg-light " placeholder="Name" required={true}
                                    onChange={this.handleChange} value={this.state.value} />
                            </div>
                        </div>
                        <div className="speech-bubble col-8">
                            <div className="input-group">
                                <input name="content" type="text" placeholder="Type a message" aria-describedby="button-addon2" required={true}
                                    className="form-control border-2 py-4 bg-light"
                                    onChange={this.handleChange} value={this.state.content} />
                            </div>
                        </div>
                        <div className="speech">
                            <div className="input-group">
                                <button type="submit" className="btn btn-primary btn-circle"><i className="fas fa-paper-plan"></i></button>
                            </div>
                        </div>
                    </li>
                </div>
            </form>
        );
    }
}