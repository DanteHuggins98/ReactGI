import React, { Component } from 'react'

export default class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: this.props.person.name,
                phone: this.props.person.phone,
                age: this.props.person.age,
                email: this.props.person.email,
                favoriteColor: this.props.person.favoriteColor
            }
        }
    }
    render() {
        return (
            <div>
                <p>Name: {this.state.person.name}</p>
                <p>Phone: {this.state.person.phone}</p>
                <p>Age: {this.state.person.age}</p>
                <p>Email: {this.state.person.email}</p>
                <p>Favorite Color: {this.state.person.favoriteColor}</p>
            </div>
        )
    }
}