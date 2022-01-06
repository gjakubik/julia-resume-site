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
                        Hi! I'm Julia, a motivated relationship-focused leader seeking a ProRep position to support students throughout the job recruitment process and promote the Gonzaga Career and Professional Development office. This is another sentence about the cool things I do, possibly a list of the most important. Here is another sentence about what a cool person I am, like listing a couple of my hobbies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;