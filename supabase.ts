
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxetfaomhgjlatjxriny.supabase.co';
const supabaseKey = 'sb_publishable_uyfkHO3DhPhxNHfI7LajqA_8GlIWXRa';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveOrder(orderData: any) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([
        { 
          ...orderData,
          created_at: new Date().toISOString()
        }
      ]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error saving order to Supabase:', error);
    return null;
  }
}