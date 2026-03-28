import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from './../../components/context/StoreContext';
import axios from 'axios';
import { assets } from './../../assets/assets';

const MyOrders = () => {

  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + '/api/order/userorders',
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>

      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">

              <img src={assets.parcel_icon} alt="parcel" />

              <div className="order-details">
                <p className="order-items">
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index !== order.items.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                <p className="order-amount">₹{order.amount}</p>
                <p className="order-count">Items: {order.items.length}</p>

                <p className="order-status">
                  <span className="dot"></span>
                  {order.status}
                </p>
              </div>

              <button onClick={fetchOrders}>Track</button>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;