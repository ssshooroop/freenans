import React from 'react';
import { Receipt, FileStack, Coins, Workflow } from 'lucide-react';
import '../commonStyles/widgets.css';
import './OrdersAndInvoicesWidget.css';


interface InvoicesWidgetProps {
  issued: number;
  paid: number;
  overdue: number;
  avgPerInvoice: number;
  currency?: string;
}

const InvoicesWidget: React.FC<InvoicesWidgetProps> = ({
  issued = 0,
  paid = 0,
  overdue = 0,
  avgPerInvoice = 0,
  currency = "USD"
}) => {
  return (
    <div className="widget invoices-widget">
      <div className="widget-header">
        <Receipt size={24} className="widget-icon" />
        <h2 className="widget-title">Invoices</h2>
      </div>

      <div className="widget-stats">
  <table className="widget-table">
    <tbody>
      <tr>
        <td><span className="widget-label">Issued:</span></td>
          <td><span className="widget-value">{issued}</span></td>
          <td><span className="widget-label">Paid:</span></td>
          <td><span className="widget-value highlight-success">{paid}</span></td>
          <td><span className="widget-label">Over due:</span></td>
          <td><span className="widget-value highlight-warning">{overdue}</span></td>
        </tr>
		<tr>
          <td colSpan={4}><span className="widget-label">Average per invoice:</span></td>
          <td colSpan={2}><span className="widget-value">{avgPerInvoice} {currency}</span></td>
        </tr>
    </tbody>
  </table>
</div>

      <div className="widget-actions">
        <button className="widget-button">
          <Workflow size={20} />
          <span>Automation</span>
        </button>
        <button className="widget-button">
          <Coins size={20} />
          <span>Payment terms</span>
        </button>
        <button className="widget-button">
          <FileStack size={20} />
          <span>View all</span>
        </button>
      </div>

      <button 
            type="button" 
            className="issue-button"
          >
            Issue new
          </button>
    </div>  
  );
};

export default InvoicesWidget;