import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addQuantity,subtractQuantity,removeItem } from './actions'
import Checkout from './Checkout'

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id)
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id)
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        let addedItems = this.props.items.length ? (this.props.items.map(item => {
            return (
                <li className="collection-item avatar col s12" key={item.id} style={{paddingLeft:"10px"}}>
                    <div className="item-img">
                        <img src={item.img} alt={item.img} className="responsive-img" />
                    </div>

                    <div className="item-desc">
                        <span className="title">{item.title}</span>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                        <p>
                            <b>Quantity: {item.quantity}</b>
                        </p>
                        <div className="add-remove">
                          <Link to="/cart"><i onClick={()=>this.handleAddQuantity(item.id)} className="material-icons" >arrow_drop_up</i></Link> 
                          <Link to="/cart"><i onClick={()=>this.handleSubtractQuantity(item.id)} className="material-icons">arrow_drop_down</i></Link> 
                        </div>
                        <button onClick={()=>this.handleRemove(item.id)} className="waves-effect waves-light btn pink remove">Remove</button>
                    </div>
                </li>
            )
        })
        ) : (<p>Nothing.</p>)
        return (
            <>
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection row">
                        {addedItems}
                    </ul>
                </div>
            </div>
            <Checkout/>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)