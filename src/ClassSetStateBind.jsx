import React from "react";

class ClassSetStateBind extends React.Component{
    state={
        product: "Real me 8 pro",
        price : 20000
    }
    constructor(){
        super();
        this.updatePrice = this.updatePrice.bind(this)
    }
    render(){
        return(
            <>
             <div style={{'background-color':'blue', 'color':'white'}}>
            <h2>product: {this.state.product}</h2>
           <p>Price: {this.state.price}</p>
            <input id='price' type='number'/>
            <button onClick={this.updatePrice}>Update</button>
           </div>
            </>
        )
    }
    updatePrice(){
        let p =  document.getElementById('price').value;
        console.log(p);
        this.setState({
            price:p
        }, () => {
            console.log(this.state)
        })
    }
}

export default ClassSetStateBind