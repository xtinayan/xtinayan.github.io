export default defineNuxtRouteMiddleware((to) => {
  const isJournalRoute = to.path === '/journal' || to.path.startsWith('/journal/')

  if (!isJournalRoute) return

  if (process.server) return

  const isUnlocked = localStorage.getItem('journal_unlocked') === 'true'

  if (!isUnlocked) {
    return navigateTo('/journal-unlock')
  }
})