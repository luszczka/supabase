import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jmjimtijhtydywfsvhbh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptamltdGlqaHR5ZHl3ZnN2aGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYyOTU5MTksImV4cCI6MTk5MTg3MTkxOX0.Ra-bdJUt2lBF-PNPFFrebRv5v6kiP691zMCXsgkzKvI'
);
