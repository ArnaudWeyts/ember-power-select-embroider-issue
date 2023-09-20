'use strict';

module.exports = {
  name: require('./package').name,
  contentFor(type, config) {
    // ember-power-select uses this hook to add the wormhole element for the dropdown content
    // to the app's index.html. We need to do the same for our library users to avoid having to
    // make them add ember-power-select to their app.
    // @see https://github.com/cibernox/ember-power-select/blob/master/index.js#L39-L44
    const emberPowerSelect = this.addons.find(
      (a) => a.name === 'ember-power-select'
    );
    return emberPowerSelect.contentFor(type, config);
  },
};
