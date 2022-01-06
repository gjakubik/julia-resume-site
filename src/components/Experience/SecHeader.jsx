/** @jsxImportSource @emotion/react */
import './style.css'

import { colors } from '../../constants';

function SecHeader(props) {

    return (
        <div className='header-block'>
            <h1 className="header-text" css={{color: '#161925', backgroundColor: colors.lighterBlue}}>
                {props.children}
            </h1>
        </div>
    )
}

export default SecHeader;