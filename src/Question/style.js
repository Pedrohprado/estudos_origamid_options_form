import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Formulario = styled.form`
  width: 90%;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.5s forwards;

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;
