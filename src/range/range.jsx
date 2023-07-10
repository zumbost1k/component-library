import React from 'react';
import './range.css'
import ReactSlider from 'react-slider';
const Range = () => {
    return (
        <div class='range_container'>
            <ReactSlider
                className='horizontal-slider'
                thumbClassName='example-thumb'
                trackClassName='example-track'
                defaultValue={[0, 1]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div className='slider'{...props}></div>}
                pearling
                minDistance={0}
            />
        </div>
    )
}

export default Range