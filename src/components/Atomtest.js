import React, { Component } from 'react'
import { RecoilRoot, atom, useRecoilState } from 'recoil'



class Atomtest extends Comment {
    render () {
        return (
            <RecoilRoot>
            <div>
                <button onClick={() => setCount(count - 1)}>Down</button>
                {count}
                <button onClick={() => setCount(count + 1)}>Up</button>
            </div>
            </RecoilRoot>
        )
    }
}

export default Atomtest