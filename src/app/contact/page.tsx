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

// Contact page styled components
const StyledContactSection = styled.div`
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

const StyledContactContainer = styled.div`
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

const StyledContactHeader = styled.div`
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const StyledHeaderContent = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const StyledConnectLabel = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const StyledConnectText = styled.div`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 40px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 48px;
  word-wrap: break-word;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 67.20px;
    text-align: left;
  }
`;

const StyledContactInfoSection = styled.div`
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

const StyledInfoContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  
  @media (min-width: 768px) {
    gap: 80px;
  }
`;

const StyledInfoWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
  display: flex;
  
  @media (min-width: 768px) {
    gap: 64px;
  }
`;

const StyledInfoRow = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
  }
`;

const StyledInfoCard = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  
  @media (min-width: 768px) {
    flex: 1 1 0;
    align-items: center;
  }
`;

const StyledIcon = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  overflow: hidden;
`;

const StyledIconInner = styled.div<{ width: string; height: string; left: string; top: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
  border: 1px var(--Color-Scheme-1-Text, black) solid;
`;

const StyledInfoContent = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const StyledInfoTitleContainer = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  display: flex;
  
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const StyledInfoTitle = styled.div`
  width: 100%;
  text-align: center;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 41.60px;
    text-align: center;
  }
`;

const StyledInfoText = styled.div`
  width: 100%;
  text-align: center;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const StyledLinkedInText = styled.div`
  width: 100%;
  text-align: center;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  text-decoration: underline;
  line-height: 24px;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const StyledSpacer = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    flex: 1 1 0;
    height: 48px;
  }
`;

const StyledDividerSection = styled.div`
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

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--Color-Scheme-1-Border, #e2e8f0);
  margin: 0 auto;
`;

export default function ContactPage() {
  const router = useRouter();
  
  React.useEffect(() => {
    document.title = "Daniel Lin - UX Designer Portfolio | Contact";
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

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
              <StyledButton>
                <StyledButton01>Contact</StyledButton01>
              </StyledButton>
            </StyledActions>
          </StyledContainer>
        </StyledHeader>
      </StyledNavbar8>

      {/* Contact Section */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ 
          width: '100%', 
          overflow: 'hidden', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          display: 'flex' 
        }}>
          <StyledContactSection>
            <StyledContactContainer>
              <StyledContactHeader>
                <StyledHeaderContent>
                  <StyledConnectLabel>
                    <StyledConnectText>Connect</StyledConnectText>
                  </StyledConnectLabel>
                  <StyledTitleContainer>
                    <StyledTitle>Get in Touch</StyledTitle>
                  </StyledTitleContainer>
                </StyledHeaderContent>
              </StyledContactHeader>
            </StyledContactContainer>
          </StyledContactSection>
          <StyledContactInfoSection>
            <StyledInfoContainer>
              <StyledInfoWrapper>
                <StyledInfoRow>
                  <StyledInfoCard>
                    <img 
                      src="/Gmail_icon_(2020).svg.png" 
                      alt="Email icon" 
                      width="48" 
                      height="48"
                    />
                    <StyledInfoContent>
                      <StyledInfoTitleContainer>
                        <StyledInfoTitle>Email</StyledInfoTitle>
                      </StyledInfoTitleContainer>
                      <StyledInfoText 
                        onClick={() => window.open('mailto:danlin120405@gmail.com', '_blank')}
                        style={{ cursor: 'pointer' }}
                      >
                        danlin120405@gmail.com
                      </StyledInfoText>
                    </StyledInfoContent>
                  </StyledInfoCard>
                  <StyledInfoCard>
                    <img 
                      src="/LinkedIn_icon.svg.png" 
                      alt="LinkedIn icon" 
                      width="48" 
                      height="48"
                    />
                    <StyledInfoContent>
                      <StyledInfoTitleContainer>
                        <StyledInfoTitle>LinkedIn</StyledInfoTitle>
                        <StyledLinkedInText 
                          onClick={() => window.open('https://www.linkedin.com/in/daniel1204-lin/', '_blank')}
                          style={{ cursor: 'pointer' }}
                        >
                          LinkedIn
                        </StyledLinkedInText>
                      </StyledInfoTitleContainer>
                    </StyledInfoContent>
                  </StyledInfoCard>
                  <StyledInfoCard>
                    <img 
                      src="/call.png" 
                      alt="Phone icon" 
                      width="48" 
                      height="48"
                    />
                    <StyledInfoContent>
                      <StyledInfoTitleContainer>
                        <StyledInfoTitle>Phone</StyledInfoTitle>
                      </StyledInfoTitleContainer>
                      <StyledInfoText 
                        onClick={() => window.open('tel:217-649-8560', '_blank')}
                        style={{ cursor: 'pointer' }}
                      >
                        217-649-8560
                      </StyledInfoText>
                    </StyledInfoContent>
                  </StyledInfoCard>
                  <StyledSpacer />
                </StyledInfoRow>
              </StyledInfoWrapper>
            </StyledInfoContainer>
          </StyledContactInfoSection>
          <StyledDividerSection>
            <StyledDivider />
          </StyledDividerSection>
        </div>
      </div>
    </div>
  );
}
