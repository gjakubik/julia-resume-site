/** @jsxImportSource @emotion/react */

import './style.css';

// text with the same color as the accent div is used for sizing
function SectionTitle(props) {
    return (
        <div className='header-container' css={{
            '&::after': {
                color: props.colors.accent,
            }
        }}>
            <h1 className='text' css={{color: props.colors.text, backgroundColor: props.colors.main}}> 
                {props.children}
            </h1>
        </div>
    )
}

export default SectionTitle;