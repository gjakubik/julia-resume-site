/** @jsxImportSource @emotion/react */

import { colors } from '../../../constants';
import './style.css';

// text with the same color as the accent div is used for sizing
function SectionTitle(props) {
    return (
        <div className='header-container'>
            <h1 className='text' css={{color: colors.peach, backgroundColor: colors.orange}}> 
                {props.children}
            </h1>
        </div>
    )
}

export default SectionTitle;