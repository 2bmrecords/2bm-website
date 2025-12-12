export default {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'cover', type: 'image' },
    { name: 'artist', type: 'reference', to: [{type:'artist'}] },
    { name: 'type', type: 'string', options: { list: ['Single','EP','Album'] }},
    { name: 'date', type: 'date' },
    { name: 'links', type: 'array', of:[{type:'object', fields:[{name:'platform',type:'string'},{name:'url',type:'url'}]}] }
  ]
}
