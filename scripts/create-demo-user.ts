import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

// Load environment variables from .env.local if it exists
const envPath = '.env.local';
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: Missing Supabase environment variables');
  console.log('Please add SUPABASE_SERVICE_ROLE_KEY to your .env.local file');
  console.log('You can get this from: Supabase Dashboard → Settings → API → service_role secret');
  process.exit(1);
}

// Admin client with service role key (bypasses RLS)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

async function createDemoUser() {
  const demoEmail = 'demo@goldfocus.com';
  const demoPassword = 'demo123456';

  try {
    // Check if user already exists
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
    const existingUser = existingUsers?.users.find(u => u.email === demoEmail);

    if (existingUser) {
      console.log('Demo user already exists!');
      console.log(`User ID: ${existingUser.id}`);
      return;
    }

    // Create the demo user
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: demoEmail,
      password: demoPassword,
      email_confirm: true, // Auto-confirm email
    });

    if (error) {
      console.error('Error creating demo user:', error.message);
      process.exit(1);
    }

    console.log('Demo user created successfully!');
    console.log(`Email: ${demoEmail}`);
    console.log(`Password: ${demoPassword}`);
    console.log(`User ID: ${data.user?.id}`);
  } catch (error) {
    console.error('Unexpected error:', error);
    process.exit(1);
  }
}

createDemoUser();
