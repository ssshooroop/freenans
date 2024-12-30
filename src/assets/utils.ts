export const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

export const generateChartPath = (data: Array<{ date: string; value: number }>) => {
  if (!data || data.length === 0) return '';
  
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  
  return data.map((point, index) => {
    const x = (index * 280) / (data.length - 1);
    const y = 140 - ((point.value - minValue) * 120) / (maxValue - minValue);
    return `${index === 0 ? 'M' : 'L'} ${x},${y}`;
  }).join(' ');
};