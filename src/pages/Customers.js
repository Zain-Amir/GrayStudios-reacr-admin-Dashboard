import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter } from '@syncfusion/ej2-react-grids/src'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'
const Customers = () => {
  return (
    
    <div className="mt-20  md:m-10 p-2 md:p-10 rounded-3xl bg-light-gray">
        <Header category = 'Page' title ='Orders' />
        <GridComponent
          id ='gridcomp'
          dataSource={customersData}
          allowPaging
          toolbar={['Delete']}
          editSettings={{allowEditing:true,allowDeleting:true}}
        >
            <ColumnsDirective>
                {customersGrid.map((item,index)=>
                  <ColumnDirective key ={index} {...item}/>
                )}
            </ColumnsDirective>
            <Inject services ={[Sort,Filter,Page,Edit,Toolbar,Selection]} />
        </GridComponent>
    </div>
  )
}

export default Customers