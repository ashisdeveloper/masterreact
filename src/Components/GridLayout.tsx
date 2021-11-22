import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface GridLayoutProps {
	gridGap?: string;
	minHeight?: string;
	gridCols?: any;
	className?: string;
	children?: ReactChild;
}
export interface GridLayoutStylesProps {
	gridGap?: number;
	minHeight?: number;
	gridCols?: any;
	className?: string;
	children?: ReactChild;
}
export const GridLayout = ({ gridGap = "15", minHeight = "01", gridCols = ["1", "3", "3", "3"], className = "", children }: GridLayoutProps) => {
	return <GridLayoutStyles gridGap={parseInt(gridGap)} gridCols={gridCols} minHeight={parseInt(minHeight)} className={className}>
		{children}
	</GridLayoutStyles>
};

export interface GridBoxProps {
	children?: ReactChild;
}
export const GridBox = ({ children }: GridBoxProps) => {
	return <div className="gridBox">{children}</div>
};

const GridLayoutStyles = styled.div<GridLayoutStylesProps>`
	display: grid;
	grid-gap: ${props => props.gridGap}px;
	grid-template-columns: repeat(auto-fill, minmax(calc(${props => (100 / parseInt(props.gridCols[3]))}% - ${props => props.gridGap}px), 1fr));
	.gridBox {
		min-height: ${props => props.minHeight}px;
		height: ${props => props.minHeight == 0 ? 'max-content' : 'auto'};
		width: 100%;
		/* background: red; */
	}
	@media (max-width: 1200px) {
		grid-template-columns: repeat(auto-fill, minmax(calc(${props => 100 / parseInt(props.gridCols[3])}% - ${props => props.gridGap}px), 1fr));
	}
	@media (max-width: 992px) {
		grid-template-columns: repeat(auto-fill, minmax(calc(${props => 100 / parseInt(props.gridCols[2])}% - ${props => props.gridGap}px), 1fr));
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(calc(${props => 100 / parseInt(props.gridCols[1])}% - ${props => props.gridGap}px), 1fr));
	}
	@media (max-width: 576px) {
		grid-template-columns: repeat(auto-fill, minmax(calc(${props => 100 / parseInt(props.gridCols[0])}% - ${props => props.gridGap}px), 1fr));
	}
`;