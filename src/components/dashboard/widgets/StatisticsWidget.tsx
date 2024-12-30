// StatisticsWidget.tsx
import React from 'react';
import { BarChart2, FileText, LucideBadgeDollarSign, Calendar as CalendarIcon, FileBarChartIcon, Clock } from 'lucide-react';
import '../commonStyles/widgets.css';
import './StatisticsWidget.css';

interface StatisticsWidgetProps {
  // Можем добавить пропсы позже, когда будет ясна логика работы
}

const StatisticsWidget: React.FC<StatisticsWidgetProps> = () => {
  return (
    <div className="widget statistics-widget">
      <div className="widget-header">
        <BarChart2 className="widget-icon" size={24} />
        <h2 className="widget-title">Statistics</h2>
      </div>

      <div className="statistics-grid">
    <button className="widget-button">
      <FileText size={20} />
      <span>Your reports</span>
    </button>
    <button className="widget-button">
      <LucideBadgeDollarSign size={20} />
      <span>Receivables</span>
    </button>
    <button className="widget-button">
      <Clock size={20} />
      <span>For period</span>
    </button>
    <button className="widget-button">
      <BarChart2 size={20} />
      <span>Comparison</span>
    </button>
    <button className="widget-button">
      <CalendarIcon size={20} />
      <span>Calendar</span>
    </button>
    <button className="widget-button">
      <FileBarChartIcon size={20} />
      <span>Your industry stats</span>
    </button>
  </div>
</div>
   
  );
};

export default StatisticsWidget;