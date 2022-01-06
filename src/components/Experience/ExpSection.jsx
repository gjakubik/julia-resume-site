/** @jsxImportSource @emotion/react */
import './style.css'

import SecHeader from './SecHeader';
import ExpDesc from './ExpDesc';
import { colors } from '../../constants';

function ExpSection(props) {

    return (
        <div css={{textAlign: 'left'}}
        >
            <SecHeader>{props.sec.title}</SecHeader>
            {props.sec.items.map((item) => <ExpDesc key={item.title + item.business} item={item}/>)}
        </div>
    )
}

export default ExpSection;