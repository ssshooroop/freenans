import React, { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import UserPersonalDataForm from './components/UserPersonalDataForm';
import ServiceRatesForm from './components/ServiceRatesForm';
import ClientDataForm from './components/ClientDataForm';
import OrderTableForm from './components/OrderTableForm';
import InvoicingForm from './components/InvoicingForm';

const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const forms = {
    signup: <SignUpForm />,
    personal: <UserPersonalDataForm />,
    services: <ServiceRatesForm />,
    clients: <ClientDataForm />,
    orders: <OrderTableForm />,
    invoices: <InvoicingForm />
  };

  const openForm = (formName: string) => {
    setActiveForm(formName);
  };

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <div className="App">
      <h1>Freelance Invoice App</h1>
      <div>
        {Object.keys(forms).map((formKey) => (
          <button key={formKey} onClick={() => openForm(formKey)}>
            {formKey.charAt(0).toUpperCase() + formKey.slice(1)}
          </button>
        ))}
      </div>
      {activeForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{activeForm.charAt(0).toUpperCase() + activeForm.slice(1)}</h2>
              <button className="modal-close" onClick={closeForm}>&times;</button>
            </div>
            <div className="form-container">
              {forms[activeForm as keyof typeof forms]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;