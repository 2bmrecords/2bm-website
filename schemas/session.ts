export default {
  name: 'session',
  title: 'Session (Sync)',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'mood', type: 'string' },
    { name: 'bpm', type: 'number' },
    { name: 'preview', type: 'url' }
  ]
}
