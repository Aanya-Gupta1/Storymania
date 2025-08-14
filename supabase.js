import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'

const supabaseUrl = 'https://tiyoilzippizdqokxqki.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpeW9pbHppcHBpemRxb2t4cWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDY1MzksImV4cCI6MjA2MDcyMjUzOX0.RgX6N7ojz2OaNpAwLIBb8x_ReGDsRm7PngIVfgvS3gU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 