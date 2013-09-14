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
        setup:        'setup'
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
require(['zepto', 'domReady', 'app'], function ($, domReady, App) {
    //Halt execution if not in mobile
    if(window.mobirightCapabilities.isMobile){
        domReady(function () {
            //=================== SETUP
            //TODO: Encapsulate it into the App instead
            var mobiright_attribute = 'mbr-aff-id';
            var mobiright_css_attribute = 'mbr-style';
            var mobiright_host_attribute = 'mbr-host';
            //Get basics
            var $selfScript = $('[' + mobiright_attribute + ']');
            var id = $selfScript.attr(mobiright_attribute);

            //TODO: We can define host in the same tag too
            var host = $selfScript.attr(mobiright_host_attribute);
            var css = $selfScript.attr(mobiright_css_attribute).split(',');
            //Load all defined stylesheets
            _.each(css, function(item){ loadCss(item); });
            //===================== SETUP END
            
            //Create application instance
            app = new App(host, id);

            //Grab offers
            $.getJSON(
                host + '/discovery.php?callback=?&aff_id=' + id + '&' + (new Date()*1),
                app.render
            );
        });
    }
});