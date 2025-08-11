'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Animation keyframes
const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const slideInLeft = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const pulse = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Enhanced styled components with animations
const StyledSection = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }
  
  @media (min-width: 768px) {
    padding: 80px 64px;
    gap: 80px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 16px;
    gap: 40px;
  }
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

const StyledSectionContent = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  display: flex;
  animation: slideInLeft 0.6s ease-out 0.2s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const StyledSectionRow = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const StyledImage = styled.img`
  transition: all 0.3s ease;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

// Progress indicator component
const ProgressIndicator = styled.div<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #f0f0f0;
  z-index: 1000;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
    width: ${props => props.progress}%;
    transition: width 0.3s ease;
  }
`;

// Enhanced typography
const StyledHeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #081526;
  margin-bottom: 0.5rem;
  animation: slideInLeft 0.8s ease-out 0.2s forwards;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Missing styled components
const StyledSectionLeft = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const StyledSectionTitle = styled.div`
  align-self: stretch;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 57.60px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const StyledSectionText = styled.div`
  align-self: stretch;
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledSectionImage = styled.img`
  flex: 1 1 0;
  height: 563.89px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

// Enhanced interactive components
const InteractiveCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 12px;
    width: 2px;
    height: calc(100% + 1rem);
    background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  }
`;

// Data visualization components
const StatCard = styled.div`
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(8, 21, 38, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

// Enhanced image components
const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

// Quote component
const QuoteCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-left: 4px solid #081526;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: #081526;
    position: absolute;
    top: -1rem;
    left: 1rem;
    opacity: 0.3;
  }
`;

// Process timeline
const ProcessTimeline = styled.div`
  position: relative;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  }
`;

const ProcessStep = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 4rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    background: #081526;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #081526;
  }
`;

// Enhanced navigation
const StickyNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Loading skeleton
const Skeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 8px;
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const SkeletonText = styled(Skeleton)`
  height: 1rem;
  margin-bottom: 0.5rem;
`;

const SkeletonImage = styled(Skeleton)`
  height: 200px;
  width: 100%;
`;

// Add global styles
const GlobalStyles = styled.div`
  ${fadeInUp}
  ${slideInLeft}
  ${pulse}
  
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #333;
  }
`;

const StyledMainContainer = styled.div`
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: inline-flex;
  width: 100%;
  max-width: 100%;
  padding-top: 80px;
`;

const StyledNavbar8 = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #081526;
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

const StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21 = styled.div`
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

const StyledButton01 = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledLogoSection = styled.div`
  width: 491px;
  height: 415px;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  @media (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;

const StyledLogo = styled.img`
  width: 60px;
  height: 65px;
  cursor: pointer;
`;

const StyledNavLinks = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: flex;
`;

const StyledNavLink = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: flex;
`;

const StyledNavText = styled.div`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledContactButton = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const StyledHeroSection = styled.div`
  width: 100%;
  height: 900px;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 112px;
  padding-bottom: 112px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
  overflow: hidden;
  background-image: url(/JHU_APL_logo-2.png);
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 80px;
  display: flex;
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
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

const StyledTagText = styled.div`
  color: var(--Color-Neutral-Darkest, black);
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

const StyledFooter2 = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 80px;
  }
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledFooterTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const StyledFooterSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin: 0;
`;

const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledFooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const StyledFooterSocial = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledSocialIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledFooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
`;

const StyledFooterCopyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

// Enhanced accessibility and keyboard navigation
const KeyboardNav = styled.div`
  &:focus {
    outline: 2px solid #081526;
    outline-offset: 2px;
  }
`;

// Enhanced image lightbox functionality
const LightboxImage = styled.img`
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &:focus {
    outline: 2px solid #081526;
    outline-offset: 2px;
  }
`;

// Enhanced section dividers
const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #081526 50%, transparent 100%);
  margin: 4rem 0;
  opacity: 0.3;
`;

// Enhanced call-to-action buttons
const CTAButton = styled.button`
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(8, 21, 38, 0.3);
  }
  
  &:focus {
    outline: 2px solid #081526;
    outline-offset: 2px;
  }
