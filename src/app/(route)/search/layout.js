import React from 'react';
import DocCategoryList from './_components/DocCategoryList';
// import DoctorDetail from '../pages/doctor/[id]';

function Layout({ children }) {
  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        <DocCategoryList />
        {/* <DoctorDetail/> */}
      </div>
      <div className='col-span-3'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
