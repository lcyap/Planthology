import React from 'react';
// import Icon1 from '../../../public/images/botanical.svg';
// import Icon2 from '../../../public/images/botanical.svg';
// import Icon3 from '.../../../public/images/botanical.svg';



import {ServicesH1, ServicesIcon, ServicesP, ServicesContainer,ServicesCard, ServicesWrapper, ServicesH2} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="/images/profile.svg"/>
                    <ServicesH2>Create your Plant Profile</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/botanical.svg"/>
                    <ServicesH2>Virtual Botanical Garden</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="/images/benefits.svg"/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
