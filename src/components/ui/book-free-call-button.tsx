"use client";

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

interface BookFreeCallButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

const BookFreeCallButton: React.FC<BookFreeCallButtonProps> = ({ onClick, className, href = '/book' }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(href);
    }
  };

  return (
    <StyledWrapper className={className}>
      <button onClick={handleClick}>
        <svg viewBox="0 0 24 24" width={24} height={24} stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        Book Free Call
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #fe6601;
    background-color: #fff5f0;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(254, 102, 1, 0.2);
    border-radius: 40px 40px 40px 40px;
    padding: 8px 20px 8px 24px;
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px rgba(254, 102, 1, 0.3);
    cursor: pointer;
  }

  button:hover {
    color: #e55a01;
    background-color: #fff0e6;
    box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgba(254, 102, 1, 0.4);
  }

  button:active {
    box-shadow: none;
  }
`;

export default BookFreeCallButton;
