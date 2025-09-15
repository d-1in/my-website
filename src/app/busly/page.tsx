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
  
  &.scrolled {
    background: rgba(8, 21, 38, 0.95);
    backdrop-filter: blur(10px);
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
    padding-left: 0;
    padding-right: 0;
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

// Hero Section styled components
const StyledHeroSection = styled.div`
  width: 100%;
  height: 900px;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 112px;
  padding-bottom: 112px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.30) 50%, rgba(0, 0, 0, 0.60) 100%);
  overflow: hidden;
  background-image: url(/8.png);
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 80px;
  display: flex;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(8, 21, 38, 0.1) 0%, rgba(26, 54, 93, 0.1) 100%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    height: auto;
    min-height: 600px;
  }
`;

const StyledHeroContent = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
`;

const StyledHeroRow = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 80px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const StyledHeroLeft = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const StyledTitle = styled.div`
  align-self: stretch;
  color: var(--Color-White, white);
  font-size: 56px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 67.20px;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const StyledTags = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledTag = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  background: var(--Color-Neutral-Lightest, #EEEEEE);
  border-radius: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const StyledTagText = styled.div`
  color: black;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledHeroRight = styled.div`
  flex: 1 1 0;
  max-width: 480px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const StyledInfoRow = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StyledInfoItem = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
`;

const StyledInfoLabel = styled.div`
  color: var(--Color-White, white);
  font-size: 20px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 28px;
  word-wrap: break-word;
`;

const StyledInfoValue = styled.div`
  color: var(--Color-White, white);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

// Content section styled components
const StyledContentSection = styled.div`
  width: 100%;
  padding: 80px 20px;
  background: var(--Color-Scheme-1-Background, white);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  position: relative;
  
  &:nth-child(even) {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #081526 0%, #1a365d 100%);
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    padding: 112px 64px;
    gap: 80px;
  }
`;

const StyledContentContainer = styled.div`
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
  align-items: flex-start;
  gap: 40px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
    justify-content: flex-start;
  }
`;

const StyledContentColumn = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const StyledSectionTitle = styled.div`
  align-self: stretch;
  color: black;
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 57.60px;
  word-wrap: break-word;
  position: relative;
  margin-bottom: 16px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #081526 0%, #1a365d 100%);
    border-radius: 2px;
  }
`;

const StyledSectionDescription = styled.div`
  align-self: stretch;
  color: black;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function BuslyPage() {
  const router = useRouter();
  
  React.useEffect(() => {
    document.title = "Daniel Lin - UX Designer Portfolio | Busly Project";
  }, []);
  
  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const navbar = document.querySelector('[data-navbar]');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="busly-page-content">
      <>
        {/* Header */}
        <StyledNavbar8 data-navbar>
          <StyledHeader>
            <StyledContainer>
              <StyledContent>
                <StyledLogo>
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    style={{ width: '67px', height: '42px', objectFit: 'contain', cursor: 'pointer' }} 
                    onClick={() => {
                      console.log('Logo clicked, navigating to home');
                      router.push('/');
                    }} 
                  />
                </StyledLogo>
                <StyledColumn>
                  <StyledLinkTwo>
                    <StyledLinktext 
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        console.log('Home clicked, navigating to home');
                        router.push('/');
                      }}
                    >
                      Home
                    </StyledLinktext>
                  </StyledLinkTwo>
                  <StyledLinkTwo>
                    <StyledLinktext 
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        console.log('About clicked, navigating to about');
                        router.push('/about');
                      }}
                    >
                      About Me
                    </StyledLinktext>
                  </StyledLinkTwo>
                </StyledColumn>
              </StyledContent>
              <StyledActions>
                <StyledButton onClick={() => {
                  console.log('Contact clicked, navigating to contact');
                  router.push('/contact');
                }}>
                  <StyledButton01>Contact</StyledButton01>
                </StyledButton>
              </StyledActions>
            </StyledContainer>
          </StyledHeader>
        </StyledNavbar8>

      {/* Hero Section */}
      <StyledHeroSection>
        <StyledHeroContent>
          <StyledHeroRow>
            <StyledHeroLeft>
              <StyledTitle>Busly</StyledTitle>
              <StyledTags>
                <StyledTag>
                  <StyledTagText>Case Study</StyledTagText>
                </StyledTag>
                <StyledTag>
                  <StyledTagText>Mobile App</StyledTagText>
                </StyledTag>
                <StyledTag>
                  <StyledTagText>Design</StyledTagText>
                </StyledTag>
              </StyledTags>
            </StyledHeroLeft>
            <StyledHeroRight>
              <StyledInfoRow>
                <StyledInfoItem>
                  <StyledInfoLabel>Role</StyledInfoLabel>
                  <StyledInfoValue>UX Designer</StyledInfoValue>
                </StyledInfoItem>
                <StyledInfoItem>
                  <StyledInfoLabel>Date</StyledInfoLabel>
                  <StyledInfoValue>June - August 2025</StyledInfoValue>
                </StyledInfoItem>
              </StyledInfoRow>
            </StyledHeroRight>
          </StyledHeroRow>
        </StyledHeroContent>
      </StyledHeroSection>

                             {/* Problem Section */}
         <div style={{ 
           width: '100%', 
           paddingLeft: '64px', 
           paddingRight: '64px', 
           paddingTop: '80px', 
           paddingBottom: '80px', 
           background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
           overflow: 'hidden', 
           flexDirection: 'column', 
           justifyContent: 'flex-start', 
           alignItems: 'center', 
           gap: '60px', 
           display: 'flex',
           position: 'relative'
         }}>
           <div style={{ 
             position: 'absolute', 
             top: '20px', 
             left: '50%', 
             transform: 'translateX(-50%)', 
             width: '60px', 
             height: '4px', 
             background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', 
             borderRadius: '2px' 
           }}></div>
           <div style={{ width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '60px', display: 'flex' }}>
             <div style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '60px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
               <div style={{ flex: '1 1 0', minWidth: '300px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                 <div style={{ 
                   alignSelf: 'stretch', 
                   color: 'var(--Color-Scheme-1-Text, black)', 
                   fontSize: '48px', 
                   fontFamily: 'Roboto', 
                   fontWeight: '700', 
                   lineHeight: '57.60px', 
                   wordWrap: 'break-word',
                   position: 'relative'
                 }}>
                   The Problem
                   <div style={{ 
                     position: 'absolute', 
                     bottom: '-8px', 
                     left: '0', 
                     width: '80px', 
                     height: '3px', 
                     background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', 
                     borderRadius: '2px' 
                   }}></div>
                 </div>
                 <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                   <div style={{ alignSelf: 'stretch', paddingBottom: '16px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                     <div style={{ alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>School buses often arrive at stops at unpredictable times, leaving parents across the country feeling anxious and rushed. The uncertainty doesn&apos;t end there, many parents continue to worry even after their children board the bus, concerned about whether they&apos;ll arrive at school on time and safely.</div>
                   </div>
                 </div>
               </div>
               <div style={{ 
                 flex: '1 1 0', 
                 minWidth: '300px', 
                 display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center',
                 position: 'relative'
               }}>
                 <img style={{ 
                   width: '100%', 
                   height: 'auto', 
                   maxHeight: '400px', 
                   objectFit: 'contain',
                   borderRadius: '12px',
                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                 }} src="/Schoolbuses.jpg.webp" alt="School buses illustration" />
               </div>
             </div>
           </div>
         </div>

                           {/* Understanding Section */}
        <div style={{ 
          width: '100%', 
          paddingLeft: '64px', 
          paddingRight: '64px', 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          background: 'var(--Color-Scheme-1-Background, white)', 
          overflow: 'hidden', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          gap: '60px', 
          display: 'flex',
          position: 'relative'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '20px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '60px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', 
            borderRadius: '2px' 
          }}></div>
          <div style={{ width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '60px', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '60px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <div style={{ 
                flex: '1 1 0', 
                minWidth: '300px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                position: 'relative'
              }}>
                <img style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxHeight: '600px', 
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }} src="/persona.png" alt="Persona illustration" />
              </div>
              <div style={{ flex: '1 1 0', minWidth: '300px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <div style={{ 
                  alignSelf: 'stretch', 
                  color: 'var(--Color-Scheme-1-Text, black)', 
                  fontSize: '48px', 
                  fontFamily: 'Roboto', 
                  fontWeight: '700', 
                  lineHeight: '57.60px', 
                  wordWrap: 'break-word',
                  position: 'relative'
                }}>
                  Understanding The Current Transportation Experience
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '-8px', 
                    left: '0', 
                    width: '80px', 
                    height: '3px', 
                    background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', 
                    borderRadius: '2px' 
                  }}></div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                  <div style={{ width: '100%', paddingBottom: '16px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch' }}><span style={{ color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '24px', wordWrap: 'break-word' }}>I interviewed a working mom to understand her experience ensuring her kids get to school safely.<br/><br/></span><span style={{ color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>My goal was to identify key pain points in the current transportation experience, as well as how current methods could be more streamlined to fit user needs. Here&apos;s what I asked and some findings:</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Key Pain Points Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <StyledContentRow>
            <StyledContentColumn>
              <StyledSectionTitle>Key Pain Points</StyledSectionTitle>
            </StyledContentColumn>
            <StyledContentColumn>
                                                           <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ 
                    display: 'flex', 
                    gap: '24px', 
                    alignItems: 'flex-start',
                    padding: '24px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                  }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', 
                      marginTop: '4px', 
                      flexShrink: 0, 
                      flexGrow: 0,
                      boxShadow: '0 2px 8px rgba(8, 21, 38, 0.3)'
                    }}></div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'black' }}>Unpredictable Arrival Times</div>
                      <div style={{ color: 'black' }}>Not knowing when exactly buses will arrive as they are often unreliable when it comes to arriving on time</div>
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    gap: '24px', 
                    alignItems: 'flex-start',
                    padding: '24px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                  }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', 
                      marginTop: '4px', 
                      flexShrink: 0, 
                      flexGrow: 0,
                      boxShadow: '0 2px 8px rgba(8, 21, 38, 0.3)'
                    }}></div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'black' }}>Lack of Real-Time Tracking</div>
                      <div style={{ color: 'black' }}>No way to see where the bus is, causes worry and impatience</div>
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    gap: '24px', 
                    alignItems: 'flex-start',
                    padding: '24px',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                  }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', 
                      marginTop: '4px', 
                      flexShrink: 0, 
                      flexGrow: 0,
                      boxShadow: '0 2px 8px rgba(8, 21, 38, 0.3)'
                    }}></div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'black' }}>Poor Communication</div>
                      <div style={{ color: 'black' }}>No alerts or notifications for delays, cancellations, or route changes</div>
                    </div>
                  </div>
                </div>
            </StyledContentColumn>
          </StyledContentRow>
        </StyledContentContainer>
      </StyledContentSection>

      {/* Findings Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <StyledContentRow>
            <div style={{ width: '380px' }}>
              <div style={{ marginBottom: '16px', color: 'black', fontSize: '16px', fontWeight: '600' }}>Findings</div>
              <StyledSectionTitle>Examining the Current Challenges in School Transportation</StyledSectionTitle>
              <StyledSectionDescription>
                By conducting an extensive and thorough literature review, several key areas of importance were highlighted and brought to the forefront of our understanding.
              </StyledSectionDescription>
            </div>
                           <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '64px' }}>
                                                                       <div style={{ display: 'flex', gap: '48px' }}>
                                          <div style={{ 
                                            flex: 1, 
                                            padding: '32px',
                                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                                          }}>
                        <img style={{ 
                          width: '64px', 
                          height: '64px', 
                          marginBottom: '24px', 
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }} src="/smile.png" alt="Emotions icon" />
                        <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: 'black' }}>Emotions</div>
                       <div style={{ color: 'black' }}>Parents, in particular, express heightened concern over the safety and whereabouts of their children due to unreliable tracking and communication.</div>
                     </div>
                                          <div style={{ 
                                            flex: 1, 
                                            padding: '32px',
                                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                                          }}>
                        <img style={{ 
                          width: '64px', 
                          height: '64px', 
                          marginBottom: '24px', 
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }} src="/check-square.png" alt="Needs icon" />
                        <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: 'black' }}>Needs</div>
                                              <div style={{ color: 'black' }}>The existing bus transportation system suffers from a significant lack of communication. Without live tracking or timely updates, parents are left in the dark about their child's location and safety. This absence of real-time notifications fosters anxiety and uncertainty, making it difficult to trust or rely on the system.</div>
                     </div>
                   </div>
                   <div style={{ display: 'flex', gap: '48px' }}>
                                          <div style={{ 
                                            flex: 1, 
                                            padding: '32px',
                                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                                          }}>
                        <img style={{ 
                          width: '64px', 
                          height: '64px', 
                          marginBottom: '24px', 
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }} src="/lightbulb_2.png" alt="Suggestions icon" />
                        <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: 'black' }}>Suggestions</div>
                                              <div style={{ color: 'black' }}>To ease parental concerns and build trust, the system needs better communication tools. Features like live bus tracking and real-time notifications offer transparency and reassurance, keeping families informed and reducing the stress caused by uncertainty about their child's safety.</div>
                     </div>
                                          <div style={{ 
                                            flex: 1, 
                                            padding: '32px',
                                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                                          }}>
                        <img style={{ 
                          width: '64px', 
                          height: '64px', 
                          marginBottom: '24px', 
                          objectFit: 'cover',
                          borderRadius: '12px',
                          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                        }} src="/edit-2.png" alt="Design icon" />
                        <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: 'black' }}>Design</div>
                                              <div style={{ color: 'black' }}>The redesigned experience focuses on real-time tracking as a top priority, enabling parents to monitor their child's location with confidence. Clear, effective communication channels paired with a clean, intuitive interface ensure that essential information is always accessible—minimizing stress and enhancing trust in the system.</div>
                     </div>
                   </div>
               </div>
          </StyledContentRow>
        </StyledContentContainer>
      </StyledContentSection>

      {/* Design Section */}
      <div style={{ width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '60px', paddingBottom: '60px', background: 'var(--Color-Scheme-1-Background, white)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', display: 'flex' }}>
        <div style={{ width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '40px', display: 'flex' }}>
          <div style={{ width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>Starting the Design</div>
              <div style={{ alignSelf: 'stretch', textAlign: 'center' }}>
                <span style={{ color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word' }}>Ideating The Narrative<br/></span>
                <span style={{ color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '27px', wordWrap: 'break-word' }}>Use storytelling and visuals to illustrate real-life scenarios that demonstrate how parents can send their children to school with confidence and peace of mind.That way I can map out how and when they will use the app</span>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 0', minWidth: '300px', maxWidth: '600px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <img style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} src="/IMG_0502.HEIC" alt="Design ideation illustration" />
              </div>
              <div style={{ flex: '1 1 0', minWidth: '300px', maxWidth: '600px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                <img style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} src="/IMG_0503.HEIC" alt="Design ideation illustration" />
              </div>
            </div>
          </div>
          <div style={{ width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word' }}>Wireframing</div>
              <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '27px', wordWrap: 'break-word' }}>The main flow I explored focuses on interacting with the map to track the bus in real time as this displays the two main features of the app</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <div style={{ display: 'flex', gap: '64px' }}>
                         <div style={{ flex: 1 }}>
               <StyledImage src="/dashwire.png" alt="Dashboard wireframe" />
             </div>
             <div style={{ flex: 1 }}>
               <StyledImage src="/mapwire.png" alt="Interactive map wireframe" />
             </div>
          </div>
        </StyledContentContainer>
      </StyledContentSection>

      {/* Prototyping Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <StyledSectionTitle>Prototyping</StyledSectionTitle>
            <div style={{ fontSize: '18px', marginTop: '16px' }}>
              Interactive prototypes to visualize and test key user flows before development. These prototypes allowed me to refine the design through rapid iteration, gather user feedback early, and ensure the final experience was intuitive, efficient, and aligned with user needs.
            </div>
          </div>
          <div style={{ 
            background: 'white', 
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <StyledImage src="/prototype.png" alt="Prototype" />
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Dashboard</div>
                <div>The home page is designed as a dashboard which provides users with a variety of information, from live updates to upcoming stops, bringing all the details they need into one clear, easy-to-navigate space.</div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Interactive Map</div>
                <div>The map is interactive, tracking the bus in real time to show its current location, the next stop, and the estimated time of arrival, providing users with clear and accessible information.</div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Account and Settings</div>
                <div>A simple, easy-to-understand settings and account page with few but highly relevant options for the user.</div>
              </div>
            </div>
          </div>
        </StyledContentContainer>
      </StyledContentSection>

      {/* Usability Testing Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: 'black', fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Usability Testing</div>
              <StyledSectionTitle>What Worked Well and What Didn't</StyledSectionTitle>
            </div>
          </div>
          <StyledImage src="/usertest.png" alt="Usability testing results" />
        </StyledContentContainer>
      </StyledContentSection>

      {/* Key Changes Section */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '80px', paddingBottom: '80px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '60px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '60px', display: 'flex'}}>
          <div style={{width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
              <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>Key Changes</div>
              <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '27px', wordWrap: 'break-word'}}>Explore the latest trends in UX design.</div>
            </div>
          </div>
          <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex', flexWrap: 'wrap'}}>
                                 <div style={{
                     flex: '1 1 0', 
                     minWidth: '300px', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                     alignItems: 'center', 
                     gap: '24px', 
                     display: 'flex',
                     padding: '24px',
                     background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                     borderRadius: '16px',
                     border: '1px solid #e2e8f0',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                   }}>
                     <img style={{
                       width: '100%', 
                       height: 'auto', 
                       maxHeight: '355px', 
                       objectFit: 'contain',
                       borderRadius: '12px',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                     }} src="/support.png" />
                     <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'flex'}}>
                       <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '33.60px', wordWrap: 'break-word'}}>Support For Multiple Children</div>
                       <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Allows for families with multiple children to track them all at once</div>
                     </div>
                   </div>
                   <div style={{
                     flex: '1 1 0', 
                     minWidth: '300px', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                     alignItems: 'center', 
                     gap: '24px', 
                     display: 'flex',
                     padding: '24px',
                     background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                     borderRadius: '16px',
                     border: '1px solid #e2e8f0',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                   }}>
                     <img style={{
                       width: '100%', 
                       height: 'auto', 
                       maxHeight: '400px', 
                       objectFit: 'contain',
                       borderRadius: '12px',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                     }} src="/clarification2.png" />
                     <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'flex'}}>
                       <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '33.60px', wordWrap: 'break-word'}}>Clarification</div>
                       <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Areas like the users' stop and the buses current location are labeled for clarification with icons etc.</div>
                     </div>
                   </div>
                   <div style={{
                     flex: '1 1 0', 
                     minWidth: '300px', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                     alignItems: 'center', 
                     gap: '24px', 
                     display: 'flex',
                     padding: '24px',
                     background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                     borderRadius: '16px',
                     border: '1px solid #e2e8f0',
                     boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                   }}>
                     <img style={{
                       width: '100%', 
                       height: 'auto', 
                       maxHeight: '333px', 
                       objectFit: 'contain',
                       borderRadius: '12px',
                       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                     }} src="/design2.png" />
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '33.60px', wordWrap: 'break-word'}}>Design Changes</div>
                  <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Adjusted from mid-fidelity to a final high fidelity prototype. Account and Settings page simplified even more and introduced removing children and buses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Design Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ 
              flex: 1, 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                             <video 
                 style={{
                   width: '100%',
                   maxWidth: '500px',
                   height: 'auto',
                   borderRadius: '8px',
                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                 }}
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="auto"
                 onLoadStart={(e) => {
                   const video = e.target as HTMLVideoElement;
                   video.play().catch(() => {
                     // Fallback if autoplay fails
                     video.muted = true;
                     video.play();
                   });
                 }}
               >
                <source src="/finaldesign.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div style={{ flex: 1 }}>
              <StyledSectionTitle>Final Design</StyledSectionTitle>
              <StyledSectionDescription>
                The final features include a completely revamped design with an updated color palette that creates a more relaxing and readable experience for users. Clear labeling and icons guide navigation, while streamlined tools make it easy to update personal details, child information, and bus details. This feature showcases an intuitive interface that enhances user engagement through a revamped design. By prioritizing usability, users can navigate effortlessly, leading to increased satisfaction and retention.
              </StyledSectionDescription>
            </div>
          </div>
        </StyledContentContainer>
      </StyledContentSection>

      {/* Lessons Learned Section */}
      <StyledContentSection>
        <StyledContentContainer>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ flex: 1 }}>
              <StyledSectionTitle style={{ fontSize: '40px' }}>Lessons Learned</StyledSectionTitle>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>
                The design process will not always look the same.
              </div>
              <div style={{ fontSize: '18px', marginBottom: '24px' }}>
                Compared to my experience with previous projects, I did not have as many constraints considering this was a project that I decided to begin on my own. I realized that the design process looked completely different than other projects I worked on but I was also able to let my creativity run freely, and ideate with full ownership.
              </div>
              <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px' }}>
                Design for the User
              </div>
              <div style={{ fontSize: '18px' }}>
                Through this project, I learned the importance of designing with the user at the center , understanding their needs, habits, and context before making design decisions. Clarity and conciseness are key: the more straightforward and intuitive the interface, the easier it is for users to find what they need, make decisions, and complete tasks without confusion. Every element should have a purpose, guiding the user effortlessly through their journey.
              </div>
            </div>
          </div>
        </StyledContentContainer>
      </StyledContentSection>
          </>
    </div>
  );
}
