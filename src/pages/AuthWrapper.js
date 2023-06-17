import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';

function AuthWrapper({children}) {

  const {isLoading,error} = useAuth0();


  if(isLoading){
    return <>
    <h2>Loading</h2>
    </>
  }

  if(error){
    return <h2>{error.message}</h2>
  }
 
 
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;