/** @jsxImportSource @emotion/react */
import './style.css'
import CustomLink from '../common/CustomLink';

import { colors } from '../../constants';

function ExpDesc(props) {

    return (
        <div className="item-container">
            <div className="item-header-container" >
                <h3 
                    className="item-header"
                    css={{
                        borderBottom: `solid 5px ${colors.orange}`,
                        '&::after': {
                            borderBottom: `solid 5px ${colors.lighterBlue}`,
                        }
                    }}
                >
                    <CustomLink primary={'black'} accent={colors.lighterBlue} href={props.item.link}>{props.item.business}</CustomLink>
                </h3>
                <h4 
                    className="item-position"
                    css={{
                        borderBottom: `solid 5px ${colors.lighterBlue}`,
                    }}
                >
                    {props.item.title}
                </h4>
            </div>
            <div className="item-description-container">
                <h5 className="item-description-date" >
                    <i>{props.item.date}</i>
                </h5>
                <ul className="item-description-list">
                    {props.item.descriptions.map((desc) => <li>{desc}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExpDesc;