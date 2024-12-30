interface CartesianPoint {
  x: number;
  y: number;
}

interface ChartDataPoint {
  date: string;
  value: number;
}

/**
 * Converts polar coordinates to cartesian coordinates
 */
export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): CartesianPoint => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

/**
 * Generates SVG path for the chart line
 */
export const generateChartPath = (data: ChartDataPoint[]): string => {
  if (!data || data.length === 0) return '';

  const width = 300;
  const height = 150;
  const padding = 20;

  const xScale = (width - 2 * padding) / (data.length - 1);
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const yScale = (height - 2 * padding) / (maxValue - minValue);

  return data.reduce((path, point, i) => {
    const x = padding + i * xScale;
    const y = height - (padding + (point.value - minValue) * yScale);
    return `${path}${i === 0 ? 'M' : 'L'}${x},${y}`;
  }, '');
};

/**
 * Generates SVG path for an arc
 */
export const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
};

/**
 * Calculates gauge parameters based on current and plan amounts
 */
export const calculateGaugeParameters = (
  currentAmount: number,
  planAmount: number
) => {
  const progress = (currentAmount / planAmount) * 100;
  const startAngle = -180;
  const endAngle = 0;
  const gaugeAngle = endAngle - startAngle;
  const planPosition = progress > 100 ? 10 : 80;

  return { progress, startAngle, endAngle, gaugeAngle, planPosition };
};