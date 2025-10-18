import React from "react";
import styled, { css } from "styled-components";

/** variant: "primary" | "secondary" | "ghost"
 *  size: "sm" | "md" | "lg"
 *  fullWidth?: boolean
 *  disabled?: boolean
 */
const SIZES = {
  sm: css`--pad: 6px 10px; --fs: .875rem; --rad: 8px;`,
  md: css`--pad: 8px 14px; --fs: 1rem;   --rad: 10px;`,
  lg: css`--pad: 12px 18px; --fs: 1.125rem; --rad: 12px;`
};

const VARIANTS = {
  primary: css`
    --bg: #111827; --fg: #fff; --bd: transparent;
    &:hover:not(:disabled){ filter: brightness(1.08); }
  `,
  secondary: css`
    --bg: #e5e7eb; --fg: #111827; --bd: #d1d5db;
    &:hover:not(:disabled){ filter: brightness(0.98); }
  `,
  ghost: css`
    --bg: transparent; --fg: #111827; --bd: transparent;
    &:hover:not(:disabled){ background: rgba(17,24,39,.06); }
  `
};

const StyledButton = styled.button`
  ${(p) => SIZES[p.$size || "md"]};
  ${(p) => VARIANTS[p.$variant || "primary"]};

  display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
  width:${(p)=> (p.$fullWidth ? "100%" : "auto")};
  padding:var(--pad); font-size:var(--fs); line-height:1.25;
  border-radius:var(--rad); border:1px solid var(--bd);
  background:var(--bg); color:var(--fg);
  cursor:pointer; transition:filter 120ms ease, background 120ms ease;

  &:disabled{ opacity:.6; cursor:not-allowed; }
`;

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  ...rest
}) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
