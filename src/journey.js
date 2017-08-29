import config, { getBucket, nextEnhancement } from './config'

/*!
 * Journey - a Drip JavaScript Library v0.0.1
 * https://journey-drip.com/  - when we get a website for it
 *
 * Includes
 * No includes as of now
 *
 * Copyright Streamlined Studio
 * Released under the MIT license
 * https://journey-drip.com/license - when/if we get a license
 *
 * Date: 2017-08-20T18:59Z
 */
;(function() {
  window.Journey = {
    // This function set Journey.attributes to be equal the users attributes in drip if any
    getAttributes: function() {
      return _dcq.push([
        'identify',
        {
          success: function(payload) {
            Journey.attributes = payload
            Journey.setUi()
            document.cookie = 'drip_bucket=' + Journey.getBucket()
            return payload
          }
        }
      ])
    },
    // temporary UI state change before we add in react
    setUi: function() {
      console.log(Journey.attributes)
      const profile = `
          <h3>Subscriber!</h3>
          <h4>${Journey.attributes.email}</h4>
          <p>Tags:</p>
          ${Journey.attributes.tags &&
            Journey.attributes.tags.map(tag => `<span>${tag}</span>`)}
          `
      const notASub = `
       <h1>Not A Subscriber</h1>
      `
      document.querySelector('#dripFormTesting').innerHTML = Journey.attributes
        .email
        ? profile
        : notASub
    },
    getBucket: function() {
      return getBucket(Journey.attributes)
    },

    getEnhancement: function() {
      return nextEnhancement(Journey.attributes)
    },
    init: function() {
      Journey.getAttributes()
    }
  }
  // Return the Journey global variable
  return Journey
})()

// Initializes the app by running getAttributes()
Journey.init()
