import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'
const ColorPicker = () => {
  const onchange = (args) => {
    document.getElementById('preview').style.backgroundColor= args.currentValue.hex
  }
  return (
    <div className="mt-20 md:m-10 p-2 md:p-10 rounded-3xl bg-white duration-300  hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray">
      <Header category='App' title ='Color Picker'/>
      <div className='text-center'>
        <div id='preview'></div>
        <div className='justify-center flex items-center gap-20 flex-wrap>'>
          <div>
            <p className='text-3xl font-semibold duration-300 m-5 hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray'>Color Pallete</p>
            <ColorPickerComponent id='inline-pallete' mode='Palette' modeSwitcher= {false}
            inline showButtons ={false}
            change={onchange}
            />
        </div>
        <div>
            <p className='text-3xl font-semibold duration-300 m-5 hover:shadow-lg hover:shadow-gray dark:hover:shadow-gray'>Picker </p>
            <ColorPickerComponent id='inline-pallete' mode='Picker' modeSwitcher= {false}
            inline showButtons ={false}
            change={onchange}
            />
        </div>
        </div>
      </div>

  </div>
  )
}

export default ColorPicker