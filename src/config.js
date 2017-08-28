function hasEmail(user) {
  return user.email
}

export function getBucket(user) {
  console.log(config.buckets)
  return config.buckets.filter(bucket => bucket.rule(user)).title
}

const config = {
  buckets: [
    {
      title: 'sub',
      rule: hasEmail
    },
    {
      title: 'nosub',
      rule: hasEmail
    }
  ]
}

export default config
