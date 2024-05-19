import React, {useState} from 'react'

const FunctionalState = () => {
    
   // let [price, updatePrice] = useState(16000);//for single value
   // let [productname, updateName] = useState("Real me 8 pro")//array disturing 
   
    //for single single items we use above code, for multiple items we need to use below code

    let [product, updateProduct] = useState({//for multiple
        pname:'Real me 8 pro',
        price:16000
    })
  return (
    <>
    <div style={{'background-color':'grey'}}>
    <h1>Product:{product.pname}</h1>
    <p>Price:{product.price}</p>
    <h1>Product:{JSON.stringify(product)}</h1>
    <input id='pname' />
    <button onClick={() => {

        let mprice= document.getElementById('pname').value
        updateProduct({
            // pname: product.pname,
            // price: mprice,
            //in of place above to proeties we use simply ...product
            ...product,//object disturing
            price : mprice
        })

    }}>Update</button>
    </div>
    
    </>
  )
}

export default FunctionalState
