import React from 'react';
import OrderCard from './OrderCard';

const OrderColumn = ({ title, status, orders, onStatusChange, onRemoveOrder }) => {
  const filteredOrders = orders.filter(order => order.status === status);

  return (
    <div className={`order-column order-column--${status}`}>
      <div className="column-header">
        <h2 className="column-title">{title}</h2>
        <span className="order-count">{filteredOrders.length}</span>
      </div>
      
      <div className="column-content">
        {filteredOrders.map(order => (
          <OrderCard
            key={order.id}
            order={order}
            onStatusChange={onStatusChange}
            onRemoveOrder={onRemoveOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderColumn;

