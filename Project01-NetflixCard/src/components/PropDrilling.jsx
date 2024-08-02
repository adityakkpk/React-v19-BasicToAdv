import React from 'react'

const PropDrilling = () => {
  return (
    <section className={`p-4 h-lvh tracking-wider flex flex-col justify-center items-center bg-gray-900 text-white`}>
        <h1>Component A</h1>
        <ChildComponent data={"React JS"} />
    </section>
  )
}

const ChildComponent = (props) => {
    return (
        <>
            <h1>Component B</h1>
            <GrandChildComponent data={props.data} />
        </>
    )
}

const GrandChildComponent = (props) => {
    return (
        <>
            <h1>Component C</h1>
            <GrandGrandChildComponent data={props.data} />

        </>
    )
}

const GrandGrandChildComponent = (props) => {
    return (
        <>
            <h1>Component D</h1>
            <h1>I Love {props.data}</h1>
        </>
    )
}

export default PropDrilling