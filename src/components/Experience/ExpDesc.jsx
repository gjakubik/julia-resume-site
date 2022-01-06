/** @jsxImportSource @emotion/react */
import './style.css'

import { colors } from '../../constants';

function ExpDesc(props) {

    return (
        <div css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            width: '90%',
            marginInline: 'auto',
        }}>
            <div css={{
                borderBottom: `solid 5px ${colors.orange}`,
                gridColumnStart: 1,
                gridColumnEnd: 3,
                gridRowStart: 1,
                gridRowEnd: 2,
                textAlign: 'bottom',
            }}>
                <h3>
                    {props.item.business}
                </h3>
            </div>
            <h5 css={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 3,
                }}
            >
                <i>{props.item.date}</i>
            </h5>
            <h4 css={{
                borderBottom: `solid 5px ${colors.lighterBlue}`,
                gridColumnStart: 4,
                gridColumnEnd: 8,
                gridRowStart: 1,
                gridRowEnd: 2,
                textAlign: 'bottom',
                }}
            >
                {props.item.title}
            </h4>
            <ul css={{
                    gridColumnStart: 4,
                    gridColumnEnd: 8,
                    gridRowStart: 2,
                    gridRowEnd: 3,
                }}
            >
                {props.item.descriptions.map((desc) => <li>{desc}</li>)}
            </ul>
        </div>
    )
}

export default ExpDesc;