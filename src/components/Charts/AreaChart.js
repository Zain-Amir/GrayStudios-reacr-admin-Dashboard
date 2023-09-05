import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime,Legend, SplineAreaSeries ,Tooltip } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis} from '../../data/dummy'
const AreaChart = () => {
  return (
    <div>
      <ChartComponent 
      height='420px'
      id='line-chart'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      tooltip={{enable :true}}
      >
        <Inject services= {[DateTime,SplineAreaSeries,Legend,Tooltip]} />
          <SeriesCollectionDirective>
              {areaCustomSeries.map((item,index)=>
                <SeriesDirective key={index} {...item}/>
              )}
          </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default AreaChart