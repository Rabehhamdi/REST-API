 import React, { Component } from 'react' 
import { BrowserRouter , Route } from 'react-router-dom'
import INDEX from './component/index';
import Ajoute from './component/Liste Evenement/Ajoute'
import Modification from './component/Liste Evenement/Modification'

export default class ROUTE extends Component {
    render() {
        return (
            <div> 
                <BrowserRouter>
                    <Route exact path="/" component={INDEX} />Edit
                    <Route exact path='/Add' component={Ajoute} />
                    <Route exact path='/Edit/:id' render={(props) => <Modification _id={props.match.params.id} />}  />
                </BrowserRouter>
            </div>
        )
    }
} 