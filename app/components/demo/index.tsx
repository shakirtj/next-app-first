import { TabArray } from '@/app/utils/constants';
import React from 'react'

interface propsType {
  name:string;
  surname?:string;
  length?:number;
  className?:string;
  tab?:string[]
}

function Demo({name,length,tab, ...props}:propsType) {

  const obj = {
    a:"umehs",
    b:"kukreti",
    c:"shakir"
  }
  // const a  = 20
  // let arr = a
  // arr = arr+10

  // console.log(a,arr)

  const a = [1,2,3,4,5,6]
  const arr = [...a]
  arr[0]=20
  console.log(a, arr)
  // const [d,e,f, ...rest] = a

  // console.log(rest, props)
  const {b, c, } = obj
  return (
    <>
    <div>{length} {name}</div>
    <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Demo