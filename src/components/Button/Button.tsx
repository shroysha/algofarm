import React from 'react';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  color?: string;
  extraClass?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  extraClass = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        extraClass,
        'storybook-button',
        `storybook-button--${size}`,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
