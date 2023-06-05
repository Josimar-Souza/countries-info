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
`;