`;

// Enhanced typography with better hierarchy
const DisplayText = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  background: linear-gradient(135deg, #081526 0%, #1a365d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 1rem;
`;

const BodyText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 1rem;
`;

// Enhanced grid layout for better content organization
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

// Enhanced card with better visual hierarchy
const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    border-color: #081526;
  }
`;

// Enhanced navigation with better accessibility
const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #081526;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &:focus {
    outline: 2px solid #081526;
    outline-offset: 2px;
  }
`;

export default function JHUAplPage() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      
      // Prevent NaN by ensuring we have valid numbers
      if (totalHeight > 0 && !isNaN(scrolled) && !isNaN(totalHeight)) {
        const progress = Math.min(Math.max((scrolled / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
      setIsScrolled(scrolled > 50);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    // Delay initial calculation to ensure DOM is fully loaded
    const timer = setTimeout(updateScrollProgress, 100);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      clearTimeout(timer);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section, .StyledSection');
    sections.forEach(section => {
      const element = section as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <GlobalStyles>
      <ProgressIndicator progress={scrollProgress || 0} />
      <StyledMainContainer>
        {/* Header - Same as Homepage */}
        <StyledNavbar8>
          <StyledHeader>
            <StyledContainer>
              <StyledContent>
                <StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21>
                                     <img src="/logo.png" alt="Logo" style={{ width: '67px', height: '42px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => router.push('/')} />
                </StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21>
                <StyledColumn>
                  <StyledLinkTwo>
                    <StyledLinktext 
                      style={{ cursor: 'pointer' }}
                      onClick={() => router.push('/')}
                    >
                      Home
                    </StyledLinktext>
                  </StyledLinkTwo>
                  <StyledLinkTwo>
                    <StyledLinktext 
                      style={{ cursor: 'pointer' }}
                      onClick={() => router.push('/about')}
                    >
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

        {/* Enhanced Hero Section with Parallax Effect */}
        <StyledHeroSection>
          <StyledHeroContent>
            <StyledHeroRow>
              <StyledHeroLeft>
                <StyledTitle>John Hopkins APL</StyledTitle>
                <StyledTags>
                  <StyledTag>
                    <StyledTagText>UX Design</StyledTagText>
                  </StyledTag>
                  <StyledTag>
                    <StyledTagText>User Research</StyledTagText>
                  </StyledTag>
                  <StyledTag>
                    <StyledTagText>Case Study</StyledTagText>
                  </StyledTag>
                </StyledTags>
              </StyledHeroLeft>
              <StyledHeroRight>
                <StyledInfoRow>
                  <StyledInfoItem>
                    <StyledInfoLabel>Role</StyledInfoLabel>
                    <StyledInfoValue>UX Designer & Researcher</StyledInfoValue>
                  </StyledInfoItem>
                  <StyledInfoItem>
                    <StyledInfoLabel>Date</StyledInfoLabel>
                    <StyledInfoValue>January - May 2025</StyledInfoValue>
                  </StyledInfoItem>
                </StyledInfoRow>
              </StyledHeroRight>
            </StyledHeroRow>
          </StyledHeroContent>
        </StyledHeroSection>

        {/* The Problem Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>PROBLEM STATEMENT</span>
               </div>
             </div>
             <StyledSectionRow>
               <StyledSectionLeft>
                 <StyledSectionTitle>The Problem</StyledSectionTitle>
                 <StyledSectionText>
                   As autonomous vehicles (AVs) become more common, especially by 2040, it's essential to ensure they can safely and effectively navigate complex environments like college campuses. These settings are uniquely dynamic, with high pedestrian traffic, cyclists, a mix of manual and autonomous vehicles, and unpredictable behaviors from road users.
                 </StyledSectionText>
               </StyledSectionLeft>
               <StyledSectionImage src="/Instagram Post - Upgrade Your Time Management Today-2.png" alt="Problem visualization" />
             </StyledSectionRow>
           </StyledSectionContent>
         </StyledSection>

         {/* Process Timeline Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>DESIGN PROCESS</span>
               </div>
             </div>
             <div style={{ width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
               <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Our Design Process</div>
               <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>A comprehensive approach to understanding and designing for autonomous vehicle interactions on campus.</div>
             </div>
             <ProcessTimeline>
               <ProcessStep>
                 <h3 style={{ color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, marginBottom: '0.5rem' }}>Research & Discovery</h3>
                 <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Literature review, expert interviews, and campus observations to understand the current state of AVs and user needs.</p>
               </ProcessStep>
               <ProcessStep>
                 <h3 style={{ color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, marginBottom: '0.5rem' }}>Analysis & Insights</h3>
                 <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Synthesizing findings into key insights about safety, trust, design, and user experience requirements.</p>
               </ProcessStep>
               <ProcessStep>
                 <h3 style={{ color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, marginBottom: '0.5rem' }}>Ideation & Prototyping</h3>
                 <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Developing concepts for AV exterior, interior, and interface designs based on user research insights.</p>
               </ProcessStep>
               <ProcessStep>
                 <h3 style={{ color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, marginBottom: '0.5rem' }}>Storytelling & Vision</h3>
                 <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Creating narrative scenarios and design fiction to envision the future of AV interactions on campus.</p>
               </ProcessStep>
             </ProcessTimeline>
           </StyledSectionContent>
         </StyledSection>

                  {/* Findings Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>RESEARCH FINDINGS</span>
               </div>
             </div>
             <StyledSectionRow>
               <div style={{ width: '380px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                 <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                   <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                     <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Findings</div>
                   </div>
                   <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                     <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Understanding The Current State of AVs</div>
                     <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>By conducting an extensive and thorough literature review, several key areas of importance were highlighted and brought to the forefront of our understanding.</div>
                   </div>
                 </div>
               </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '64px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                    <div style={{ width: '48px', height: '48px', position: 'relative', overflow: 'hidden' }}>
                      <img src="/warning.png" alt="Safety Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Safety - Combating Fears</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Fears surrounding potential malfunctions in automation technology, alongside rising concerns for road safety in various transportation systems</div>
                  </div>
                  <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                    <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                      <img src="/directions_car.png" alt="Design Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Design - Engineering Strengths</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>AVs have a recognizable appearance, and this should be enforced so that pedestrians and other drivers can easily tell them apart from conventional vehicles.<br/><br/>Additionally, the integration of ADAS (Advanced Driver Assistance Systems) promotes seamless navigation, convenience, and safety.</div>
                  </div>
                </div>
                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '48px', display: 'inline-flex' }}>
                  <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                    <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                      <img src="/handshake.png" alt="Trust Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Trust - Navigating Perceptions</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>People tend to trust human decisions more than algorithmic ones. However, familiarity with AVs and user control can reduce algorithmic aversion. Increasing trust requires familiarity, which involves showcasing past performance and explaining features and terminology.</div>
                  </div>
                  <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                    <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                      <img src="/lightbulb_2.png" alt="Suggestions Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Suggestions - Facilitating Integration</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>We proposed suggestions to enhance user experience and engagement: comprehensive educational campaigns to raise awareness and required structured usability testing to evaluate and improve our initiatives.</div>
                  </div>
                </div>
              </div>
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* AV Experiences & Details Section */}
        <StyledSection>
          <StyledSectionContent>
            <div style={{ width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
              <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{ textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Findings</div>
              </div>
              <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>AV Experiences & Details</div>
                <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Through social media reviews, we can gauge perceptions and experiences with AVs. Due to limited access to AVs and cars with ADS, video content on ADS, car reviews, and general opinions were primarily used.</div>
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '48px', display: 'inline-flex' }}>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '64px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                    <img src="/policy_alert.png" alt="System Status Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '33.60px' }}>System Status Indication</div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Many ADS consist of sub-systems with various activation and display methods, offering limited feedback.</div>
                  </div>
                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                    <img src="/sensors.png" alt="Detection Methods Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '33.60px' }}>Detection Methods</div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>ADS rely on cameras and radar systems to detect and assess surroundings. The End-to-End network is key, streamlining data acquisition to decision-making. It&apos;s important to distinguish between sensor fusion and vision-based methods. Sensor fusion combines data from multiple sensors for a comprehensive environmental view, while vision-based systems depend mainly on visual input. Each method has its own benefits and challenges, impacting the effectiveness of Autonomous Driving Systems.</div>
                  </div>
                </div>
              </div>
              <img style={{ width: '540px', height: '540px', objectFit: 'cover', objectPosition: 'top' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam.jpg" alt="AV Experience Diagram" />
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '64px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                    <img src="/back_hand.png" alt="Vehicle Interactions Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '33.60px' }}>Vehicle Interactions</div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>People intentionally damage autonomous vehicles (AVs). Furthermore, ineffective communication between these vehicles and their environments worsens the problem.</div>
                  </div>
                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
                  <div style={{ width: '48px', height: '48px', position: 'relative' }}>
                    <img src="/accessible.png" alt="Accessibility Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '24px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '33.60px' }}>Accessibility</div>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Challenges for autonomous vehicles (AVs) in terms of operating effectively and interacting appropriately with disabled individuals.</div>
                  </div>
                </div>
              </div>
            </div>
          </StyledSectionContent>
        </StyledSection>

                 {/* Interviews Section - Enhanced */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>EXPERT INSIGHTS</span>
               </div>
             </div>
             <div style={{ width: '100%', maxWidth: '768px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'flex' }}>
               <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Gaining Insights Through Interviews</div>
               <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Objective: To obtain a more profound understanding of the future of autonomous vehicles from both professional and academic viewpoints.<br/><br/>Method: Conducted interviews with nine subject matter experts from JHU APL and top automotive companies.</div>
             </div>
            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '64px', display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: '64px', display: 'inline-flex' }}>
                <QuoteCard style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '32px', display: 'inline-flex' }}>
                  <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>&quot;Reduction of private ownership is in everybody&apos;s favor... the world will be safer, environmentally too, especially with fewer vehicles on the road.&quot;</div>
                  <div style={{ width: '300px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                      <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Satvir Singh</div>
                      <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Director of Product Safety at MayMobility</div>
                    </div>
                  </div>
                </QuoteCard>
                <QuoteCard style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '32px', display: 'inline-flex' }}>
                  <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>&quot;As humans we&apos;ve learned to pick up on little things and react accordingly, which autonomy might not be able to pick up on these nuances.&quot;</div>
                  <div style={{ width: '300px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                      <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Lexi Basantis</div>
                      <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Human Centered Design Strategist at JHU APL</div>
                    </div>
                  </div>
                </QuoteCard>
              </div>
            </div>
          </StyledSectionContent>
        </StyledSection>

                 {/* Survey Results Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>SURVEY RESULTS</span>
               </div>
             </div>
             <StyledSectionRow>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                      <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Exploring Perceptions of Motorized Vehicles and AVs</div>
                      <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Conducting thorough and comprehensive surveys to gain a deeper understanding of personal experiences, the challenges associated with campus navigation, and the varied perceptions of autonomous vehicles (AV) among students and staff.</div>
                    </div>
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <StatCard>
                        <StatNumber>62.5%</StatNumber>
                        <StatLabel>Sometimes rely on communicative gestures or eye contact with drivers</StatLabel>
                      </StatCard>
                      <StatCard>
                        <StatNumber>31.3%</StatNumber>
                        <StatLabel>Always rely on communicative gestures or eye contact with drivers</StatLabel>
                      </StatCard>
                    </div>
                  </div>
                </div>
              </div>
              <StyledImage style={{ flex: '1 1 0', height: '387.46px' }} src="/Screenshot2025-07-30at10.40.48PM.png" alt="Survey Results" />
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

                 {/* Understanding Pedestrian Interactions on Campus Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>CAMPUS OBSERVATIONS</span>
               </div>
             </div>
             <StyledSectionRow>
              <img style={{ flex: '1 1 0', height: '682.67px' }} src="/Placeholder Image.png" alt="Pedestrian Interactions" />
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '48px' }}>Understanding Pedestrian Interactions on Campus</div>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Observing various behaviors and carefully identifying interactions between pedestrians and vehicles at different intersections throughout the Purdue University campus can provide valuable insights. This analysis not only highlights patterns but also reveals the complexities of how both groups navigate these areas.</div>
                </div>
                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                  <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex' }}>
                    <div style={{ width: '560px', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Pedestrians rely on group behavior and signals, often jaywalking or using devices</div>
                  </div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Younger drivers show mixed behaviors, from yielding to aggressive turns</div>
                  </div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex' }}>
                    <div style={{ flex: '1 1 0', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Minimal interaction occurs, especially in cold weather</div>
                  </div>
                </div>
              </div>
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

                 {/* Ecosystem Map Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>ECOSYSTEM MAPPING</span>
               </div>
             </div>
             <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Deliverable</div>
                </div>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Ecosystem Map</div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>We initially created 3 ecosystem maps of what the state of AVs will look like for the year 2040, with each one following the user journey of different party, which were bystanders, owners of AVs, and passengers in AVs as a service.<br/><br/>Centering on the passenger map, envisioned in a future where autonomous vehicles serve as a public service akin to taxis, we trace the user experience from awareness to onboarding, usage, and retention. In developing the ecosystem map, we drew insights from our literature reviews, interviews, and comparative analyses.<br/><br/>-Focus on passengers of public AVs<br/>-Predicts the state of the AV Customer journey in the year 2040</div>
              </div>
            </StyledSectionRow>
            <img style={{ alignSelf: 'stretch', height: '1296.16px' }} src="/ecomap.png" alt="Ecosystem Map" />
          </StyledSectionContent>
        </StyledSection>

        {/* Retention and Awareness Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <img style={{ alignSelf: 'stretch', height: '620.17px' }} src="/retention.png" alt="Retention" />
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Retention</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Because of this unique experience and the niche AVs as a service fill in relation to other methods of travel, users will be likely to use the service again, and as users are exposed and use AVs more, they will gain increased trust in the service and be more likely to use it in the future.<br/><br/>-AVs provide a unique experience that users prefer over alternatives<br/><br/>-Trust in AV services will increase as users are exposed to them.<br/>- Users will be more likely to use the service again</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <img style={{ width: '619px', height: '622.47px' }} src="/awareness.png" alt="Awareness" />
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Awareness</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>As AVs might function similarly to companies such as Uber and Waymo, they would probably increase awareness using the same methods of advertising, media coverage, and personal recommendations.<br/><br/>-AV taxi&apos;s will operate in a similar way to Uber or Waymo<br/>-Word of mouth and advertising will play a large role in making individuals aware of the service</div>
                  </div>
                </div>
              </div>
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* Usage and Onboarding Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <img style={{ alignSelf: 'stretch', height: '588.29px' }} src="/image.png" alt="Usage" />
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Usage</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>For usage AVs allow for a lot of autonomy for users, allowing for them to have a private ride where they can control their environment freely, Leading to a better experience and increased quality of rides.<br/><br/>- AVs have a lot of affordances not offered by alternatives<br/>-No driver<br/>-Freedom of control<br/>-private travel<br/><br/>- Increased quality of rides</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <img style={{ alignSelf: 'stretch', height: '596.95px' }} src="/onboard.png" alt="Onboarding" />
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '41.60px' }}>Onboarding</div>
                    <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>As AVs might function similarly to companies such as Uber and Waymo, they would probably increase awareness using the same methods of advertising, media coverage, and personal recommendations.<br/><br/>-AV taxi&apos;s will operate in a similar way to Uber or Waymo<br/>-Word of mouth and advertising will play a large role in making individuals aware of the service</div>
                  </div>
                </div>
              </div>
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* Ideation Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Ideation To Shape Our Designs</div>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>In the ideation stage, the focus was to pinpoint features that would provide the best user experience for passengers of autonomous vehicles (AV), particularly within a college campus setting.</div>
                </div>
                <div style={{ width: '96px', height: '48px' }}></div>
              </div>
            </StyledSectionRow>
            <img style={{ alignSelf: 'stretch', height: '502px' }} src="/ideate.png" alt="Ideation Process" />
          </StyledSectionContent>
        </StyledSection>

        {/* Prototype AV Exterior Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Deliverable</div>
                </div>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Prototype AV Exterior</div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>The exterior design of the autonomous vehicle (AV) prototype incorporates several key features aimed at enhancing safety, communication, and user experience. These features are designed to address the unique challenges of campus environments and improve interaction between the AV and its surroundings.<br/><br/>-LED display panels for real-time communication<br/>-Haptic feedback systems for pedestrian interaction<br/>-Environmental sensors for obstacle detection<br/>-Adaptive lighting for visibility and signaling</div>
              </div>
            </StyledSectionRow>
            <img style={{ alignSelf: 'stretch', height: '738px', objectFit: 'contain' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-4.jpg" alt="AV Exterior Prototype" />
          </StyledSectionContent>
        </StyledSection>

        {/* Prototype AV Interior Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Deliverable</div>
                </div>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Prototype AV Interior</div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>The interior design focuses on creating a comfortable, accessible, and informative environment for passengers. Key features include adaptive seating arrangements, comprehensive information displays, and intuitive control systems.<br/><br/>-Modular seating for different passenger needs<br/>-Large information displays showing route and status<br/>-Accessibility features for diverse users<br/>-Climate control and comfort settings</div>
              </div>
            </StyledSectionRow>
            <img style={{ alignSelf: 'stretch', height: '738px' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-5.jpg" alt="AV Interior Prototype" />
          </StyledSectionContent>
        </StyledSection>

        {/* Prototype AV Interface Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Deliverable</div>
                </div>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Prototype AV Interface</div>
              </div>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Prototype interface features an interactive touch screen display, providing users with autonomy and customization, such as changing the AV&apos;s speed level and temperature</div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>1.</div>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>A constant display of the AV&apos;s environment and decision process to users, pointing out potential hazards and suggestions</div>
                      </div>
                      <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>2.</div>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>A navigation map which ensures the destination of the AV and communicates the predicted time of arrival</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StyledSectionRow>
            <img style={{ alignSelf: 'stretch', height: '738px', objectFit: 'contain' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-6.jpg" alt="AV Interface Prototype" />
          </StyledSectionContent>
        </StyledSection>

        {/* Ideating the Narrative Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '48px' }}>Ideating the Narrative</div>
                  <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>To generate the narrative, a user journey map was created that includes five distinct personas. Utilizing these developed personas, key points were identified that trace the path from user awareness to consideration, decision-making, and ultimately, retention. This facilitated the creation of storyboard sketches, laying the foundation for a design vignette.</div>
                </div>
              </div>
              <img style={{ flex: '1 1 0', height: '640px', width: '400px', objectFit: 'contain' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-8.jpg" alt="Narrative Ideation" />
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* Storyboard Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <img style={{ flex: '1 1 0', height: '643.33px' }} src="/[FOR SPONSOR] Purdue UX x JHU APL Figjam-7.jpg" alt="Storyboard" />
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* Design Fiction Vignette Section */}
        <StyledSection>
          <StyledSectionContent>
            <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                      <div style={{ color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 600, lineHeight: '24px' }}>Deliverable</div>
                    </div>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                      <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '48px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '57.60px' }}>Design Fiction Vignette</div>
                      <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>The aim is to present futuristic scenarios of the 2040s using storytelling and visuals to investigate how autonomous vehicles and campus users could interact.</div>
                    </div>
                  </div>
                  <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>Narrative</div>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Designed with the user in mind for optimal engagement and satisfaction.</div>
                      </div>
                      <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>Storyboard</div>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Ensures all users can navigate effortlessly, regardless of their abilities.</div>
                      </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingTop: '8px', paddingBottom: '8px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                      <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '20px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '28px' }}>Relevant Mockup Features</div>
                        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '24px' }}>Ensures all users can navigate effortlessly, regardless of their abilities.</div>
                      </div>
                      <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <img style={{ flex: '1 1 0', height: '466.67px', position: 'relative' }} src="/Placeholder Lightbox.png" alt="Design Fiction Vignette" />
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>



                 {/* Lessons Learned Section - Final Section */}
         <StyledSection>
           <StyledSectionContent>
             <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
               <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                 <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>LESSONS LEARNED</span>
               </div>
             </div>
             <StyledSectionRow>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', color: 'black', fontSize: '40px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '48px' }}>Lessons Learned</div>
              </div>
              <div style={{ flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'inline-flex' }}>
                <div style={{ width: '592px' }}>
                  <span style={{ color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '48px' }}>This Work Is Bigger Than Me<br/></span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>Arguably the biggest lesson for me is realizing that this work will shape the future. For the first time, I was part of something that felt bigger than me. I was helping create something that could change how we move, live, and connect.<br/><br/>It hit me: Solving AVs on a college campus isn&apos;t just about students — It&apos;s a blueprint for cities, hospitals, airports... everywhere.<br/>And that realization? It changed the way I showed up every day.<br/><br/></span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '27px' }}>The stakes were suddenly very real<br/></span>
                  <span style={{ color: 'black', fontSize: '32px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '48px' }}><br/>The Smallest Details Are What Earn Trust<br/></span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '27px' }}><br/>As technology evolves, trust becomes essential.</span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}> It&apos;s not the flashy demos or perfect test scores that earn it — it&apos;s the small, almost invisible decisions.<br/>Like when an AV pauses two extra seconds at a busy crosswalk. Or slows down near a dorm, not because it has to, but because people often cross unpredictably.<br/>No one programmed it to be cautious there — but it was. And people noticed.<br/>That&apos;s how trust is built — </span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 700, lineHeight: '27px' }}>quietly</span>
                  <span style={{ color: 'black', fontSize: '18px', fontFamily: 'Roboto', fontWeight: 400, lineHeight: '27px' }}>, in the margins.</span>
                </div>
              </div>
            </StyledSectionRow>
          </StyledSectionContent>
        </StyledSection>

        {/* Next Project Section */}
        <StyledSection>
          <StyledSectionContent>
            <div style={{ width: '100%', maxWidth: '768px', textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'inline-block', padding: '8px 24px', background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)', borderRadius: '20px', marginBottom: '1rem' }}>
                <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Roboto', fontWeight: 600 }}>NEXT PROJECT</span>
              </div>
            </div>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <button 
                onClick={() => router.push('/busly')}
                style={{
                  padding: '20px 40px',
                  background: 'linear-gradient(135deg, #081526 0%, #1a365d 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '20px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(8, 21, 38, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  margin: '0 auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(8, 21, 38, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(8, 21, 38, 0.3)';
                }}
              >
                <span>View Next Project: Busly</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </StyledSectionContent>
        </StyledSection>

        {/* Footer */}
        <StyledFooter2>
          <StyledFooterContent>
            <StyledFooterSection>
              <StyledFooterTitle>Daniel Lin</StyledFooterTitle>
              <StyledFooterSubtitle>UX Designer & Creative Problem Solver</StyledFooterSubtitle>
            </StyledFooterSection>
            <StyledFooterSection>
              <StyledFooterLinks>
                <StyledFooterLink href="mailto:danlin120405@gmail.com">📧 Email: danlin120405@gmail.com</StyledFooterLink>
                <StyledFooterLink href="tel:2176498560">📞 Phone: 2176498560</StyledFooterLink>
                <StyledFooterLink href="https://www.linkedin.com/in/daniel1204-lin"><img src="/LinkedIn_icon.svg.png" alt="LinkedIn" style={{ width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }} />LinkedIn: www.linkedin.com/in/daniel1204-lin</StyledFooterLink>
              </StyledFooterLinks>
            </StyledFooterSection>
          </StyledFooterContent>
          <StyledFooterDivider />
          <StyledFooterCopyright>© 2024 Daniel Lin. All rights reserved.</StyledFooterCopyright>
        </StyledFooter2>

      </StyledMainContainer>
    </GlobalStyles>
  );
} 