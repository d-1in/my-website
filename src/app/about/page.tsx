'use client';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Navigation header styled components
const StyledNavbar8 = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const StyledHeader = styled.div`
  align-self: stretch;
  height: 72px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  display: flex;
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const StyledContainer = styled.div`
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const StyledContent = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const StyledActions = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const StyledLogo = styled.div`
  width: 66.93px;
  height: 42px;
`;

const StyledColumn = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: flex;
`;

const StyledLinkTwo = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

const StyledLinktext = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(8, 21, 38, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const StyledButton01 = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

// Content styled components
const StyledSecondaryHeader = styled.div`
  width: 100%;
  height: 72px;
  padding-left: 20px;
  padding-right: 20px;
  background: #081526;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  display: flex;
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const StyledSecondaryContainer = styled.div`
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const StyledSecondaryContent = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const StyledSecondaryActions = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const StyledSecondaryButton = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: 1px #081526 solid;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const StyledSecondaryButtonText = styled.div`
  color: #081526;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledMainContent = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  background: var(--Color-Scheme-1-Background, white);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 112px;
    padding-bottom: 112px;
    gap: 80px;
  }
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 80px;
  }
`;

const StyledContentRow = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;
  }
`;

const StyledProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    flex: 1 1 0;
    max-height: 654px;
  }
`;

const StyledTextContent = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
  
  @media (min-width: 768px) {
    flex: 1 1 0;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 40px;
  word-wrap: break-word;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
    text-align: left;
  }
`;

const StyledDescription = styled.div`
  width: 100%;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
    text-align: left;
  }
`;

const StyledDivider = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  background: var(--Color-Scheme-1-Background, white);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 80px;
  }
`;

const StyledDividerLine = styled.div`
  width: 100%;
  height: 1px;
  background: var(--Color-Scheme-1-Border, #e2e8f0);
  margin: 0 auto;
`;

export default function AboutPage() {
  const router = useRouter();
  
  React.useEffect(() => {
    document.title = "Daniel Lin - UX Designer Portfolio | About Me";
  }, []);
  
  return (
    <div>
      {/* Header */}
      <StyledNavbar8>
        <StyledHeader>
          <StyledContainer>
            <StyledContent>
              <StyledLogo>
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  style={{ width: '67px', height: '42px', objectFit: 'contain', cursor: 'pointer' }} 
                  onClick={() => router.push('/')} 
                />
              </StyledLogo>
              <StyledColumn>
                <StyledLinkTwo>
                  <StyledLinktext onClick={() => router.push('/')}>
                    Home
                  </StyledLinktext>
                </StyledLinkTwo>
                <StyledLinkTwo>
                  <StyledLinktext onClick={() => router.push('/about')}>
                    About Me
                  </StyledLinktext>
                </StyledLinkTwo>
              </StyledColumn>
            </StyledContent>
            <StyledActions>
                              <StyledButton onClick={() => router.push('/contact')}>
                  <StyledButton01>Contact</StyledButton01>
                </StyledButton>
            </StyledActions>
          </StyledContainer>
        </StyledHeader>
      </StyledNavbar8>

      {/* Page content with top margin to account for fixed header */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ width: '100%' }}>
          <StyledMainContent>
            <StyledContentWrapper>
              <StyledContentRow>
                                 <StyledProfileImage src="/aboutmepic.png" alt="Profile image" />
                <StyledTextContent>
                  <StyledTitle>Background</StyledTitle>
                  <StyledDescription>
                    I&apos;m a student at Purdue University, studying UX Design with a minor in Psychology.<br/><br/>
                    I grew up in rural Illinois, surrounded by endless cornfields, but that never stopped me from expressing myself creatively. Ever since I can remember, I&apos;ve been drawing, sketching, and painting. As a kid, I would watch cartoons and try to recreate the characters on paper, fueling my creative passions.<br/><br/>
                    Fast forward to my senior year of high school, I discovered UX design , a career path that perfectly blends creativity with the opportunity to make a real impact on the world. It was exactly what I had been looking for, and I dove right in.<br/><br/>
                    Outside of school, I&apos;m often with friends , whether we&apos;re playing board games in person or teaming up online to try and win a match. I continue to explore my creativity through video editing, and I&apos;m also a big sports fan (basketball being my favorite to play and watch). Staying active is important to me, so I make time for the gym and aim to live a healthy lifestyle.
                  </StyledDescription>
                </StyledTextContent>
              </StyledContentRow>
            </StyledContentWrapper>
          </StyledMainContent>
          
          <StyledDivider>
            <StyledDividerLine />
          </StyledDivider>
        </div>
      </div>
    </div>
  );
}
