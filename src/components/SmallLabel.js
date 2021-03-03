import styled from 'styled-components';
import mobile from '../responsive/Mobile';

const SmallLabel = styled.h4`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${mobile.tablet} {
    font-size: ${({ fontSize }) => fontSize || '20px'};
  }
  @media ${mobile.laptop} {
    font-size: ${({ fontSize }) => fontSize || '23px'};
  } 
  @media ${mobile.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  }
`;

export default SmallLabel; 