import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GrayedSmallText = styled.span`
    font-size: 12px;
    color: #999;
`;

export const StyledLink = styled(Link)`
    font-size: 14px;
    color: #136cb7;
    text-decoration: none;
`;

export const ColoredBox = styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background-color: #f3ce00;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    padding: 7px 4px 4px 5px;
`;
