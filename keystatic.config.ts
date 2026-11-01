import { collection, config, fields, singleton } from '@keystatic/core'

// One drag-to-reorder list per skill group; the list order is the display order
function skillList(label: string) {
  return fields.array(
    fields.object({
      name: fields.text({ label: 'Name', validation: { isRequired: true } }),
      icon: fields.text({
        label: 'Icon',
        description: 'File name in public/icons without .svg (e.g. "nextjs"). Leave empty or unmatched for a generic icon',
      }),
    }),
    { label, itemLabel: props => props.fields.name.value },
  )
}

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
    skills: singleton({
      label: 'Skills',
      path: 'src/content/skills/',
      schema: {
        languages: skillList('Languages'),
        frameworks: skillList('Frameworks / Libraries'),
        tools: skillList('Tools / Platforms'),
      },
    }),
  },
  collections: {
    experience: collection({
      label: 'Experience',
      path: 'src/content/experience/*/',
      slugField: 'organizationName',
      columns: ['organizationName', 'designation', 'startDate', 'endDate'],
      schema: {
        organizationName: fields.slug({ name: { label: 'Organization Name', validation: { isRequired: true } } }),
        designation: fields.text({ label: 'Designation', validation: { isRequired: true } }),
        startDate: fields.date({ label: 'Start Date', validation: { isRequired: true } }),
        endDate: fields.date({ label: 'End Date' }),
        organizationUrl: fields.url({ label: 'Organization URL' }),
        description: fields.text({ label: 'Description', multiline: true }),
        technologies: fields.array(fields.text({ label: 'Technology' }), { label: 'Technologies', itemLabel: props => props.value }),
      },
    }),
    education: collection({
      label: 'Education',
      path: 'src/content/education/*/',
      slugField: 'institutionName',
      columns: ['institutionName', 'degree', 'startDate', 'endDate'],
      schema: {
        institutionName: fields.slug({ name: { label: 'Institution Name', validation: { isRequired: true } } }),
        degree: fields.text({
          label: 'Degree / Qualification',
          description: 'e.g. Bachelor of Technology, Higher Secondary (Class 12)',
          validation: { isRequired: true },
        }),
        fieldOfStudy: fields.text({ label: 'Field of Study', description: 'e.g. Computer Science Engineering' }),
        startDate: fields.date({ label: 'Start Date', validation: { isRequired: true } }),
        endDate: fields.date({ label: 'End Date', description: 'Leave empty if ongoing' }),
        institutionUrl: fields.url({ label: 'Institution URL' }),
        description: fields.text({ label: 'Description', description: 'Optional: honours, thesis, notable achievements', multiline: true }),
      },
    }),
    projects: collection({
      label: 'Projects',
      path: 'src/content/projects/*/',
      slugField: 'title',
      columns: ['title', 'startDate', 'ongoing'],
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
          slug: { description: 'Also keys the per-version illustration/icon for this project, so keep it stable once set' },
        }),
        startDate: fields.date({
          label: 'Start Date',
          description: 'Only the year is shown on the site; the full date decides order between projects from the same year',
          validation: { isRequired: true },
        }),
        ongoing: fields.checkbox({ label: 'Ongoing', description: 'Shows the year as "2025 — Present"' }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        technologies: fields.array(fields.text({ label: 'Technology' }), { label: 'Technologies', itemLabel: props => props.value }),
        liveUrl: fields.url({ label: 'Live URL' }),
        githubUrl: fields.url({ label: 'GitHub URL' }),
      },
    }),
  },
})
