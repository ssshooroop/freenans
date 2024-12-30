import { createClient } from '@supabase/supabase-js';
import { Database } from '../data/types/database.types';

const supabaseUrl = 'https://minmbrzxuwtejzieifpn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pbm1icnp4dXd0ZWp6aWVpZnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MDE1NzksImV4cCI6MjA0OTQ3NzU3OX0.rJpdmADQrA8cvrQZGuK5MyoQRYiLGRDcko7_ADEColk';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  }
});