import styled from 'styled-components';
import { Modal, Button } from 'antd';

export const CustomModal = styled(Modal)`
  &&& {
    div {
      background-color: ${({ theme }) => theme.colors.modalBackground};
    }
  }
`;

export const CustomButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.modalButton};
  border: ${({ theme }) => theme.colors.modalButtonBorder};
  color: ${({ theme }) => theme.colors.modalButtonColor};
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const LeftSideContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 40vh;
  width: 20%;
`;

export const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 60%;
`;

export const RightSideContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 40vh;
  width: 20%;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 25vh;
  justify-content: center;
  width: 95%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.modalTextColor};
  font-size: 20px;
  text-align: center;
`;

export const CountryInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 10px 0;
  width: 100%;
`;

export const CountryInfo = styled.p`
  color: ${({ theme }) => theme.colors.modalTextColor};
  font-weight: 600;
  margin: ${({ margin }) => margin};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.modalTextColor};
`;

export const VerticalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.modalVerticalDividerColor};
  border-radius: 5px;
  margin: 0 5px;
`;

export const CustomHorizontalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.modalVerticalDividerColor};
  margin: 15px 0;
  width: 100%;
`;

export const CustomLink = styled.a`
  color: ${({ theme }) => theme.colors.modalLinkColor};
`;
