import React, { Component } from 'react'
import useCount from '../atoms/state'
function Atomtest () {
    const { state } = useCount()
    return (
            <div>
                <button onClick={() => state.set(state.count - 1)}>Down</button>
                <p>{state.count}</p> 
                <button onClick={() => state.set(state.count + 1)}>Up</button>
            </div>
        )
}

export default Atomtest
