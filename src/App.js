import React, { useState } from 'react';
import Button from './button/button';
import Chat from './icons/chat';
import Arrow from './icons/arrow';
import './app.css'

function App() {
  const icons = {
    chatIcon: Chat,
    arrowIcon: Arrow
  }
  const [size, setSize] = useState('block')
  const [color, setColor] = useState('primary')
  const [icon, setIcon] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [iconType, setIconType] = useState('')
  return (
    <div className='body' >
      <div className='item'>
        <Button color={color} size={size} IconClass={icons[icon]} type={icon} disabled={disabled === 'true'} iconType={iconType}/>
        <br />
        <form className='myForm'>
          <select onChange={newSize => { setSize(newSize.target.value) }}>
            <option value='block'>block</option>
            <option value='large'>large</option>
            <option value='small'>small</option>
          </select>
          <select onChange={newIcon => {
            setIcon(newIcon.target.value)
            setIconType(newIcon.target.options[newIcon.target.selectedIndex].getAttribute('type') )
          }}>
            <option value='' type=''>no icon</option>
            <option value='chatIcon' type='left'>left</option>
            <option value='chatIcon' type='center'>center</option>
            <option value='arrowIcon' type='right'>right</option>
          </select>
          <select onChange={newColor => { setColor(newColor.target.value) }}>
            <option value='primary'>primary</option>
            <option value='secondary'>secondary</option>
            <option value='outline'>outline</option>
            <option value='transparent'>transparent</option>
          </select>
          <select onChange={newDisabled => { setDisabled(newDisabled.target.value) }}>
            <option value={false}>no disable</option>
            <option value={true}>disable</option>
          </select>
        </form>
      </div>


    </div>

  );
}

export default App;