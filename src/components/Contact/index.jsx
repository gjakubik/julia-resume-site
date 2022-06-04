/** @jsxImportSource @emotion/react */
import SectionTitle from '../common/SectionTitle';
import CustomLink from '../common/CustomLink';

import { colors } from '../../constants';
import './style.css'

function Contact(props) {

    return (
        <div className="contact-container" css={{backgroundColor: colors.lighterBlue}}>
            <SectionTitle colors={{
                    text: colors.peach,
                    main: colors.orange,
                    accent: colors.peach
                }}>
                Get In Touch
            </SectionTitle>
            <a href="mailto:jjakubik@zagmail.gonzaga.edu" className="email-text">
                <CustomLink
                    href="mailto:jjakubik@zagmail.gonzaga.edu"
                    primary={'black'}
                    accent={colors.orange}
                >
                    jjakubik@zagmail.gonzaga.edu
                </CustomLink>
            </a>
        </div>
    )
}

export default Contact;