// react-world-flags.d.ts
declare module 'react-world-flags' {
  import * as React from 'react';

  export interface FlagProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    code: string; // country code like "us", "vn"
    style?: React.CSSProperties;
    className?: string;
  }

  const Flag: React.FC<FlagProps>;
  export default Flag;
}
