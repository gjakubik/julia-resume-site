/** @jsxImportSource @emotion/react */
import './style.css';

import CustomLink from '../common/CustomLink';

import { colors } from '../../constants';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-title-block" css={{backgroundColor: colors.orange}}>
                <h1 className="hero-title-text" css={{color: colors.peach}}>
                    Julia<br/>Jakubik
                </h1>
                <h5 className="hero-subtitle-text" css={{color: colors.peach}}>
                <CustomLink 
                    href="https://www.gonzaga.edu/school-of-business-administration/undergraduate/business-administration/human-resource-management"
                    primary={colors.peach}
                    accent={colors.lighterBlue}
                >
                    Human Resource Management
                </CustomLink><br/>at<br/>
                <CustomLink 
                    href="https://www.gonzaga.edu/"
                    primary={colors.peach}
                    accent={colors.lighterBlue}
                >
                    Gonzaga University
                </CustomLink>
                </h5>
            </div>
            <div className='hero-title-accent' css={{backgroundColor: colors.lighterBlue}}></div>
            <div className="hero-block"></div>
            <div className="hero-image"></div>
        </div>
    );
}

export default Hero;