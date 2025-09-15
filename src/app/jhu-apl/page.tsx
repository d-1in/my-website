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

const StyledLogo = styled.div`
  width: 67px;
  height: 42px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const StyledColumn = styled.div`
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
  transition: color 0.3s ease;
  
  &:hover {
    color: #60a5fa;
  }
`;

const StyledActions = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
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

export default function JHUAPL() {
  const router = useRouter();
  const [isClient, setIsClient] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  
  // Set client-side state
  React.useEffect(() => {
    setIsClient(true);
    setMounted(true);
  }, []);

  // Add CSS animations
  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .fade-in-up { animation: fadeInUp 0.8s ease-out; }
      .slide-in-left { animation: slideInLeft 0.8s ease-out; }
      .pulse-hover:hover { animation: pulse 0.6s ease-in-out; }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  
  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    document.title = "Daniel Lin - UX Designer Portfolio | JHU APL Project";
    
    const handleScroll = () => {
      const navbar = document.querySelector('[data-navbar]');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

       // Update progress bar
       if (typeof window !== 'undefined') {
         const progressBar = document.getElementById('progress-bar');
         if (progressBar) {
           const scrollTop = window.scrollY;
           const docHeight = document.documentElement.scrollHeight - window.innerHeight;
           const scrollPercent = (scrollTop / docHeight) * 100;
           progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
         }
       }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{width: '100%', background: 'var(--Color-Scheme-1-Background, white)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{color: '#4a5568', fontSize: '16px'}}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="jhu-apl-page-content">
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

       {/* Progress Indicator */}
       {isClient && (
         <div style={{
           position: 'fixed',
           top: '80px',
           left: '0',
           right: '0',
           height: '4px',
           background: 'rgba(255, 255, 255, 0.2)',
           zIndex: '999',
           transition: 'all 0.3s ease'
         }}>
           <div style={{
             height: '100%',
             background: 'linear-gradient(90deg, #081526 0%, #1a365d 50%, #667eea 100%)',
             width: '0%',
             transition: 'width 0.3s ease',
             borderRadius: '0 2px 2px 0'
           }} id="progress-bar"></div>
         </div>
       )}

      {/* Main Content */}
      <div style={{marginTop: '80px', width: '100%', maxWidth: '100vw', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
      <div style={{
        width: '100%', 
        minHeight: '900px', 
        paddingLeft: '64px', 
        paddingRight: '64px', 
        paddingTop: '112px', 
        paddingBottom: '112px', 
        background: 'linear-gradient(135deg, rgba(8, 21, 38, 0.8) 0%, rgba(26, 54, 93, 0.6) 50%, rgba(0, 0, 0, 0.7) 100%)', 
        overflow: 'hidden', 
        backgroundImage: 'url(/JHU_APL_logo-2.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        gap: '80px', 
        display: 'flex',
        position: 'relative'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 20s ease-in-out infinite',
          pointerEvents: 'none'
        }}></div>
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, rgba(8, 21, 38, 0.3) 0%, rgba(26, 54, 93, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
          pointerEvents: 'none'
        }}></div>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-White, white)', fontSize: '56px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '67.20px', wordWrap: 'break-word'}}>John Hopkins APL</div>
               </div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex', flexWrap: 'wrap', alignContent: 'flex-start'}}>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', background: 'var(--Color-Neutral-Lightest, #EEEEEE)', borderRadius: '12px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'var(--Color-Neutral-Darkest, black)', fontSize: '14px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '21px', wordWrap: 'break-word'}}>Case Study</div>
             </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', background: 'var(--Color-Neutral-Lightest, #EEEEEE)', borderRadius: '12px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'var(--Color-Neutral-Darkest, black)', fontSize: '14px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '21px', wordWrap: 'break-word'}}>Research/Design</div>
               </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', background: 'var(--Color-Neutral-Lightest, #EEEEEE)', borderRadius: '12px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'var(--Color-Neutral-Darkest, black)', fontSize: '14px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '21px', wordWrap: 'break-word'}}>Transportation Service</div>
             </div>
                <div data-alternate="False" data-icon-position="No Icon" data-text-only="False" style={{paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', background: 'var(--Color-Neutral-Lightest, #EEEEEE)', borderRadius: '12px', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{color: 'var(--Color-Neutral-Darkest, black)', fontSize: '14px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '21px', wordWrap: 'break-word'}}>Team Project</div>
             </div>
               </div>
             </div>
            <div style={{flex: '1 1 0', maxWidth: '480px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex'}}>
                  <div style={{color: 'var(--Color-White, white)', fontSize: '20px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word'}}>Role</div>
                  <div style={{color: 'var(--Color-White, white)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>UX Designer & Researcher</div>
                   </div>
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex'}}>
                  <div style={{color: 'var(--Color-White, white)', fontSize: '20px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word'}}>Date</div>
                  <div style={{color: 'var(--Color-White, white)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>January - May 2025</div>
                   </div>
                 </div>
               </div>
                    </div>
                  </div>
                    </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '120px', paddingBottom: '120px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>The Problem</div>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', paddingBottom: '16px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div style={{maxWidth: '479px', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>By 2040, autonomous vehicles (AVs) will be more common, but college campuses pose unique challenges with heavy pedestrian traffic and varying levels of road awareness. To ensure safe and seamless adoption, AV systems must build trust, safety, and efficiency into everyday campus transportation.</div>
                  </div>
                <div style={{alignSelf: 'stretch', height: '216px'}}></div>
                </div>
                    </div>
            <div style={{flex: '1 1 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/Instagram Post - Upgrade Your Time Management Today-2.png" />
                  </div>
                    </div>
                  </div>
                </div>
      {/* Section Divider */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '40px', paddingBottom: '40px', background: 'var(--Color-Scheme-1-Background, white)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80px', height: '2px', background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', borderRadius: '1px'}}></div>
              </div>
      
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '120px', paddingBottom: '120px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{maxWidth: '380px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#1a365d', fontSize: '14px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '20px', wordWrap: 'break-word', textTransform: 'uppercase', letterSpacing: '1px'}}>Solution</div>
              </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>Future of Campus Mobility</div>
              </div>
            </div>
                  </div>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word'}}>The ideal autonomous vehicle of 2040 must prioritize safety, clear communication, and user experience, supported by distinctive design features and advanced technology. On a college campus, the AV functions as a dedicated transportation service for students and faculty, addressing the need for efficient, reliable, and accessible mobility in pedestrian-heavy environments while reducing dependence on personal vehicles.</div>
                  </div>
                </div>
                  </div>
                  </div>
                </div>
      
      {/* Section Divider */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '40px', paddingBottom: '40px', background: 'var(--Color-Scheme-1-Background, white)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80px', height: '2px', background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', borderRadius: '1px'}}></div>
              </div>
      
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '120px', paddingBottom: '120px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{
              width: '526px', 
              height: '580px', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              gap: '32px', 
              display: 'inline-flex'
            }}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '40px', wordWrap: 'break-word', marginBottom: '8px'}}>High End Autonomous Vehicle</div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex'}}>
                      <div style={{alignSelf: 'stretch', color: '#4a5568', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>The AVs is easily distinguishable from traditional vehicles while also integrating LiDAR (Light Detection and Ranging), cameras, and radar at multiple points of the vehicle's exterior to ensure optimal safety for passengers and other road users.</div>
                  </div>
                  </div>
                </div>
                  </div>
                  </div>
            <div style={{maxWidth: '527px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-4.jpg" />
                </div>
              </div>
            </div>
               </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{maxWidth: '653px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-5.jpg" />
             </div>
            <div style={{width: '526px', height: '580px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '60px', wordWrap: 'break-word'}}>Secure And Safe Interior</div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex'}}>
                      <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>The AV prioritizes comfort, safety, and accessibility through flexible seating, security cameras, and clear indicator lights. A windshield HUD provides real-time updates, while seat-integrated haptics enhance communication, especially for passengers with accessibility needs.</div>
             </div>
                    </div>
                  </div>
                    </div>
                  </div>
            </div>
               </div>
             </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '1280px', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{width: '526px', height: '580px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '60px', wordWrap: 'break-word'}}>User Friendly Interface</div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex'}}>
                      <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>The AV interface is designed to maximize safety and user comfort. Passengers receive real-time hazard alerts, driving visualizations, navigation guidance, and clear vehicle status updates, while also having control over climate, ride pacing, entertainment, and device connectivity.Creating a secure, personalized, and seamless travel experience.</div>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
            <div style={{maxWidth: '440px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-6.jpg" />
              </div>
               </div>
             </div>
                </div>
      <div style={{width: '100%', paddingTop: '112px', paddingBottom: '112px', paddingLeft: '64px', paddingRight: '64px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', maxWidth: '884px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
                  <div style={{width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                      <div style={{textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word'}}>Findings</div>
                  </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex'}}>
                      <div style={{alignSelf: 'stretch', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>Understanding The Current State of AVs And The Public's Perception </div>
                      <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Autonomous vehicles are still relatively new, and with that comes a lack of public trust. Concerns about potential malfunctions and road safety continue to fuel skepticism toward automation in transportation systems.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> </div>
                         <div style={{maxWidth: '529px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                           <img style={{width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/image 1.png" />
                  </div>
                  </div>
                </div>
              </div>
               </div>
             </div>
                </div>
              </div>
              </div>
                </div>
      {/* Section Divider */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '40px', paddingBottom: '40px', background: 'var(--Color-Scheme-1-Background, white)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80px', height: '2px', background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', borderRadius: '1px'}}></div>
      </div>
      
      <div style={{alignSelf: 'stretch', paddingLeft: '64px', paddingRight: '64px', paddingTop: '120px', paddingBottom: '120px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center'}}><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '56px', wordWrap: 'break-word'}}>So if trust is the issue, how can we make people feel more </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '56px', wordWrap: 'break-word'}}>comfortable</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '56px', wordWrap: 'break-word'}}> with AVs?</span></div>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '64px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                <div style={{
                  flex: '1 1 0', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '24px', 
                  display: 'inline-flex',
                  padding: '32px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }} 
                className={isClient ? "slide-in-left pulse-hover" : ""}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}>
                  
                  <div style={{width: '48px', height: '48px', position: 'relative', zIndex: 2}}>
                    <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="/handshake.png" />
                  </div>
                  <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>Create Familiarity</div>
                  <div style={{alignSelf: 'stretch', color: '#4a5568', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>People tend to trust human decisions more than algorithmic ones. Increasing trust requires familiarity, which involves showcasing past performance and explaining features and terminology.</div>
                </div>
              </div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                <div style={{
                  flex: '1 1 0', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '24px', 
                  display: 'inline-flex',
                  padding: '32px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }} 
                className={isClient ? "slide-in-left pulse-hover" : ""}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}>
                  
                  <div style={{width: '48px', height: '48px', position: 'relative', zIndex: 2}}>
                    <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="/directions_car.png" />
                  </div>
                  <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>Design</div>
                  <div style={{alignSelf: 'stretch', color: '#4a5568', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>AVs have a recognizable appearance, and this should be enforced so that pedestrians and other drivers can easily tell them apart from conventional vehicles. Additionally, AV should be able to operate effectively with disabled individuals. Additionally, the integration of ADAS (Advanced Driver Assistance Systems) promotes seamless navigation, convenience, and safety.</div>
                </div>
              </div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                <div style={{
                  flex: '1 1 0', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: '24px', 
                  display: 'inline-flex',
                  padding: '32px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }} 
                className={isClient ? "slide-in-left pulse-hover" : ""}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                }}>
                  
                  <div style={{width: '48px', height: '48px', position: 'relative', zIndex: 2}}>
                    <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="/sensors.png" />
                  </div>
                  <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>Safety</div>
                  <div style={{alignSelf: 'stretch', color: '#4a5568', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', position: 'relative', zIndex: 2}}>The integration of ADAS (Advanced Driver Assistance Systems) promotes seamless navigation, convenience, and safety.</div>
                </div>
              </div>
                  </div>
                </div>
              </div>
                </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '72px', wordWrap: 'break-word'}}>But What About Pedestrians.......</div>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Pedestrian safety remains a pressing issue, especially on college campuses where students frequently walk, bike, and use scooters in shared spaces. Distractions from phones and headphones, combined with high-traffic walkways, increase the risk of accidents</div>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <img style={{flex: '1 1 0', height: '682.67px'}} src="/Placeholder Image.png" />
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>Understanding Pedestrian Interactions on Campus</div>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>By conducting behavioral observations across Purdue University's campus, interactions between pedestrians and vehicles at multiple intersections reveal patterns and safety considerations.</div>
              </div>
              <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex'}}>
                  <div style={{width: '560px', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Pedestrians rely on group behavior and signals, often jaywalking or using devices</div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Younger drivers show mixed behaviors, from yielding to aggressive turns</div>
              </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Minimal interaction occurs, especially in cold weather</div>
              </div>
                </div>
              </div>
              </div>
                </div>
              </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Conducting thorough and comprehensive surveys provided a deeper understanding of personal experiences associated with campus navigation and further supported observations</div>
                      </div>
                      </div>
                <div style={{alignSelf: 'stretch', height: '130px'}}></div>
                    </div>
                  </div>
            <div style={{flex: '1 1 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{width: '100%', height: 'auto', maxHeight: '387.46px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/Screenshot2025-07-30at10.40.48PM.png" />
                </div>
              </div>
                </div>
        <div style={{width: '1207px', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
          <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>62.5%</div>
            <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Sometime rely on communicative gestures or eye contact with drivers</div>
              </div>
          <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>31.3%</div>
            <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Always rely communicative gestures or eye contact with drivers</div>
                    </div>
                    </div>
                  </div>
      <div style={{width: '100%', minHeight: '2246px', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>Observations and Interviews concluded that many frequently disregard traffic signals and<br/>group behavior plays a significant role.Participants expressed cautious skepticism toward AVs on campus, citing safety concerns,lack of trust in AV decision-making, and unpredictable pedestrian behavior.</div>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex'}}>
              <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word'}}>Deliverable</div>
                      </div>
              <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>Ecosystem Map</div>
                      </div>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '36px', wordWrap: 'break-word'}}>To move from individual insights to a systems-level perspective, we synthesized the findings from observations, surveys, and interviews into an ecosystem map, which highlights possible interactions and perceptions of stakeholders for AVs in the digital future,<br/>understanding how pedestrians, owners, and passengers experiences would change with<br/>the introduction of AVS</div>
                    </div>
                      </div>
          <div style={{alignSelf: 'stretch', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width: '100%', height: 'auto', maxHeight: '1296.16px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'}} src="/ecomap.png" />
                    </div>
                  </div>
                </div>
      <div style={{alignSelf: 'stretch', height: '388px', paddingBottom: '112px', paddingLeft: '64px', paddingRight: '64px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '72px', wordWrap: 'break-word'}}>After doing the research and narrowing down user needs, we started sketching ideas</div>
              </div>
      <div style={{width: '100%', paddingBottom: '112px', paddingLeft: '64px', paddingRight: '64px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <img style={{alignSelf: 'stretch', height: '502px'}} src="/ideate.png" />
        <img style={{maxWidth: '696px', width: '100%', height: 'auto'}} src="/sketch.png" />
        <img style={{maxWidth: '836px', width: '100%', height: 'auto'}} src="/sketch2.png" />
               </div>
      <div style={{width: '100%', minHeight: '1449px', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{width: '526px', height: '580px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', height: '1207px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '64px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '96px', wordWrap: 'break-word'}}>Final Designs</div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                      <div style={{width: '48px', height: '48px', position: 'relative'}}>
                        <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="https://placehold.co/48x48" />
             </div>
              </div>
                </div>
              </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch'}}><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}>Exterior<br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}><br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>The AV is designed for accessibility and comfort with features like a </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>wheelchair ramp</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>sliding doors</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>spacious SUV sizing</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> tinted windows.</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> Safety and distinction are enhanced through</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> 360° cameras</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>LiDAR</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>turquoise lights</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>custom license plates</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, while </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>external screens</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>projected crosswalks</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>speakers</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> improve communication with pedestrians and drivers.</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> Redundant elements </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>like</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> side mirrors</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> are </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>removed</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, reflecting the vehicle's reliance on advanced sensing technology.</span></div>
              </div>
            </div>
              </div>
               </div>
            <img style={{width: '675px', height: '1291px'}} src="/proto.png" />
              </div>
                </div>
              </div>
      <div style={{width: '100%', minHeight: '1265px', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <img style={{width: '653px', height: '524.87px'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-5.jpg" />
            <div style={{width: '526px', height: '580px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{width: '48px', height: '48px', position: 'relative'}}>
                      <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="https://placehold.co/48x48" />
              </div>
            </div>
            </div>
              </div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                  <div style={{alignSelf: 'stretch'}}><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}>Interior<br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}><br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>The AV's interior prioritizes flexibility and productivity with </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>rearranged seating</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>foldable tables,</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> and </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>maximized space</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>. Communication is enhanced through</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> indicator lights</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>a windshield HUD</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>haptic feedback</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> interactive screens</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, while</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> in-vehicle cameras</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> support passenger safety and well-being. </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>Removing</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}> the steering wheel further frees space, reflecting the shift to full autonomy.</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: '100%', minHeight: '1248px', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '1280px', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{width: '526px', height: '580px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                      <div style={{width: '48px', height: '48px', position: 'relative'}}>
                        <img style={{width: '48px', height: '48px', left: '0px', top: '0px', position: 'absolute'}} src="https://placehold.co/48x48" />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex'}}>
                  <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch'}}><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}>AV interface<br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '41.60px', wordWrap: 'break-word'}}><br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>The AV enhances passenger awareness with</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> hazard pop-ups</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, a </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>driving visualization panel</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>GPS navigation</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> clear status indicators</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>. Users can personalize their experience through</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}> temperature and speed controls</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>entertainment options</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, and </span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '46.80px', wordWrap: 'break-word'}}>device connectivity</span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '46.80px', wordWrap: 'break-word'}}>, ensuring both comfort and autonomy during travel.</span></div>
                  </div>
                </div>
              </div>
            </div>
            <img style={{width: '674px', height: '1166px'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-6.jpg" />
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingTop: '177px', paddingBottom: '112px', paddingLeft: '64px', paddingRight: '64px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: '180px', textAlign: 'center', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '72px', wordWrap: 'break-word'}}>How will this be implemented into 2040?</div>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>Ideating the Narrative</div>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '48px', wordWrap: 'break-word'}}>To generate the narrative, a user journey map was created that includes five distinct personas. Utilizing these developed personas, key points were identified that trace the path from user awareness to consideration, decision-making, and ultimately, retention. This facilitated the creation of storyboard sketches, laying the foundation for a design vignette.</div>
              </div>
            </div>
            <img style={{width: '680px', height: '726px'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-8.jpg" />
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <img style={{flex: '1 1 0', height: '643.33px'}} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-7.jpg" />
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '48px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '57.60px', wordWrap: 'break-word'}}>Design Fiction Vignette</div>
                    <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '36px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '54px', wordWrap: 'break-word'}}>The aim is to present futuristic scenarios of the 2040s using storytelling and visuals to investigate how autonomous vehicles and campus users could interact.</div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', height: '108px'}}></div>
              </div>
            </div>
            <img style={{width: '600px', height: 'auto', position: 'relative'}} src="/Placeholder Lightbox.png" />
          </div>
        </div>
      </div>
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '112px', paddingBottom: '112px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '80px', display: 'flex'}}>
        <div style={{width: '100%', maxWidth: '1280px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex'}}>
          <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'var(--Color-Scheme-1-Text, black)', fontSize: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>Lessons Learned</div>
            </div>
            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex'}}>
              <div style={{width: '592px'}}><span style={{color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>This Work Is Bigger Than Me<br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word'}}><br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '27px', wordWrap: 'break-word'}}>Arguably the biggest lesson for me us realizing that this work will shape the future.For the first time, I was part of something that felt bigger than me. I was helping create something that could change how we move, live, and connect.<br/><br/>It hit me: Solving AVs on a college campus isn't just about students  , it's a blueprint for cities, hospitals, airports... everywhere.<br/>And that realization? It changed the way I showed up every day.<br/><br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '27px', wordWrap: 'break-word'}}>The stakes were suddenly very real<br/></span><span style={{color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}><br/>The Smallest Details Are What Earn Trust<br/></span><span style={{color: 'var(--Color-Scheme-1-Text, black)', fontSize: '18px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '27px', wordWrap: 'break-word'}}><span style={{fontWeight: '700'}}>As technology evolves, trust becomes essential</span>. It's not the flashy demos or perfect test scores that earn it , it's the small, almost invisible decisions.<br/>Like when an AV pauses two extra seconds at a busy crosswalk. Or slows down near a dorm, not because it has to, but because people often cross unpredictably.<br/>No one programmed it to be cautious there , but it was. And people noticed.<br/>That's how trust is built , <span style={{fontWeight: '700'}}>quietly</span>, in the margins.<br/><br/></span></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Divider */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '40px', paddingBottom: '40px', background: 'var(--Color-Scheme-1-Background, white)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '80px', height: '2px', background: 'linear-gradient(90deg, #081526 0%, #1a365d 100%)', borderRadius: '1px'}}></div>
      </div>
      
      {/* View Next Project Button */}
      <div style={{width: '100%', paddingLeft: '64px', paddingRight: '64px', paddingTop: '120px', paddingBottom: '120px', background: 'var(--Color-Scheme-1-Background, white)', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div 
                style={{
            padding: '18px 40px',
                  background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)',
            borderRadius: '12px',
                  cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 32px rgba(8, 21, 38, 0.15)',
            border: 'none'
          }}
          onClick={() => {
            console.log('View Busly project clicked');
            router.push('/busly');
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(8, 21, 38, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(8, 21, 38, 0.15)';
          }}
        >
          <div style={{color: 'white', fontSize: '16px', fontFamily: 'Roboto', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word', letterSpacing: '0.5px'}}>View Next Project</div>
        </div>
      </div>
      
       {/* Floating Action Button */}
       <div style={{
         position: 'fixed',
         bottom: '32px',
         right: '32px',
         zIndex: '1000'
       }}>
         <div 
           style={{
             width: '56px',
             height: '56px',
             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
             borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
             justifyContent: 'center',
             cursor: 'pointer',
             boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
             border: '2px solid rgba(255, 255, 255, 0.1)'
           }}
           onClick={() => router.push('/busly')}
                onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
             e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'scale(1) translateY(0)';
             e.currentTarget.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.3)';
           }}
         >
           <div style={{color: 'white', fontSize: '16px', fontWeight: 'bold'}}>→</div>
            </div>
       </div>
      </>
    </div>
  );
}





