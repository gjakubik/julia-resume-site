/** @jsxImportSource @emotion/react */
import './style.css'
import CustomLink from '../common/CustomLink';

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
                alignItems: 'flex-end',
            }}>
                <h3 css={{
                    zIndex: 2,
                    borderBottom: `solid 5px ${colors.orange}`,
                    width: '30%',
                    '&::after': {
                        content: '""',
                        zIndex: 1,
                        display: 'block',
                        borderBottom: `solid 5px ${colors.lighterBlue}`,
                        marginTop: '5px',
                        width: '100%',
                        marginBottom: '-10px',
                        marginLeft: '-50vw',
                        transition: 'margin-left 500ms ease',
                    },
                    '&:hover::after': {
                        transition: 'margin-left 500ms ease',
                        marginLeft: '0px',
                    }
                }}>
                    <CustomLink primary={'black'} accent={colors.lighterBlue} href={props.item.link}>{props.item.business}</CustomLink>
                </h3>
                <h4 css={{
                    borderBottom: `solid 5px ${colors.lighterBlue}`,
                    width: '60%',
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
                    marginTop: '0px',
                }}>
                    <i>{props.item.date}</i>
                </h5>
                <ul css={{
                    width: '55%',
                    marginTop: '5px',
                    listStyleType: 'square',
                }}>
                    {props.item.descriptions.map((desc) => <li>{desc}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExpDesc;