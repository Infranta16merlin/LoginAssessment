import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { useContext } from 'react';

const SingleRepos = () => {
  const {singleRepo} = useContext(GithubContext);
  console.log(singleRepo);

 
  return <Wrapper>
    <div>
      {
        singleRepo.map((repo)=>{
         return(
          <article key={repo.id}>
            <img src={repo.owner.avatar_url} alt={repo.login}/>
            <div>
            <h2>{repo.name}</h2>
            <h4>{repo.full_name}</h4>
            <h4>Login Id:{repo.owner.login}</h4>
            <h4>Github url: {repo.owner.url}</h4>
            </div>
          </article>
         )
        })
      }
    </div>
  </Wrapper>
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: 'Repo Details';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
 
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default SingleRepos;
