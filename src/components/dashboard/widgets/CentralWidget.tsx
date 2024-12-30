import React, { useState } from 'react';
import './CentralWidget.css';
import { 
  describeArc, 
  generateChartPath, 
  calculateGaugeParameters,
  polarToCartesian
} from '../charts/utils/chartUtils';

interface CentralWidgetProps {
  currentAmount?: number;
  planAmount?: number;
  data?: {
    current: Array<{ date: string; value: number }>;
    comparison?: Array<{ date: string; value: number }>;
  };
}

const CentralWidget: React.FC<CentralWidgetProps> = ({
  currentAmount = 520,
  planAmount = 880,
  data = {
    current: [
      { date: 'Jan', value: 520 },
      { date: 'Feb', value: 650 },
      { date: 'Mar', value: 780 },
    ],
    comparison: [
      { date: 'Jan', value: 480 },
      { date: 'Feb', value: 550 },
      { date: 'Mar', value: 600 },
    ]
  }
}) => {
  const [chartMetric, setChartMetric] = useState('income');
  const { progress } = calculateGaugeParameters(currentAmount, planAmount);

  // Calculate positions for the gauge values
  const radius = 80;
  const currentAngle = -180 + (180 * progress / 100);
  const currentPos = polarToCartesian(100, 100, radius - 15, currentAngle);
  const planPos = polarToCartesian(100, 100, radius - 15, -5);

  return (
    <div className="central-widget">
      <div className="central-widget-content">
        <svg viewBox="0 0 200 120" className="gauge">
          <path
            d={describeArc(100, 100, 80, -180, 0)}
            className="gauge-background"
          />
          <path
            d={describeArc(100, 100, 80, -180, currentAngle)}
            className="gauge-progress"
          />
          <g transform={`rotate(90 100 100)`}>
            <text 
              x={currentPos.x} 
              y={currentPos.y} 
              className="gauge-value current"
            >
              {currentAmount} USD
            </text>
            <text 
              x={planPos.x} 
              y={planPos.y} 
              className="gauge-value plan"
            >
              {planAmount} USD
            </text>
          </g>
        </svg>

        <div className="chart-section">
          <select 
            value={chartMetric} 
            onChange={(e) => setChartMetric(e.target.value)}
            className="chart-select"
          >
            <option value="income">Income</option>
            <option value="orders">Orders count</option>
            <option value="invoices">Invoices</option>
          </select>
          
          <svg viewBox="0 0 300 150" className="comparison-chart">
            <path
              d={generateChartPath(data.current)}
              className="chart-line current"
            />
            {data.comparison && (
              <path
                d={generateChartPath(data.comparison)}
                className="chart-line comparison"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CentralWidget;