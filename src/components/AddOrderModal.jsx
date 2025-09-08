import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { X } from 'lucide-react';

const AddOrderModal = ({ isOpen, onClose, onAddOrder }) => {
  const [formData, setFormData] = useState({
    cliente: '',
    itens: '',
    observacoes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.cliente.trim() || !formData.itens.trim()) {
      alert('Por favor, preencha pelo menos o nome do cliente e os itens.');
      return;
    }

    const newOrder = {
      id: Date.now(),
      cliente: formData.cliente.trim(),
      itens: formData.itens.split(',').map(item => item.trim()).filter(item => item),
      observacoes: formData.observacoes.trim(),
      status: 'recebido'
    };

    onAddOrder(newOrder);
    setFormData({ cliente: '', itens: '', observacoes: '' });
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Adicionar Novo Pedido</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="close-button"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="cliente" className="form-label">
              Nome do Cliente *
            </label>
            <input
              id="cliente"
              type="text"
              value={formData.cliente}
              onChange={(e) => handleChange('cliente', e.target.value)}
              className="form-input"
              placeholder="Ex: João Silva"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="itens" className="form-label">
              Itens do Pedido * (separados por vírgula)
            </label>
            <input
              id="itens"
              type="text"
              value={formData.itens}
              onChange={(e) => handleChange('itens', e.target.value)}
              className="form-input"
              placeholder="Ex: Feijoada Completa, Coca-Cola"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="observacoes" className="form-label">
              Observações
            </label>
            <textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => handleChange('observacoes', e.target.value)}
              className="form-textarea"
              placeholder="Ex: Sem pimenta"
              rows="3"
            />
          </div>
          
          <div className="modal-actions">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type="submit">
              Adicionar Pedido
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrderModal;

