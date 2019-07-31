import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Modification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            description: '',
            img:'' 

        }

    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount = () => {
        this.setState({
            ...this.props.tab.filter((el, index) => el._id === this.props._id)[0]
        })
    }
   
    a = () => {
        axios.put(`/Modification/${this.props._id}`,{ nom:this.state.nom,
            description: this.state.description,
            img: this.state.img  } ) 
        .then(()=>this.props.modification(this.state))
         
    }
    
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name></label>
                        <input type="text" className="form-control" id="name" name="nom" value={this.state.nom}  onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Image></label>
                        <input type="text" className="form-control" id="image" name="img" value={this.state.img}  onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Description></label>
                        <input type="text" className="form-control" id="description" value={this.state.description} name="description" onChange={this.handleChange} placeholder="Enter Description" />
                    </div>
                    <Link to="/">
                        <button type="submit" onClick={this.a} className="btn btn-primary">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}
const mapStateToPropos = (state) => {
    return {
        tab: state.EvenementReducer
    }
}

const mapdispatchToProps = dispatch => {
    return {
        modification: (element) => {
            dispatch({
                type: 'MODIFICATION',
                element
            })
        }
    }
}


export default connect(mapStateToPropos, mapdispatchToProps)(Modification)

