# Sistema de Pedidos - Cozinha

Aplicação React para substituir papéis usados em cozinhas de restaurantes para acompanhar pedidos em tempo real.

## 🎯 Funcionalidades

- **Layout Kanban**: Pedidos organizados em 3 colunas por status (Recebido, Em Produção, Entrega)
- **CRUD Completo**: Criar, alterar status e remover pedidos
- **Busca Inteligente**: Filtrar pedidos por nome do cliente ou item
- **Controle de Fila**: Botão para parar/retomar criação de novos pedidos
- **Design Responsivo**: Funciona em desktop, tablet e celular
- **CSS Puro**: Sem dependências de bibliotecas de estilo externas

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **pnpm** (recomendado) ou **npm**

### Instalação

1. **Extraia o arquivo .zip** em uma pasta de sua escolha

2. **Navegue até a pasta do projeto**:
   ```bash
   cd pedidos-cozinha
   ```

3. **Instale as dependências**:
   ```bash
   pnpm install
   ```
   
   Ou se preferir usar npm:
   ```bash
   npm install
   ```

### Executando a Aplicação

1. **Inicie o servidor de desenvolvimento**:
   ```bash
   pnpm run dev
   ```
   
   Ou com npm:
   ```bash
   npm run dev
   ```

2. **Abra o navegador** e acesse:
   ```
   http://localhost:5173
   ```

3. **Para parar o servidor**, pressione `Ctrl + C` no terminal

## 📁 Estrutura do Projeto

```
pedidos-cozinha/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/
│   │   └── images/         # Imagens (logo)
│   ├── components/         # Componentes React
│   │   ├── Header.jsx      # Cabeçalho com logo e botão sair
│   │   ├── SearchBar.jsx   # Barra de pesquisa
│   │   ├── Controls.jsx    # Controles (parar fila, adicionar)
│   │   ├── OrderCard.jsx   # Card individual do pedido
│   │   ├── OrderColumn.jsx # Coluna de status
│   │   └── AddOrderModal.jsx # Modal para adicionar pedidos
│   ├── data/
│   │   └── mockOrders.js   # Dados mock dos pedidos
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos CSS puros
│   └── main.jsx            # Ponto de entrada
├── package.json            # Dependências e scripts
└── README.md              # Este arquivo
```

## 🎨 Como Usar

### Visualizar Pedidos
- Os pedidos são exibidos em 3 colunas: **Recebido**, **Em Produção** e **Entrega**
- Cada pedido mostra: número, cliente, itens e observações
- Cores diferentes para cada status

### Alterar Status do Pedido
- Clique no botão azul no card do pedido para avançar para o próximo status
- Fluxo: Recebido → Em Produção → Entrega

### Remover Pedido
- Clique no ícone de lixeira (🗑️) no canto superior direito do card

### Adicionar Novo Pedido
- Clique em **"Adicionar Pedido (Mock)"**
- Preencha: nome do cliente, itens (separados por vírgula) e observações
- Clique em **"Adicionar Pedido"**

### Pesquisar Pedidos
- Use a barra de pesquisa no topo
- Busca por nome do cliente ou itens do pedido

### Controlar Fila
- **"Parar Fila"**: Desabilita criação de novos pedidos
- **"Retomar Fila"**: Reabilita criação de novos pedidos

## 📱 Responsividade

A aplicação se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop**: Layout em 3 colunas lado a lado
- **Tablet**: Layout em 3 colunas com scroll horizontal
- **Mobile**: Layout em coluna única, uma abaixo da outra

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca principal
- **Vite**: Build tool e servidor de desenvolvimento
- **CSS Puro**: Estilização sem bibliotecas externas
- **Lucide React**: Ícones
- **JavaScript (JSX)**: Linguagem de programação

## 🎯 Scripts Disponíveis

- `pnpm run dev`: Inicia servidor de desenvolvimento
- `pnpm run build`: Gera build de produção
- `pnpm run preview`: Visualiza build de produção
- `pnpm run lint`: Executa linter para verificar código

## 📝 Observações Importantes

1. **Dados Mock**: A aplicação usa dados fictícios que são resetados a cada reload
2. **Estado Local**: Os dados são mantidos apenas na memória (useState)
3. **CSS Puro**: Não utiliza Tailwind, Styled Components ou outras libs de CSS
4. **Sem Backend**: Aplicação 100% frontend, sem integração com APIs

## 🐛 Solução de Problemas

### Erro de Porta em Uso
Se a porta 5173 estiver ocupada:
```bash
pnpm run dev -- --port 3000
```

### Problemas de Dependências
Limpe o cache e reinstale:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Problemas de Performance
Para melhor performance em desenvolvimento:
```bash
pnpm run dev -- --host
```

---

**Desenvolvido para substituir papéis de acompanhamento em cozinhas de restaurantes** 🍽️

