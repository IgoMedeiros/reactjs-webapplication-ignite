import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Web Scraping',
          category: 'Dev',
          amount: 10000,
          createdAt: new Date('2021-02-12 09:00:00'),
          type: 'deposit'
        },
        {
          id: 2,
          title: 'Aluguel',
          category: 'Casa',
          amount: 1300,
          createdAt: new Date('2021-02-14 09:00:00'),
          type: 'withdraw'
        }
      ],
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
