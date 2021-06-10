import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
const {clipboard} = require('electron')

// // コンポーネントを定義
// export default class App extends Component {
//     render () {
//         return ( <div className='window'>Hello World !</div>)
//     }
// }
// DOMを書き換え
ReactDOM.render(
    <App />,
    document.getElementById('root'))