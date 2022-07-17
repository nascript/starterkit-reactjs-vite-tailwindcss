import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'

const Container = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='m-7 ml-16 text-2xl font-semibold flex-1 h-screen'>
        <div className=''>
          <Header />
        </div>
        <Content />
      </div>
    </div>
  )
}

export default Container
