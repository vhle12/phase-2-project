import styled from 'styled-components';

export const PageContainer = styled.div`
  padding-top: 30px;
  max-width: 600px;
  width: 100%;
`;

export const SongContainer = styled.div`
  position: relative;
  background-color: rgba(51, 51, 51, 0.7);
  color: white;
  padding: 50px;
  margin: 20px auto;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 25px;
  object-fit: cover;
`;

export const MediaPlayer = styled.audio`
  width: 100%;
  margin: 10px 0;
`;