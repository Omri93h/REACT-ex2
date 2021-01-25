import React, { Component } from "react";
import DeliveryItem from "./deliveryItem";

class DeliveryList extends Component {
    constructor(props) {
        super(props);

        this.eachDelivery = this.eachDelivery.bind(this);
    }


    eachDelivery(item, i) {
        return (
            <DeliveryItem key={i} index={item.id} onEdit={this.props.onEdit} onDelete={this.props.onDelete}>
                <span className="delivery-id">{item.id}</span>
                <span>{item.date}</span>
                <span>{item.full_name}</span>
                <span>{item.city}</span>
            </DeliveryItem>
        );
    }

    render() {
        return (
            <div className="delivery-list">
                {this.props.deliveries.map(this.eachDelivery)}
            </div>
        );
    }
}

export default DeliveryList;
