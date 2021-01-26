import React from 'react';
import axios from 'axios';

import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'country', headerName: 'Country', filterable: false, width: 160,
    valueGetter: (params) =>
    `${params.getValue('c')}`,
  },
  {
    field: 'buy',
    headerName: 'We Buy',
    filterable: false,
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('br')}`,
  },
  { field: 'rate', 
    headerName: 'Exchange Rate', 
    filterable: false,
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('r')}`, },
  {
    field: 'sell',
    headerName: 'We Sell',
    filterable: false,
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('sr')}`,
  },
];

var calculateBuyRate = (exchangeRate) => {
  return exchangeRate + (exchangeRate * 0.2)
}

var calculateSellRate = (exchangeRate) => {
  return exchangeRate - (exchangeRate * 0.2)
}

export default class Template extends React.Component {
  
  constructor(){
    super()
    this.state = {
      datas: []
    }
  }

  componentDidMount() {
    axios.get("https://api.exchangeratesapi.io/latest?base=IDR")
      .then(response => {
        var step = []
        var index = 1
        Object.entries(response.data.rates).map(function([country, rate]) {
          step.push({ id: index, c: country, br: calculateBuyRate(rate), r: rate, sr: calculateSellRate(rate) })
          index++
        })
        this.setState({
          datas: step
        })
      })
  }

  render() {
    // console.log(this.state.rates, '<============== rates ==============>');
    return (
      <div style={{ height: 500, width: '50%', display: 'flex', align: 'center', justifyContent: 'center' }}>
        <DataGrid style={{ backgroundColor: 'red' }} rows={this.state.datas} columns={columns} pageSize={6} />
      </div>
    )  
  }
}