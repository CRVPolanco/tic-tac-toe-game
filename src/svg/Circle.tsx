type Props = { width: number, height: number };

export const Circle = ({ width, height }: Props): JSX.Element =>
  <div className={`w-${width} h-${height} border border-4 border-white rounded-full`}></div>
