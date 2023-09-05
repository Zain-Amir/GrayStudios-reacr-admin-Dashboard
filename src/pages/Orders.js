import React from "react";
import { Button } from "../components";
import { GridComponent,ColumnDirective,ColumnsDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Inject,PdfExport,Edit } from "@syncfusion/ej2-react-grids";
import { ordersData,contextMenuItems,ordersGrid } from "../data/dummy";
import { Header } from "../components";
const Orders = () => {
  return (
    <div className="mt-20  md:m-10 p-2 md:p-10 rounded-3xl bg-light-gray">
        <Header category = 'Page' title ='Orders' />
        <GridComponent
          id ='gridcomp'
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowPdfExport
        >
            <ColumnsDirective>
                {ordersGrid.map((item,index)=>
                  <ColumnDirective key ={index} {...item}/>
                )}
            </ColumnsDirective>
            <Inject services ={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]} />
        </GridComponent>
    </div>
  );
};

export default Orders;
