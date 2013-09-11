define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var icon_mixin = function(icon){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 var className = icon.name ? icon.name : ""
 var color = icon.color ? "_" + icon.color : ""
 var text = icon.text ? icon.text : ""
 var html = icon.html ? icon.html : ""
buf.push('<i');
buf.push(attrs({ "class": ("icon-" + (className) + "" + (color) + "") }, {"class":true}));
buf.push('>');
 if(text) 
{
buf.push('<span>' + escape((interp = text) == null ? '' : interp) + '</span>');
}
 if(html)
{
buf.push('' + ((interp = html) == null ? '' : interp) + '');
}
buf.push('</i>');
};
buf.push('<div id="discovery_mobile_bar" class="discovery_mobilebar"><div id="discovery_offer_wall" class="discovery_offer_wall">');
// iterate offers
;(function(){
  if ('number' == typeof offers.length) {

    for (var $index = 0, $$l = offers.length; $index < $$l; $index++) {
      var ad = offers[$index];

buf.push('<div class="discovery_offer_list"><div');
buf.push(attrs({ 'data-href':(ad.link_url) }, {"data-href":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.img_url), "class": ('dicsovery_offer_photo') }, {"src":true}));
buf.push('/><div class="discovery_offerbody"><div class="discovery_offer_name">' + escape((interp = ad.offer_name) == null ? '' : interp) + '</div><div class="discovery_offer_user">' + escape((interp = ad.offer_user) == null ? '' : interp) + '</div><div><img');
buf.push(attrs({ 'src':(common_images.rates), "class": ('discovery_rates_back') }, {"src":true}));
buf.push('/><div');
buf.push(attrs({ 'value':(ad.rating), "class": ('discovery_rates_star') }, {"value":true}));
buf.push('><img');
buf.push(attrs({ 'src':(common_images.stars), "class": ('discovery_stars') }, {"src":true}));
buf.push('/></div></div></div><img');
buf.push(attrs({ 'src':(common_images.install_button), "class": ('discovery_install_button') }, {"src":true}));
buf.push('/></div><img');
buf.push(attrs({ 'src':(common_images.mark_free), "class": ('discovery_free_icon') }, {"src":true}));
buf.push('/></div>');
    }

  } else {
    var $$l = 0;
    for (var $index in offers) {
      $$l++;      var ad = offers[$index];

buf.push('<div class="discovery_offer_list"><div');
buf.push(attrs({ 'data-href':(ad.link_url) }, {"data-href":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.img_url), "class": ('dicsovery_offer_photo') }, {"src":true}));
buf.push('/><div class="discovery_offerbody"><div class="discovery_offer_name">' + escape((interp = ad.offer_name) == null ? '' : interp) + '</div><div class="discovery_offer_user">' + escape((interp = ad.offer_user) == null ? '' : interp) + '</div><div><img');
buf.push(attrs({ 'src':(common_images.rates), "class": ('discovery_rates_back') }, {"src":true}));
buf.push('/><div');
buf.push(attrs({ 'value':(ad.rating), "class": ('discovery_rates_star') }, {"value":true}));
buf.push('><img');
buf.push(attrs({ 'src':(common_images.stars), "class": ('discovery_stars') }, {"src":true}));
buf.push('/></div></div></div><img');
buf.push(attrs({ 'src':(common_images.install_button), "class": ('discovery_install_button') }, {"src":true}));
buf.push('/></div><img');
buf.push(attrs({ 'src':(common_images.mark_free), "class": ('discovery_free_icon') }, {"src":true}));
buf.push('/></div>');
    }

  }
}).call(this);

buf.push('</div><div id="discovery_caption_bar" class="discovery_captionbar"><div class="discovery_centerbar"><div id="discovery_bar_icon"><img');
buf.push(attrs({ 'id':('discovery_icon_img'), 'src':(host + '/images/bar_icon.png') }, {"src":true}));
buf.push('/></div><span id="discovery_caption_label">' + escape((interp = affiliate.company) == null ? '' : interp) + '</span></div></div></div>');
}
return buf.join("");
};
});