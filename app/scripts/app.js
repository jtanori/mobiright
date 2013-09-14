/* global define */
define(['zepto', 'templates/bar', 'aspect', 'iscroll'], function ($, tmpl, aspect, IScroll) {
    'use strict';
    var App = function (host, id) {
        this.id = id;
        this.host = host;

        var content = '';
        var template = tmpl; //Fix this, tmpl should be loaded on the fly
        var $scroll, scroll;

        var adjust = function () {
            console.log('adjust');
            //setTimeout(function () {

            var w = $(window).width();
            var $wall = $('#discovery_offer_wall');
            var $bar = $('#discovery_caption_bar');
            var $items = $wall.find('.discovery_offer_list');

            //Force height on each list item
            switch (window.orientation) {
            case 90:
            case -90:
                $items.height(w * 0.1);
                break;
            default:
                $items.height(w * 0.18);
                break;
            }

            var barHeight = $bar.height();
            var height = $wall.height();

            //Calculate the height of the container
            if ((height + barHeight) > w) {
                height = w - barHeight - 10;
            }
            //Displace the container to minus it's height
            if ($wall.hasClass('open')) {
                $wall.css({
                    top: '-' + height + 'px'
                });
            } else {
                $wall.css({
                    top: 0
                });
            }
            //}, 0);

            var $scroll = $('#discovery_scroll_content');

            $scroll.css({
                height: $(window).height()
            }).addClass('cover');

            scroll.refresh();
        };
        var render = function (res) {
            res.host = host;
            content = template(res);

            var $body = $('body');
            var present = res.offers.length ? ' : bar present' : ' : no bar'; //Is bar going to be present?
            var e = id + ' : ' + res.affiliate.company + present; //Event to register
            var $content = $(content);

            //TODO: Integrate into app
            if (res.offers.length) {
                $body.append('<iframe style=display:none src=' + host + '/bar_loading_event.php?aff=' + e + '>');
            }

            if (!$('#discovery_scroll_content').length) {
                $body.wrapInner('<div id=\'discovery_scroll_content_wrapper\' />');
                $body.wrapInner('<div id=\'discovery_scroll_content\' />');
                $scroll = $('#discovery_scroll_content');
            } else {
                $scroll = $('#discovery_scroll_content')[0];
            }
            //Create scroll
            scroll = new IScroll($scroll[0], {
                zoom: true
            });

            makeCover();
            //Append bar
            $body.append($content);

            $('#discovery_mobile_bar').on('tap', '#discovery_caption_bar', toggle.bind(this));
        };

        var toggle = function () {
            var $wall = $('#discovery_offer_wall');

            $wall.toggleClass('open');

            adjust();
        }.bind(this);

        var makeCover = function(){
            var $body = $('body');
            var $scroll = $('#discovery_scroll_content');
            var $content = $(content);

            $scroll.css({
                height: $(window).height()
            }).addClass('cover');

            console.log([$content, $content.height()]);

            $body.addClass('cover');
        }.bind(this);

        this.getContent = function () {
            return content;
        };

        this.getScroll = function () {
            return scroll;
        };

        aspect.add(this, ['render', 'toggle'], adjust.bind(this), 'after');
        document.addEventListener('orientationchange', adjust, this, false);

        return {
            getContent: this.getContent,
            getScroll: this.getScroll,
            render: render
        };
    };

    return App;
});