import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface GridLayoutProps {
    gridGap?: string;
    gidMinHeight?: string;
    gridCols?: any;
    className?: string;
    children?: ReactChild;
}
export const GridLayout = ({ gridGap = "15", gidMinHeight = "01", gridCols = ["1", "3", "3", "3"], className = "", children }: GridLayoutProps) => {
    const GridBoxStyles = styled.div`
		display: grid;
		grid-gap: ${gridGap}px;
		grid-template-columns: repeat(auto-fill, minmax(calc(${100 / parseInt(gridCols[3])}% - ${gridGap}px), 1fr));
		.gridBox {
			min-height: ${gidMinHeight}px;
			height: ${parseInt(gidMinHeight) == 0 ? 'max-content' : 'auto'};
			width: 100%;
			/* background: red; */
		}
		@media (max-width: 1200px) {
			grid-template-columns: repeat(auto-fill, minmax(calc(${100 / parseInt(gridCols[3])}% - ${gridGap}px), 1fr));
		}
		@media (max-width: 992px) {
			grid-template-columns: repeat(auto-fill, minmax(calc(${100 / parseInt(gridCols[2])}% - ${gridGap}px), 1fr));
		}
		@media (max-width: 768px) {
			grid-template-columns: repeat(auto-fill, minmax(calc(${100 / parseInt(gridCols[1])}% - ${gridGap}px), 1fr));
		}
		@media (max-width: 576px) {
			grid-template-columns: repeat(auto-fill, minmax(calc(${100 / parseInt(gridCols[0])}% - ${gridGap}px), 1fr));
		}
	`;
    return <GridBoxStyles className={className}>
        {children}
    </GridBoxStyles>
};

export interface GridBoxProps {
    children?: ReactChild;
}
export const GridBox = ({  children }: GridBoxProps) => {
    return <div className="gridBox">{children}</div>
};