/** @jsxImportSource @emotion/react */
import './style.css';

import SectionTitle from '../common/SectionTitle';
import ExpSection from './ExpSection';

import { colors, expList } from '../../constants';

function Experiences() {
    return (
        <div className="container" css={{backgroundColor: colors.peach}}>
            <div css={{paddingTop: '50px'}}>
                <SectionTitle 
                    colors={{
                        text: colors.peach,
                        main: colors.orange,
                        accent: colors.lighterBlue
                    }}
                >
                    Experience
                </SectionTitle>
            </div>
            <div className='list-container'>
                {expList.map((section) => 
                    <ExpSection key={section.title} sec={section}></ExpSection>
                )}
            </div>
        </div>
    );
}

export default Experiences;