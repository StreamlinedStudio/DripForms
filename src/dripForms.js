function identifyDripUser() {
  return _dcq.push([
    'identify',
    {
      success: function(payload) {
        getUser(payload)
      }
    }
  ])
}

identifyDripUser()

function getUser(user) {
  console.log(user) // Use DEBUGGER!
  const profile = `
      <h3>Subscriber!</h3>
      <h4>${user.email}</h4>
      <p>Tags:</p>
      ${user.tags && user.tags.map(tag => `<span>${tag}</span>`)}
      `
  const notASub = `
   <h1>Not A Subscriber</h1>
  `
  document.querySelector('#dripFormTesting').innerHTML = user.email
    ? profile
    : notASub
}
