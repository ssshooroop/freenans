export interface Client {
  id: number;
  name: string;
  country: string | null;
  address: string | null;
  email: string | null;
  contact_person: string | null;
  messenger: string | null;
  invoice_currency_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface ClientContact {
  id: number;
  client_id: number;
  name: string | null;
  position: string | null;
  email: string | null;
  messenger: string | null;
  is_primary: boolean;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: Client;
        Insert: Omit<Client, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Client, 'id'>>;
      };
      client_contacts: {
        Row: ClientContact;
        Insert: Omit<ClientContact, 'id' | 'created_at'>;
        Update: Partial<Omit<ClientContact, 'id'>>;
      };
    };
  };
}