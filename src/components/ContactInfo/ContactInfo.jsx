import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserAvatar = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
`;

const Wrapper = styled.div`
  //тут работало
  position: sticky;
  top: 156px;

  height: 100%;
`;

export const ContactInfo = ({ currentContact, defaultContact }) => {
  return (
    <Wrapper>
      {currentContact ? (
        <>
          <h2>Contact Info</h2>
          <UserAvatar />
          <p>{currentContact.name}</p>
          <p>{currentContact.number}</p>
        </>
      ) : (
        defaultContact && (
          <>
            <h1>Contact Info</h1>
            <UserAvatar />
            <p>{defaultContact.name}</p>
            <p>{defaultContact.number}</p>
          </>
        )
      )}
    </Wrapper>
  );
};
