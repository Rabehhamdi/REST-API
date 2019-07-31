import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import  axios  from 'axios'
import Item from './item';

class Liste extends Component {
   
    state={  
        data : [] 
    } 
    componentDidMount=()=>{
        axios.get("/affiche")
        .then(res =>{
            this.props.update(res.data)
            
        })
    }
    render() {
        let {tab}=this.props
        return (
            <div>
                 
                <Link to="/Add">
                    <button className="btn btn-primary">Ajoute</button> 
                </Link>
                <div style={{ display: "flex",flexWrap:"wrap", paddingTop: "50px"}}> 
                    {tab.map((el,index) => <Item el={el} key={index} id={index} />)}
                </div>
            </div>
        )
    } 
}
 

const mapStateToPropos = (state)=>{
    return {
        tab:state.EvenementReducer
    }
}
const mapdispatchToProps = dispatch => {
    return {
        update: (update) => {
            dispatch({
                type: 'UPDATE',
                update
            })
        }
    }
}

export default connect(mapStateToPropos ,mapdispatchToProps)(Liste)
