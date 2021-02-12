import styled from 'styled-components'

export const SiteWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgcolor)};
`;

export const ContentWrapper = styled.div`
  width: 22em;
  height: 40em;
  background-color: white;
  border-radius: 1em;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Icon = styled.div`
  height: 4em;
  width: 4em;
  border-radius: 5em;
  background-color: ${props => (props.iconColor)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  cursor: pointer;
`;

export const TopWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: 1em;
  padding: 2em;
`;

export const AuthorWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 75%;
  margin-bottom: 2em;
  height: 1.5em;
`;

export const AuthorImg = styled.img`
  height: 1.5em;
  width: 1.5em;
  margin-right: 0.5em;
  border-radius: 2em;
  background-color: blue;
`;

export const AuthorName = styled.p`
  font-size: 0.9em;
  cursor: pointer;
`;

export const RepoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  max-height: 12em;
`;

export const RepoTitleLimiter = styled.div`
  height: 2.5em;
  width: 100%;
`;

export const RepoTitle = styled.h1`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const RepoTextLimiter = styled.div`
  max-height: 3.5em;
  display: inline-block;
  width: 100%;
  overflow: hidden;
`;

export const RepoDesc = styled.p`
  font-size: 0.75em;
  text-align: center;
  line-height: 1.3em;
  margin-bottom: 0;
`;

export const Contributions = styled.div`
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
  height: 14em;
  text-align: center;
`;

export const Contributor = styled.p`
  font-size: 0.75em;
  margin: 0;
  margin-bottom: 0.5em;
  cursor: pointer;
`;

export const ContributorTitle = styled.h3`
  font-size: 0.9em;
  margin: 0;
  margin-bottom: 0.75em;
`;

export const OutputArea = styled.div`
  background-color: ${props => (props.color)};  
  height: 5.5em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  padding: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonWrapper = styled.span`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  height: 1.8em;
`;

export const ButtonGroup = styled.span`
  display: inline-flex;
  flex-direction: row;
  height: 100%;
`;

export const SmallButton = styled.button`
  width: 5em;
  background-color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  outline: none;
  border: 0;
  margin-right: 0.3em;
  border: 0.1em white solid;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 0.75em;

  a {
    margin-left: 0.3em;
  }
`;

export const Counter = styled.button`
  min-width: 2em;
  padding-left: 0.3em;
  padding-right: 0.3em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  outline: none;
  border: 0;
  font-size: 0.8em;
  color: white;
  cursor: pointer;
  background-color: transparent;
`;