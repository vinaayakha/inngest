import IconTheme, { IconProps } from './theme';

export function IconUnlock({ size = 20, className = '', color = 'transparent' }: IconProps) {
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
          d="M12.7914 7.8377H7.2136c-.383 0-.7135 0-.9856.0219-.2873.023-.573.074-.8479.212a2.1631 2.1631 0 0 0-.9525.9379c-.1401.2707-.192.552-.2154.8348-.0222.268-.0222.5933-.0222.9704v3.346c0 .377 0 .7024.0222.9703.0235.2829.0753.5642.2154.8349a2.163 2.163 0 0 0 .9525.9379c.275.1379.5606.1889.8479.212.2721.0219.6025.0219.9856.0219h5.5778c.383 0 .7135 0 .9856-.0219.2873-.0231.573-.0741.8479-.212a2.1628 2.1628 0 0 0 .9525-.938c.1401-.2706.1919-.5519.2154-.8348.0222-.2679.0222-.5932.0222-.9703v-3.346c0-.377 0-.7024-.0222-.9704-.0235-.2828-.0753-.5641-.2154-.8348a2.163 2.163 0 0 0-.9525-.9379c-.275-.138-.5606-.189-.848-.212-.272-.022-.6024-.022-.9855-.022Z"
          fill={theme.color}
          opacity={theme.opacity}
        />
        <path
          d="M9.276 12.8454c0-.3951.3252-.7154.7265-.7154.4013 0 .7266.3203.7266.7154v.7154c0 .395-.3253.7154-.7266.7154-.4013 0-.7266-.3203-.7266-.7154v-.7154ZM10.0024 2.83c-1.605 0-2.9062 1.2812-2.9062 2.8615 0 .3951.3252.7154.7265.7154.4013 0 .7266-.3203.7266-.7154 0-.7902.6505-1.4307 1.4531-1.4307.8026 0 1.4531.6405 1.4531 1.4307v2.1462h1.4532V5.6915c0-1.5803-1.3013-2.8615-2.9063-2.8615Z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}
