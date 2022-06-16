/** @jsxImportSource @emotion/react */
import SectionTitle from '../common/SectionTitle';

import { colors } from '../../constants';
import LinkedInIcon from '../../images/linkedin-icon-svg-1.jpeg';
import EmailIcon from '../../images/emailicon.png.crdownload';
import './style.css'

import ContactButton from './ContactButton';

function Contact(props) {

    return (
        <div className="contact-container" css={{backgroundColor: colors.lighterBlue}}>
            <SectionTitle colors={{
                    text: 'black',
                    main: colors.peach,
                    accent: colors.orange
                }}>
                Get In Touch
            </SectionTitle>
            <div className="contact-info-container">
                <ContactButton
                    link="https://www.linkedin.com/in/jakub-jakubik-a8a8b817b/"
                    image={LinkedInIcon}
                />
                <ContactButton
                    link="mailto:jjakubik@zagmail.gonzaga.edu"
                    image={EmailIcon}
                />
            </div>
        </div>
    )
}

export default Contact;