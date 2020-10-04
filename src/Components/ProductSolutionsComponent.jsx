import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import img from '../Images/69.jpg'

class ProductSolutionsComponent extends Component{
    render(){
        return(
            <>
                <Image src={img} fluid />
            </>
        )
    }
}

export default ProductSolutionsComponent