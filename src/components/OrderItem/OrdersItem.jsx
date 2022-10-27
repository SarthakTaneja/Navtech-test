import React from "react";

const OrderItem = ({order, editOrder, deleteOrder}) => {

    const {number, dueDate, custmName, custmAdd, custmPhn, orderTotal} = order || {};
    return (
    <tr>
        <td>{number}</td>
        <td>{dueDate}</td>
        <td>{custmName}</td>
        <td>{custmAdd}</td>
        <td>{custmPhn}</td>
        <td>{orderTotal}</td>
        <td name={number} onClick={editOrder} className="text-primary" role="button">Edit</td>
        <td name={number} onClick={deleteOrder} className="text-primary" role="button">Delete</td>
    </tr>
  );
}

export default OrderItem;
