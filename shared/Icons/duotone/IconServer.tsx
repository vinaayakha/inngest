import IconTheme, { IconProps } from "./theme";
export function IconServer({
  size = 20,
  className = "",
  color = "transparent",
}: IconProps) {
  const theme = IconTheme(color);
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="nonzero">
        <path
          d="M5.7222 4h8.5556c.675 0 1.2222.4884 1.2222 1.091v1.0908c0 .6025-.5472 1.091-1.2222 1.091H5.7222c-.675 0-1.2222-.4885-1.2222-1.091V5.091C4.5 4.4884 5.0472 4 5.7222 4ZM9.389 5.091c-.3375 0-.6111.2441-.6111.5454 0 .3012.2736.5454.611.5454h3.0556c.3376 0 .6112-.2442.6112-.5454 0-.3013-.2736-.5455-.6112-.5455H9.389ZM6.9444 6.1817c.3376 0 .6112-.2442.6112-.5454 0-.3013-.2736-.5455-.6112-.5455-.3375 0-.611.2442-.611.5455 0 .3012.2735.5454.611.5454Z"
          fill={theme.color}
          opacity={theme.opacity}
        />
        <path
          d="M5.7222 8.3636h8.5556c.675 0 1.2222.4885 1.2222 1.091v1.0909c0 .6024-.5472 1.0909-1.2222 1.0909H5.7222c-.675 0-1.2222-.4885-1.2222-1.091V9.4546c0-.6024.5472-1.0909 1.2222-1.0909Zm3.6667 1.091c-.3375 0-.6111.2442-.6111.5454s.2736.5455.611.5455h3.0556c.3376 0 .6112-.2443.6112-.5455s-.2736-.5455-.6112-.5455H9.389Zm-2.4445 1.0909c.3376 0 .6112-.2443.6112-.5455s-.2736-.5455-.6112-.5455c-.3375 0-.611.2443-.611.5455s.2735.5455.611.5455ZM5.7222 12.7273h8.5556c.675 0 1.2222.4884 1.2222 1.0909v1.0909c0 .6025-.5472 1.0909-1.2222 1.0909H5.7222C5.0472 16 4.5 15.5116 4.5 14.909v-1.0908c0-.6025.5472-1.091 1.2222-1.091Zm3.6667 1.0909c-.3375 0-.6111.2442-.6111.5454 0 .3013.2736.5455.611.5455h3.0556c.3376 0 .6112-.2442.6112-.5455 0-.3012-.2736-.5454-.6112-.5454H9.389ZM6.9444 14.909c.3376 0 .6112-.2442.6112-.5455 0-.3012-.2736-.5454-.6112-.5454-.3375 0-.611.2442-.611.5454 0 .3013.2735.5455.611.5455Z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}
