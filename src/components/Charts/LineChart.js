import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime,Legend,Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'
const line = () => {
  return (
    <div>
      <ChartComponent 
      height='420px'
      id='line-chart'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{enable:true}}
      >
        <Inject services= {[DateTime,LineSeries,Tooltip,Legend]} />
          <SeriesCollectionDirective>
              {lineCustomSeries.map((item,index)=>
                <SeriesDirective key={index} {...item}/>
              )}
          </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default line