import React, { Component } from "react";

class DeliveryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            date: "",
            name: "",
            city: ""
        };

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    edit(delivery) {
        this.setState(() => ({ id: delivery.id, date: delivery.date, name: delivery.name, city: delivery.city }));
    }


    nextId(deliveries = []) {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave({ id: null, date: this.state.date, name: this.state.name, city: this.state.city })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="date-input" placeholder="Enter Date..."
                    value={this.state.date} onChange={this.handleDateChange} /><br />
                <input type="text" id="name-input" placeholder="Enter Name..."
                    value={this.state.name.value} onChange={this.handleNameChange} /><br />
                <input type="text" id="city-input" placeholder="Enter City..."
                    value={this.state.city.value} onChange={this.handleCityChange} /><br />
                <input type="submit" value="Save" id="save-button" />
            </form>
        );
    }
}

export default DeliveryForm;
