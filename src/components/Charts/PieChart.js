import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime,Legend, PieSeries ,Tooltip } from '@syncfusion/ej2-react-charts'
import { pieChartData, ecomPieChartData} from '../../data/dummy'

const PieChart = () => {
  return (
    <div>
      <ChartComponent 
      height='420px'
      id='line-chart'
      tooltip={{enable :true}}
      >
        <Inject services= {[DateTime,PieSeries,Legend,Tooltip]} />
          <SeriesCollectionDirective>
              {pieChartData.map((item,index)=>
                <SeriesDirective key={index} {...item}/>
              )}
          </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default PieChart