import React, { Component } from 'react'
import Atomtest from './Atomtest'
import Textbox from './Textbox'
import { RecoilRoot, atom, useRecoilState } from 'recoil'


// コンポーネントを定義
class App extends Component {
    render () {
        return ( 
        <RecoilRoot>
            <div className='window'>Hello World !
                <Textbox/>
                <Atomtest/>
            </div>
        </RecoilRoot>
        )
    }
}
export default App
