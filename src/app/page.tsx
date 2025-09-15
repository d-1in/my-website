'use client'

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21 = styled.div`
  width: 66.93px;
  height: 42px;
`;

const StyledLinktextspan = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledButton01span = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledMediumlengthheroheadlinegoesherespan = styled.span`
  color: var(--Color-White, white);
  font-size: 56px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 67.20px;
  word-wrap: break-word;
`;

const StyledLoremipsumdolorsitametconsecteturadipiscingelitsuspendissevariusenimineroselementumtristiqueduiscursusmiquisviverraornareerosdolorinterdumnullautcommododiamliberovitaeeratspan = styled.span`
  color: var(--Color-White, white);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledActions01 = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledHeroButton = styled.button`
  padding: 18px 36px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  color: #081526;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 255, 255, 0.5), 0 6px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  }
`;

const StyledSecondaryButton = styled.button`
  padding: 18px 36px;
  background: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
  
  &:hover {
    background: white;
    color: #081526;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StyledHeadingspan = styled.span`
  color: #081526;
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 57.60px;
  word-wrap: break-word;
`;

const StyledTextspan = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledVector = styled.div`
  width: 39.94px;
  height: 38.59px;
  left: 5.70px;
  top: 3.69px;
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
`;

const StyledHeading01span = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledVector01 = styled.div`
  width: 38.52px;
  height: 38.48px;
  left: 4.75px;
  top: 4.73px;
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
`;

const StyledHeading02span = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledVector02 = styled.div`
  width: 44.55px;
  height: 28.61px;
  left: 1.72px;
  top: 9.69px;
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
`;

const StyledHeading03span = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledTaglinespan = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledHeading04span = styled.span`
  color: #081526;
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 57.60px;
  word-wrap: break-word;
`;

const StyledText01span = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledPlaceholderImage = styled.img`
  align-self: stretch;
  height: 300px;
  width: 100%;
  object-fit: cover;
  
  @media (min-width: 768px) {
    height: 450px;
  }
`;

const StyledHeading05span = styled.span`
  color: #081526;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledText03span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText04span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText05span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledButton03span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledVector03 = styled.div`
  width: 6.69px;
  height: 11.62px;
  left: 8.51px;
  top: 6.17px;
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
  border: 1px var(--Color-Scheme-1-Text, black) solid;
`;

const StyledPlaceholderImage01 = styled.img`
  align-self: stretch;
  height: 300px;
  width: 100%;
  object-fit: cover;
  
  @media (min-width: 768px) {
    height: 450px;
  }
`;

const StyledHeading06span = styled.span`
  color: #081526;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledText07span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText08span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText09span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledButton05span = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledVector04 = styled.div`
  width: 6.69px;
  height: 11.62px;
  left: 8.51px;
  top: 6.17px;
  position: absolute;
  background: var(--Color-Scheme-1-Text, black);
  border: 1px var(--Color-Scheme-1-Text, black) solid;
`;

const StyledDivider = styled.div`
  align-self: stretch;
  height: 0px;
  outline: 1px var(--Color-Scheme-1-Border, black) solid;
  outline-offset: -0.50px;
`;

const StyledLinkTwo = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
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

const StyledContent01 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const StyledContent02 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const StyledTaglineWrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: inline-flex;
`;

const StyledContent04 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
`;

const StyledText02 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
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

const StyledTag01 = styled.div`
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

const StyledTag02 = styled.div`
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

const StyledText06 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const StyledTag03 = styled.div`
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

const StyledTag04 = styled.div`
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

const StyledTag05 = styled.div`
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

const StyledInboxcustomize = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

const StyledDesignservices = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

const StyledArttrack = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
`;

const StyledImage = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
`;

const StyledChevronright = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
`;

const StyledImage02 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
`;

const StyledChevronright01 = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  overflow: hidden;
`;

const StyledColumn = styled.div`
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  display: flex;
`;

const StyledActions = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
`;

const StyledColumn01 = styled.div`
  width: 100%;
  max-width: 560px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  display: flex;
`;

const StyledSectionTitle = styled.div`
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const StyledSectionTitle01 = styled.div`
  width: 100%;
  max-width: 768px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
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

const StyledTags01 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const StyledColumn02 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
`;

const StyledColumn03 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
`;

const StyledColumn04 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
  }
