import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../lib/supabase';
import type { Database } from '../../../data/types/database.types';

type Client = Database['public']['Tables']['clients']['Row'] & {
  client_contacts?: Database['public']['Tables']['client_contacts']['Row'][];
};

interface ClientTableProps {
  onClose: () => void;
}

const ClientTable: React.FC<ClientTableProps> = ({ onClose }) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('clients')
        .select(`
          *,
          client_contacts (*)
        `)
        .order('name');

      if (error) throw error;
      setClients(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (client.client_contacts?.some(contact => 
      contact.name?.toLowerCase().includes(searchQuery.toLowerCase())
    ) ?? false)
  );

  const getPrimaryContact = (client: Client) => {
    return client.client_contacts?.find(contact => contact.is_primary);
  };

  const getContactDetails = (client: Client) => {
    const primaryContact = getPrimaryContact(client);
    if (!primaryContact) return null;

    return (
      <div className="flex gap-2 items-center">
        {primaryContact.email && (
          <a 
            href={`mailto:${primaryContact.email}`}
            className="text-purple-300 hover:text-purple-100 transition-colors"
          >
            {primaryContact.email}
          </a>
        )}
        {primaryContact.messenger && (
          <span className="text-purple-300">
            {primaryContact.messenger}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6">
        <button onClick={onClose} className="back-button">
          ← Back to Dashboard
        </button>
        <button className="nav-tab active">Clients</button>
        <button className="nav-tab">Orders</button>
        <button className="nav-tab">Invoices</button>
        <button className="nav-tab">Reports</button>
        <button className="nav-tab">Rates</button>
      </div>

      {/* Table Container */}
      <div className="table-container overflow-auto">
        <div className="table-header">
          <div className="flex items-center gap-4 p-4">
            <div className="search-field flex items-center p-2">
              <FontAwesomeIcon icon={faSearch} className="text-purple-400 mr-2" />
              <input 
                type="text"
                placeholder="Search"
                className="bg-transparent text-purple-200 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 p-4">
              Error loading clients: {error}
            </div>
          )}

          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact person</th>
                <th>Contacts</th>
                <th>Country</th>
                <th>Address</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center p-4">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  filteredClients.map((client, index) => (
                    <motion.tr
                      key={client.id}
                      className="table-row"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="p-4">{client.name}</td>
                      <td>{getPrimaryContact(client)?.name}</td>
                      <td>{getContactDetails(client)}</td>
                      <td>{client.country}</td>
                      <td>{client.address}</td>
                      <td>{client.invoice_currency_id}</td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Button */}
      <button className="add-button flex items-center gap-2 mt-4">
        <FontAwesomeIcon icon={faPlus} className="icon" />
        Add new client
      </button>

      {/* Bottom Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="bottom-button">
          Added this month
        </button>
        <button className="bottom-button">
          Active this month
        </button>
        <button className="bottom-button">
          Have overdue invoices
        </button>
      </div>
    </div>
  );
};

export default ClientTable;