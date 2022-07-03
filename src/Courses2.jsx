import React from "react"


const courses = [
        {
              name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2

        }
    ]
}
    ]

  const Part = (props) => {
    return (
      <p>{props.name} {props.exercises}</p>
    )
  }

 const Header = () => {
  return (
    <div>
      <h3>{courses[0].name}</h3>
    </div>
  )
}

const Header2 = () => {
  return (
    <div>
      <h3>{courses[1].name}</h3>
    </div>
  )
}

 const Content = () => {
  return (
    <div>
      <Part name={courses[0].parts[0].name} exercises={courses[0].parts[0].exercises}/>
      <Part name={courses[0].parts[1].name} exercises={courses[0].parts[1].exercises}/>
      <Part name={courses[0].parts[2].name} exercises={courses[0].parts[2].exercises}/>
      <Part name={courses[0].parts[3].name} exercises={courses[0].parts[3].exercises}/>
      <Total1 />
      <Header2 />
      <Part name={courses[1].parts[0].name} exercises={courses[1].parts[0].exercises}/>
      <Part name={courses[1].parts[1].name} exercises={courses[1].parts[1].exercises}/>
  </div>
)
 }
  const Total1 = () => {
     let total1 = courses[0].parts.map(part => part.exercises).reduce((previousVal, currentVal) => previousVal + currentVal)

      return (
      <div>
      <h2>total of {total1} exercises</h2>
     </div>
    )
  }
 

 const Total = () => {
    let total = courses[1].parts.map(part => part.exercises).reduce((previousVal, currentVal) => previousVal + currentVal)



    return (
      <div>
      <h2>total of {total} exercises</h2>
     </div>
    )
 }

const Courses2 = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Total />
      
    </div>
  )
  
} 
export default Courses2