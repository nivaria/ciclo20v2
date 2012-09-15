(function ($){
	/**
 * Javascript Drupal Theming function for inside of Popups
 *
 * To override
 *
 * @param feature
 *  OpenLayers feature object
 * @return
 *  Formatted HTML
 */
Drupal.theme.prototype.openlayersPopup = function(feature) {
  var output =
    '<div class="openlayers-popup openlayers-popup-name">' +
      feature.attributes.name +
    '</div>' +
    '<div class="openlayers-popup openlayers-popup-description">' +
      feature.attributes.description +
    '</div>';
  return output;
}
})(jQuery);