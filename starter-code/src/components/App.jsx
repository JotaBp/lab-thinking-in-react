import React, { Component } from 'react';

import Data from '../data.json'

import ProductTable from '../components/ui/productTable/ProductTable'
import SearchForm from './ui/searchForm/SearchForm';

class App extends Component {

  constructor() {
    super()

    this.dataProductsCopy = [...Data.data]
    this.state = { products: this.dataProductsCopy}

  }

  render() {
    
    return (
      <section className="App">
        <h1>IronStore</h1>
        <SearchForm dataProducts={this.state.products}/>
        <ProductTable dataProducts={this.state.products}/>
      </section>
    );
  }
}
export default App;