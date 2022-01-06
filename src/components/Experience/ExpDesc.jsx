/** @jsxImportSource @emotion/react */
import './style.css'

import { colors } from '../../constants';

function ExpDesc(props) {

    return (
        <div css={{
            width: '90%',
            marginInline: 'auto',
        }}>
            <div css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
            }}>
                <h3 css={{
                    borderBottom: `solid 5px ${colors.orange}`,
                    width: '30%',
                    marginBottom: '0px',
                }}>
                    {props.item.business}
                </h3>
                <h4 css={{
                    borderBottom: `solid 5px ${colors.lighterBlue}`,
                    width: '60%',
                    marginBottom: '0px',
                }}>
                    {props.item.title}
                </h4>
            </div>
            <div css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}>
                <h5 css={{
                    width: '30%',
                    marginTop: '5px',
                }}>
                    <i>{props.item.date}</i>
                </h5>
                <ul css={{
                    width: '55%',
                    marginTop: '5px',
                }}>
                    {props.item.descriptions.map((desc) => <li>{desc}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExpDesc;