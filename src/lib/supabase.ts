import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://btccuswfqaqxkiyaejdv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Y2N1c3dmcWFxeGtpeWFlamR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4MDgzNjgsImV4cCI6MjAwMTM4NDM2OH0.kKT-77Tyd0nvcRGKPSNwswP8g1wiQUjV42tP0YZl0Lc'

export const supabase = createClient(supabaseUrl, supabaseKey);