`;

const StyledButton02 = styled.button`
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
  padding: 12px 24px;
  background: transparent;
  color: #081526;
  border: 2px solid #081526;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  transition: all 0.2s ease;
  pointer-events: auto;
  
  &:hover {
    background: #081526;
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const StyledButton04 = styled.button`
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: inline-flex;
  padding: 12px 24px;
  background: transparent;
  color: #081526;
  border: 2px solid #081526;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  z-index: 10;
  transition: all 0.2s ease;
  pointer-events: auto;
  
  &:hover {
    background: #081526;
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const StyledContent = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const StyledContainer01 = styled.div`
  flex: 1 1 0;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: inline-flex;
`;

const StyledContentTop = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const StyledContentTop01 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const StyledSkillsSection = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  background: linear-gradient(135deg, #081526 0%, #1a365d 50%, #2d3748 100%);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.6;
  }
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 112px;
    padding-bottom: 112px;
    gap: 80px;
  }
`;

const StyledSkillsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;


const StyledSkillCard = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StyledSkillIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const StyledSkillTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #081526;
  margin-bottom: 8px;
`;

const StyledSkillDescription = styled.p`
  font-size: 14px;
  color: #6c757d;
  line-height: 1.5;
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

const StyledRow = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
  }
`;

const StyledActions02 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const StyledActions03 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  display: flex;
`;

const StyledContainer = styled.div`
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const StyledHeader5 = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%);
  overflow: hidden;
  background-image: url(/IMG_4408.jpeg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(8, 21, 38, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
  }
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const StyledContent03 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
  display: flex;
`;

const StyledLeftContent = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
`;

const StyledLeftContent01 = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  display: inline-flex;
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

const StyledContainer02 = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 40px;
  }
`;

const StyledContent07 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
`;

const StyledContent09 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
`;

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

const StyledLayout241 = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
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
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 112px;
    padding-bottom: 112px;
    gap: 80px;
  }
`;

const StyledRow01 = styled.div`
  align-self: stretch;
  padding: 32px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  display: flex;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StyledImage01 = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: inline-flex;
`;

const StyledContent08 = styled.div`
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
  }
`;

const StyledRow02 = styled.div`
  align-self: stretch;
  padding: 32px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 48px;
  display: flex;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StyledContent06 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  gap: 48px;
`;

const StyledContent05 = styled.div`
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
  display: flex;
`;

const StyledContainer03 = styled.div`
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
`;

const StyledPortfolio16 = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
  padding-bottom: 60px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23081526' fill-opacity='0.02'%3E%3Cpath d='M50 0L60 40H100L70 65L80 100L50 80L20 100L30 65L0 40H40L50 0Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
  }
  
  @media (min-width: 768px) {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 112px;
    padding-bottom: 112px;
    gap: 80px;
  }
`;

const StyledHomeDesktop = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
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

const StyledButton01 = styled.span`
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledMediumlengthheroheadlinegoeshere = styled.span`
  color: white;
  font-size: 36px;
  font-family: 'Inter', 'Roboto', sans-serif;
  font-weight: 900;
  line-height: 1.1;
  word-wrap: break-word;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 2;
  
  @media (min-width: 768px) {
    font-size: 56px;
  }
  
  @media (min-width: 1024px) {
    font-size: 72px;
    line-height: 1.1;
  }
`;

const StyledLoremipsumdolorsitametconsecteturadipiscingelitSuspendissevariusenimineroselementumtristiqueDuiscursusmiquisviverraornareerosdolorinterdumnullautcommododiamliberovitaeerat = styled.span`
  color: white;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 1.6;
  word-wrap: break-word;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 2;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const StyledHeading = styled.span`
  color: #081526;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
  
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 57.60px;
  }
`;

const StyledSkillsHeading = styled.span`
  color: white;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
  
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 57.60px;
  }
`;

const StyledText = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledSkillsText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledHeading01 = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledHeading02 = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledHeading03 = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledTagline = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledHeading04 = styled.span`
  color: #081526;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
  
  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 57.60px;
  }
`;

const StyledText01 = styled.span`
  color: var(--Color-Scheme-1-Text, black);
  font-size: 18px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 27px;
  word-wrap: break-word;
`;

const StyledHeading05 = styled.span`
  color: #081526;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledText03 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText04 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText05 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledButton03 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

const StyledHeading06 = styled.span`
  color: #081526;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const StyledText07 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText08 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledText09 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 21px;
  word-wrap: break-word;
`;

const StyledButton05 = styled.span`
  color: var(--Color-Neutral-Darkest, black);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
