import React, { Component } from 'react';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

class DeliveryItem extends Component {
    constructor(props) {
        super(props);

        this.newDelivery = ""
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit() {
        this.props.onEdit(this.props.index);
    }

    delete() {
        this.props.onDelete(this.props.index);
    }

    render() {
        return (
            <div className="DeliveryItem">
                <div>
                    {this.props.children}
                </div>
                <span className="delivery-item-buttons">
                    <i onClick={this.edit}><EditRoundedIcon /></i>
                    <i onClick={this.delete}><DeleteRoundedIcon /></i>
                </span>
            </div>
        )

    }
}

export default DeliveryItem