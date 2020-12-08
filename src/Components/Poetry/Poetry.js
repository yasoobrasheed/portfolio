import React from 'react'
import './Poetry.css'
import { NavBar } from '../NavBar'

import page0 from './assets/0.jpg'
import page2 from './assets/2.jpg'
import page3 from './assets/3.jpg'
import page4 from './assets/4.jpg'
import page5 from './assets/5.jpg'
import page9 from './assets/9.jpg'
import page10 from './assets/10.jpg'

export class Poetry extends React.Component {
    render() {
        var items = [page0, page2, page3, page4, page5, page9, page10]
        return (
            <div>
                <NavBar navType="project" variant="light"/>
                {items.map(item => <img id="someim" src={item} alt="poempage"/>)} 
            </div>
        )
    }
}