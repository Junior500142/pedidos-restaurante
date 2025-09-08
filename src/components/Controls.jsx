import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Plus, Pause, Play } from 'lucide-react';

const Controls = ({ isQueueStopped, onToggleQueue, onAddOrder }) => {
  return (
    <div className="controls">
      <Button
        variant={isQueueStopped ? "default" : "secondary"}
        onClick={onToggleQueue}
        className="queue-button"
      >
        {isQueueStopped ? (
          <>
            <Play className="w-4 h-4 mr-2" />
            Retomar Fila
          </>
        ) : (
          <>
            <Pause className="w-4 h-4 mr-2" />
            Parar Fila
          </>
        )}
      </Button>
      
      <Button
        onClick={onAddOrder}
        disabled={isQueueStopped}
        className="add-order-button"
      >
        <Plus className="w-4 h-4 mr-2" />
        Adicionar Pedido (Mock)
      </Button>
    </div>
  );
};

export default Controls;

