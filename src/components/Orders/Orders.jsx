import React, { useState } from "react";
import AddEditOrder from "../AddEditOrder/AddEditOrder";
import OrderItem from "../OrderItem/OrdersItem";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [editOrderData, setEditOrder] = useState();
  const [deleteOrderData, setDeleteOrder] = useState();
  const [addFormVisible, setAddFormVisibility] = useState(false);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);

  const openAddOrderForm = () => {
    setAddFormVisibility(true);
  }

  const addEditOrder = modOrder => {
    const modOrders = orders.filter(order => order.number !== modOrder.number);
    modOrders.push(modOrder);
    setOrders(modOrders);
    setAddFormVisibility(false)
    setEditOrder();
  }

  const editOrder = event => {
    const orderNumber = event.currentTarget.getAttribute('name');
    const order = orders.find(order => order.number === orderNumber);
    setEditOrder(order);
    openAddOrderForm();
  }

  const confirmDeleteOrder = () => {
    const modOrders = orders.filter(order => order.number !== deleteOrderData.number);
    setOrders(modOrders);
    setDeleteOrder();
    setDeleteConfirmationVisible(false);
  }

  const deleteOrder = event => {
    const orderNumber = event.currentTarget.getAttribute('name');
    const order = orders.find(order => order.number === orderNumber);
    setDeleteOrder(order);
    setDeleteConfirmationVisible(true);
  }

  const OrdersView = orders?.map((order => <OrderItem key={order.number} order={order} editOrder={editOrder} deleteOrder={deleteOrder} />))

  return (
    <div>
      <h1>Orders</h1>
      <button onClick={openAddOrderForm} className="btn btn-primary mb-10">Add New Order</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col">Order Due Date</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Address</th>
            <th scope="col">Customer Phone Number</th>
            <th scope="col">Order Total</th>
          </tr>
          {OrdersView}
        </thead>
      </table>
      {addFormVisible && <AddEditOrder addOrderCallback={addEditOrder} order={editOrderData} setAddFormVisibility={setAddFormVisibility} />}
      {deleteConfirmationVisible && <div className="position-fixed w-100 h-100 top-0" style={{backgroundColor:'rgba(0,0,0,0.5)'}} onClick={()=>{
            setDeleteConfirmationVisible(false);
        }} >
        <div className="p-3 mb-2 bg-white overflow-auto d-flex flex-column align-items-center" style={{margin:'10%'}} onClick={(event)=>event.stopPropagation()}>
          <span>Are you sure you want to delete this order?</span>
          <button
            type="submit"
            className="button is-block is-info is-fullwidth btn btn-primary"
            onClick={confirmDeleteOrder}
          >
            Yes
          </button>
          <button
            type="submit"
            className="button ml=10 is-block is-info is-fullwidth btn btn-secondary"
            onClick={()=>{
              setDeleteConfirmationVisible(false);
          }}
          >
            No
          </button>
        </div>
      </div>}
    </div>
  );
}

export default Orders;
