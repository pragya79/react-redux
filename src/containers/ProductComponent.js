import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProductComponent=()=>{
    const products=useSelector((state)=>state.allProducts.products);
    const renderList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return (
            <div className="three column wide" key={id} style={{width:"300px",height:"400px",marginBottom:"20px"}}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards" >
                    <div className="card" style={{width:"300px",height:"400px"}}>
                        <div className="image ">
                            <img src={image} alt={title} className="center aligned container"style={{width:"250px",height:"250px"}}/>
                            <div className="content container">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    })
        return(
            <>{renderList}</>
        )
}
export default ProductComponent;