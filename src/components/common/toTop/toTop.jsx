import React from 'react';
// import { Arrow } from '../icons/icons';
import { ReactComponent as Arrow } from '../../../assets/svgs/arrow.svg';
const ToTop = () => {
    const handleToTopClick = () => {
        window.scrollTo(0, 0)
    }
    return ( 
        <button id="totop-btn" onClick={handleToTopClick}>
            <Arrow/>
        </button>
     );
}
 
export default ToTop;