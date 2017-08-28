;(function() {
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
    document.querySelector('#dripFormTesting').innerHTML = user.email
      ? 'SUBSCRIBER!!!'
      : 'Not a subscriber!'
  }
})()
