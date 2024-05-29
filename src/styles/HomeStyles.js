import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: rgba(51, 51, 51, .7);
  padding: 20px;
  margin: 20px auto;
  border-radius: 25px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  color: white;
  margin-top: 50px;
  margin-bottom: 200px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  color: white;
  border-radius: 25px;
  margin-bottom: 20px;
`;

export const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-right: 20px;
`;

export const BandInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BandName = styled.h1`
  margin: 0;
  font-size: 28px;
`;

export const BandGenres = styled.p`
  margin: 10px 0 0;
  color: #f0f2f5;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

export const EditButtonSection = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
`;

export const BandMember = styled.div`
  margin-bottom: 10px;
`;