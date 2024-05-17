import React from 'react'
import Tree from '../components/structures/Tree'

export default function Page() {
    return (
      <div className='flex flex-col w-full'>
        <h1 className='text-center'>Tree</h1>
        <Tree/>
      </div>
    )
  }