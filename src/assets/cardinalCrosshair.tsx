import { Svg, Path } from "react-xnft";

export function CardinalCrosshair({ fill = "#FFF" }) {
  return (
    <Svg width="25" height="25" viewBox="0 0 3995.37 3995.37" fill={fill}>
      <Path
        d="M1994.51,1350.79,1668,1027a4,4,0,0,1-1-4L1988,5.11a4,4,0,0,1,7.62,0l329.3,1015.16a4,4,0,0,1-1,4l-323.81,326.47A4,4,0,0,1,1994.51,1350.79Zm-974.27,324.27L5.08,2004.36a4,4,0,0,0,0,7.62l1017.83,321a4,4,0,0,0,4-1l323.81-326.47a4,4,0,0,0,0-5.66L1024.29,1676A4,4,0,0,0,1020.24,1675.06Zm1629,325.11L2975.71,2324a4,4,0,0,0,4.05,1l1015.16-329.3a4,4,0,0,0,0-7.62l-1017.83-321a4,4,0,0,0-4,1l-323.81,326.47A4,4,0,0,0,2649.24,2000.17Zm-649.41,649.07L1676,2975.71a4,4,0,0,0-1,4.05l329.3,1015.16a4,4,0,0,0,7.62,0l321-1017.83a4,4,0,0,0-1-4l-326.47-323.81A4,4,0,0,0,1999.83,2649.24Z"
        style={{ fill: fill, fillRule: "evenodd" }}
      />
    </Svg>
  );
}
