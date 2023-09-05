import React from 'react'
import { ScheduleComponent,Resize,Inject,Week,WorkWeek,Month,Day,Agenda,DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'
const Calendar = () => {
  return (
   <div className='mt-24 m-2 md:m-10 p-2 md:p-10 bg-light-gray rounded-3xl '>
      <Header category='App' title ='Calender'/>
      <ScheduleComponent
      height='500px'
      eventSettings={{dataSource:scheduleData}}
      >
        <Inject services ={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
      </ScheduleComponent>
   </div>
  )
}

export default Calendar