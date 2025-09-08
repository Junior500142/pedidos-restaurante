import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Controls from './components/Controls';
import OrderColumn from './components/OrderColumn';
import AddOrderModal from './components/AddOrderModal';
import { mockOrders } from './data/mockOrders';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isQueueStopped, setIsQueueStopped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carregar pedidos mock na inicialização
  useEffect(() => {
    setOrders(mockOrders);
  }, []);

  // Filtrar pedidos baseado na pesquisa
  const filteredOrders = orders.filter(order => {
    const searchLower = searchTerm.toLowerCase();
    return (
      order.cliente.toLowerCase().includes(searchLower) ||
      order.itens.some(item => item.toLowerCase().includes(searchLower))
    );
  });

  // Alterar status do pedido
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Remover pedido
  const handleRemoveOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  // Adicionar novo pedido
  const handleAddOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  // Toggle da fila
  const handleToggleQueue = () => {
    setIsQueueStopped(prev => !prev);
  };

  // Abrir modal de adicionar pedido
  const handleOpenAddModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="top-controls">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <Controls
            isQueueStopped={isQueueStopped}
            onToggleQueue={handleToggleQueue}
            onAddOrder={handleOpenAddModal}
          />
        </div>

        <div className="kanban-board">
          <OrderColumn
            title="Recebido"
            status="recebido"
            orders={filteredOrders}
            onStatusChange={handleStatusChange}
            onRemoveOrder={handleRemoveOrder}
          />
          <OrderColumn
            title="Em Produção"
            status="em_producao"
            orders={filteredOrders}
            onStatusChange={handleStatusChange}
            onRemoveOrder={handleRemoveOrder}
          />
          <OrderColumn
            title="Entrega"
            status="entrega"
            orders={filteredOrders}
            onStatusChange={handleStatusChange}
            onRemoveOrder={handleRemoveOrder}
          />
        </div>
      </main>

      <AddOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddOrder={handleAddOrder}
      />
    </div>
  );
}

export default App;

