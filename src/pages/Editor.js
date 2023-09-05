import React from 'react'
import { HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='mt-24 m-2 md:m-10 p-2 md:p-10 bg-light-gray rounded-3xl '>
      <Header category='App' title ='Editor'/>
      <RichTextEditorComponent>
      <EditorData/>
        <Inject  services = {[HtmlEditor,Image,Link,QuickToolbar,Toolbar]} />
        
      </RichTextEditorComponent>
    
    </div>
  )
}

export default Editor