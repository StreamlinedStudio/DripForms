export function getBucket(user) {
  return config.buckets.filter(bucket => bucket.rule(user))[0].title
}

export function nextEnhancement(user) {
  const bucket = getBucket(user)
  const experience = config.experiences.filter(
    experience => experience.bucket === bucket
  )[0].enhancement
  const enhancement = config.enhancements.filter(
    ehancement => ehancement.title === experience
  )[0].action
  return enhancement()
}

const config = {
  buckets: [
    {
      title: 'sub',
      rule: function(user) {
        return user.email
      }
    },
    {
      title: 'nosub',
      rule: function(user) {
        return !user.email
      }
    }
  ],
  enhancements: [
    {
      title: 'subAlert',
      action: function() {
        alert('Subscriber Alert!')
      }
    },
    {
      title: 'noSubAlert',
      action: function() {
        alert('Non Subscriber Alert!')
      }
    }
  ],
  experiences: [
    { bucket: 'sub', enhancement: 'subAlert' },
    { bucket: 'nosub', enhancement: 'noSubAlert' }
  ]
}

export default config
