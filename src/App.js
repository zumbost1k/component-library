import React, { useMemo, useState } from 'react';
import Button from './button/button';
import Chat from './icons/chat';
import Arrow from './icons/arrow';
import './app.css'
import Input from './input/input';
import CheckBox from './checkbox/checkbox';
import RadioButtons from './radioButton/radioButton';
import Checker from './checker/checker';
import ModalWindow from './modal/modal';
import Range from './range/range';
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
  const [inputDisabled, setInputDisabled] = useState(false)
  const [value, setValue] = useState('')
  const [label, setLabel] = useState(false)
  const [caption, setCaption] = useState(false)
  const [type, setType] = useState('text')
  const [isDisabledCheckBox, setIsDisabledCheckBox] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isRadioDisabled, setIsRadioDisabled] = useState(false)
  const [isCheckDisabled, setIsCheckDisabled] = useState(false)
  const [isCheckedBox, setIsCheckedBox] = useState(false)
  const isError = useMemo(() => {
    if (value.length < 20) {
      return false
    }
    else { return true }
  }, [value]
  )
  return (
    <div className='body' >
      <div className='ui-item'>
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
      <div className='ui-item'>
        <Input value={value} setValue={setValue} error={isError} disabled={inputDisabled} label={label} caption={caption} type={type} />
        <br />
        <form className='myForm'>
          <div>
            <input type='checkbox' defaultChecked={false} onClick={() => setLabel(!label)} />
            <label>label</label>
          </div>
          <div>
            <input type='checkbox' defaultChecked={false} onClick={() => setCaption(!caption)} />
            <label>caption</label>
          </div>
          <select onChange={newType => { setType(newType.target.value) }}>
            <option value='text'>text</option>
            <option value='email'>email</option>
            <option value='password'>password</option>
          </select>
          <select onChange={newDisabled => { setInputDisabled(newDisabled.target.value === 'true') }}>
            <option value='false'>no disable</option>
            <option value='true'>disable</option>
          </select>
        </form>
      </div>
      <div className='ui-item'>
        <CheckBox isDisable={isDisabledCheckBox} checked={isChecked} onChange={setIsChecked} />
        <div>
          <input type='checkbox' defaultChecked={false} onClick={() => setIsDisabledCheckBox(!isDisabledCheckBox)} />
          <label>disabled</label>
        </div>
      </div>
      <div className='ui-item'>
        <RadioButtons isDisabled={isRadioDisabled} />
        <input type='checkbox' defaultChecked={false} onClick={() => setIsRadioDisabled(!isRadioDisabled)} />
        <label>disabled</label>
      </div>
      <div className='ui-item'>
        <Checker isDisabled={isCheckDisabled} checked={isCheckedBox} onChange={setIsCheckedBox} />
        <div>
          <input type='checkbox' value={isCheckedBox} defaultChecked={false} onClick={() => setIsCheckedBox(!isCheckedBox)} />
          <label>checked</label>
        </div>
        <div>
          <input type='checkbox' defaultChecked={false} onClick={() => setIsCheckDisabled(!isCheckDisabled)} />
          <label>disabled</label>
        </div>

      </div>
      <div className='ui-item'><ModalWindow /></div>
      <div className='ui-item'><Range /> </div>
    </div>

  );
}

export default App;