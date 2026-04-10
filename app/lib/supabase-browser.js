import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // During build/prerender, env vars may not exist yet
  if (!url || !key) {
    return {
      auth: {
        getUser: async () => ({ data: { user: null } }),
        signInWithOAuth: async () => ({ error: { message: 'Supabase not configured' } }),
        signOut: async () => ({}),
        exchangeCodeForSession: async () => ({ error: { message: 'Supabase not configured' } }),
      },
    };
  }

  return createBrowserClient(url, key);
}
