import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Ajoute extends Component {
    constructor(props) {
        super(props)

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    add = () => {
        this.props.Ajoute({...this.state})
    } 

    
    a = ()=> {  
        axios.post('/ajoute', this.state) 
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name></label> 
                        <input type="text" className="form-control" id="name" name="nom" placeholder="Enter name" onChange={this.handleChange} /> 
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Image></label>
                        <input type="text" className="form-control" id="image" name="img"placeholder="Enter image" onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Description></label>
                        <input type="text" className="form-control" id="description" name="description" onChange={this.handleChange}  placeholder="Enter Description" />
                    </div>
                    <Link to='/'>
                    <button type="submit" onClick={this.add && this.a} className="btn btn-primary">Submit</button>
                    </Link> 
                </form>
            </div>
        )
    }
}
const mapdispatchToProps = dispatch=> {
    return{
        Ajoute: (el)=>{
            dispatch({
                type:'AJOUTE',
                el
            })
        }
    }
}


export default connect(null,mapdispatchToProps)(Ajoute)
 
