import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function useSupabase(): SupabaseClient | null {
  if (import.meta.server) return null
  if (_client) return _client

  const config = useRuntimeConfig()
  const url = config.public.supabaseUrl as string
  const key = config.public.supabaseAnonKey as string

  if (!url || !key) return null

  _client = createClient(url, key)
  return _client
}
