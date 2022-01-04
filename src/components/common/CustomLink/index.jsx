/** @jsxImportSource @emotion/react */
import './style.css'

function CustomLink(props) {

    return (
        <a 
            href={props.href} 
            className="zag-link"
            css={{color: props.primary, '&:hover': {color: props.accent}}} 
        >
            {props.children}
        </a>
    )
}

export default CustomLink;