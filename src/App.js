import React, { useMemo, useState } from 'react';
import Button from './button/button';
import Chat from './icons/chat';
import Arrow from './icons/arrow';
import './app.css'
import Input from './input/input';

function App() {
  const icons = {
    chatIcon: Chat,
    arrowIcon: Arrow
  }
  const [size, setSize] = useState('block')
  const [color, setColor] = useState('primary')
  const [icon, setIcon] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [iconPosition, setIconPosition] = useState('right')
  const [inputItem, setInputItem] = useState('')
  const [inputDisabled, setInputDisabled] = useState(false)
  const [value, setValue] = useState('')
  const isError = useMemo(() => {
    if (value.length < 20) {
      return false
    }
    else { return true }
  }, [value]
  )
  return (
    <div className='body' >
      <div className='item'>
        <Button color={color} size={size} Icon={icons[icon]} iconPosition={iconPosition} disabled={disabled} />
        <br />
        <form className='myForm'>
          <select onChange={newSize => { setSize(newSize.target.value) }}>
            <option value='block'>block</option>
            <option value='large'>large</option>
            <option value='small'>small</option>
          </select>
          <select onChange={newPosition => { setIconPosition(newPosition.target.value) }}>
            <option value='right'>right</option>
            <option value='left'>left</option>
            <option value='center'>center</option>
          </select>
          <select onChange={newIcon => {
            setIcon(newIcon.target.value)
          }}>
            <option value='' type=''>no icon</option>
            <option value='arrowIcon'>arrow</option>
            <option value='chatIcon'>chat</option>
          </select>
          <select onChange={newColor => { setColor(newColor.target.value) }}>
            <option value='primary'>primary</option>
            <option value='secondary'>secondary</option>
            <option value='outline'>outline</option>
            <option value='transparent'>transparent</option>
          </select>
          <select onChange={newDisabled => { setDisabled(newDisabled.target.value === 'true') }}>
            <option value='false'>no disable</option>
            <option value='true'>disable</option>
          </select>
        </form>
      </div>
      <div className='item'>
        <Input value={value} setValue={setValue} error={isError} inputItem={inputItem} disabled={inputDisabled} />
        <br />
        <form className='myForm'>
          <select onChange={newInputItem => { setInputItem(newInputItem.target.value) }}>
            <option value=''>nothing</option>
            <option value='label'>text Label</option>
            <option value='caption'>caption</option>
            <option value='both'>caption+label</option>
          </select>
          <select onChange={newDisabled => { setInputDisabled(newDisabled.target.value === 'true') }}>
            <option value='false'>no disable</option>
            <option value='true'>disable</option>
          </select>
        </form>
      </div>
    </div>

  );
}

export default App;