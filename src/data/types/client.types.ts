export interface MessengerContact {
  type: string;
  id: string;
}

interface ClientContact {
  id: number;
  name: string | null;
  email: string | null;
  messenger: string | null;
  is_primary: boolean;
}

interface Client {
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
  client_contacts?: ClientContact[]; // добавляем поле для связанных контактов
}