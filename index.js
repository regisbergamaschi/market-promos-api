const express = require('express');
const app = express();

const promotions = [
  {
    id: 1,
    product: 'Peito de frango',
    price: 17.99,
    market: 'Angeloni - Trindade',
    category: 'Carnes',
    validUntil: '2026-02-10'
  },
  {
    id: 2,
    product: 'Arroz Branco 5kg',
    price: 22.90,
    market: 'Giassi',
    category: 'Básicos',
    validUntil: '2026-02-08'
  },
  {
    id: 3,
    product: 'Leite Integral',
    price: 3.89,
    market: 'Imperatriz',
    category: 'Bebidas',
    validUntil: '2026-02-09'
  }
];

app.get('/', (req, res) => {
  res.send('API Market Promos rodando 🚀');
});

app.get('/promotions', (req, res) => {
  res.json(promotions);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
