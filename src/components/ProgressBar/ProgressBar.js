/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--width": "370px",
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--width": "370px",
    "--height": "12px",
    "--border-radius": "4px",
  },
  large: {
    "--width": "370px",
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <span role="progressbar" aria-valuenow={value}>
      <BarWrapper style={styles}>
        <Bar style={styles} />
        <Progress progress={value} style={styles} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </span>
  )
};

const BarWrapper = styled.svg`
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: hsla(0, 0%, 50%, 0.15);
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
`;

const Bar = styled.rect`
  fill: hsla(0, 0%, 50%, 0.15);
  width: var(--width);
  height: var(--height);
`;

const Progress = styled.rect`
  fill: hsla(240, 80%, 60%, 1);
  width: ${p => `${p.progress * 370 / 100}px`};
  height: var(--height);
`;

export default ProgressBar;
