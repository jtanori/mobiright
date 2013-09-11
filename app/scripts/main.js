require.config({
    paths: {
        zepto:        '../bower_components/zepto/zepto',
        aspect:       '../bower_components/aspect.js/src/aspect',
        iscroll:      '../bower_components/iscroll/build/iscroll',
        lodash:       '../bower_components/lodash/lodash',
        domReady:     '../bower_components/requirejs-domready/domReady',
        async:        '../bower_components/requirejs-plugins/src/async',
        touch:        '../bower_components/zeptojs/src/touch',
        jade:         'templates/jade',
        templates:    'templates/',
        setup:        'setup',
        responsivBar: 'responsivBar'
    },
    shim: {
        zepto: {
            exports: 'Zepto'
        },
        aspect: {
            exports: 'aspect'
        },
        iscroll: {
            exports: 'IScroll'
        },
        lodash: {
            exports: '_'
        },
        touch: ['zepto'],
        responsiBar: ['zepto'],
        app: ['zepto', 'aspect', 'iscroll', 'lodash', 'setup', 'touch']
    }
});

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

//Main initialization block
require(['domReady', 'app', 'responsivBar'], function (domReady, App, responsivBar) {
    //TODO: Better sync between domReady, Cordova and Router
    domReady(function () {
        var $ = Zepto;
        //Var setup
        //TODO: Encapsulate it into the App instead
        var pubiright_attribute = 'pubiright-affiliate-id';
        var $selfScript = $('[' + pubiright_attribute + ']');
        var id = $selfScript.attr(pubiright_attribute);
        var host = "http://pub.mobiright.com";

        //Load css
        loadCss(host + '/css/discovery.css');

        app = new App(host, id);
        //Success callback
        var success = function(res){

            this.render(res);

            var $body = $('body');
            var present = res.offers.length ? ' : bar present' : ' : no bar';//Is bar going to be present?
            var e = id + " : " + res.affiliate.company + present;//Event to register
            var content = this.getContent();
            var $content = $(content);
            var scroll;
            //TODO: Integrate into app
            if(res.offers.length){
                $body.append('<iframe style="display:none" src="' + host + '/bar_loading_event.php?aff=' + e + '">');
            }

            if(!$('#discovery_scroll_content').length){
                $body.wrapInner('<div id="discovery_scroll_content_wrapper" />');
                $body.wrapInner('<div id="discovery_scroll_content" />');
                scroll = $('#discovery_scroll_content');
            }else{
                scroll = $('#discovery_scroll_content')[0];
            }
            //Create scroll
            this.scroll = new IScroll(scroll[0], {zoom: true});

            
            //Append bar
            $body.append($content);

            setTimeout(function(){
                scroll.css({
                    height: $content.height()
                }).addClass('cover');

                console.log('heihgt', $('#discovery_offer_wall').height());

                $body.addClass('cover');

                //Apply "responsive" stuff
                responsivBar();

            }, 0);

            $('#discovery_mobile_bar').on('tap', '#discovery_caption_bar', function(e){
                console.log(e, 'tap');
                var height = $('.discovery_offer_wall').height();

                $('#discovery_offer_wall').toggleClass('open');

                if($('#discovery_offer_wall').hasClass('open')){
                    $('#discovery_offer_wall').css({top: '-' + height + 'px'});
                }else{
                    $('#discovery_offer_wall').css({top: 0});
                }
            });
        }.bind(app);//Bind to appication
        //Grab offers
        $.getJSON(
            host + '/discovery.php?callback=?&aff_id=' + id + '&' + (new Date()*1),
            success
        );
    });
});