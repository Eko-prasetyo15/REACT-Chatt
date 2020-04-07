import React, { Component } from 'react';
import ChattList from './chattList';
import ChattForm from './chattForm';
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


export default class ChattBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

        this.addchatt = this.addchatt.bind(this);
        this.deletechatt = this.deletechatt.bind(this);
    }
    componentDidMount() {
        request.get('chatts')
            .then((response) => {
                console.log(response)
                this.setState({
                    data: response.data.map(item => {
                        item.sent = true;
                        return item
                    })
                })
            })
            .catch((err) => {
                alert(err)
            })
    }
    addchatt(chatt) {
        this.setState((state) => ({
            data: [...state.data, chatt]
        }))
        request.post('chatts', chatt)
            .then((response) => {

            })
            .catch((err) => {
                this.setState((state => ({
                    data: state.data.map(item => {
                        if (item.id == chatt.id) {
                            item.sent = false
                        }
                        return item;
                    })
                })))
            })
    }

    deletechatt(id) {
        this.setState((state) => ({
            data: state.data.filter(item => item.id != id)
        }));
        request.delete(`chatts/${id}`)
            .then((response) => {
                console.log('berhasil')
            })
            .catch((err) => {
                alert(err)
            })
    }

    resendchatt = (chatt) => {
        request.post('chatts', chatt)
            .then((response) => {
                this.setState((state) => ({
                    data: state.data.map(item => {
                        if (item.id == chatt.id) {
                            item.sent = true;
                        }
                        return item;
                    })
                }))
            })
            .catch((err) => {
                this.setState((state) => ({
                    data: state.data.map(item => {
                        if (item.id == chatt.id) {
                            item.sent = false;
                        }
                        return item;
                    })
                }))
            })
    }

    render() {
        return (


            <div>


                <h1 className="text-center"> React Chatt Aplication</h1>
                <div className="card text-center w-50">
                    <div class="card-body">
                        <div class="container mt-5 mb-5">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <ul class="timeline">
                                        <li>
                                            <ChattList data={this.state.data} delete={this.deletechatt} />

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ChattForm addchatt={this.addchatt} />

                    </div>
                </div>
            </div>
        )
    }
}