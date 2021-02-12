import styled from 'styled-components'

export const SiteWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2483F0;
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

export const TopWrapper = styled.div`
  padding: 2em;
`;

export const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
  margin-top: 0.4em;
  margin-bottom: 1.6em;
`;

export const Label = styled.p`
  font-size: 0.9em;
  margin-bottom: 0.4em;
`;

export const InputLine = styled.input`
  width: 100%;
  background-color: white;
  border: 0.1em;
  padding: 1em;
  height: 3em;
  margin-bottom: 0.5em;
  border: 1px solid #44BCF0;
  border-radius: 1em;
  outline: none;
`;

export const ColorPicker = styled.label`
  height: 2.5em;
  width: 5em;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  display: block;
  border: none;

  > span {
    display: block;
    border: none;
    outline: none;
  }

  > span > input[type=color] {
    display: block;
    border: none;
    padding: 0px;
    height: 2.5em;
    width: 5em;
    outline: none;
  }

  > span > input[type=color]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  > span > input[type=color]::-webkit-color-swatch {
    border: none;
  }

  > span > input[type=color]::-moz-color-swatch {
    border: none;
  }
  > span > input[type=color]::-moz-focus-inner {
    border: none;
    padding: 0;
  }
`;

export const Button = styled.button`
  height: 2.5em;
  appearance: none;
  outline: none;
  border: 0;
  background-color: #2483F0;
  color: white;
  font-weight: 400;
  margin-top: 2em;
  width: 100%;
  border-radius: 1em;
  font-size: 0.9em;
  font-weight: 500;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #113D70;
  }
`;

export const IconSelector = styled.div`
  width: 100%;
  height: 5.5em;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconRow = styled.div`
  width: 97%;
  display: inline-flex;
  justify-content: space-between;
`;

export const IconPick = styled.label`
  width: 2em;
  display: inline-block;

  input {
    display: none;
  } 

  input:checked + span {
    background-color: #113D70;
  }

  input:hover + span {
    background-color: #113D70;
  }
`;

export const Icon = styled.span`
  height: 2.5em;
  width: 2.5em;
  border-radius: 5em;
  background-color: #2483F0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const OutputArea = styled.div`
  background-color: #274370;
  height: 5.5em;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  padding: 2em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const OutputWrapper = styled.div`
  height: 2em;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  visibility: ${props => (props.visibility)};
`;

export const Output = styled.input`
  width: 88%;
  height: 100%;
  background-color: #FFF;
  color: #000;
  border: none;
  outline: none;
  font-size: 0.8em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  overflow: hidden;
`;

export const CopyButton = styled.button`
  height: 100%;
  width: 12%;
  background-color: #2483F0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 0.7em;

  &:checked {
    background-color: #113D70;
  }

  &:hover {
    background-color: #113D70;
  }
`;
