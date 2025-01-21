import styled from "styled-components";

export const Layout1Wrapper = styled.div``;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 16px;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.palette.background.paper};
  text-align: center;
  padding: 16px;
  margin-top: 16px;
`;
