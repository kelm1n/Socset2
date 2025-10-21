import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nckunmpwijgslmirrxyp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3VubXB3aWpnc2xtaXJyeHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMDkzMjcsImV4cCI6MjA3MjU4NTMyN30.hct4kGJRvPPMVJm3bDw7vU0MfL-wmlX2SQXshNBWhLA";

export const supabase = createClient(supabaseUrl, supabaseKey);

// "CRUD"
