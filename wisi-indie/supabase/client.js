import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL;
const anomKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, anomKey);
