// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

(function() {
    'use strict';
    
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                   || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

UPDATED: mobirise devs:
  added support for requestAnimationFrame

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.on('resize', function () {
		windowHeight = $window.height();
	});

    var uniqNum = 123;

    // init parallax
    var parallax = function($this, xpos, speedFactor, outerHeight) {
        uniqNum += 68;
        var instanceName = 'jqueryparallax' + uniqNum;
        $this.data('jquery-parallax-instance', instanceName);

        // function to be called whenever the window is scrolled or resized
        function update(){
            //get the starting position of each element to have parallax applied to it
            var firstTop = $this.offset().top;
            var pos = $window.scrollTop();              
            var top = $this.offset().top;
            var height = outerHeight ? $this.outerHeight(true) : $this.height();

            // Check if totally above or totally below viewport
            if (top + height < pos || top > pos + windowHeight) {
                return;
            }

            $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
        }       

        $window.on('scroll.' + instanceName + ' resize.' + instanceName + ' load.' + instanceName + '', function() {
            window.requestAnimationFrame(update);
        });
        update();
    };

    // destroy parallax
    var destroy = function($this) {
        var instance = $this.data('jquery-parallax-instance');
        if(instance) {
            $window.off('.' + instance);
            $this.removeData('jquery-parallax-instance')
            $this.css('backgroundPosition', '');
        }
    };

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
        $(this).each(function() {
            if(xpos == 'destroy') {
                destroy($(this));
            } else {
                parallax(
                    $(this),
                    typeof xpos !== 'undefined' ? xpos : '50%',
                    typeof speedFactor !== 'undefined' ? speedFactor : 0.1,
                    typeof outerHeight !== 'undefined' ? outerHeight : true
                );
            }
        })
	};
})(jQuery);
