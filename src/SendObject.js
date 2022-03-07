import React from 'react'

const Parent = props=>{
    const details= {
        name: 'antony',
        surname: 'palomino',
        age: 12,
    }
    return (
        <div>
            <Child  {...details}>
                <h2>Personal Data</h2>
            </Child>
                
        </div>
    )
}

const Child = (props)=>{
    const {name, surname, age, children} = props
    return(
        <>  {children}
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>
        </>
    )
}

export {Parent, Child}