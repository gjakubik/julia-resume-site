/** @jsxImportSource @emotion/react */
import SectionTitle from '../common/SectionTitle';

import { colors } from '../../constants';
import juliaheadshot from '../../images/juliaheadshot.jpg';
import './style.css'

function About(props) {

    return (
        <div css={{
            width: '100%',
            paddingTop: '10vh',
            paddingBottom: '10vh',
            backgroundColor: colors.orange,
        }}>
            <div css={{
                width: '80%',
                margin: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <img 
                    css={{
                        borderRadius: '50%',
                        marginTop: '100px',
                        marginBottom: '100px',
                    }} 
                    width="40%" 
                    src={juliaheadshot} 
                    alt="Headshot of Julia"
                />
                <div css={{
                    width: '50%',
                }}>
                    <SectionTitle colors={{
                            text: '#161925',
                            main: colors.peach,
                            accent: colors.lighterBlue
                        }}>
                        About Me
                    </SectionTitle>
                    <p css={{
                        color: colors.peach,
                        fontSize: '25px',
                    }}>
                        I am a student at Gonzaga University who is interested in Human Resources and Marketing. I am a driven leader who strives to uplift others through community engagement and service. I am an effective communicator who works well both collaboratively and independently. Additionally, I am a dedicated worker and an engaged listener who cares deeply about women empowerment in the workplace and personal finance.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;