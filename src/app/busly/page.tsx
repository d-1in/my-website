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
         <div style={{ 
        marginTop: '80px',
           width: '100%', 
        height: '682.30px',
           paddingLeft: '64px', 
           paddingRight: '64px', 
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/8.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
           overflow: 'hidden', 
           flexDirection: 'column', 
        justifyContent: 'flex-end',
           alignItems: 'center', 
        gap: '80px',
        display: 'inline-flex'
         }}>
           <div style={{ 
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
                 <div style={{ 
                   alignSelf: 'stretch', 
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '80px',
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '24px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '20px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  color: 'var(--Color-White, white)',
                  fontSize: '56px',
                   fontFamily: 'Roboto', 
                   fontWeight: '700', 
                  lineHeight: '67.20px',
                  wordWrap: 'break-word'
                }}>Busly</div>
              </div>
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '8px',
                display: 'inline-flex',
                flexWrap: 'wrap',
                alignContent: 'flex-start'
              }}>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  background: 'var(--Color-Neutral-Lightest, #EEEEEE)',
                  borderRadius: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                   <div style={{ 
                    color: 'var(--Color-Neutral-Darkest, black)',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>UX Design</div>
                 </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  background: 'var(--Color-Neutral-Lightest, #EEEEEE)',
                  borderRadius: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--Color-Neutral-Darkest, black)',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>Prototyping</div>
                   </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  background: 'var(--Color-Neutral-Lightest, #EEEEEE)',
                  borderRadius: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--Color-Neutral-Darkest, black)',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>Mobile App</div>
                </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  background: 'var(--Color-Neutral-Lightest, #EEEEEE)',
                  borderRadius: '12px',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    color: 'var(--Color-Neutral-Darkest, black)',
                    fontSize: '14px',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: '21px',
                    wordWrap: 'break-word'
                  }}>Solo Project</div>
                </div>
                 </div>
               </div>
               <div style={{ 
                 flex: '1 1 0', 
              maxWidth: '480px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '32px',
                display: 'inline-flex'
              }}>
                <div style={{
                  flex: '1 1 0',
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    color: 'var(--Color-White, white)',
                    fontSize: '20px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '28px',
                    wordWrap: 'break-word'
                  }}>Role</div>
                  <div style={{
                    color: 'var(--Color-White, white)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>UX Designer</div>
                </div>
                <div style={{
                  flex: '1 1 0',
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    color: 'var(--Color-White, white)',
                    fontSize: '20px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '28px',
                    wordWrap: 'break-word'
                  }}>Date</div>
                  <div style={{
                    color: 'var(--Color-White, white)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>June - August 2025</div>
                </div>
              </div>
               </div>
             </div>
           </div>
         </div>

                             {/* Problem Section */}
         <div style={{ 
           width: '100%', 
        height: '740px',
           paddingLeft: '64px', 
           paddingRight: '64px', 
        paddingTop: '112px',
        paddingBottom: '112px',
          background: 'var(--Color-Scheme-1-Background, white)', 
           overflow: 'hidden', 
           flexDirection: 'column', 
           justifyContent: 'flex-start', 
           alignItems: 'center', 
        gap: '80px',
        display: 'inline-flex'
         }}>
           <div style={{ 
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
              <div style={{ 
                flex: '1 1 0', 
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '24px',
              display: 'inline-flex'
            }}>
                 <div style={{ 
                   alignSelf: 'stretch', 
                   color: 'var(--Color-Scheme-1-Text, black)', 
                   fontSize: '48px', 
                   fontFamily: 'Roboto', 
                   fontWeight: '700', 
                   lineHeight: '57.60px', 
                wordWrap: 'break-word'
              }}>The Problem</div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
              }}>
                   <div style={{ 
                  alignSelf: 'stretch',
                  paddingBottom: '16px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>School buses often arrive at stops at unpredictable times, leaving parents across the country feeling anxious and rushed. The uncertainty doesn't end there, many parents continue to worry even after their children board the bus, concerned about whether they'll arrive at school on time and safely.</div>
                </div>
                <div style={{
                  alignSelf: 'stretch',
                  height: '616px',
                  paddingBottom: '16px'
                   }}></div>
                 </div>
                   </div>
            <img style={{
              flex: '1 1 0',
              height: '600px',
              objectFit: 'contain'
            }} src="/Schoolbuses.jpg.webp" />
                </div>
              </div>
            </div>

      {/* Solution Section */}
                  <div style={{ 
                  width: '100%', 
        height: '471px',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
                    alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
                  }}>
                    <div style={{ 
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
            <div style={{
              width: '380px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '16px',
                display: 'flex'
              }}>
                <div style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>Solution</div>
          </div>
                  <div style={{ 
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  gap: '24px',
                  display: 'flex'
                  }}>
                <div style={{ 
                  alignSelf: 'stretch', 
                  color: 'var(--Color-Scheme-1-Text, black)', 
                  fontSize: '48px', 
                  fontFamily: 'Roboto', 
                  fontWeight: '700', 
                  lineHeight: '57.60px', 
                    wordWrap: 'break-word'
                  }}>Busly</div>
        </div>
                 </div>
               </div>
               <div style={{ 
                 flex: '1 1 0', 
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
                    gap: '24px', 
              display: 'inline-flex'
            }}>
                  <div style={{ 
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                display: 'flex'
                  }}>
                    <div style={{ 
                  alignSelf: 'stretch',
                  height: '50px',
                  paddingBottom: '181px'
                    }}></div>
                <div style={{
                  alignSelf: 'stretch',
                  height: '156px',
                  paddingBottom: '16px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '36px',
                    wordWrap: 'break-word'
                  }}>Reducing uncertainty and reliance on personal vehicles through efficient and reliable tracking, the app prioritizes accuracy, clear communication, and user experience , ensuring parents and guardians enjoy a smooth, worry-free experience as their child travels to school.</div>
                    </div>
                <div style={{
                  alignSelf: 'stretch',
                  height: '216px'
                }}></div>
                  </div>
              </div>
            </div>
          </div>
        </div>

      {/* Features Section */}
                  <div style={{ 
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
                 alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
               }}>
                                          <div style={{ 
                   width: '100%', 
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
                                          <div style={{ 
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
                                          <div style={{ 
              height: '298px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
              <div style={{
                width: '526px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '32px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '40px',
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '60px',
                  wordWrap: 'break-word'
                }}>Organized and On Time</div>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      flex: '1 1 0',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                      gap: '16px',
                      display: 'inline-flex'
                  }}>
                    <div style={{ 
                        alignSelf: 'stretch',
                        color: 'var(--Color-Scheme-1-Text, black)',
                        fontSize: '24px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '36px',
                        wordWrap: 'break-word'
                      }}>Busly provides a clear, easy-to-use dashboard that displays essential information such as bus departure and arrival times, upcoming stops, and even allows parents to track multiple children at once.</div>
                    </div>
                  </div>
               </div>
              </div>
            </div>
            <img style={{
              width: '635px',
              height: '1301px',
              objectFit: 'contain'
            }} src="/iPhone 15 Pro Black Titanium (5) 1.png" />
                  <div style={{ 
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
                    alignItems: 'flex-start',
              gap: '16px',
              display: 'inline-flex'
                  }}>
                    <div style={{ 
                width: '80px',
                height: '24px'
                    }}></div>
               </div>
             </div>
           </div>
         </div>

      {/* Tracking and Research Section */}
        <div style={{ 
          width: '100%', 
          paddingLeft: '64px', 
          paddingRight: '64px', 
        paddingTop: '112px',
        paddingBottom: '112px',
          background: 'var(--Color-Scheme-1-Background, white)', 
          overflow: 'hidden', 
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
          display: 'flex',
            flexWrap: 'wrap'
                                          }}>
               <img style={{
                 width: '100%',
                 maxWidth: '623px',
                 height: 'auto',
                 objectFit: 'contain'
               }} src="/iPhone 15 Pro Black Titanium (6) 1.png" />
          <div style={{ 
              flex: '1 1 0',
              minWidth: '300px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '32px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '40px',
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '60px',
                  wordWrap: 'break-word'
                }}>Bus Tracking Made Easy</div>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      flex: '1 1 0',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                      gap: '16px',
                      display: 'inline-flex'
                  }}>
                    <div style={{ 
                        alignSelf: 'stretch',
                        color: 'var(--Color-Scheme-1-Text, black)',
                        fontSize: '24px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '36px',
                        wordWrap: 'break-word'
                      }}>Real-time tracking with live updates keeps you informed of every step in the bus route's progress.</div>
             </div>
             </div>
          </div>
            </div>
                     </div>
                                          <div style={{ 
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'inline-flex'
            }}>
              <div style={{
                width: '80px',
                height: '24px'
          }}></div>
                     </div>
                   </div>
                </div>
                                          <div style={{ 
          width: '100%',
          paddingTop: '112px',
          paddingBottom: '112px',
          paddingLeft: '64px',
          paddingRight: '64px',
          background: 'var(--Color-Scheme-1-Background, white)',
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'flex'
          }}>
            <div style={{
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '80px',
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                flex: '1 1 0', 
                minWidth: '300px', 
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '32px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '16px',
                  display: 'flex'
                }}>
                  <div style={{
                    width: '62px',
                    height: '24px'
                  }}></div>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                     gap: '24px', 
                    display: 'flex'
                  }}>
                    <div style={{
                  width: '100%', 
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '16px',
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        display: 'inline-flex'
                      }}>
                        <div style={{
                          textAlign: 'center',
                          color: 'var(--Color-Scheme-1-Text, black)',
                          fontSize: '16px',
                          fontFamily: 'Roboto',
                          fontWeight: '600',
                          lineHeight: '24px',
                          wordWrap: 'break-word'
                        }}>Research</div>
              </div>
                <div style={{ 
                  alignSelf: 'stretch', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                     alignItems: 'center', 
                     gap: '24px', 
                        display: 'flex'
                      }}>
                        <div style={{
                          alignSelf: 'stretch',
                          textAlign: 'center',
                  color: 'var(--Color-Scheme-1-Text, black)', 
                  fontSize: '48px', 
                  fontFamily: 'Roboto', 
                  fontWeight: '700', 
                  lineHeight: '57.60px', 
                          wordWrap: 'break-word'
                        }}>Understanding the Current Transportation Experience</div>
                  <div style={{ 
                          alignSelf: 'stretch',
                          height: '180px',
                          textAlign: 'center',
                          color: 'var(--Color-Scheme-1-Text, black)',
                          fontSize: '24px',
                          fontFamily: 'Roboto',
                          fontWeight: '400',
                          lineHeight: '36px',
                          wordWrap: 'break-word'
                           }}>Parents often worry about their children's safety due to unreliable bus tracking and poor communication. Without real-time updates or live notifications, they're left uncertain about their child's location , creating anxiety and reducing trust in the current transportation system.</div>
                        <img style={{ 
                          width: '529px',
                          height: '530px'
                        }} src="/mental-health-concept-illustration-featuring-a-sad-woman-surrounded-by-anxiety-and-depression-symbols-free-vector.jpg" />
                </div>
                   </div>
               </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Improvement Solutions Section */}
                  <div style={{ 
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          alignSelf: 'stretch',
          paddingLeft: '64px',
          paddingRight: '64px',
          paddingTop: '112px',
          paddingBottom: '112px',
          background: 'var(--Color-Scheme-1-Background, white)',
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            height: '180px',
            textAlign: 'center',
            color: 'var(--Color-Scheme-1-Text, black)',
            fontSize: '48px',
            fontFamily: 'Roboto',
            fontWeight: '400',
            lineHeight: '72px',
            wordWrap: 'break-word'
          }}>The current system does not work...</div>
          <div style={{
            width: '100%',
            maxWidth: '1280px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
                    alignItems: 'flex-start',
            gap: '80px',
            display: 'flex'
                  }}>
                    <div style={{ 
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '80px',
              display: 'inline-flex'
            }}>
              <div style={{
                flex: '1 1 0',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '64px',
                display: 'inline-flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '48px',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    flex: '1 1 0',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '32px',
                      fontFamily: 'Roboto',
                      fontWeight: '700',
                      lineHeight: '44.80px',
                      wordWrap: 'break-word'
                    }}>Unpredictable Arrival Times</div>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '24px',
                      fontFamily: 'Roboto',
                      fontWeight: '400',
                      lineHeight: '36px',
                      wordWrap: 'break-word'
                    }}>Not knowing when exactly busses will arrive as they are often unreliable when it comes to arriving on time</div>
                    </div>
                  </div>
                  <div style={{ 
                  alignSelf: 'stretch',
                  justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  gap: '48px',
                  display: 'inline-flex'
                  }}>
                    <div style={{ 
                    flex: '1 1 0',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '32px',
                      fontFamily: 'Roboto',
                      fontWeight: '700',
                      lineHeight: '41.60px',
                      wordWrap: 'break-word'
                    }}>Lack of Real-Time Tracking</div>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '24px',
                      fontFamily: 'Roboto',
                      fontWeight: '400',
                      lineHeight: '36px',
                      wordWrap: 'break-word'
                    }}>Now way to see where the bus is, causes worry and impatience</div>
                    </div>
                  </div>
                  <div style={{ 
                  alignSelf: 'stretch',
                  justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  gap: '48px',
                  display: 'inline-flex'
                  }}>
                    <div style={{ 
                    flex: '1 1 0',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '24px', 
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '32px',
                      fontFamily: 'Roboto',
                      fontWeight: '700',
                      lineHeight: '41.60px',
                      wordWrap: 'break-word'
                    }}>Poor Communication</div>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '24px',
                      fontFamily: 'Roboto',
                      fontWeight: '400',
                      lineHeight: '36px',
                      wordWrap: 'break-word'
                    }}>No alerts or notifications for delays, cancellations ,or route changes</div>
                    </div>
                  </div>
                </div>
            </div>
                    </div>
                  </div>
                                          <div style={{ 
          alignSelf: 'stretch',
          height: '180px',
          textAlign: 'center',
          color: 'var(--Color-Scheme-1-Text, black)',
          fontSize: '48px',
          fontFamily: 'Roboto',
          fontWeight: '400',
          lineHeight: '72px',
          wordWrap: 'break-word'
        }}>So how can we work to improve school transportation?</div>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
                    alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
                  }}>
                    <div style={{ 
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '64px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '48px',
                display: 'inline-flex'
              }}>
                <div style={{
                  flex: '1 1 0',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                    gap: '24px', 
                  display: 'inline-flex'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    position: 'relative'
                                          }}>
                        <img style={{ 
                      width: '48px',
                      height: '48px',
                      left: '0px',
                      top: '0px',
                      position: 'absolute',
                      objectFit: 'contain'
                    }} src="/com.png" />
                     </div>
                                          <div style={{ 
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '32px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '41.60px',
                    wordWrap: 'break-word'
                  }}>Communication</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '36px',
                    wordWrap: 'break-word'
                  }}>People tend to trust human decisions more than algorithmic ones. Increasing trust requires familiarity, which involves showcasing past performance and explaining features and terminology.</div>
                    </div>
                  </div>
                  <div style={{ 
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                gap: '48px',
                display: 'inline-flex'
                  }}>
                    <div style={{ 
                  flex: '1 1 0',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '24px',
                  display: 'inline-flex'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    position: 'relative'
                                          }}>
                        <img style={{ 
                      width: '48px',
                      height: '48px',
                      left: '0px',
                      top: '0px',
                      position: 'absolute',
                      objectFit: 'contain'
                    }} src="/pen-tool.png" />
                     </div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '32px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '41.60px',
                    wordWrap: 'break-word'
                  }}>Design</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '36px',
                    wordWrap: 'break-word'
                  }}>AVs have a recognizable appearance, and this should be enforced so that pedestrians and other drivers can easily tell them apart from conventional vehicles. Additionally, AV should be able to operate effectively with disabled individuals.<br/>Additionally, the integration of ADAS (Advanced Driver Assistance Systems) promotes seamless navigation, convenience, and safety.</div>
                   </div>
                </div>
            </div>
          </div>
            </div>
          </div>

      {/* Design Process Section */}
                                          <div style={{ 
        width: '100%',
        height: '1114px',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
                                          <div style={{ 
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '768px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '24px',
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '48px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '57.60px',
                wordWrap: 'break-word'
              }}>Starting the Design</div>
              <div style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '18px',
                fontFamily: 'Roboto',
                fontWeight: '400',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>I created storyboards to visualize the user journey, identifying key actions that helped shape a project roadmap tailored to their needs.</div>
                     </div>
                   </div>
                                          <div style={{ 
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '64px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
                                 <div style={{
                     flex: '1 1 0', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                     gap: '24px', 
                display: 'inline-flex'
                                          }}>
                        <img style={{ 
                     width: '100%',
                     maxWidth: '586px',
                     height: '414px',
                     objectFit: 'contain'
                   }} src="/IMG_0502.HEIC" />
                     </div>
                                          <div style={{ 
                     flex: '1 1 0', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                     gap: '24px', 
                display: 'inline-flex'
                                          }}>
                        <img style={{ 
                     width: '100%',
                     maxWidth: '574px',
                     height: '415px',
                     objectFit: 'contain'
                   }} src="/IMG_0503.HEIC" />
                     </div>
                   </div>
               </div>
                   <div style={{
            width: '100%',
            maxWidth: '768px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                     alignItems: 'center', 
                     gap: '24px', 
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '48px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '57.60px',
                wordWrap: 'break-word'
              }}>Wireframing</div>
              <div style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '18px',
                fontFamily: 'Roboto',
                fontWeight: '400',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>The main flow I explored focuses on interacting with the map to track the bus in real time as this displays the two main features of the app</div>
              </div>
            </div>
          <div style={{
            width: '104px',
            height: '48px'
          }}></div>
          </div>
              </div>

      {/* Features Overview Section */}
      <div style={{
                       width: '100%', 
        height: '632px',
        paddingTop: '59px',
        paddingBottom: '112px',
        paddingLeft: '64px',
        paddingRight: '64px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '64px',
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
                 <img style={{
                   alignSelf: 'stretch',
                   height: '342.70px',
                   objectFit: 'contain'
                 }} src="/dashwire.png" />
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '24px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '24px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '32px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '41.60px',
                    wordWrap: 'break-word'
                  }}>Dashboard</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '18px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '27px',
                    wordWrap: 'break-word'
                  }}>The home page provides users with a variety of information ,ranging from live updates to upcoming stops , bringing all the details they need into one clear, easy-to-navigate space.</div>
              </div>
            </div>
          </div>
            <div style={{
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
                 <img style={{
                   alignSelf: 'stretch',
                   height: '336.70px',
                   objectFit: 'contain'
                 }} src="/mapwire.png" />
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '24px',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '24px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '32px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '41.60px',
                    wordWrap: 'break-word'
                  }}>Interactive Map</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>The map is interactive, tracking the bus in real time to show its current location, the next stop, and the estimated time of arrival, providing users with clear and accessible information.</div>
            </div>
          </div>
        </div>
      </div>
             </div>
             </div>

      {/* Prototyping Section */}
            <div style={{ 
        width: '100%',
        paddingBottom: '112px',
        paddingLeft: '64px',
        paddingRight: '64px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '64px',
        display: 'inline-flex'
      }}>
        <div style={{
                   width: '100%',
          maxWidth: '768px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '16px',
          display: 'flex'
        }}>
          <div style={{
            width: '33px',
            height: '24px'
          }}></div>
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '24px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              color: 'var(--Color-Scheme-1-Text, black)',
              fontSize: '48px',
              fontFamily: 'Roboto',
              fontWeight: '700',
              lineHeight: '57.60px',
              wordWrap: 'break-word'
            }}>Prototyping</div>
            <div style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              color: 'var(--Color-Scheme-1-Text, black)',
              fontSize: '18px',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: '27px',
              wordWrap: 'break-word'
            }}>Interactive prototypes to visualize and test key user flows before development. These prototypes allowed me to refine the design through rapid iteration, gather user feedback early, and ensure the final experience was intuitive, efficient, and aligned with user needs.</div>
            </div>
          </div>
          <div style={{ 
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '64px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '64px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '48px',
              display: 'inline-flex'
            }}>
              <div style={{
                flex: '1 1 0',
                background: 'var(--Color-Scheme-1-Foreground, white)',
                overflow: 'hidden',
                outline: '1px var(--Color-Scheme-1-Border, black) solid',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'inline-flex'
              }}>
                 <img style={{
                   alignSelf: 'stretch',
                   height: '720px',
                   objectFit: 'contain'
                 }} src="/prototype.png" />
                <div style={{
                  alignSelf: 'stretch',
                  padding: '24px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '24px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '8px',
                    display: 'flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      fontWeight: '600',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>Dashboard</div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: '8px',
                      display: 'flex'
                    }}>
                      <div style={{
                        alignSelf: 'stretch',
                        color: 'var(--Color-Scheme-1-Text, black)',
                        fontSize: '18px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '27px',
                        wordWrap: 'break-word'
                      }}>The home page is designed as a dashboard which is best in providing users with a variety of information , from live updates to upcoming stops, bringing all the details they need into one clear, easy-to-navigate space.</div>
              </div>
              </div>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '8px',
                    display: 'flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      fontWeight: '600',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>Interactive Map</div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: '8px',
                      display: 'flex'
                    }}>
                      <div style={{
                        alignSelf: 'stretch',
                        color: 'var(--Color-Scheme-1-Text, black)',
                        fontSize: '16px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '24px',
                        wordWrap: 'break-word'
                      }}>The map is interactive, tracking the bus in real time to show its current location, the next stop, and the estimated time of arrival, providing users with clear and accessible information.</div>
              </div>
            </div>
                  <div style={{
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '8px',
                    display: 'flex'
                  }}>
                    <div style={{
                      alignSelf: 'stretch',
                      color: 'var(--Color-Scheme-1-Text, black)',
                      fontSize: '14px',
                      fontFamily: 'Roboto',
                      fontWeight: '600',
                      lineHeight: '21px',
                      wordWrap: 'break-word'
                    }}>Account and Settings</div>
                    <div style={{
                      alignSelf: 'stretch',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      gap: '8px',
                      display: 'flex'
                    }}>
                      <div style={{
                        alignSelf: 'stretch',
                        color: 'var(--Color-Scheme-1-Text, black)',
                        fontSize: '16px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        lineHeight: '24px',
                        wordWrap: 'break-word'
                      }}>A simple, easy-to-understand settings and account page with few but highly relevant options for the user.</div>
          </div>
              </div>
                  <div style={{
                    alignSelf: 'stretch',
                    height: '27px'
                  }}></div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usability Testing Section */}
      <div style={{
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          height: '846px',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            height: '167px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'inline-flex'
            }}>
              <div style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: 'inline-flex'
              }}>
                <div style={{
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '16px',
                  fontFamily: 'Roboto',
                  fontWeight: '600',
                  lineHeight: '24px',
                  wordWrap: 'break-word'
                }}>Userability Testing</div>
            </div>
              <div style={{
                alignSelf: 'stretch',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '48px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '57.60px',
                wordWrap: 'break-word'
              }}>What Worked Well and What Didn't</div>
          </div>
            <div style={{
              flex: '1 1 0',
              height: '332px'
            }}></div>
          </div>
             <img style={{
               alignSelf: 'stretch',
               height: '738px',
               objectFit: 'contain'
             }} src="/usertest.png" />
        </div>
      </div>

      {/* Key Changes Section */}
      <div style={{
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '768px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '24px',
              display: 'flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '48px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '57.60px',
                wordWrap: 'break-word'
              }}>Key Changes</div>
            </div>
          </div>
          <div style={{
            alignSelf: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '64px',
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '32px',
              display: 'inline-flex'
            }}>
                                 <div style={{
                     flex: '1 1 0', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                     gap: '24px', 
                display: 'inline-flex'
                   }}>
                   <img style={{
                     alignSelf: 'stretch',
                     height: '355.02px',
                     objectFit: 'contain'
                   }} src="/Frame 14-2.png" />
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '33.60px',
                    wordWrap: 'break-word'
                  }}>Support For Multiple Children</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>Allows for families with multiple children to track them all at once</div>
                     </div>
                <div style={{
                  alignSelf: 'stretch',
                  height: '48px'
                }}></div>
                   </div>
                   <div style={{
                     flex: '1 1 0', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                     gap: '24px', 
                display: 'inline-flex'
                   }}>
                   <img style={{
                     width: '100%',
                     maxWidth: '413px',
                     height: '326px',
                     objectFit: 'contain'
                   }} src="/clarification2.png" />
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'flex'
                }}>
                  <div data-alternate="False" data-icon-position="Leading" data-text-only="True" style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'inline-flex'
                  }}>
                    <div style={{
                      width: '57px'
                    }}></div>
                  </div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '33.60px',
                    wordWrap: 'break-word'
                  }}>Clarification</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>Areas like the users' stop and the buses current location are labeled for clarification with icons etc.</div>
                     </div>
                   </div>
                   <div style={{
                     flex: '1 1 0', 
                     flexDirection: 'column', 
                     justifyContent: 'flex-start', 
                alignItems: 'flex-start',
                     gap: '24px', 
                display: 'inline-flex'
                   }}>
                   <img style={{
                     alignSelf: 'stretch',
                     height: '332.70px',
                     objectFit: 'contain'
                   }} src="/design2.png" />
                <div style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px',
                  display: 'flex'
                }}>
                  <div data-alternate="False" data-icon-position="Leading" data-text-only="True" style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'inline-flex'
                  }}></div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '24px',
                    fontFamily: 'Roboto',
                    fontWeight: '700',
                    lineHeight: '33.60px',
                    wordWrap: 'break-word'
                  }}>Design Changes</div>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>Adjusted from mid-fidelity to a final high fidelity prototype. Account and Settings page simplified even more and introduced removing children and buses</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            width: '104px',
            height: '48px'
          }}></div>
        </div>
      </div>

      {/* Final Design Section */}
            <div style={{ 
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
                   width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
               <div style={{
                 flex: '1 1 0',
                 height: '600px',
                 position: 'relative',
                 overflow: 'hidden'
               }}>
                 <video 
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover'
                   }}
                   src="/finaldesign.mp4"
                   autoPlay
                   loop
                   muted
                   playsInline
                 />
          </div>
            <div style={{
              flex: '1 1 0',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '24px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '48px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '57.60px',
                wordWrap: 'break-word'
              }}>Final Design</div>
              <div style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex'
              }}>
                <div style={{
                  alignSelf: 'stretch',
                  paddingBottom: '16px',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex'
                }}>
                  <div style={{
                    alignSelf: 'stretch',
                    color: 'var(--Color-Scheme-1-Text, black)',
                    fontSize: '16px',
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '24px',
                    wordWrap: 'break-word'
                  }}>The final features include a completely revamped design with an updated color palette that creates a more relaxing and readable experience for users. Clear labeling and icons guide navigation, while streamlined tools make it easy to update personal details, child information, and bus details.This feature showcases an intuitive interface that enhances user engagement through a revamped design. By prioritizing usability, users can navigate effortlessly, leading to increased satisfaction and retention.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Learned Section */}
      <div style={{
        width: '100%',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingTop: '112px',
        paddingBottom: '112px',
        background: 'var(--Color-Scheme-1-Background, white)',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '80px',
        display: 'inline-flex'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '80px',
          display: 'flex'
        }}>
          <div style={{
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '80px',
            display: 'inline-flex'
          }}>
            <div style={{
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '16px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch',
                color: 'var(--Color-Scheme-1-Text, black)',
                fontSize: '40px',
                fontFamily: 'Roboto',
                fontWeight: '700',
                lineHeight: '48px',
                wordWrap: 'break-word'
              }}>Lessons Learned</div>
            </div>
            <div style={{
              flex: '1 1 0',
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '24px',
              display: 'inline-flex'
            }}>
              <div style={{
                alignSelf: 'stretch'
              }}>
                <span style={{
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '32px',
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '48px',
                  wordWrap: 'break-word'
                }}>The design process will not always look the same.<br/><br/></span>
                <span style={{
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '18px',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  lineHeight: '27px',
                  wordWrap: 'break-word'
                }}>Compared to my experience with previous projects, I did not have as many constraints considering this was a project that I decided to begin on my own. I realized that the design process looked completely different than other projects I worked on but I was also able to let my creativity run freely, and ideate with full ownership.<br/><br/></span>
                <span style={{
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '32px',
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '48px',
                  wordWrap: 'break-word'
                }}>Design for the User<br/><br/></span>
                <span style={{
                  color: 'var(--Color-Scheme-1-Text, black)',
                  fontSize: '18px',
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  lineHeight: '27px',
                  wordWrap: 'break-word'
                }}>Through this project, I learned the importance of designing with the user at the center , understanding their needs, habits, and context before making design decisions. Clarity and conciseness are key: the more straightforward and intuitive the interface, the easier it is for users to find what they need, make decisions, and complete tasks without confusion. Every element should have a purpose, guiding the user effortlessly through their journey.</span>
              </div>
              </div>
              </div>
              </div>
            </div>
          </>
    </div>
  );
}
