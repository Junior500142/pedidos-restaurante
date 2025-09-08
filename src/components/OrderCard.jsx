import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Trash2 } from 'lucide-react';

const OrderCard = ({ order, onStatusChange, onRemoveOrder }) => {
  const getNextStatus = (currentStatus) => {
    const statusFlow = {
      'recebido': 'em_producao',
      'em_producao': 'entrega',
      'entrega': null
    };
    return statusFlow[currentStatus];
  };

  const getStatusLabel = (status) => {
    const labels = {
      'recebido': 'Recebido',
      'em_producao': 'Em Produção',
      'entrega': 'Entrega'
    };
    return labels[status];
  };

  const nextStatus = getNextStatus(order.status);

  return (
    <div className={`order-card order-card--${order.status}`}>
      <div className="order-header">
        <h3 className="order-title">PEDIDO {order.id}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemoveOrder(order.id)}
          className="remove-button"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="order-content">
        <div className="customer-name">
          <strong>{order.cliente}</strong>
        </div>
        
        <div className="order-items">
          {order.itens.map((item, index) => (
            <div key={index} className="order-item">
              {item}
            </div>
          ))}
        </div>
        
        {order.observacoes && (
          <div className="order-observations">
            <strong>Obs:</strong> {order.observacoes}
          </div>
        )}
      </div>
      
      <div className="order-actions">
        {nextStatus && (
          <Button
            onClick={() => onStatusChange(order.id, nextStatus)}
            className="status-button"
            size="sm"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            {getStatusLabel(nextStatus)}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;

