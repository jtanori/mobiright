define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var ads_mixin = function(ads){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 var a = ads ? ads : []
// iterate a
;(function(){
  if ('number' == typeof a.length) {

    for (var $index = 0, $$l = a.length; $index < $$l; $index++) {
      var ad = a[$index];

 console.log(ad, 'ad')
buf.push('<div class="discovery_offer_list"><div');
buf.push(attrs({ 'data-href':(ad.link_url) }, {"data-href":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.img_url), "class": ('dicsovery_offer_photo') }, {"src":true}));
buf.push('/><div class="discovery_offerbody"><div class="discovery_offer_name">' + escape((interp = ad.offer_name) == null ? '' : interp) + '</div><div class="discovery_offer_user">' + escape((interp = ad.offer_user) == null ? '' : interp) + '</div><div><img');
buf.push(attrs({ 'src':(ad.common_images.rates), "class": ('discovery_rates_back') }, {"src":true}));
buf.push('/><div');
buf.push(attrs({ 'value':(ad.rating), "class": ('discovery_rates_star') }, {"value":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.common_images.stars), "class": ('discovery_stars') }, {"src":true}));
buf.push('/></div></div></div><img');
buf.push(attrs({ 'src':(ad.common_images.install_button), "class": ('discovery_install_button') }, {"src":true}));
buf.push('/></div><img');
buf.push(attrs({ 'src':(ad.common_images_mark_free), "class": ('discovery_free_icon') }, {"src":true}));
buf.push('/></div>');
    }

  } else {
    var $$l = 0;
    for (var $index in a) {
      $$l++;      var ad = a[$index];

 console.log(ad, 'ad')
buf.push('<div class="discovery_offer_list"><div');
buf.push(attrs({ 'data-href':(ad.link_url) }, {"data-href":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.img_url), "class": ('dicsovery_offer_photo') }, {"src":true}));
buf.push('/><div class="discovery_offerbody"><div class="discovery_offer_name">' + escape((interp = ad.offer_name) == null ? '' : interp) + '</div><div class="discovery_offer_user">' + escape((interp = ad.offer_user) == null ? '' : interp) + '</div><div><img');
buf.push(attrs({ 'src':(ad.common_images.rates), "class": ('discovery_rates_back') }, {"src":true}));
buf.push('/><div');
buf.push(attrs({ 'value':(ad.rating), "class": ('discovery_rates_star') }, {"value":true}));
buf.push('><img');
buf.push(attrs({ 'src':(ad.common_images.stars), "class": ('discovery_stars') }, {"src":true}));
buf.push('/></div></div></div><img');
buf.push(attrs({ 'src':(ad.common_images.install_button), "class": ('discovery_install_button') }, {"src":true}));
buf.push('/></div><img');
buf.push(attrs({ 'src':(ad.common_images_mark_free), "class": ('discovery_free_icon') }, {"src":true}));
buf.push('/></div>');
    }

  }
}).call(this);

};
}
return buf.join("");
};
});