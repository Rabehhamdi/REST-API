import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import axios from 'axios'
class Item extends Component {
    constructor(props) {
        super(props)
    }
      
     
    delete=()=> { 
        console.log(this.props.el.id)
        axios.delete(`/supprimer/${this.props.el._id}`)
        .then(()=>this.props.remove(this.props.el._id))
        .catch((err)=>alert(err))
             
    }
    render() {
        return (
            <div style={{ paddingLeft: "50px"}} >
                <div className="card" style={{ width: "18rem"}}>
                    <img className="card-img-top" src={this.props.el.img} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">{this.props.el.nom}</h5>
                        <p className="card-text">{this.props.el.description}</p>
                        <Link to={`/Edit/${this.props.el._id}`}>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </Link>
                        
                        <button onClick={this.delete}>Remove</button>
                        </div>
                </div>
            </div>
        )   
    }   
    
}
const mapDispatchToProps = dispatch => {
    return {
        remove: (id) => {
            dispatch({
                type: 'SUPPRIMER',
                id
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Item)
