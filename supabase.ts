import { createClient } from '@supabase/supabase-js';

/**
 * For Netlify deployment, you can set these in Site Settings > Environment Variables:
 * VITE_SUPABASE_URL=https://your-project.supabase.co
 * VITE_SUPABASE_ANON_KEY=your-anon-key
 */

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://rxetfaomhgjlatjxriny.supabase.co';
const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_uyfkHO3DhPhxNHfI7LajqA_8GlIWXRa';

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
