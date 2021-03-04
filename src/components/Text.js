import styled from 'styled-components';
import mobile from '../Responsive/Mobile';

const Text = styled.span`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${mobile.tablet} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${mobile.laptop} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  } 
  @media ${mobile.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
`;

export default Text;