`;

export default function Home() {
  const router = useRouter();
  
  React.useEffect(() => {
    document.title = "Daniel Lin - UX Designer Portfolio | Home";
  }, []);
  
  return (
    <StyledHomeDesktop>
      <StyledNavbar8>
        <StyledHeader>
          <StyledContainer>
            <StyledContent>
              <StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21>
                <img src="/logo.png" alt="Logo" style={{ width: '67px', height: '42px', objectFit: 'contain', cursor: 'pointer' }} onClick={() => {
                  console.log('Logo clicked, navigating to home');
                  router.push('/');
                }} />
              </StyledDALLE20250730213715AminimalistlogodesignusingonlytheinitialsDandLinwhiteThelettersshouldbesleekmodernandcleanwithacreativefontorcustom21>
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
      <StyledHeader5>
        <StyledContainer01>
          <StyledColumn01>
            <StyledContent01>
              <StyledMediumlengthheroheadlinegoeshere>Hello, I&apos;m Daniel Lin<br/>UX Designer at Purdue University</StyledMediumlengthheroheadlinegoeshere>
              <StyledLoremipsumdolorsitametconsecteturadipiscingelitSuspendissevariusenimineroselementumtristiqueDuiscursusmiquisviverraornareerosdolorinterdumnullautcommododiamliberovitaeerat>A UX Designer transforming ideas into user-centric designs<br/>by creating intuitive and engaging experiences</StyledLoremipsumdolorsitametconsecteturadipiscingelitSuspendissevariusenimineroselementumtristiqueDuiscursusmiquisviverraornareerosdolorinterdumnullautcommododiamliberovitaeerat>
            </StyledContent01>
            <StyledActions01>
              <StyledHeroButton onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}>View My Work</StyledHeroButton>
              <StyledSecondaryButton onClick={() => router.push('/contact')}>Get In Touch</StyledSecondaryButton>
            </StyledActions01>
          </StyledColumn01>
        </StyledContainer01>
      </StyledHeader5>
      <StyledLayout241>
        <StyledContainer02>
          <StyledSectionTitle>
            <StyledContent02>
              <StyledHeading>Converting Concepts into Designs Focused on Users</StyledHeading>
              <StyledText>Focusing on crafting engaging and intuitive experiences. I prioritize the needs of users to ensure the success of every project I undertake.</StyledText>
            </StyledContent02>
          </StyledSectionTitle>
          <StyledContent03>
            <StyledRow>
              <StyledColumn02>
                <StyledInboxcustomize>
                  <img src="/inbox_customize.png" alt="Inbox Customize Icon" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                </StyledInboxcustomize>
                <StyledHeading01>Tailored Solutions for Every Unique Challenge</StyledHeading01>
              </StyledColumn02>
              <StyledColumn03>
                <StyledDesignservices>
                  <img src="/globe.svg" alt="Design Services Icon" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                </StyledDesignservices>
                <StyledHeading02>Collaborative Process for Optimal Results</StyledHeading02>
              </StyledColumn03>
              <StyledColumn04>
                <StyledArttrack>
                  <img src="/art_track.png" alt="Art Track Icon" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                </StyledArttrack>
                <StyledHeading03>Proven Track Record of Successful Projects</StyledHeading03>
              </StyledColumn04>
            </StyledRow>
          </StyledContent03>
        </StyledContainer02>
      </StyledLayout241>
      <StyledSkillsSection>
        <StyledContainer02>
          <StyledSectionTitle>
            <StyledContent02>
              <StyledSkillsHeading>Skills</StyledSkillsHeading>
            </StyledContent02>
          </StyledSectionTitle>
          <StyledSkillsContainer>
            <StyledSkillsGrid>
              <StyledSkillCard>
                <StyledSkillIcon>🎨</StyledSkillIcon>
                <StyledSkillTitle>Design Tools</StyledSkillTitle>
                <StyledSkillDescription>Figma, Framer, Adobe Creative Cloud, Google Workspace</StyledSkillDescription>
              </StyledSkillCard>
              <StyledSkillCard>
                <StyledSkillIcon>📱</StyledSkillIcon>
                <StyledSkillTitle>Prototyping</StyledSkillTitle>
                <StyledSkillDescription>Wireframes and Design Sprints</StyledSkillDescription>
              </StyledSkillCard>
              <StyledSkillCard>
                <StyledSkillIcon>🔍</StyledSkillIcon>
                <StyledSkillTitle>User Research</StyledSkillTitle>
                <StyledSkillDescription>Userability Testing and Personas</StyledSkillDescription>
              </StyledSkillCard>
              <StyledSkillCard>
                <StyledSkillIcon>💻</StyledSkillIcon>
                <StyledSkillTitle>Development</StyledSkillTitle>
                <StyledSkillDescription>HTML and CSS</StyledSkillDescription>
              </StyledSkillCard>
            </StyledSkillsGrid>
          </StyledSkillsContainer>
        </StyledContainer02>
      </StyledSkillsSection>
      <StyledPortfolio16 id="portfolio-section">
        <StyledContainer03>
          <StyledSectionTitle01>
            <StyledTaglineWrapper>
              <StyledTagline>Portfolio</StyledTagline>
            </StyledTaglineWrapper>
            <StyledContent04>
              <StyledHeading04>Explore My Design Projects</StyledHeading04>
              <StyledText01>Discover innovative solutions through my featured projects.</StyledText01>
            </StyledContent04>
          </StyledSectionTitle01>
          <StyledContent05>
            <StyledContent06>
              <StyledRow01>
                <StyledContent07>
                  <StyledImage>
                    <StyledPlaceholderImage src="/Frame 16.png"/>
                  </StyledImage>
                  <StyledLeftContent>
                    <StyledContentTop>
                      <StyledText02>
                        <StyledHeading05>John Hopkins APL</StyledHeading05>
                        {/* Subtitle for JHU APL project */}
                        <div style={{ 
                          color: '#6c757d', 
                          fontSize: '16px', 
                          fontWeight: '500', 
                          marginTop: '8px',
                          fontFamily: 'Roboto'
                        }}>
                          Association with Purdue UXD
                        </div>
                      </StyledText02>
                      <StyledTags>
                        <StyledTag>
                          <StyledText03>Case Study</StyledText03>
                        </StyledTag>
                        <StyledTag01>
                          <StyledText04>Research/Design</StyledText04>
                        </StyledTag01>
                        <StyledTag02>
                          <StyledText05>Transportation Service</StyledText05>
                        </StyledTag02>
                        <StyledTag>
                          <StyledText03>Team Project</StyledText03>
                        </StyledTag>
                      </StyledTags>
                    </StyledContentTop>
                    <StyledActions02>
                      <StyledButton02 onClick={() => {
                        console.log('JHU APL project clicked, navigating to jhu-apl');
                        router.push('/jhu-apl');
                      }}>
                        <StyledButton03>View project</StyledButton03>
                        <StyledChevronright>
                          <img src="/chevron_right.png" alt="Chevron Right" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                        </StyledChevronright>
                      </StyledButton02>
                    </StyledActions02>
                  </StyledLeftContent>
                </StyledContent07>
              </StyledRow01>
              <StyledRow02>
                <StyledContent08>
                  <StyledImage01>
                    <StyledContent09>
                      <StyledImage02>
                        <StyledPlaceholderImage01 src="/Frame 17.png"/>
                      </StyledImage02>
                      <StyledLeftContent01>
                        <StyledContentTop01>
                          <StyledText06>
                            <StyledHeading06>Busly </StyledHeading06>
                          </StyledText06>
                          <StyledTags01>
                            <StyledTag03>
                              <StyledText07>Case Study</StyledText07>
                            </StyledTag03>
                            <StyledTag04>
                              <StyledText08>Mobile App</StyledText08>
                            </StyledTag04>
                            <StyledTag05>
                              <StyledText09>Design</StyledText09>
                            </StyledTag05>
                            <StyledTag05>
                              <StyledText09>Solo Project</StyledText09>
                            </StyledTag05>
                          </StyledTags01>
                        </StyledContentTop01>
                        <StyledActions03>
                          <StyledButton04 onClick={() => {
                            console.log('Busly project clicked, navigating to busly');
                            router.push('/busly');
                          }}>
                            <StyledButton05>View project</StyledButton05>
                            <StyledChevronright01>
                              <img src="/chevron_right.png" alt="Chevron Right" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                            </StyledChevronright01>
                          </StyledButton04>
                        </StyledActions03>
                      </StyledLeftContent01>
                    </StyledContent09>
                  </StyledImage01>
                </StyledContent08>
              </StyledRow02>
            </StyledContent06>
          </StyledContent05>
        </StyledContainer03>
      </StyledPortfolio16>
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
    </StyledHomeDesktop>
  );
}
