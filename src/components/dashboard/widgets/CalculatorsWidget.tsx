// CalculatorsWidget.tsx
import React from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import '../commonStyles/widgets.css';
import './CalculatorsWidget.css';

interface CalculatorsWidgetProps {
 // Можем добавить пропсы позже для функционала калькуляторов
}

const CalculatorsWidget: React.FC<CalculatorsWidgetProps> = () => {
 return (
   <div className="widget calculators-widget">
     <div className="widget-header">
       <Calculator className="widget-icon" size={24} />
       <h2 className="widget-title">Converters and calculators</h2>
     </div>

     <div className="calculators-actions">
       <button className="widget-button">
         <DollarSign size={20} />
         <span>Amount in currency</span>
       </button>

       <button className="widget-button">
         <Calculator size={20} />
         <span>Tax calculator</span>
       </button>
     </div>

     {/* Место для активного калькулятора/конвертера */}
     <div className="calculator-content">
       {/* Здесь будет рендериться выбранный калькулятор */}
     </div>
   </div>
 );
};

export default CalculatorsWidget;