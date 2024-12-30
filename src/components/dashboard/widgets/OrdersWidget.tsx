import React from 'react';
import { PackageOpen, FileStack, FilePlus2 } from 'lucide-react';
import './OrdersAndInvoicesWidget.css';
import '../commonStyles/widgets.css';

interface OrdersWidgetProps {
  thisMonth: number;
  invoiced: number;
  avgCost: number;
  currency?: string;
}

const OrdersWidget: React.FC<OrdersWidgetProps> = ({
  thisMonth = 0,
  invoiced = 0,
  avgCost = 0,
  currency = "USD"
}) => {
  return (
    <div className="widget orders-widget">
      <div className="widget-header">
        <PackageOpen size={24} className="widget-icon" />
        <h2 className="widget-title">Orders</h2>
      </div>

      <div className="orders-stats">
        <table className="widget-table">
          <tbody>
            <tr>
              <td><span className="widget-label">This month:</span></td>
              <td><span className="widget-value">{thisMonth}</span></td>
              <td><span className="widget-label">Invoiced:</span></td>
              <td><span className="widget-value">{invoiced}</span></td>
            </tr>
            <tr>
              <td><span className="widget-label">Average cost:</span></td>
              <td colSpan={3}><span className="widget-value">{avgCost} {currency}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="widget-actions">
        <button className="widget-button">
          <FileStack size={20} />
          <span>View all</span>
        </button>
        <button className="widget-button">
          <FilePlus2 size={20} />
          <span>Add new</span>
        </button>
      </div>
    </div>
  );
};

export default OrdersWidget;