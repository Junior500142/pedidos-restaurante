import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="/src/assets/images/logo-feijuca.png" 
            alt="Feijuca Gourmet" 
            className="logo"
          />
        </div>
        
        <div className="header-actions">
          <Button 
            variant="destructive" 
            className="exit-button"
            onClick={() => console.log('Sair clicado')}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

