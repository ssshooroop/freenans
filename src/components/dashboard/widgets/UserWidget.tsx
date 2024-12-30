import React from 'react';
import { CreditCard, Mail, Bell, FileText, User, File } from 'lucide-react';
import './UserWidget.css';
import '../commonStyles/widgets.css';

interface UserWidgetProps {
  logoUrl?: string;
  firstName: string;
  lastName: string;
}

const UserWidget: React.FC<UserWidgetProps> = ({ logoUrl, firstName, lastName }) => {
  return (
    <div className="widget user-widget">
      <div className="user-widget-gradient" />
      
      <div className="user-widget-grid">
        {/* Первый ряд */}
        <div className="userlogo-wrapper">
          {logoUrl ? <img src={logoUrl} alt="User Logo" /> : <LogoShield />}
        </div>
        
        <div className="user-widget-controls">
          <div className="widget-header user-name">{firstName} {lastName}</div>
          <button className="widget-button user-button">
            <CreditCard size={20} /> {/* Увеличили размер иконок */}
            <span>Payment details</span>
          </button>
          <button className="widget-button user-button">
            <Mail size={20} />
            <span>Email settings</span>
          </button>
        </div>

        {/* Второй и третий ряды */}
        <div className="user-widget-buttons" style={{gridColumn: "1 / -1"}}>
          <button className="widget-button user-button">
            <Bell size={20} />
            <span>Set notification</span>
          </button>
          <button className="widget-button user-button">
            <FileText size={20} />
            <span>Set reports</span>
          </button>
        </div>

        <div className="user-widget-buttons" style={{gridColumn: "1 / -1"}}>
          <button className="widget-button user-button">
            <User size={20} />
            <span>View profile</span>
          </button>
          <button className="widget-button user-button">
            <File size={20} />
            <span>Set templates</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const LogoShield = () => (
  <div className="userlogo-wrapper">
    <img 
      src="/images/logoshield.svg"
      alt="User Logo"
      className="userlogo-image"
    />
  </div>
);

export default UserWidget;