export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'photo', type: 'image' },
    { name: 'bio', type: 'text' },
    { name: 'socials', type: 'object', fields:[
      {name:'instagram',type:'url'},
      {name:'spotify',type:'url'}
    ]}
  ]
}
