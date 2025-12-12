export default {
  name: 'news',
  title: 'News Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'array', of: [{type:'block'}] },
    { name: 'date', type: 'datetime' },
    { name: 'image', type: 'image' }
  ]
}
