export interface JournalEntryPreview {
  id: number
  title: string
  created_at: string
}

export interface JournalEntry extends JournalEntryPreview {
  content: string
}

export function useJournal() {
  const supabase = useSupabase()

  const entries = ref<JournalEntryPreview[]>([])
  const entry = ref<JournalEntry | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchEntries() {
    loading.value = true
    error.value = null

    const { data, error: err } = await supabase
      .from('journal_entries')
      .select('id, title, created_at')
      .order('created_at', { ascending: false })

    if (err) {
      error.value = err.message
    } else {
      entries.value = data ?? []
    }

    loading.value = false
  }

  async function fetchEntry(id: number) {
    loading.value = true
    error.value = null
    entry.value = null

    const { data, error: err } = await supabase
      .from('journal_entries')
      .select('*')
      .eq('id', id)
      .single()

    if (err) {
      error.value = err.message
    } else {
      entry.value = data as JournalEntry
    }

    loading.value = false
  }

  return { entries, entry, loading, error, fetchEntries, fetchEntry }
}