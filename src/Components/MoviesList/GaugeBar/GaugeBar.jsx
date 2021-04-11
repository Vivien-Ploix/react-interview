import { Line } from "rc-progress";

const GaugeBar = ({ percentage }) => (
  <Line
    percent={percentage}
    strokeWidth="4"
    trailWidth="4"
    strokeColor="#4A52FC"
    trailColor="#E74C3C"
    className="mb-3 mt-auto"
  />
);

export default GaugeBar;
