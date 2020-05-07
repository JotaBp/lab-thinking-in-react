import React, { Component } from 'react';
import ProductRow from '../productRow/ProductRow.js'

class ProductTable extends Component {


    render() {
        return (
            <table className="contact">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.dataProducts.map((elm, idx) => (<ProductRow key={idx} name= {elm.name} price={elm.price} />) )         }
    
                </tbody>
            </table>
        );
    }
}
export default ProductTable