import { spinnerTv } from './classnames';
import { SpinnerProps } from './spinner';

export const useSpinner = (props: SpinnerProps) => {
  const { className, color, size = 24, style, segments = 10, ...spinnerProps } = props;

  const { base, item } = spinnerTv({ color });

  const segmentsArray = [...Array(segments).keys()];
  const deg = 360 / segmentsArray.length;
  const animationTime = 1.2 / segmentsArray.length;

  const buildSpinnerSegments = () => {
    return segmentsArray.map((segment) => (
      <div
        key={segment}
        className={item()}
        style={{
          transform: `rotate(${deg * segment}deg) translateY(-120%)`,
          animationDelay: `-${1.2 - segment * animationTime}s`,
        }}
      />
    ));
  };

  const buildSpinnerProps = () => {
    return {
      className: base({ className }),
      style: {
        ...style,
        width: size,
        height: size,
      },
      children: buildSpinnerSegments(),
      ...spinnerProps,
    };
  };

  return { buildSpinnerProps };
};
