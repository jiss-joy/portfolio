import { config, fields, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    profile: singleton({
      label: 'Profile',
      path: 'src/content/profile/',
      schema: {
        name: fields.text({ label: 'Name', validation: { isRequired: true } }),
        designation: fields.text({ label: 'Designation', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description', multiline: true }),
        email: fields.text({ label: 'Email', validation: { isRequired: true } }),
        address: fields.text({ label: 'Address', validation: { isRequired: true } }),
        phone: fields.text({ label: 'Phone', validation: { isRequired: true } }),
        linkedinUrl: fields.url({ label: 'LinkedIn URL' }),
        githubUrl: fields.url({ label: 'GitHub URL' }),
      },
    }),
  },
})
