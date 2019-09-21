import React from 'react';
import './item-list.css';

const ItemList = (props) => {

    const {data, onItemSelected, children: renderLabel} = props;
    const itemArr = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item); //this.props.children(item)
        return(
            <div className="list-group-item list-group-item-action" key={id} onClick={() => {onItemSelected(id)}}>
                {label}
            </div>
        );
    });

    return(
        <div className="list-group itemList">
            {itemArr}
        </div>
    )

};

export default ItemList;