import React, { Component } from "react";
import DeliveryList from './deliveryList';
import DeliveryForm from './deliveryForm';
import DeliveriesData from "./../Data/Deliveries.json"

class Delivery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            newDelivery: {},
            deliveries: []
        };

        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.edit = this.edit.bind(this);
    }



    componentDidMount() {
        DeliveriesData.map(item => this.add(
            { id: item.id, date: item.date, name: item.full_name, city: item.city })
        )
    }

    save({ id = null, date = 'date', name = 'name', city = 'city' }) {
        this.setState({ newDelivery: { id: id, date: date, name: name, city: city } });
    }

    update(newDelivery, i) {
        this.setState((prevState) => ({
            deliveries: prevState.deliveries.map((delivery) =>
                delivery.id !== i ? delivery : { ...delivery, delivery: newDelivery }
            ),
        }));
        console.log(`Updated ${i} ! newDelivery: ${newDelivery} `);
    }

    delete(id) {
        this.setState((prevState) => ({
            deliveries: prevState.deliveries.filter((delivery) => delivery.id !== id),
        }));
    }

    edit(i) {
        this.setState(() => ({
            editing: true,
        }));


    }

    add({ id = null, date = 'default date', name = 'No Name', city = 'default city' }) {
        this.setState(prevState => ({
            deliveries: [
                ...prevState.deliveries, {
                    id: id !== null ? id : this.nextId(prevState.deliveries),
                    date: date,
                    full_name: name,
                    city: city
                }]
        }))
    }


    nextId(deliveries = []) {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    render() {
        return (
            <div className="delivery">
                <div className="scene">
                    <div className="delivery-main">
                        <DeliveryList deliveries={this.state.deliveries} onDelete={this.delete} onEdit={this.edit} />
                        <DeliveryForm onSave={this.add} />
                    </div>
                </div>
                <div className="mobel"></div>
            </div>
        );
    }
}

export default Delivery;
