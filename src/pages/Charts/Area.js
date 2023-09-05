import React from 'react'
import { AreaChart, ChartsHeader, Header} from '../../components'
const Area = () => {
  return (
    <div className="mt-20  md:m-10 p-2 md:p-10 rounded-3xl bg-light-gray">
        <Header category = 'Page' title ='Inflation Rate ' />
        <div className='w-full'>
          <AreaChart />
          
        </div>
    </div>
  )
}

export default Area