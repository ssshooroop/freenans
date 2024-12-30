import React from 'react';
import { Users, UserPlus, Banknote } from 'lucide-react';
import '../commonStyles/widgets.css';
import './ClientsWidget.css';

interface ClientsWidgetProps {
  totalClients: number;
  activeThisMonth: number;
  debitedClients: number;
  newClients: number;
  onWidgetClick: () => void;
}

const ClientsWidget: React.FC<ClientsWidgetProps> = ({
  totalClients,
  activeThisMonth,
  debitedClients,
  newClients,
  onWidgetClick
}) => {
  return (
    <div className="widget clients-widget" onClick={onWidgetClick}>
  <div className="widget-header">
    <Users className="widget-icon" size={24} />
    <span className="widget-title">Clients</span>
  </div>
  
  <div className="client-stats">
    <table className="widget-table">
       <tbody>
          <tr>
            <td><span className="widget-label">Total:</span></td>
            <td><span className="widget-value">{totalClients}</span></td>
            <td><span className="widget-label">Active this month:</span></td>
            <td><span className="widget-value">{activeThisMonth}</span></td>
          </tr>
          <tr>
            <td><span className="widget-label">Debited:</span></td>
            <td><span className="widget-value">{debitedClients}</span></td>
            <td><span className="widget-label">New:</span></td>
            <td><span className="widget-value">{newClients}</span></td>
          </tr>
       </tbody>
     </table>
  </div>

  <div className="clients-actions">
    <button className="widget-button">
      <Banknote size={20} />
      <span>Set rates</span>
    </button>
    <button className="widget-button">
      <UserPlus size={20} />
      <span>Add new</span>
    </button>
  </div>
</div>
  );
};

export default ClientsWidget;