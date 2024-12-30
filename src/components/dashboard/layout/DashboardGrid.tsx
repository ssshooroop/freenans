import React from 'react';
import UserWidget from '../widgets/UserWidget';
import ClientsWidget from '../widgets/ClientsWidget';
import OrdersWidget from '../widgets/OrdersWidget';
import InvoicesWidget from '../widgets/InvoicesWidget';
import StatisticsWidget from '../widgets/StatisticsWidget';
import CentralWidget from '../widgets/CentralWidget';
import CalculatorsWidget from '../widgets/CalculatorsWidget';
import SpecialtyWidget from '../widgets/SpecialtyWidget';
import './DashboardGrid.css';

interface DashboardGridProps {
  onClientsClick: () => void;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({ onClientsClick }) => {
  return (
    <div className="dashboard-grid">
      <div className="grid-user">
        <UserWidget firstName="Name" lastName="Surname" />
      </div>
      <div className="grid-clients">
      <ClientsWidget 
        totalClients={11}
        activeThisMonth={3}
        debitedClients={1}
        newClients={1}
        onWidgetClick={onClientsClick}
      />
      </div>
      <div className="grid-orders">
        <OrdersWidget 
          thisMonth={16}
          invoiced={3}
          avgCost={237}
        />
      </div>
      <div className="grid-invoices">
        <InvoicesWidget 
          issued={11}
          paid={5}
          overdue={1}
          avgPerInvoice={1165.12}
        />
      </div>
      <div className="grid-stats">
        <StatisticsWidget />
      </div>
      <div className="grid-central">
        <CentralWidget />
      </div>
      <div className="grid-calculators">
        <CalculatorsWidget />
      </div>
      <div className="grid-specialty">
        <SpecialtyWidget specialty="translator" />
      </div>
    </div>
  );
};

export default DashboardGrid;