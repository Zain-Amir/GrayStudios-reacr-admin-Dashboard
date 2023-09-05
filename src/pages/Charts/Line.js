import React from 'react'
import { ChartsHeader,LineChart ,Header} from '../../components'
const Line = () => {
  return (
    <div className="mt-20  md:m-10 p-2 md:p-10 rounded-3xl bg-light-gray">
        <Header category = 'Page' title ='Inflation Rate ' />
        <div className='w-full'>
          <LineChart />
        </div>
    </div>
  )
}

export default Line