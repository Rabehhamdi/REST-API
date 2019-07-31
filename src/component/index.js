import React, { Component } from 'react'

import NAVBAR from './navbar';
import Liste from './Liste Evenement/Liste';

export default class INDEX extends Component {
    render() {
        return (
            <div>
                <NAVBAR />  
                <Liste />
            </div>
        )
    }
}
