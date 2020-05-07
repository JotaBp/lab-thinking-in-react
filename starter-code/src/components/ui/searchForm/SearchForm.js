import React, { Component } from 'react'
import './SearchForm.css'

    class SearchForm extends Component {

        constructor() {
            super()

            this.state = { 
                search: "",
                stock: false
            }
        }

        handleChange = e => {

            this.setState({
                [e.target.name] : e.target.value
            })

        }

        searchProduct = () => {
            let nameProduct = this.dataProductsCopy.name

            nameProduct.filter(product => product.lowerCase().includes(this.state.search))

        }



        
        render() {
            return (
                <>
                    <h1>Search</h1>


                        <label>Search
                        <input type="search" value={this.state.search} onChange={this.handleChange} name="searchProduct"/>
                        </label>

                        <label>Only Show products on stock
                        <input type="checkbox" value={this.state.stock} />
                        </label>

                </>
            )
        }
    }

export default SearchForm