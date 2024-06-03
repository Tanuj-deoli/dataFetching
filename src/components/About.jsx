import React, { useMemo, useState } from 'react'
import { useContext } from 'react'
import { counterContext } from './context/MyContext'
import { Container } from 'react-bootstrap'
import PostComment from './PostComment'

const nums = new Array(30_000).fill(0).map((_, i)=>{
    return{
        index:i,
        ismagical:i===29_000
    }
    })

function About() {
    const context = useContext(counterContext)
    // console.log(context)
    const [count , setCount]=useState(0)

    const [number , setNumber]=useState(nums)

    // const magical = number.find(item=>item.ismagical===true)    
    // console.log('magical number is '+ magical.index)
    const magical =  useMemo(()=>number.find(item=>item.ismagical===true),[number])
    
  return (
    <>
     {/* <p>count value is {context} </p> */}
     {/* <p>magical number is {magical.index}</p> */}
     {/* <button onClick={()=>{setCount((count)=>count+1)
      if(count===10){
        setNumber(new Array(10_000).fill(0).map((_, i)=>{
          return{
              index:i,
              ismagical:i===9_000
          }
          })
      )
      }
     }}>about is {count} </button> */}
     <PostComment/>
    </>
  )
}

export default About
