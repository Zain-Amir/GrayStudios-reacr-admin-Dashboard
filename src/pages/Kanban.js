import React from 'react'
import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData,kanbanGrid } from '../data/dummy'
import { Header } from '../components'
const Kanban = () => {
  return (
    <div className='mt-20 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
        <Header category = 'App' title = 'Trello'/>
        <div className='mt-10'>
        <KanbanComponent
          id='kanban'
          dataSource={kanbanData}
          cardSettings={{contentField:'Summary',headerField:'Id'}}
          keyField='Status'
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index)=> <ColumnDirective key={index} {...item}/>)}
            {/* {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)} */}
          </ColumnsDirective>
          
        </KanbanComponent>
        </div>
        
    </div>
  )
}

export default Kanban