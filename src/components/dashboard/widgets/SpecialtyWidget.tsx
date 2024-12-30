// types/SpecialtyTypes.ts
export type Specialty = 'translator' | 'developer' | 'designer' | 'lawyer';

export interface SpecialtyWidgetProps {
  specialty: Specialty;
  onFileUpload?: (file: File) => void;
  onTimeLog?: (time: number) => void;
  onTaskUpdate?: (taskId: string, status: string) => void;
}

// SpecialtyWidget.tsx
import React from 'react';
import { Upload, Clock, Trello, FileText } from 'lucide-react';
import { Specialty, SpecialtyWidgetProps } from '../types/SpecialtyTypes';
import './SpecialtyWidget.css';
import '../commonStyles/widgets.css';

// Компоненты для разных специальностей
const TranslatorWidget: React.FC<{ onFileUpload: (file: File) => void }> = ({ onFileUpload }) => (
  <div className="specialty-content translator">
    <div className="specialty-header">
      <Upload className="widget-icon" size={24} />
      <h3>Drop statistics file here</h3>
    </div>
    <p>or upload from your device to calculate it's price</p>
    <p className="supported-types">Supported types: MemoQ or Trados stats file</p>
  </div>
);

const DeveloperWidget: React.FC<{ onTaskUpdate: (taskId: string, status: string) => void }> = ({ onTaskUpdate }) => (
  <div className="specialty-content developer">
    <div className="specialty-header">
      <Trello className="widget-icon" size={24} />
      <h3>Task Tracker</h3>
    </div>
    <div className="task-list">
      {/* Здесь будет интеграция с трекером задач */}
    </div>
  </div>
);

const DesignerWidget: React.FC<{ onTimeLog: (time: number) => void }> = ({ onTimeLog }) => (
  <div className="specialty-content designer">
    <div className="specialty-header">
      <Clock className="widget-icon" size={24} />
      <h3>Time Tracker</h3>
    </div>
    <div className="time-tracker">
      {/* Здесь будет трекер времени и учет концепт-артов */}
    </div>
  </div>
);

const LawyerWidget: React.FC = () => (
  <div className="specialty-content lawyer">
    <div className="specialty-header">
      <FileText className="widget-icon" size={24} />
      <h3>Documents</h3>
    </div>
    <div className="document-templates">
      {/* Здесь будут шаблоны документов */}
    </div>
  </div>
);

const SpecialtyWidget: React.FC<SpecialtyWidgetProps> = ({
  specialty,
  onFileUpload = () => {},
  onTimeLog = () => {},
  onTaskUpdate = () => {}
}) => {
  const renderSpecialtyContent = () => {
    switch (specialty) {
      case 'translator':
        return <TranslatorWidget onFileUpload={onFileUpload} />;
      case 'developer':
        return <DeveloperWidget onTaskUpdate={onTaskUpdate} />;
      case 'designer':
        return <DesignerWidget onTimeLog={onTimeLog} />;
      case 'lawyer':
        return <LawyerWidget />;
      default:
        return <div>Please select your specialty</div>;
    }
  };

  return (
    <div className="widget specialty-widget">
      {renderSpecialtyContent()}
    </div>
  );
};

export default SpecialtyWidget;