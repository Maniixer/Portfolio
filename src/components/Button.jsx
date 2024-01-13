function Button({ as = "button", className = "", variant = "primary", fullWidth, ...rest }) {
  const Comp = as;
  return <Comp className={`button ${variant} ${fullWidth && "flex-grow"} ${className}`} {...rest} />;
}

export { Button };
