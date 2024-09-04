import React from 'react'
import DocCategoryList from './_components/DocCategoryList'

function layout({children}) {
  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block  '>
     <DocCategoryList />
      </div>
      <div className='col-span-3'>
      {children}
      </div>
      </div>
  )
}

export default layout