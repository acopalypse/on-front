import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.sizes.defaultWidth};
  margin: 0 auto;
`;
