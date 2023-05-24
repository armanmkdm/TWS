import React from 'react';
import styled from 'styled-components';

const Gbadge = () => {
    return (

        <Wrapper>
            <a href="https://www.google.com/partners/agency?id=5988556908" target="_blank" rel="noreferrer">
                <img src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg" alt="img" />
            </a>
        </Wrapper>
    )
};

const Wrapper = styled.div`

position: fixed;
left: 0.95rem;
z-index: 999;
bottom: 2.8rem;

@media (max-width: 768px){

    bottom: 1rem;

        a{
            img{
                width:65px;
                height:65px;
            }
        }
}

`;

export default Gbadge