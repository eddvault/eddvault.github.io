var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 * Copyright (c) 2007 Josh Bush (digitalbush.com)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * Version: Beta 1
 * Release: 2007-06-01
 */
(function($) {
	var map=new Array();
	$.Watermark = {
		ShowAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==""){
					map[i].obj.val(map[i].text);
					map[i].obj.css("color",map[i].WatermarkColor);
				}else{
				    map[i].obj.css("color",map[i].DefaultColor);
				}
			}
		},
		HideAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==map[i].text)
					map[i].obj.val("");
			}
		}
	}

	$.fn.Watermark = function(text,color) {
		if(!color)
			color="#aaa";
		return this.each(
			function(){
				var input=$(this);
				var defaultColor=input.css("color");
				map[map.length]={text:text,obj:input,DefaultColor:defaultColor,WatermarkColor:color};
				function clearMessage(){
					if(input.val()==text)
						input.val("");
					input.css("color",defaultColor);
				}

				function insertMessage(){
					if(input.val().length==0 || input.val()==text){
						input.val(text);
						input.css("color",color);
					}else
						input.css("color",defaultColor);
				}

				input.focus(clearMessage);
				input.blur(insertMessage);
				input.change(insertMessage);

				insertMessage();
			}
		);
	};
})(jQuery);
/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor', 'borderColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}

	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break;

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};

	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};

})(jQuery);
/* Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.3
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function($) {

$.extend($.fn, {
	livequery: function(type, fn, fn2) {
		var self = this, q;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// See if Live Query already exists
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
					// Found the query, exit the each loop
					return (q = query) && false;
		});

		// Create new Live Query if it wasn't found
		q = q || new $.livequery(this.selector, this.context, type, fn, fn2);

		// Make sure it is running
		q.stopped = false;

		// Run it immediately for the first time
		q.run();

		// Contnue the chain
		return this;
	},

	expire: function(type, fn, fn2) {
		var self = this;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// Find the Live Query based on arguments and stop it
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				(!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
					$.livequery.stop(query.id);
		});

		// Continue the chain
		return this;
	}
});

$.livequery = function(selector, context, type, fn, fn2) {
	this.selector = selector;
	this.context  = context || document;
	this.type     = type;
	this.fn       = fn;
	this.fn2      = fn2;
	this.elements = [];
	this.stopped  = false;

	// The id is the index of the Live Query in $.livequery.queries
	this.id = $.livequery.queries.push(this)-1;

	// Mark the functions for matching later on
	fn.$lqguid = fn.$lqguid || $.livequery.guid++;
	if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;

	// Return the Live Query
	return this;
};

$.livequery.prototype = {
	stop: function() {
		var query = this;

		if ( this.type )
			// Unbind all bound events
			this.elements.unbind(this.type, this.fn);
		else if (this.fn2)
			// Call the second function for all matched elements
			this.elements.each(function(i, el) {
				query.fn2.apply(el);
			});

		// Clear out matched elements
		this.elements = [];

		// Stop the Live Query from running until restarted
		this.stopped = true;
	},

	run: function() {
		// Short-circuit if stopped
		if ( this.stopped ) return;
		var query = this;

		var oEls = this.elements,
			els  = $(this.selector, this.context),
			nEls = els.not(oEls);

		// Set elements to the latest set of matched elements
		this.elements = els;

		if (this.type) {
			// Bind events to newly matched elements
			nEls.bind(this.type, this.fn);

			// Unbind events to elements no longer matched
			if (oEls.length > 0)
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						$.event.remove(el, query.type, query.fn);
				});
		}
		else {
			// Call the first function for newly matched elements
			nEls.each(function() {
				query.fn.apply(this);
			});

			// Call the second function for elements no longer matched
			if ( this.fn2 && oEls.length > 0 )
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						query.fn2.apply(el);
				});
		}
	}
};

$.extend($.livequery, {
	guid: 0,
	queries: [],
	queue: [],
	running: false,
	timeout: null,

	checkQueue: function() {
		if ( $.livequery.running && $.livequery.queue.length ) {
			var length = $.livequery.queue.length;
			// Run each Live Query currently in the queue
			while ( length-- )
				$.livequery.queries[ $.livequery.queue.shift() ].run();
		}
	},

	pause: function() {
		// Don't run anymore Live Queries until restarted
		$.livequery.running = false;
	},

	play: function() {
		// Restart Live Queries
		$.livequery.running = true;
		// Request a run of the Live Queries
		$.livequery.run();
	},

	registerPlugin: function() {
		$.each( arguments, function(i,n) {
			// Short-circuit if the method doesn't exist
			if (!$.fn[n]) return;

			// Save a reference to the original method
			var old = $.fn[n];

			// Create a new method
			$.fn[n] = function() {
				// Call the original method
				var r = old.apply(this, arguments);

				// Request a run of the Live Queries
				$.livequery.run();

				// Return the original methods result
				return r;
			}
		});
	},

	run: function(id) {
		if (id != undefined) {
			// Put the particular Live Query in the queue if it doesn't already exist
			if ( $.inArray(id, $.livequery.queue) < 0 )
				$.livequery.queue.push( id );
		}
		else
			// Put each Live Query in the queue if it doesn't already exist
			$.each( $.livequery.queries, function(id) {
				if ( $.inArray(id, $.livequery.queue) < 0 )
					$.livequery.queue.push( id );
			});

		// Clear timeout if it already exists
		if ($.livequery.timeout) clearTimeout($.livequery.timeout);
		// Create a timeout to check the queue and actually run the Live Queries
		$.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
	},

	stop: function(id) {
		if (id != undefined)
			// Stop are particular Live Query
			$.livequery.queries[ id ].stop();
		else
			// Stop all Live Queries
			$.each( $.livequery.queries, function(id) {
				$.livequery.queries[ id ].stop();
			});
	}
});

// Register core DOM manipulation methods
$.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

// Run Live Queries when the Document is ready
$(function() { $.livequery.play(); });


// Save a reference to the original init method
var init = $.prototype.init;

// Create a new init method that exposes two new properties: selector and context
$.prototype.init = function(a,c) {
	// Call the original init and save the result
	var r = init.apply(this, arguments);

	// Copy over properties if they exist already
	if (a && a.selector)
		r.context = a.context, r.selector = a.selector;

	// Set properties
	if ( typeof a == 'string' )
		r.context = c || document, r.selector = a;

	// Return the result
	return r;
};

// Give the init function the jQuery prototype for later instantiation (needed after Rev 4091)
$.prototype.init.prototype = $.prototype;

})(jQuery);/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J�örn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3640 2007-10-11 18:34:38Z pmclanahan $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are four supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *   html5: Values are stored in data-* attributes.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @example <p id="one" class="some_class" data-item_id="1" data-item_label="Label">This is a p</p>
 * @before $.metadata.setType("html5")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a series of data-* attributes
 *
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
  metadata : {
    defaults : {
      type: 'class',
      name: 'metadata',
      cre: /({.*})/,
      single: 'metadata'
    },
    setType: function( type, name ){
      this.defaults.type = type;
      this.defaults.name = name;
    },
    get: function( elem, opts ){
      var settings = $.extend({},this.defaults,opts);
      // check for empty string in single property
      if ( !settings.single.length ) settings.single = 'metadata';
      
      var data = $.data(elem, settings.single);
      // returned cached data if it already exists
      if ( data ) return data;
      
      data = "{}";
      
      var getData = function(data) {
        if(typeof data != "string") return data;
        
        if( data.indexOf('{') < 0 ) {
          data = eval("(" + data + ")");
        }
      }
      
      var getObject = function(data) {
        if(typeof data != "string") return data;
        
        data = eval("(" + data + ")");
        return data;
      }
      
      if ( settings.type == "html5" ) {
        var object = {};
        $( elem.attributes ).each(function() {
          var name = this.nodeName;
          if(name.match(/^data-/)) name = name.replace(/^data-/, '');
          else return true;
          object[name] = getObject(this.nodeValue);
        });
      } else {
        if ( settings.type == "class" ) {
          var m = settings.cre.exec( elem.className );
          if ( m )
            data = m[1];
        } else if ( settings.type == "elem" ) {
          if( !elem.getElementsByTagName ) return;
          var e = elem.getElementsByTagName(settings.name);
          if ( e.length )
            data = $.trim(e[0].innerHTML);
        } else if ( elem.getAttribute != undefined ) {
          var attr = elem.getAttribute( settings.name );
          if ( attr )
            data = attr;
        }
        object = getObject(data.indexOf("{") < 0 ? "{" + data + "}" : data);
      }
      
      $.data( elem, settings.single, object );
      return object;
    }
  }
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
  return $.metadata.get( this[0], opts );
};

})(jQuery);//Licensed under The MIT License
//Copyright (c) 2008 Jason Frame (jason@onehackoranother.com)


(function($) {
    $.fn.tipsy = function(opts) {

        opts = $.extend({fade: false, gravity: 'n'}, opts || {});
        // ...Added by andy@twitter.com 20090717
        if(!opts['offsetTop']) { opts['offsetTop'] = 0; }
        if(!opts['offsetLeft']) { opts['offsetLeft'] = 0; }
        if(!opts['header']) { opts['header'] = ''; }
        if(!opts['footer']) { opts['footer'] = ''; }
        if(!opts['hideTimeout']) { opts['hideTimeout'] = 100; }
        if(!opts['showTimeout']) { opts['hideTimeout'] = 0; }
        if(!opts['additionalCSSClass']) { opts['additionalCSSClass'] = ''; }
        var showTimeoutKey = false;
        // ...Added by andy@twitter.com 20090717
        var tip = null, cancelHide = false;
        this.hover(function() {

            // ...Added by andy@twitter.com 20090717
            var linkText = $(this).text();
            var header = opts['header'].replace('%{link}', linkText);
            var footer = opts['footer'].replace('%{link}', linkText);
            // ...Added by andy@twitter.com 20090717

            $.data(this, 'cancel.tipsy', true);

            var tip = $.data(this, 'active.tipsy');
            if (!tip) {
                $('.tipsy').hide();
                tip = $('<div class="tipsy '+ opts['additionalCSSClass'] +'"><div class="tipsy-inner">' + header + $(this).attr('title') + footer + '</div></div>');
                tip.css({position: 'absolute', zIndex: 100000});
                $(this).attr('title', '');
                $.data(this, 'active.tipsy', tip);
            // Added by rael@twitter.com 20090628...
            } else if ($(this).attr('title') != '') {
              tip.find('.tipsy-inner').html($(this).attr('title'));
              $(this).attr('title', '');
            // ...Added by rael@twitter.com 20090628
            }

            var pos = $.extend({}, $(this).offset(), {width: this.offsetWidth, height: this.offsetHeight});
            // ...Added by andy@twitter.com 20090717
            pos.top = pos.top + opts['offsetTop'];
            pos.left = pos.left + opts['offsetLeft'];

            // remove open tips if timeout to fade
            $('.tipsy').hide();
            // ...Added by andy@twitter.com 20090717
            tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
            var actualWidth = tip[0].offsetWidth, actualHeight = tip[0].offsetHeight;

            switch (opts.gravity.charAt(0)) {
                case 'n':
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-north');
                    break;
                case 'l':
                    //left north align
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - 18}).addClass('tipsy-north');
                    break;
                case 's':
                    tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('tipsy-south');
                    break;
                case 'e':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('tipsy-east');
                    break;
                case 'w':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('tipsy-west');
                    break;
            }
            // ...Added by andy@twitter.com 20090717
            function show() {
              if (opts.fade) {
                  tip.css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: 1});
              } else {
                  tip.css({visibility: 'visible'});
              }
            }
            if(opts['showTimeout']) {
              showTimeoutKey = setTimeout(show, opts['showTimeout']);
            } else {
              show();
            }
        }, function() {
            clearTimeout(showTimeoutKey);
            // ...Added by andy@twitter.com 20090717
            $.data(this, 'cancel.tipsy', false);
            var self = this;
            setTimeout(function() {
                if ($.data(this, 'cancel.tipsy')) return;
                var tip = $.data(self, 'active.tipsy');
                if (opts.fade) {
                    tip.stop().fadeOut(function() { $(this).remove(); });
                } else {
                    tip.remove();
                }
            }, opts['hideTimeout']);
        });

    };
})(jQuery);
/*
 * jQuery Form Plugin
 * version: 2.36 (07-NOV-2009)
 * @requires jQuery v1.2.6 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function() {
			$(this).ajaxSubmit({
				target: '#output'
			});
			return false; // <-- important!
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function')
		options = { success: options };

	var url = $.trim(this.attr('action'));
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || '';

	options = $.extend({
		url:  url,
		type: this.attr('method') || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options || {});

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (var n in options.data) {
		  if(options.data[n] instanceof Array) {
			for (var k in options.data[n])
			  a.push( { name: n, value: options.data[n][k] } );
		  }
		  else
			 a.push( { name: n, value: options.data[n] } );
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else
		options.data = q; // data is the query string for 'post'

	var $form = this, callbacks = [];
	if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
	if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			$(options.target).html(data).each(oldSuccess, arguments);
		});
	}
	else if (options.success)
		callbacks.push(options.success);

	options.success = function(data, status) {
		for (var i=0, max=callbacks.length; i < max; i++)
			callbacks[i].apply(options, [data, status, $form]);
	};

	// are there files to upload?
	var files = $('input:file', this).fieldValue();
	var found = false;
	for (var j=0; j < files.length; j++)
		if (files[j])
			found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if ((files.length && options.iframe !== false) || options.iframe || found || multipart) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive)
		   $.get(options.closeKeepAlive, fileUpload);
	   else
		   fileUpload();
	   }
   else
	   $.ajax(options);

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit]', form).length) {
			alert('Error: Form elements must not be named "submit".');
			return;
		}

		var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

		var id = 'jqFormIO' + (new Date().getTime());
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ opts.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', opts.iframeSrc); // abort op in progress
			}
		};

		var g = opts.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) $.event.trigger("ajaxStart");
		if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
		}
		if (xhr.aborted)
			return;

		var cbInvoked = 0;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				options.extraData = options.extraData || {};
				options.extraData[n] = sub.value;
				if (sub.type == "image") {
					options.extraData[name+'.x'] = form.clk_x;
					options.extraData[name+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		setTimeout(function() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

			// ie borks in some cases when setting encoding
			if (! options.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (opts.timeout)
				setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (options.extraData)
					for (var n in options.extraData)
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
								.appendTo(form)[0]);

				// add iframe to doc and submit the form
				$io.appendTo('body');
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				t ? form.setAttribute('target', t) : $form.removeAttr('target');
				$(extraInputs).remove();
			}
		}, 10);

		var domCheckCount = 50;

		function cb() {
			if (cbInvoked++) return;

			io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) throw 'timeout';
				// extract the server response from the iframe
				var data, doc;

				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

				var isXml = opts.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && (doc.body == null || doc.body.innerHTML == '')) {
				 	if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						cbInvoked = 0;
						setTimeout(cb, 100);
						return;
					}
					log('Could not access iframe DOM after 50 tries.');
					return;
				}

				xhr.responseText = doc.body ? doc.body.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': opts.dataType};
					return headers[header];
				};

				if (opts.dataType == 'json' || opts.dataType == 'script') {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta)
						xhr.responseText = ta.value;
					else {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						if (pre)
							xhr.responseText = pre.innerHTML;
					}
				}
				else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, opts.dataType);
			}
			catch(e){
				ok = false;
				$.handleError(opts, xhr, 'error', e);
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				opts.success(data, 'success');
				if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
			}
			if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
			if (g && ! --$.active) $.event.trigger("ajaxStop");
			if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		};

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		};
	};
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	return this.ajaxFormUnbind().bind('submit.form-plugin', function() {
		$(this).ajaxSubmit(options);
		return false;
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0)
				return;
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length == 0) return a;

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) return a;
	for(var i=0, max=els.length; i < max; i++) {
		var el = els[i];
		var n = el.name;
		if (!n) continue;

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		var v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(var j=0, jmax=v.length; j < jmax; j++)
				a.push({name: n, value: v[j]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: n, value: v});
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0], n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) return;
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++)
				a.push({name: n, value: v[i]});
		}
		else if (v !== null && typeof v != 'undefined')
			a.push({name: this.name, value: v});
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
			continue;
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (typeof successful == 'undefined') successful = true;

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1))
			return null;

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) return null;
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				if (one) return v;
				a.push(v);
			}
		}
		return a;
	}
	return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea')
			this.value = '';
		else if (t == 'checkbox' || t == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
			this.reset();
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b == undefined) b = true;
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select == undefined) select = true;
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio')
			this.checked = select;
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
		window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);
if(!Array.forEach){Array.prototype.forEach=function(D,E){var C=E||window;for(var B=0,A=this.length;B<A;++B){D.call(C,this[B],B,this)}};Array.prototype.map=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){A.push(E.call(D,this[C],C,this))}return A};Array.prototype.filter=function(E,F){var D=F||window;var A=[];for(var C=0,B=this.length;C<B;++C){if(!E.call(D,this[C],C,this)){continue}A.push(this[C])}return A};Array.prototype.every=function(D,E){var C=E||window;for(var B=0,A=this.length;B<A;++B){if(!D.call(C,this[B],B,this)){return false}}return true};Array.prototype.indexOf=function(B,C){var C=C||0;for(var A=0;A<this.length;++A){if(this[A]===B){return A}}return -1}}Array.prototype.contains=function(A){if(Array.contains){return this.contains(A)}return this.indexOf(A)>-1};Array.prototype.insert=function(A){if(!this.contains(A)){this.push(A)}};if(!Array.remove){Array.remove=function(D,C,B){var A=D.slice((B||C)+1||D.length);D.length=C<0?D.length+C:C;return D.push.apply(D,A)}}Function.prototype.method=function(A,B){this.prototype[A]=B;return this};Function.prototype.augmentProto=function(A){for(key in A){this.prototype[key]=A[key]}return this};Function.prototype.pBind=function(B){var A=this;return function(){return A.apply(B,arguments)}};Function.prototype.widget=function(){this.prototype.bind=function(B,A){this.$root.bind(B,A);return this};this.prototype.trigger=function(A,B){this.$root.trigger(A,B)};this.prototype.find=function(A){return this.$root.find(A)};return this};String.prototype.toCamel=function(){return this.replace(/[-_\s]\D/gi,function(A){return A.charAt(A.length-1).toUpperCase()})};String.prototype.escapeHTML=function(){return this.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};String.prototype.unescapeHTML=function(){return this.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"')};String.prototype.stripTags=function(){return this.replace(/<\/?[^>]+>/gi,"").replace(/<|>/g,"")};String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")};window.twttr=window.twttr||{};twttr.actionsTillReady=new Array("canTweet","sidebarTab","inPageLink");twttr.augmentObject=function(B,C){for(var A in C){B[A]=C[A]}return B};twttr.augmentObject(twttr,{namespaceOf:function(A){return twttr.is.object(A)?A:window},merge:function(){var D=arguments;var E=D[0];var H=arguments[arguments.length-1];var C=false;if(twttr.is.nil(E)||!twttr.is.def(E)){if(D.length<2){return{}}[].shift.call(D);return this.merge.apply(this,D)}if(twttr.is.bool(H)){C=H;[].pop.call(D)}for(var G=1,B=D.length;G<B;G++){var A=D[G];for(var F in A){if(C&&A[F]&&typeof A[F]==="object"){if(!E[F]){E[F]=(A[F] instanceof Array)?[]:{}}else{if(typeof E[F]!=="object"){E[F]=A[F]}}this.merge(E[F],A[F],true)}else{E[F]=A[F]}}}return E},extend:function(B,C){var A=function(){};A.prototype=C.prototype;B.prototype=new A();B.prototype.constructor=B;B.uber=C.prototype;if(C.prototype.constructor==Object.prototype.constructor){C.prototype.constructor=C}},klass:function(A,B){return twttr.magic(A,B)},augmentAndExtend:function(B,C,D){var A=twttr.namespaceOf(B);A[C]=function(){A[C].uber.constructor.apply(this,arguments)};twttr.extend(A[C],D);return A[C]},auxo:function(C,D,B){var A=twttr.is.object(B)?B:twttr;return twttr.augmentAndExtend(A,C,D)},augmentString:function(C,A){var B=window;C.split(".").forEach(function(F,E,D){B=B[F]=B[F]||(twttr.is.def(D[E+1])?{}:A)});return B},magic:function(B,A){if(twttr.is.string(B)){return twttr.augmentString(B,A)}else{return twttr.augmentObject(B,A)}},inspect:function(B){console.clear();var C=$(B);var H=C.data("events");var A=0;var G=0;var E=[];var D=[];for(key in H){E.push(key);A++;D.push("\n*******************\n");D.push("Events for "+key+"\n\n");for(fn in H[key]){var F=H[key][fn];G++;D.push(F.toString()+"\n")}}console.log("************* Summary *************");console.log("for target",C);console.log(A+" types of events",E);console.log(G,"Total Event Listeners");console.log("Event listeners assigned to target");console.log(D.join(" "))},is:{bool:function(A){return typeof A==="boolean"},nil:function(A){return A===null},def:function(A){return !(typeof A==="undefined")},number:function(A){return typeof A==="number"&&isFinite(A)},fn:function(A){return typeof A==="function"},array:function(A){return A?this.number(A.length)&&this.fn(A.splice):false},string:function(A){return typeof A==="string"},blank:function(A){return A===""},falsy:function(A){return A===false||A===null||A===undefined},object:function(A){return(A&&(typeof A==="object"||this.fn(A)))||false}},widget:function(A){A.prototype.bind=function(C,B){this.$element.bind(C,B)}}});if(!window.console){var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console={};for(var i=0;i<names.length;++i){window.console[names[i]]=function(){}}}function setupTranslationCallback(){if(!twttr.i18n_missing_interval){twttr.i18n_missing_interval=window.setInterval(function(){if(twttr.i18n_missing&&twttr.i18n_missing.length>0){$.ajax({type:"POST",data:$.param({authenticity_token:twttr.form_authenticity_token,location:window.location.href,"strings[]":twttr.i18n_missing}),url:"/translate/untranslated_javascript"});twttr.i18n_missing=new Array()}},10000)}}function recordUntranslatedString(A){if(!twttr.i18n_missing){twttr.i18n_missing=new Array()}if(!twttr.i18n_missing_reported){twttr.i18n_missing_reported={}}if(!twttr.i18n_missing_reported[A]){twttr.i18n_missing.push(encodeURIComponent(A));twttr.i18n_missing_reported[A]=true}}function _(C,A){if(twttr.i18n){var B=twttr.i18n[C];if(B){C=B}else{recordUntranslatedString(C)}}return replaceParams(C,A)}function replaceParams(B,A){if(A){for(var C in A){B=B.replace(new RegExp("\\%\\{"+C+"\\}","gi"),A[C])}}return B}var h=function(){var A=$("<div/>");return function(B){return B?A.text(B).html().replace(/\"/gi,"&quot;"):B}}();function unh(A){return A?A.replace(/&(amp;)+/g,"&").replace(/&[a-z]+;/gi,function(B){if(unh.HTML_ESCAPE_TOKENS[B]){return unh.HTML_ESCAPE_TOKENS[B]}return B}):A}window.unh.HTML_ESCAPE_TOKENS={"&lt;":"<","&gt;":">","&quot;":'"'};function addSlashes(A){return A.replace(/\'/g,"\\'").replace(/\"/g,'\\"')}var reverseString=function(A){return A?A.split("").reverse().join(""):A};var numberWithDelimiter=function(B,A){A=A?A:",";return B.toString().replace(/(.)(?=(.{3})+$)/g,"$1"+A)};var timeAgo=function(C){if(!C){return false}var H=new Date();var G=new Date(C);if(document.all){G=Date.parse(C.replace(/( \+)/," UTC$1"))}var D=H-G;var B=1000,F=B*60,A=F*60;if(isNaN(D)||D<0){return false}var E=-1;$.each([5,10,20],function(){if(D<this*B){E=this;return false}});if(E!=-1){return _("less than %{time} seconds ago",{time:E})}if(D<B*40){return _("half a minute ago")}if(D<F){return _("less than a minute ago")}if(D<B*90){return _("1 minute ago")}if(D<F*45){return _("%{time} minutes ago",{time:Math.round(D/F)})}if(D<F*90){return _("about 1 hour ago")}if(D<A*24){return _("about %{time} hours ago",{time:Math.round(D/A)})}return G.toLocaleString().replace(/ GMT[+-][0-9]+:?[0-9]+/,"")};var updateTimeAgo=function(){$(".timestamp").each(function(){var B=$(this);var A=timeAgo(B.meta().time);if(A&&B.find("*").length==0){B.html(A)}});$(".timestamp-title").each(function(){var B=$(this);var A=timeAgo(B.meta().time);if(A){B.attr("title",A)}})};var DEBUG=false;$.extend({log:function(A){if(window.console){console.log(A)}},debug:function(A){if(DEBUG){console.log(A)}},inspect:function(B){var A="{\n";for(var C in B){A+="\t"+C+": "+B[C]+"\n"}A+="}";console.log(A);return A},getStackTrace:function(){var I=[];var C=false;try{D.dont.exist+=0}catch(F){if(F.stack){var J=F.stack.split("\n");for(var D=0,E=J.length;D<E;D++){I.push(J[D])}I.shift();C=true}else{if(window.opera&&F.message){var J=F.message.split("\n");for(var D=0,E=J.length;D<E;D++){if(J[D].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){var H=J[D];if(J[D+1]){H+=" at "+J[D+1];D++}I.push(H)}}I.shift();C=true}}}if(!C){var B=arguments.callee.caller;while(B){var G=B.toString();var A=G.substring(G.indexOf("function")+8,G.indexOf(""))||"anonymous";I.push(A);B=B.caller}}return I}});(function(){if(document.all){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var A=new Number(RegExp.$1);if(A>=8){$.browser.msie8=true}else{if(A>=7){$.browser.msie7=true}else{$.browser.msie6=true}}}}})();var _tmp={};twttr.augmentObject(twttr,{templates:{},timeouts:{},wait:function(){var A={};twttr.clearWait=function(B){if(twttr.is.def(A[B])){clearTimeout(B);delete A[B]}};return function(E,C){var B="TIMER_"+(new Date()).getTime();var D=setTimeout(function(){if(!twttr.is.def(A[B])){return }E()},C);A[B]=D;return B}}(),processJson:function(json){if(typeof (json)=="object"){var evals=[];$.each(json,function(selector,content){var c=selector.charAt(0);if(c=="$"){evals.push(content)}else{if(c=="!"){var notification=window[selector.substring(1)+"Notification"];if(notification){(new notification()).setMessage(content).show()}}else{var $contentPadded=$("<div></div>").html(content);var $content=$(selector,$contentPadded);if($content.length==1){$(selector).replaceWith($content)}else{$(selector).html(content)}$(selector).show()}}});$.each(evals,function(index,js){if(js){eval(js)}})}},googleAnalytics:function(A){if(window.pageTracker){window.pageTracker._trackEvent("Ajax","refresh",A,null)}},trackPageView:function(C,B,D){if(window.pageTracker){var A;if(C){A=C.toString();if(B){A="/search/tweets/"+encodeURIComponent(h(page.query))}if(D){A=A+D}window.pageTracker._trackPageview(A)}else{window.pageTracker._trackPageview()}}},fadeAndReplace:function(A,B){$(A).fadeOut("medium",function(){$(A).html(B)});$(A).fadeIn("medium")},error:function(A){alert(A?A:_("Whoops! Something went wrong. Please refresh the page and try again!"))},loading:function(){$("#loader").fadeIn(200)},loaded:function(){$("#loader").fadeOut(200)},updateLocation:function(A,E){if(!E){E=document}if(A){var D=A.replace(/^https?:\/\/.+?\//,"").replace(/#/gi,"%23").replace(/\s/gi,"+");var C=D.replace(/[^\w\d_-].*$/,"");var B=(C.length>0)?$(E).find("#"+C):[];if(B.length>0){B.get(0).id=C+"_tmp_for_update_location"}E.location.hash=D;if(B.length>0){B.get(0).id=C}}},NON_CHAR_KEY_CODES:[8,9,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,91,92,93],isNonCharKeyCode:function(A){return $.inArray(A.keyCode,twttr.NON_CHAR_KEY_CODES)!=-1||((A.ctrlKey||A.metaKey)&&$.inArray(A.keyCode,[67,88])!=-1)}});$.extend($.expr[":"],{onthepage:"($(elem).is(':visible') && $(elem).parents(':hidden').length == 0)"});jQuery.fn.move=function(A){var B=$(this).html();$(this).remove();$(A).html(B)};jQuery.fn.meta=function(){var B={type:"attr",name:"data"};var C=$(this);if(C.length==1){return C.metadata(B)}else{var A=[];C.each(function(){A.push($(this).metadata(B))});return A}};jQuery.fn.visible=function(A){$(this).each(function(){$(this).css("visibility",A?"visible":"hidden")})};jQuery.fn.isLoading=function(){$(this).addClass("loading")};$.fn.isLoaded=function(){$(this).removeClass("loading")};$.fn.replace_text=function(C,B){var A=$(this).html();if(A){$(this).html(A.replace(C,B))}};var pluralize=function(C,B,A){return C==1?B:A};var setDocumentTitle=function(A){document.title=unh(A.stripTags())||""};var addCountToDocumentTitle=function(A){document.title=(A?"("+numberWithDelimiter(A)+") ":"")+document.title.replace(/\([^)]*[0-9]\)\s+/gi,"")};var getSessionUserScreenName=function(){var A;if(page.user_screenname){A=page.user_screenname}else{if($('meta[name="session-user-screen_name"]:first').get(0)){A=$('meta[name="session-user-screen_name"]:first').get(0).content}else{A=$('meta[name="session-user-screen_name"]').get(0).content}}return A};var sessionUserIsPageUser=function(){try{return $('meta[name="session-user-screen_name"]:first').get(0).content==$('meta[name="page-user-screen_name"]:first').get(0).content}catch(A){return false}};$.fn.focusEnd=function(){return this.each(function(){var A=this;if(A.style.display!="none"){if($.browser.msie){A.focus();var B=A.createTextRange();B.collapse(false);B.select()}else{A.setSelectionRange(A.value.length,A.value.length);A.focus()}}})};$.fn.focusFirstTextField=function(){return this.find("input[type=text]:visible:enabled:first").focus().length>0},$.fn.focusFirstTextArea=function(){return this.find("textarea:visible:enabled:first").focus().length>0};$.fn.focusFirstTexttarget=function(){return this.focusFirstTextField()||this.focusFirstTextArea()};$.fn.maxLength=function(A){return this.each(function(){$(this).keydown(function(B){return this.value.length<=A||twttr.isNonCharKeyCode(B)})})};$.fn.replaceClass=function(B,A){return this.each(function(){var C=$(this);if(C.hasClass(B)){C.removeClass(B).addClass(A)}else{if(C.hasClass(A)){C.removeClass(A).addClass(B)}}})};$.fn.isSelectAll=function(A){return this.each(function(){var B=$(this);if(typeof (A)=="string"){var D=$(A).find("input[type=checkbox]")}else{var D=A}function C(){var E=true;D.each(function(){if(!this.checked){E=false;return false}});B.get(0).checked=E}B.click(function(){var E=B.get(0).checked;D.each(function(){this.checked=E});$(this).trigger("select-all-changed",E)});D.click(function(){C();$(this).trigger("checkbox-changed",this.checked)})})};function bodytarget(){return $("body")}twttr.klass("twttr.Observer",function(){this.fns=[]}).method("listen",function(A){this.fns.push(A)}).method("unlisten",function(A){this.fns=this.fns.filter(function(B){if(B!==A){return B}})}).method("trigger",function(C,B){var A=B||window;this.fns.forEach(function(D){D.call(A,C)})});twttr.klass("twttr.User",function(A){this.screen_name=A}).method("update",function(B,A){twttr.tweeters[this.screen_name][B]=A;return this}).method("updateAll",function(B){for(var A in B){twttr.tweeters[this.screen_name][A]=B[A]}return this}).method("data",function(B){var A=twttr.tweeters[this.screen_name];return B?A[B]:A});twttr.augmentObject(twttr.User,{UserFetchTimeout:5000,UserFetchUrl:"/users/show",_bail:false,_requesting:false,bail:function(){this._bail=true},isRequesting:function(){return this._requesting},getCurrentUser:function(A){return this.findById(page.sessionUserId,A)},find:function(F,C,G){var B,A;var D=this;if(twttr.is.fn(C)){B=window;A=C}else{B=C;A=G}var E=twttr.is.def(F.screen_name)?F.screen_name.toLowerCase():null;if(E&&twttr.tweeters[E]){A.call(B,new twttr.User(E),true);return true}else{$.ajax({url:this.UserFetchUrl,type:"GET",data:F,dataType:"json",timeout:this.UserFetchTimeout,beforeSend:function(){D._requesting=true},success:function(K){D._requesting=false;var H=K.user;if(H){var I={};var J=H.screen_name.toLowerCase();I[J]=H;twttr.User.merge(I,true);if(D._bail){D._bail=false;return false}A.call(B,new twttr.User(J),false)}else{if(D._bail){D._bail=false;return false}A.call(B,null,false)}},error:function(H){D._requesting=false;if(D._bail){D._bail=false;return false}A.call(B,null,false)}});return false}},findByScreenName:function(B,A,C){return this.find({screen_name:B,hovercard:true},A,C)},findById:function(D,A,C){var B=twttr._birdtags[D];if(twttr.is.def(B)){this.findByScreenName(B,A,C)}else{this.find({user_id:D,hovercard:true},A,C)}},merge:function(){twttr.tweeters={};twttr._birdtags={};return function(D,A){var D=D||{};if(A){twttr.merge(twttr.tweeters,D,true)}else{var C=twttr.merge(D,twttr.tweeters,true);twttr.merge(twttr.tweeters,C,true)}for(var B in twttr.tweeters){twttr._birdtags[twttr.tweeters[B].user_id]=B}}}()});twttr.loadTemplate=function(A,B){if(twttr.templates[A]){return twttr.templates[A]}B=B||function(){};$.get("/mustaches/"+A+".html",null,function(D){var C={templates:{}};C.templates[A]=D;twttr.merge(twttr,C,true);B(twttr.templates)},"html")};twttr.loadTemplates=function(A,B){B=B||function(){};A.forEach(function(D,C){twttr.loadTemplate(D,function(E){var F=A.every(function(G){return twttr.is.def(E[G])});if(F){B(twttr.templates)}})})};twttr.SimplePositioner={setPosition:function(H,I,J){var D={inline:false,direction:null,offsets:{inline:{top:0,left:0},below:{top:0,left:0},above:{top:0,left:0}},hasContainer:false};var A=twttr.merge({},D,J,true);var F=F instanceof jQuery?H:$(H);var C=I instanceof jQuery?I:$(I);var E=A.hasContainer?C.position():C.offset();if(!A.inline){var G=this;function B(K){G.clearPosition();switch(K){case"above":G._positionAbove(F,C,E,A.offsets.above,A.hasContainer);break;case"below":G._positionBelow(F,C,E,A.offsets.below);break;case"prefer below":B("below");if((F.offset().top-$(document).scrollTop())+(A.itemHeight||F.height())>$(window).height()){B("prefer above")}break;default:B("above");if((F.offset().top-$(document).scrollTop())<0){B("below")}break}}B(A.direction)}else{this._positionInline(F,C,E,A.offsets.inline);F.css("left",E.left+A.offsets.inline.left)}},clearPosition:function(){$("body").removeClass("loading-hoverer-above")},_positionAbove:function(E,F,C,A,B){E.addClass("position_above").removeClass("position_below").removeClass("position_inline");var G=Math.round(C.top+A.top);var H;if(B){H=F.parents().filter(function(){return $(this).css("position")=="relative"}).outerHeight()}else{var D=$("body");D.addClass("loading-hoverer-above");var I=parseInt(D.css("padding-top"));G+=I>0?12:0;H=D.outerHeight()}E.css({bottom:H-G,left:this._getLeftPosition(E,F,C)+A.left})},_positionBelow:function(A,C,D,E){var B=Math.round(D.top+C.height()+E.top);A.addClass("position_below").removeClass("position_above").removeClass("position_inline");A.css({top:B,left:this._getLeftPosition(A,C,D)+E.left})},_positionInline:function(A,B,D,C){A.css("top",D.top+C.top).addClass("position_inline").removeClass("position_below").removeClass("position_above")},_getLeftPosition:function(A,B,C){return Math.round(C.left+(B.width()/2))}};twttr.unparam=function(F){var E={};var C=F.split("&");for(var B=0,A=C.length;B<A;B++){var D=C[B].split("=",2);E[decodeURIComponent(D[0])]=(D.length==2?decodeURIComponent(D[1].replace(/\+/g," ")):null)}return E};twttr.klass("twttr.Validator",function(A,C,B){this.$field=$(A);this.value=this.$field.val();if(twttr.is.string(this.value)){this.value=jQuery.trim(this.value)}this.fieldName="";if(twttr.is.object(C)){B=C}else{this.fieldName=C}this.valid=B.valid;this.invalid=B.invalid});twttr.Validator.augmentProto({is:function(){var A=null;var B=this;$.each(arguments,function(D,C){if(!C._decorated){C=C()}if(!C(B.value)){A=C;return false}});if(A){this.invalid(this.$field,this.fieldName,A.errorMessage)}else{this.valid(this.$field,this.fieldName)}}});twttr.validate=function(B,A){function C(D,F,E){return new twttr.Validator(D,F,E)}twttr.augmentObject(C,B);return A(C)};$.fn.helpText=function(){this.each(function(){var B=$(this);var A=B.hasClass("help-focusable");if(A){B.mouseup(function(C){if(!B.helpVal()==""){B.select();C.preventDefault()}})}B.focus(function(C){B.setHelpState(false,A)}).blur(function(){if(document.selection){document.selection.empty()}else{getSelection().removeAllRanges()}B.setHelpState(true)});B.setHelpState(true)});return this};$.fn.helpVal=function(){var A=$.trim(this.val());return A==this.attr("title")?"":A};$.fn.setHelpState=function(A,B){this.each(function(){var D=$(this);var C="help-text";if(A){if(!D.helpVal()){D.val(D.attr("title"));D.addClass(C);if(this.hasFocus&&D.hasClass("help-focusable")){D.select()}}else{D.removeClass(C)}}else{D.removeClass(C);if(!D.helpVal()){if(B){D.select()}else{D.val("")}}}})};$.fn.selectOnClick=function(){this.each(function(){var B=$(this);var A=true;B.click(function(){if(A){A=false;this.select()}}).blur(function(){A=true})});return this};twttr.klass("twttr.autocomplete",function(A){var B=this;B.opts=twttr.merge({getInputVal:function(){return B.opts.$input.val()},hoverClass:"hover",delay:350},A);B.cache={};B._clearFakeFocus();B.opts.$input.keydown(function(C){switch(C.keyCode){case 38:B.arrowUp();break;case 40:B.arrowDown();break;case 13:if(!B.hasFakeFocus){return }B.$fakeFocus.click();break;case 27:if(B.opts.$dropdown.is(":visible")){B.hide()}else{return }break;case 9:if(B.opts.$dropdown.is(":visible")){B.hide()}return ;default:B._onInputChange();return }B.keyDownEvent=true;C.stopPropagation();C.preventDefault()}).keypress(function(C){if(C.charCode==0&&(C.keyCode==38||C.keyCode==40)){if(!B.keyDownEvent){if(C.keyCode==38){B.arrowUp()}else{B.arrowDown()}}B.keyDownEvent=false;C.preventDefault()}}).change(function(){B._onInputChange()}).blur(function(){if(!B.hovering){B.hide()}})}).method("arrowDown",function(){if(this.hasFakeFocus){this._setFakeFocus(this.$fakeFocus.next())}else{this._show()}}).method("arrowUp",function(){this._setFakeFocus(this.$fakeFocus.prev())}).method("hide",function(){this._clearFakeFocus();this.opts.$dropdown.hide();this.displayedInputVal=this.opts.getInputVal()}).method("_show",function(){this.displayedInputVal="";this._display();this._setFakeFocus(this.opts.$dropdown.children(":first"))}).method("_clearFakeFocus",function(){this.$fakeFocus=$([]);this.hasFakeFocus=false;this.opts.$dropdown.children().removeClass(this.opts.HoverClass)}).method("_setFakeFocus",function(A){if(A.length>0){this.hasFakeFocus=true;this.$fakeFocus=A;this.$fakeFocus.addClass(this.opts.hoverClass).siblings().removeClass(this.opts.hoverClass)}}).method("_onInputChange",function(){var A=this;setTimeout(function(){A._display()},0)}).method("_display",function(){var B=this;var A=B.opts.getInputVal();if(B.displayedInputVal!=A){B._clearFakeFocus();var D=B.opts.$dropdown.hide().empty();B.displayedInputVal="";var C=B.cache[A];if(C){C.forEach(function(G,F){D.append(B.opts.renderMatch(G,F,C))});D.children().hover(function(){if(B.hasFakeFocus){B._setFakeFocus($(this))}else{$(this).addClass(B.opts.hoverClass)}B.hovering=true},function(){if(!B.hasFakeFocus){$(this).removeClass(B.opts.hoverClass)}B.hovering=false});var E=B.opts.$input.position();D.css({left:E.left,top:E.top+B.opts.$input.outerHeight()-1}).show();B.displayedInputVal=A}else{if(A&&C===undefined){B._fetch(A)}}}}).method("_fetch",function(A){var B=this;clearTimeout(B.timerId);B.timerId=setTimeout(function(){B.cache[A]=false;B.opts.fetchMatches(A,function(C){if(C&&C.length>0){B.cache[A]=C;B._display()}},function(){B.cache[A]=undefined})},B.opts.delay)});var updateCount=function(A,F,D){try{var E=$(A);var C=parseInt(E.html().replace(/[^0-9]/g,""))+F;return setCount(A,C,D)}catch(B){return false}};var setCount=function(A,C,D){try{var E=$(A);if(D){E.fadeOut(D,function(){E.html(numberWithDelimiter(C)).fadeIn(D)})}else{E.html(numberWithDelimiter(C))}return C}catch(B){return false}};var updateFollowingCount=function(A){return updateCount("#following_count",A)};var updateFollowersCount=function(A){return updateCount("#follower_count",A)};twttr.statusUpdateError={decider:function(req){var message;try{message=eval("("+req.responseText+")").error}catch(err){}if(!message){if(req&&req.status==403){message=_("You are not authorized to perform this operation.")}else{message=_("Something is technically wrong. Please try again in a moment.")}}if(message){new ShortNotification().setMessage(message).show();$("#tweeting_button, #update-submit").removeClass("btn-disabled").removeAttr("disabled");$(".char-counter").removeClass("loading")}},revoked:function(){twttr.reload()}};twttr.isReplyOnlyTweet=function(A){var B=/^\@([a-zA-Z0-9_]{1,20})\s*$/;if(A.match(B)){return true}return false};$.fn.isAlertBox=function(){return this.each(function(){var A=$(this);A.find("a").click(function(){var B=$(this).attr("href");$.ajax({type:"POST",dataType:"text",data:{authenticity_token:twttr.form_authenticity_token},url:"/account/clear_user_alert",success:function(){A.slideUp("fast");window.location=B}});return false})})};$.fn.isUpdateForm=function(){return this.each(function(){var O=$(this);var H=O.find("textarea").isCharCounter();var A=O.find("#tweeting_button, #update-submit");var B=O.find("label.doing");var J=O.find(".char-counter");var F=/^\s*@(\w+)\W+/;var D=/^\s*[dD][mM]?\s+(?:(\w+)\W+)?/;var I=O.find(".places-nearby");var E;var N=false;function M(){var P=H.val();if(twttr.isReplyOnlyTweet(P)){location.href=RegExp.$1;return false}if(P.length>140){alert(_("That tweet is over 140 characters!"));return false}else{if(P.replace(/s\*/g,"")==""){return false}else{A.addClass("btn-disabled").attr("disabled",true);return true}}}A.bind("click",function(Q){var P=$(this);Q.preventDefault();if(!P.hasClass("btn-disabled")){P.closest("form").submit()}});function K(P){if(twttr.is.def(P.users)){twttr.User.merge(P.users,true)}A.removeClass("btn-disabled").removeAttr("disabled");var Q=P.text;if(P.messageForFlash){(new ShortNotification()).setMessage(P.messageForFlash).show()}else{if(P.errorForFlash){(new InfoNotification()).setMessage(P.errorForFlash).show()}else{if($("body").attr("id")!="home"){(new ShortNotification()).setMessage(_("Your status has been updated!")).show()}else{if(P.status_li){$("#timeline tr.hentry:first").removeClass("latest-status");$.Timeline.prepend(P.status_li)}}setCount("#update_count",P.status_count,250);if(P.latest_status){updateTimeAgo();$("#latest_status").html(P.latest_status).isCurrentStatus(true)}$("#place_content").trigger("tweet")}}H.val("").focusEnd();$("#in_reply_to_status_id").val("");$("#in_reply_to").val("");C("");H.trigger("change");J.removeClass("loading");if(document.all){J.text("140")}else{J.css("color","#ccc")}}function C(Q){var P;if(P=Q.match(D)){B.html(P[1]?_("Direct message %{person}:",{person:P[1]}):_("Direct message:"));A.val(_("send"))}else{if(P=Q.match(F)){B.html(_("Reply to %{screen_name}:",{screen_name:P[1]}));A.val(_("reply"))}else{B.html(_("What’s happening?"));A.val(_("update"))}}}H.bind("keyup blur focus",function(){C($(this).val())});O.submit(function(){if(M()){twttr.googleAnalytics("/status/update/refresh");var T=H.val();E={authenticity_token:twttr.form_authenticity_token,status:T,twttr:true};var Q=window.location.href;if($("body").attr("id")=="home"&&((Q.indexOf("page=")==-1)||Q.match(/page=1(?!\d)/))){E.return_rendered_status=true}var P=$("#in_reply_to_status_id").val();var S;if(P&&(S=T.match(F))){if(S[1]==$("#in_reply_to").val()){E.in_reply_to_status_id=P;twttr.countAdsReplies&&twttr.countAdsReplies(P)}}var R=$("#source").val();if(R){E.source=R}E.lat=$("#lat").val();E.lon=$("#lon").val();E.place_id=$("#place_id").val();E.display_coordinates=$("#display_coordinates").val();G(E)}return false});function G(P){$.ajax({type:"POST",dataType:"json",url:"/status/update",data:P,beforeSend:function(){J.addClass("loading");if(document.all){J.html("&nbsp;&nbsp;&nbsp;&nbsp;")}else{J.css("color","transparent")}},success:K,error:function(Q){twttr.statusUpdateError.decider(Q)}})}try{H.focusEnd()}catch(L){}})};$.fn.isLocationTrends=function(){var A=$("div#trends").meta()["global_id"];return this.each(function(){var I=$(this);var G=$("#location_menu");var B=$("#change_location");var L=$("#trends .trends-links");var E=new twttr.AttachedDialog({handle:$("#tt_menu span"),content:$("#local_trends"),width:"545px",gravity:"east",weight:"top",modal:false});$(document).click(function(N){var M=$(N.target);if(E.opened&&!M.parents(".modal, .trends-links li").length){E.close()}});E.find("#location_done").click(function(){E.close();B.removeClass("active");if(!F()){D(A)}});var K=false;if($("#local_trends_notice").length){setTimeout(function(){(K=new twttr.AttachedDialog({handle:$("#tt_menu span"),content:$("#local_trends_notice").parent(),width:"186px",gravity:"east",weight:"top",openonload:true,closeButton:true,modal:false})).bind("close",function(){D(A);return false}).open();K.find("#location_notice_set").click(function(){D(A);K.close();E.open();return false})},500)}function H(P){E.find("a.active-parent").removeClass("active-parent");var M=$(P).attr("parents");if(M){var N=M.split(" ");for(var O=0;O<N.length;O++){$("."+N[O]).addClass("active-parent")}}}function F(){return G.find("em")}function D(M){if(!M){M=0}$.ajax({type:"POST",url:"/users/update_trend_location_id",data:{authenticity_token:twttr.form_authenticity_token,trend_location_id:M},success:function(){L.append($("<em></em>").append(M))}});return false}B.click(function(){E.toggle();if(K){K.close()}B.toggleClass("active");return false});E.find("a").click(function(){var M=$(this);var N=M.attr("id").replace("trend_loc_","");E.find(".active").removeClass("active");E.find("#trend_loc_"+N).parent().addClass("active");H(M);if(N){$.ajax({type:"GET",dataType:"json",url:"/users/location_trends",data:{twttr:true,trend_location_id:N},beforeSend:function(){$("#trends_loading").show()},success:function(O){L.hide();L.fadeIn();$("#trends_loading").hide();if(O){var P=[];L.html("");$.each(O.trends,function(){var Q=this;var T=Q.name;var S=$('<a class="search_link" href="/search?q='+encodeURIComponent(Q.query)+'"name="'+T+'">'+T+"</a>");S.isSearchLink();if(Q.promoted){twttr.formatPromotedTrend(S,Q.promoted)}var R=Q.description;var U=$("<li></li>");if(R){U.append(S).append($("<em></em>").append(R))}else{U.append(S)}L.append(U)});G.html(O.location["name"]);loadTrendDescriptions();D(O.location["id"])}else{}},error:function(O){$.debug("error: "+O.responseText)},complete:function(){$("#trends_loading").hide()}})}return false});var C=F();if(C){var J=$("#trend_loc_"+C);J.parent().addClass("active");H(J)}})};$.fn.isDirectMessageForm=function(){return this.each(function(){var L=$(this);var D=L.find("textarea").isCharCounter();var B=/^\s*[dD][mM]?\s+([A-Za-z0-9]{1,20})[^A-Za-z0-9]/;var F=L.find("select");var A=L.find("#dm-submit");var E=L.find(".char-counter");var G="";A.attr("disabled","disabled").addClass("btn-disabled");try{D.focusEnd()}catch(I){}function C(N){if(F.val()){return }if((matches=N.match(B))&&matches[1]&&(G!=matches[1])){var M=true;F.find("option").each(function(){if(this.innerHTML.toLowerCase()==matches[1].toLowerCase()){F.val(this.value);M=false;return false}});if(M){F.append(_('<option value="%{screen_name}">%{screen_name}</option>',{screen_name:matches[1]}));F.val(matches[1])}G=matches[1]}}A.click(function(M){var P=D.val();var N=P.match(B);var O=F.find("option[value="+F.val()+"]");if(N&&N[1]&&N[1].toLowerCase()==O.text().toLowerCase()){D.val(P.replace(B,""))}return true});F.change(function(M){D.trigger("update",M)});D.bind("keyup blur focus",function(M){C($(this).val());D.trigger("update",M)});function H(M){(new ShortNotification()).setMessage(M.messageForFlash).show();if($("body").attr("id")=="sent"){$.Timeline.prepend(M.direct_message_li)}D.val("");F.val("");G="";D.trigger("change");E.removeClass("loading");if(document.all){E.text("140")}else{E.css("color","#ccc")}}if(F.length>0){function J(){if(F.length&&(F.find("option").length==0)){$.ajax({type:"GET",dataType:"json",url:"/direct_messages/recipients_list",data:{twttr:true},success:function(N){if(N){var M=[];$.each(N,function(){var O=this;if((O.length>1)&&O[0]&&O[1]){M.push('<option value="'+O[0]+'">'+O[1]+"</option>")}});F.html('<option value="" selected="selected"></option>'+M.join(""))}},error:function(M){$.debug("error: "+M.responseText)}})}}var K=$("body").attr("id");if(K=="direct_messages"||K=="inbox"||K=="sent"){J()}L.bind("loadrecipients",null,function(M){J()});L.submit(function(){twttr.googleAnalytics("/direct_messages/create/refresh");var N=D.val();var M={authenticity_token:twttr.form_authenticity_token,text:N,"user[id]":F.val(),twttr:true};$.ajax({type:"POST",dataType:"json",url:"/direct_messages/create",data:M,beforeSend:function(){E.addClass("loading");if(document.all){E.text("")}else{E.css("color","transparent")}},success:H,error:function(O){twttr.statusUpdateError.decider(O)}});return false})}})};$.fn.isTimelineTabLink=function(){return this.each(function(){var A=$(this);A.click(function(B){document.body.id=A.meta().dispatch_action}).bind("loading",null,function(B){A.parent("li").addClass("loading")}).bind("loaded",null,function(B){A.parent("li").removeClass("loading")}).bind("aborted",null,function(B){A.parent("li").removeClass("loading")})})};$.fn.isEmbeddedMediaExpander=function(){return this.livequery(function(){var A=$(this);var B=A.parent().find(".embedded_media");A.click(function(){B.slideToggle("normal",function(){if(A.hasClass("embedded_media_icon_active")){A.removeClass("embedded_media_icon_active")}else{A.addClass("embedded_media_icon_active")}})})})};twttr.TEXT_AREA_CHANGE_EVENTS="blur focus change "+($.browser.mozilla?"paste input":"keyup");$.fn.isCharCounter=function(){return this.each(function(){var A=true;var F=$(this);var I=F.closest("form");var E=I.find(".char-counter");var H=I.find("#tweeting_button, #update-submit, #dm-submit");var D=I.find("select");function C(){H.addClass("btn-disabled").attr("disabled","disabled");A=true}function G(){if(A){H.removeClass("btn-disabled").removeAttr("disabled");A=false}}function B(){var K=F.val();var J=K.length;E.html(""+(140-J));if(J<=0){E.css("color","#cccccc");C()}else{if(J<=140&&(D.length==0||D.val())){G()}else{C()}if(J>130){E.css("color","#d40d12")}else{if(J>120){E.css("color","#5c0002")}else{E.css("color","#cccccc")}}}}F.bind(twttr.TEXT_AREA_CHANGE_EVENTS,function(J){B()});D.change(function(J){B()});F.focus()})};$("body.profiles #user_description").each(function(){var F=$(this);var D=F.closest("td").find(".char-counter");var C=parseInt(D.text(),10);var B={original:[C,D.css("color")],warning:[20,"#5c0002"],error:[10,"#d40d12"]};function E(){return C-F.val().length}function A(){var G=E();D.html(G);if(G<=B.error[0]){D.css("color",B.error[1])}else{if(G<=B.warning[0]){D.css("color",B.warning[1])}else{D.css("color",B.original[1])}}}A();F.bind(twttr.TEXT_AREA_CHANGE_EVENTS,A);F.closest("form").submit(function(G){if(E()<0){(new ShortNotification()).setMessage(_("Bio is too long")).show();G.preventDefault();return false}})});$.fn.isCurrentStatus=function(A){return this.each(function(){var C=$(this);var J=$("#latest_status");var E=C.find("#latest_text");var G=E.find(".status-text");var I=E.find(".retweet-source-user");var H=$(this).parent("#update_notifications");var B=J.find("strong");$("#latest_text_full, #latest_text").click(function(){$("#latest_text_full, #latest_text").toggle()});E.css("color","transparent");var F=$("#latest_text_full .status-text").text();if(I.length>0){G.append(F.escapeHTML())}else{G.html("<strong>"+_("Latest: ")+"</strong>").append(F.escapeHTML())}E.css("color","");if(A){var D=J.find("span, strong");D.each(function(){$(this).data("old_color",$(this).css("color")).animate({color:"#333"},500)});clearTimeout(twttr.timeouts.latest_status_timeout);twttr.timeouts.latest_status_timeout=setTimeout(function(){D.each(function(){$(this).animate({color:$(this).data("old_color")},1500,function(){$(this).css("color","")})})},1500)}})};function initializeTimeline(){$.Statuses.initialize($("#timeline"))}function getListItemFromChild(A){return A.parents(".hentry:first")}function getStatusIdFromListItem(B){var A=/status_(.*)/i.exec(B.attr("id"));return(A)?A[1]:null}function getScreenNameFromListItem(B){var A=/u-([A-Za-z0-9_]+)/i.exec(B.attr("class"));return(A)?A[1]:null}function getShareIdFromListItem(B){var A=/(.)* s-([\d]+)(.)*/i.exec(B.attr("class"));return(A)?A[2]:getStatusIdFromListItem(B)}function timelineRefresh(E,A){var C=$("#results_update");if(C.length==0){return }if(!E||(("home,search,replies,inbox".indexOf(E)==-1)&&!E.match(/^\/?list/))){return }if(!A){A=($("#results_update").attr("href").replace(/^\//,"")||window.location.hash.replace(/^#/,"")||E).replace(/^([^\/])/,"/$1")}A=A.replace(/\/?list\//,"/");var B,D=$("#new_results_notification").meta();if(E==="search"){B=D.search}else{B=D.timeline}$("#new_results_notification").data("count",0);if(page.timelineRefresher){if(page.timelineRefresher.dispatchAction==E){return }else{page.timelineRefresher.stop()}}page.newResults=null;page.timelineRefresher=new Occasionally(B.delay*1000,B.max_delay*1000,function(){var F=false;if($("ol#timeline").length){$.ajax({method:"GET",dataType:"json",url:A,data:{since_id:getMaxStatusIdFromTimeline(),refresh:true},success:function(G){processTimelineRefresh(G,E)},error:function(){if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}}})}},function(){return page.newResults},B.decay);page.timelineRefresher.dispatchAction=E;page.timelineRefresher.start()}function getMaxStatusIdFromTimeline(){var A=0;$("ol#timeline > li").each(function(){var B=parseInt(this.id.replace(/^[A-Z_]+/gi,""));if(A<B){A=B}});return A}function processTimelineRefresh(J,D){if(twttr.is.def(J.users)){twttr.User.merge(J.users)}var G=$("#new_results_notification").meta().timeline;var K=$("<div>"+J["#timeline"]+"</div>");var A=$("#content ol#timeline");K.find("#timeline > li").each(function(){if(A.find("li#"+this.id).length){$(this).remove()}});var F=K.find("ol > li");var C=F.length;var E=($("#new_results_notification").data("count")||0)+C;if(C){A.prepend(F.addClass("buffered"));K.remove();A.find("li.buffered:gt("+(G.max_refresh_size-1)+")").remove();var B={results_count:numberWithDelimiter(E),username:getSessionUserScreenName()};var H=$("#results_update").is(":visible")?"":' style="display:none;"';var I='<a id="results_update" class="minor-notification" href="/'+D+'" accesskey="n"'+H+">";if(D=="inbox"){I+=((E==1)?_("1 new message."):_("%{results_count} new messages.",B))}else{if(D=="replies"){I+=((E==1)?_("1 new mention of @%{username}.",B):_("%{results_count} new mentions of @%{username}.",B))}else{if(D=="search"){I+=((E==1)?_("1 new tweet since you started searching."):_("%{results_count} new tweets since you started searching.",B))}else{I+=((E==1)?_("1 new tweet."):_("%{results_count} new tweets.",B))}}}I+="</a>";$("#results_update").replaceWith(I);$("#results_update").click(function(){$("#content ol#timeline > li.buffered").addClass("unbuffered").removeClass("buffered");$("#content ol#timeline > li.last-on-refresh").removeClass("last-on-refresh");$("#content ol#timeline > li.unbuffered:last").addClass("last-on-refresh");updateTimeAgo();$("#content ol#timeline > li.unbuffered").removeClass("unbuffered");$("#results_update").hide();addCountToDocumentTitle();$.Timeline.triggerPageHeightChangedEvent();$.Timeline.triggerTimelineChanged();$("#new_results_notification").data("count",0);return false});$("#new_results_notification").data("count",E);$("#results_update:hidden").slideDown("normal",function(){$.Timeline.triggerPageHeightChangedEvent();var L=$(this);if(twttr.is.def(twttr.HOVERCARD)){twttr.HOVERCARD.reposition(L.get(0).offsetHeight+parseInt(L.css("margin-top")))}});addCountToDocumentTitle(E);if(G.interrupt&&page.timelineRefresher){page.timelineRefresher.stop()}}else{K.remove()}page.newResults=(C>0)}$(document).ready(function(){$().Page();twttr.setDefaultBucket();initializeTimeline();$("#pagination #more").isMoreButton();$("body").bind("ajaxSuccess",twttr.setupRetweetTips);twttr.setupRetweetTips();$("span.byline a").tipsy({gravity:"n"});$("#content #trend_description img").tipsy({gravity:"s"});$("a.promoted-trend").promotedTrendsTipsy()});$.fn.promotedTrendsTipsy=function(){return this.each(function(){var E=$(this);var A=E.find("span");var D=E.attr("data");var B=JSON.parse(D);var C=_("Promoted by %{name}",{name:B.promoted_content["user"]["name"]});A.attr("title",C);A.tipsy({gravity:"n",html:true,additionalCSSClass:"garuda-tipsy-container",showTimeout:300})})};twttr.augmentObject(twttr,{RETWEETING_BACKGROUND_COLOR:"#ffffe5",_bucket:null,setDefaultBucket:function(){this._bucket=parseInt(page.sessionUserId)%2},getBucket:function(){return this._bucket},setBucket:function(A){this._bucket=A},applyTipsy:function(A,C,B){if(!A.data("tipsy_applied")){A.data("tipsy_applied",true);A.attr("title",A.attr("title")+C);A.tipsy(B)}},isRetweetTimeline:function(){return !!(location.hash&&location.hash.match(/retweet/))},setupRetweetTips:function(){$("span.status-body span.shared-content a.screen-name, div.shared-by-avatar-tiles a.profile-pic img.photo").each(function(){var A=$(this);if(A.data("tipsy_applied")||!twttr.isRetweetTimeline()){return }var B="left-align";var C="";if($("body#home").length>0&&!A.hasClass("you")){var C=_('<div class="retweet_tip_tip">Tip: To hide/show retweets from this user, click on their username and look for the retweet setting <div class="retweet-icon"></div></div>');B+=" retweet-tooltip"}twttr.applyTipsy(A,C,{gravity:"l",hideTimeout:10000,additionalCSSClass:B})});$("span.big-retweet-icon").each(function(){if($("body#profile").length==0){twttr.applyTipsy($(this),"",{gravity:"s",hideTimeout:10000})}else{$(this).attr("title","")}})},getStatusBodyParent:function(A){return A.parents(".status-body").parent()},setRetweetingStyles:function(B,E,D){var A=getListItemFromChild(B);var C=twttr.getStatusBodyParent(B);C.append("<span class='retweeting loading'>"+E+"</span>");A.addClass("no-hover");if($("body.status").length==0){A.css("background-color",twttr.RETWEETING_BACKGROUND_COLOR)}},unsetRetweetingStyles:function(B){var A=getListItemFromChild(B);var C=twttr.getStatusBodyParent(B);A.removeClass("no-hover");C.find(".retweeting.loading").remove()},animateStatusReplacement:function(B,D){var C=getListItemFromChild(B);var F=$(D.status_li);F.hide();C.after(F);if(C.hasClass("latest-status")){F.addClass("latest-status")}var A=F.height();var E=C.height();F.remove().show().height(E);if($("body.status").length==0){F.css("background-color",twttr.RETWEETING_BACKGROUND_COLOR)}C.replaceWith(F);if(A!=E){F.animate({height:A},500,function(){F.css("height",null);twttr.animateStatusColorChange(F)})}else{twttr.animateStatusColorChange(F)}if(D.latest_status){$("#latest_status").html(D.latest_status).isCurrentStatus(true)}},animateStatusColorChange:function(A){A.animate({backgroundColor:"#FFF"},1500,function(){A.css("background-color",null)})}});$.fn.Page=function(){var A=$('meta[name="session-user-screen_name"]:first').get(0);var D=$('meta[name="page-user-screen_name"]:first').get(0);var B=$('meta[name="session-userid"]:first').get(0);var C=A&&D&&A.content==D.content;if(typeof (page)=="undefined"){page={}}page=$.extend(page,{timeline:null,sessionUserScreenName:(A?A.content:null),sessionUserId:(B?B.content:null),pageUserScreenName:(D?D.content:null),loggedIn:$('meta[name="session-loggedin"][content="y"]').length>0,hideUnfavorited:C,isTimelineChange:false,currentTimelineChange:{},$oldTimelineLink:""})};$.Statuses={initialize:function(A){if(page.loggedIn){var B=$(A).find(".hentry");$.each($.Statuses.actions,function(){var C=this;C.apply(B)})}},actions:{isTweet:function(){this.livequery(function(){var A=$("body#show.status").length>0;var B=$("body#profile").length>0;if(!A&&!B){var C=$(this).find("a.hashtag");C.isSearchLink(SEARCH_CALLBACKS.hashtagLink)}})},isHoverable:function(){if($("body.ie,body.ie6").get(0)){this.livequery(function(){var A=$(this);A.hover(function(){A.addClass("hover")},function(){A.removeClass("hover")})})}},isFavoriteable:function(){$(".fav-action").live("click",function(){var D=$(this);if(D.hasClass("blocked")){return false}var B=D.parents(".hentry:first");var E=B.attr("id").replace(/status_/,"");var C=D.hasClass("fav")?"destroy":"create";twttr.googleAnalytics("/favorites/"+C+"/refresh/"+E);function A(){var F=D.hasClass("fav");D.removeClass(F?"fav":"non-fav").addClass(F?"non-fav":"fav").attr("title",(F?_("favorite this tweet"):_("un-favorite this tweet")))}$.ajax({type:"POST",dataType:"json",url:"/favorites/"+C+"/"+E,data:{authenticity_token:twttr.form_authenticity_token},beforeSend:function(){A();D.addClass("blocked")},complete:function(){D.removeClass("blocked")}});return false},this)},isReplyable:function(){$(".reply").live("click",function(){var E=$(this);var C=E.parents(".hentry:first");var G=C.attr("id").replace(/status_/,"");var A=C.attr("class").match(/u-([A-Za-z0-9_]+)/);var B=A[1];if(!B){alert(_("Whoops! Something went wrong. Please refresh the page and try again!"));return }if(C.hasClass("direct_message")){var F=$("#text");twttr.googleAnalytics("/direct_messages/reply/"+B+"/"+G);var D=$("#direct_message_user_id");if(!D.find("option[text='"+B+"']").attr("selected",true).length){D.append('<option value="'+B+'" selected="selected">'+B+"</option>")}F.trigger("update");$("#text").focusEnd()}else{if(C.hasClass("status")||C.hasClass("share")){var F=$("#status");twttr.googleAnalytics("/reply/"+B+"/"+G);if(F.size()){F.val("@"+B+" "+F.val().replace(RegExp("@"+B+" ?","i"),"")).trigger("update");$("#status").focusEnd();$("#in_reply_to_status_id").val(G);$("#in_reply_to").val(B);window.scroll(0,0)}else{window.location=E.find("a").attr("href");return false}}}window.scroll(0,0);return false},this)},isRetweetable:function(){$(".retweet-link").live("click",function(A){new RetweetInlineForm().show({targetNode:$(this)});A.preventDefault()},this)},isDeleteable:function(){$(".del").live("click",function(D){var C=$(this);var A=C.parents(".hentry:first");var F=A.attr("id").replace(/[^\d]*/,"");var E=A.hasClass("latest-status");var B;if(A.hasClass("direct_message")){B="/direct_messages/destroy"}else{B="/status/destroy"}if(confirm(_("Sure you want to delete this tweet? There is NO undo!"))){twttr.googleAnalytics(B+"/refresh/"+F);$.ajax({type:"POST",url:B+"/"+F,data:{authenticity_token:twttr.form_authenticity_token,latest_status:E},dataType:(B=="/status/destroy"?"json":null),beforeSend:function(){A.fadeOut(500);updateCount("#update_count",-1,250)},success:function(G){A.remove();if(B=="/status/destroy"){if(E){twttr.processJson(G);updateLatest()}}setCount("#update_count",G.status_count)},error:function(G){A.fadeIn(0);var H=_("Whoops! Something went wrong. Please try again!");if(G&&G.status==403&&G.responseText!=""){H=G.responseText}(new InfoNotification()).setMessage(H).show()}})}D.preventDefault()},this)},isUndoable:function(){$(".undo").live("click",function(){var C=$(this);var B=C.parents(".hentry:first");var A=B.attr("id").replace(/status_/,"");$.ajax({type:"POST",url:"/statuses/"+A+"/retweet",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,controller_name:page.controller_name,action_name:page.action_name,user_screenname:page.pageUserScreenName},dataType:"json",beforeSend:function(){C.attr("title","").removeClass("undo");twttr.setRetweetingStyles(C,_("Undoing..."))},success:function(D){if(D.status_li){twttr.animateStatusReplacement(C,D)}else{B.fadeOut(500,function(){var E=$("ol#timeline .hentry:visible:first");if(!E.hasClass("share")){E.addClass("latest-status")}})}(new InfoNotification()).setMessage(_("Your followers will no longer see the tweet as retweeted by you.")).show()},complete:function(){twttr.unsetRetweetingStyles(B)}});return false},this)},isMappable:function(){$(".geo_pin").live("click",function(){var B=jQuery(this);var A=B.next();var C=B.position();A.css({left:C.left-25,bottom:C.top+20});A.show();A.find(".map_close").click(function(){A.hide();return false})},this)}}};$.Timeline={prepend:function(A){$("#timeline").prepend(A);$.Timeline.triggerTimelineChanged()},append:function(A){$("#timeline").append(A);$.Timeline.triggerTimelineChanged()},registerTimelineEvent:function(A){$("body").bind("timeline-changed",A)},unregisterTimelineEvent:function(A){$("body").unbind("timeline-changed",A)},triggerTimelineChanged:function(){$("body").trigger("timeline-changed")},registerPageHeightChangedEvent:function(A){$("body").bind("page-height-changed",A)},unregisterPageHeightChangedEvent:function(A){$("body").unbind("page-height-changed",A)},triggerPageHeightChangedEvent:function(){$("body").trigger("page-height-changed")}};function basicMoreButtonHandler(A){return function(){var C=$(this);C.blur();if(C.hasClass("loading")){return false}var B=C.attr("href");var D=$("#more").text();$.ajax(jQuery.extend({type:"GET",url:B,dataType:"json"},A));return false}}$.fn.isMoreButton=function(){return this.live("click",basicMoreButtonHandler({beforeSend:function(){$("#timeline li:last-child").addClass("last-on-page");$("#more").addClass("loading").html("")},success:function(A){updateTimeAgo();if(twttr.is.def(A.users)){twttr.User.merge(A.users)}$("#timeline").append($(A["#timeline"]).find(".hentry"));$("#pagination").html(A["#pagination"]);page.retainTimeline=true;if(window.onPageChange){onPageChange()}page.retainTimeline=null;$.Timeline.triggerTimelineChanged()},error:function(){$("#timeline li:last-child").removeClass("last-on-page");$("#more").removeClass("loading").text(_("more"));(new ShortNotification()).setMessage(_("Whoops! Something went wrong. Please try again!")).show()}}))};$(function(){var request=function(data,success){return function(){var self=this;var $this=$(this);var notification=(new ProgressNotification()).setProgressMessage($this.attr("progress")).setCompletedMessage($this.attr("completed"));$.ajax({type:$this.attr("method"),dataType:"json",url:$this.attr("href")||$this.attr("action"),data:data.apply(self),success:function(){notification.done();if(success){success.apply(self)}},beforeSend:function(){twttr.loading();notification.show()},complete:twttr.loaded});return false}};$("form.restful").livequery("submit",request(function(){return $(this).serializeArray()},function(){$(this).trigger("submitted")}));$("a.restful").livequery("click",request(function(){return eval("("+$(this).attr("data")+")")}))});function updateLatest(){var A=$("#latest_status");if(A.length){A.isCurrentStatus(true)}$("#timeline li:first").addClass("latest-status")}function setTitleAndHeading(H){var Q=$("#timeline_heading h1");var P=$("#timeline_heading h2");var H=H||$("body").attr("id");var C=h(page.query);var F=h(page.prettyQuery);var J=getSessionUserScreenName();var B=$('meta[name="page-user-screen_name"]:first').get(0)||$('meta[name="page-user-screen_name"]').get(0);if(B){var M=B.content}if(!twttr.titles_and_headings){var N={user:J,name:page.user_fullname,pageUser:M};twttr.titles_and_headings={home:{title:_("Home"),heading:_("Home")},replies:{title:("@"+J),heading:_("Tweets mentioning @%{user}",N)},favorites:{title:_("Your Favorites"),heading:_("Your Favorites")},inbox:{title:_("Direct Messages"),heading:_("Direct messages sent only to you")},direct_messages:{title:_("Direct Messages"),heading:_("Direct messages sent only to you")},sent:{title:_("Sent Direct Messages"),heading:_("Direct messages you've sent")},retweets_by_others:{title:_("Retweets",N),heading:"&nbsp;"},profile_favorites:{title:_("%{pageUser}'s Favorites",N),heading:_("%{pageUser}'s Favorites",N)},profile:{title:_("%{name} (%{pageUser}) on Twitter",N),heading:null}}}var I,E='<li class="name-search-link"><a href="#">'+_("Search for users &raquo;")+"</a></li>";if(page.searchError!=undefined){I={title:page.searchError,heading:("<ul>"+E+"</ul>"+page.searchError)}}else{if(H=="search"){I={title:_("Search - %{query}",{query:F})};var G=$("#side #saved_searches ul.sidebar-menu li.active");var O;if(G.length){var K=G.attr("id").replace("ss_","");O='<a href="/saved_searches/destroy/'+K+'" title="'+F+'" _query="'+C+'" class="delete-search-link">'+_("Remove this saved search")+"</a>"}else{O='<a href="/saved_searches/create" class="save-search-link" title="'+F+'" _query="'+C+'" _place_details="'+h(page.placeDetails)+'" _place_map_link="'+h(page.placeMapLink)+'">'+_("Save this search")+"</a>"}var D=($("li.status").length>0);if(D){E='<ul class="has-saved-search"><li>'+O+"</li>"+E+"</ul>"}else{E="<ul>"+E+"</ul>"}if(D){I.heading=E+_("Real-time results for <b>%{query}</b>",{query:F})}else{I.heading=E+_("No real-time results for <b>%{query}</b>",{query:F})}}else{I=twttr.titles_and_headings[H]}}if(I){var L=(H=="profile")?"":"Twitter / ";setDocumentTitle(L+I.title);P.remove();if(I.heading){Q.html(I.heading);Q.parent("div").show()}else{Q.parent("div").hide()}var A=$("#geo_place_details");if(page.placeDetails){A.text(page.placeDetails);$('<span class="geo_map_link_separator">|</span><a target="_blank" href="'+h(page.placeMapLink)+'">map</a>').appendTo(A);A.show()}else{A.hide()}if(H=="search"){Q.find(".save-search-link").isSaveSearchLink().end().find(".delete-search-link").isRemoveSearchLink()}$("#heading .name-search-link a").attr("href","/search/users?q="+encodeURIComponent(page.query))}}function loadTrendDescriptions(){if(!page.trendDescriptions){page.trendDescriptions={}}$("#trends a").each(function(){var B=$(this);var D=B.parent().find("em");if(D.length){var C=B.text();var E=D.text().replace(new RegExp(C.replace(/([^\w])/gi,"\\$1"),"gi"),"<strong>"+C+"</strong>");var F=B.attr("title").length?B.attr("title"):B.attr("name");page.trendDescriptions[F]=[C,E]}});var A=page.trendDescriptions[page.query];if(A){$("#trend_info").hide();$("#trend_description span").text(_("%{trend} is a popular topic on Twitter right now.",{trend:A[0]}));$("#trend").text(_("%{trend}",{trend:A[0]}));$("#trend_description p").html(A[1]);$("#trend_description").show()}else{$("#trend_description").hide();$("#trend_info").show()}(A&&A[1].length>0)?$(".trenddesc").show():$(".trenddesc").hide()}$.fn.isSaveSearchLink=function(){return this.each(function(){var A=$(this);var B=$("#saved_searches");var C=B.find("ul.sidebar-menu");A.click(function(){if(C.find("li").length>=10){(new InfoNotification()).setMessage(_("You can only save ten searches. To remove a saved search, select the search and click <strong>remove this saved search</strong>.")).show();return false}var D=A.attr("title");var F=A.attr("_query")||D;var E=$('<li><a href="/search?q='+encodeURIComponent(F)+'" class="search-link" title="'+h(D)+'" _query="'+h(F)+'" _place_details="'+h(A.attr("_place_details"))+'" _place_map_link="'+h(A.attr("_place_map_link"))+'"><span>'+h(D)+"</span></a></li>");E.find("a").isSearchLink(SEARCH_CALLBACKS.savedSearchLink);E.fadeOut(1,function(){C.append(E);E.fadeIn(100)});if(B.hasClass("collapsed")){B.trigger("expand")}B.fadeIn();$("#side ul.sidebar-menu li").removeClass("active");$("#side #custom_search").removeClass("active");E.addClass("active");$.ajax({type:"POST",dataType:"json",url:"/saved_searches/create",data:{q:F,authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.replaceWith('<span class="loading">'+_("Save this search")+"</span>")},success:function(G){E.attr("id","ss_"+G.id);setTitleAndHeading("search")},error:function(G){(new InfoNotification()).setMessage(G.responseText).show();E.remove()}});return false})})};$.fn.isRemoveSearchLink=function(){return this.each(function(){var A=$(this);var C=A.attr("_query");var B=A.attr("href");A.click(function(){var D=$("#side #saved_searches li a[_query='"+C+"']").parent("li");D.fadeOut(100,function(){D.remove();var E=$("#saved_searches ul.sidebar-menu a");if(E.length==0){$("#saved_searches").hide()}setTitleAndHeading("search");$("#side #custom_search").addClass("active")});$.ajax({type:"POST",url:B,data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.replaceWith('<span class="loading">'+_("Remove this saved search")+"</span>")},error:function(){(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show()}});return false})})};function showSearchHelpText(){if($("#timeline li").length==0){var A=[_("Try a more general search."),_("Try using different words.")];var B='<div class="no-results">'+_("Suggestions:")+"<ol>";for(var C=0;C<A.length;C++){B+="<li>"+A[C]+"</li>"}B+="</ol></div>";setTimeout(function(){$("#timeline_heading").after(B)},1)}else{if($("#pagination a.more").length==0){$("#pagination").empty().html('<p class="no-more-tweets">'+_("Older tweets are temporarily unavailable.")+"</p>")}}}function onPageChange(A){var C=$("body").attr("id");if(C!="search"){$("#sidebar_search_q").val("").blur()}else{twttr.updateLocation("search?q="+encodeURIComponent(page.query))}setTitleAndHeading(C);loadTrendDescriptions();if(C=="search"&&page.searchError==undefined){showSearchHelpText()}page.searchError=undefined;if(!A){if(!page.retainTimeline){$("#results_update").hide()}$(".no-results").remove();$("#new_results_count").html("0")}if(!$("body").hasClass("front")){$(".in-page-link").isInPageLink();$(".in-page-list-link").isListInPageLink();try{$(".in-page-list-label").isListInPageLabel();$(".in-page-label").isInPageLabel()}catch(B){}}if(C=="list"||C=="list_show"){C=(window.location.hash||window.location.pathname).replace(/^#/,"").replace(/^([^\/])/,"/$1");if(C.indexOf("/list")!=0){C="/list"+C}}twttr.trackPageView(C,(page.query&&page.query.length>0?page.query:null),A?null:"/ajax")}function initializePage(A){if(("home".indexOf(A)==-1)&&($("body#list_show").length==0)){twttr.updateLocation(A)}initializeSidebar();$("#side form#sidebar_search").isSearchForm();$("#side .collapsible").isCollapsibleMenu();onPageChange(true);timelineRefresh(A);$(".saved-search-links li a").isSearchLink(SEARCH_CALLBACKS.savedSearchLink);$(".trends-links li a").isSearchLink(SEARCH_CALLBACKS.trendLink);$("#dm_tabs a, #retweet_tabs a").isTimelineTabLink();$("div.bulletin").isBulletin();$("ul.sidebar-menu a").isSidebarTab();highlightSearchTerms()}function highlightSearchTerms(){function C(F,K){var J=document.createElement("div");var E=F.childNodes;for(var G=0,H=E.length;G<H;++G){C(E[G],K)}if(F.nodeType==3){if(!F.nodeValue.match(K)){return }var L=F.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(K,"<em>$1</em>");J.innerHTML=L;var D=F.parentNode;var I=J.lastChild;D.replaceChild(I,F);while(J.firstChild){D.insertBefore(J.firstChild,I)}}}var A={};function B(D){if(A[D]){return A[D]}A[D]=new RegExp("("+D+")","gi");return A[D]}$("#timeline > li .entry-content").livequery(function(){if(location.hash.match(/search\?q=(.+)/)){var E=decodeURIComponent(RegExp.$1);var D=B(E);C(this,D)}})}function initializeSidebar(){if($("#side ul.sidebar-menu li.active").length==0){var B=$("body").attr("id");var A=null;if(B=="search"){B=page.query;if(B){var C=$.grep($("#side ul.sidebar-menu li a"),function(D){return $(D).attr("_query")==page.query})[0];if(C){A=$(C).parent("li")}else{$("#side #custom_search").addClass("active")}}}else{if(B){if(B=="sent"||B=="inbox"){B="direct_messages"}A=$("#side ul.sidebar-menu li#"+B+"_tab")}}if(A&&A.length){$(A.get(0)).addClass("active")}}}$.fn.isCollapsibleMenu=function(){function A(){var B=[];$("#side .collapsible").each(function(){var C=$(this);var E=C.find("h2.sidebar-title").attr("id");if(E){E=E.replace("_menu","")}else{return true}var D=C.hasClass("collapsed")?"C":"O";B.push(E+D)});$.cookie("menus",B.join("_"))}return this.each(function(){var D=$(this);var B=D.find("h2.sidebar-title");function F(G){$.ajax({type:"GET",url:G,dataType:"html",beforeSend:function(){D.addClass("loading")},success:function(H){D.find(".sidebar-menu").remove();B.after(H);C()},complete:function(){D.removeClass("loading")}})}function C(){var G=D.find(".sidebar-menu");D.find("#friends_view_all").fadeIn();G.slideDown(100,function(){D.removeClass("collapsed");A()})}function E(){var G=D.find(".sidebar-menu");D.find("a.xref").fadeOut(100);D.find("div#friends_view_all").fadeOut(100);G.slideUp(100,function(){D.addClass("collapsed");A()})}D.bind("expand",function(){C()});D.bind("collapse",function(){E()});B.click(function(H){if(H.target.nodeName.toLowerCase()=="a"){return true}var G=D.find("a.fetch-contents");if(D.hasClass("collapsed")){D.find("a.xref").fadeIn(100);if(G.length){F(G.attr("href"));G.remove()}else{C()}}else{E()}})})};$.fn.isSidebarTab=function(){var A=this.each(function(){var B=$(this);B.bind("click",function(){B.trigger("active")}).bind("active",null,function(C){if(B.parents("#side").length>0){$(window).scrollTop(0);$("#side ul.sidebar-menu li, #trends_list li").removeClass("active");$("#side #custom_search").removeClass("active");B.parent("li").addClass("active")}}).bind("loading",null,function(C){B.parent("li").addClass("loading")}).bind("loaded",null,function(C){B.parent("li").removeClass("loading")}).bind("aborted",null,function(C){B.parent("li").removeClass("loading")})});return A};$.fn.isInPageLink=function(B){var A=this.each(function(){var C=$(this);var D=C.meta();var E=D.dispatch_action;C.click(function(H){var F=H.srcElement||H.originalTarget||H.target;if(F.tagName.toLowerCase()=="em"){H.stopImmediatePropagation();return true}if($.browser.msie){this.hideFocus=true}var G=C.attr("href");if(E!="search"){page.query=""}if(page.isTimelineChange){page.currentTimelineChange.abort();page.$oldTimelineLink.trigger("aborted")}page.currentTimelineChange=$.ajax({type:"GET",url:G,dataType:"json",beforeSend:function(){page.isTimelineChange=true;C.trigger("loading");page.$oldTimelineLink=C},success:function(I){if(twttr.is.def(I.users)){twttr.User.merge(I.users)}twttr.processJson(I);twttr.updateLocation(E=="list"?"/list"+G:G);if(E){page.action_name=E;$("body").attr("id",E);if(E=="direct_messages"||E=="inbox"||E=="sent"){$("#direct_message_form").trigger("loadrecipients")}if(I.searchError!=undefined){page.searchError=I.searchError}}if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}addCountToDocumentTitle();timelineRefresh(E,G);$.Timeline.triggerPageHeightChangedEvent();$.Timeline.triggerTimelineChanged()},complete:function(I){onPageChange();$("body").addClass("replyable");C.trigger("loaded");page.isTimelineChange=false;if(B){B(C)}}});return false})});return A};function reloadTimeline(B){var A=(window.location.hash||B).toString().replace(/^#?([^\/])/,"/$1").replace(/^\/?list/,"");page.currentTimelineChange=$.ajax({type:"GET",url:A,dataType:"json",beforeSend:function(){page.isTimelineChange=true},success:function(C){page.searchError=C.searchError;if(twttr.is.def(C.users)){twttr.User.merge(C.users)}twttr.processJson(C);if(page.timelineRefresher){page.timelineRefresher.stop();page.timelineRefresher=null}addCountToDocumentTitle();timelineRefresh(B,A)},error:function(){(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show()},complete:function(){$("#sidebar_search_q").val("").blur();onPageChange();$("body").addClass("replyable");initializeTimeline();$("#timeline").removeClass("loading");page.isTimelineChange=false;if(B.match(/\/?list\//)){var C=$(".lists-links a[href="+h(A)+"]");$("#side ul.sidebar-menu li, #trends_list li").removeClass("active");$("#side #custom_search").removeClass("active");if(C.length){C.parent("li").addClass("active");setTimelineForListInPageLink(C)}}}})}$.fn.isBulletin=function(){return this.each(function(){var A=$(this);var B=A.find("a.close, a.hide");B.click(function(){A.fadeOut();return false})})};$.fn.isBrowserUpgradeBulletin=function(A){return this.each(function(){var B=$(this);B.find("a.close, a.hide").click(function(){$.cookie(A+"_upgrade","y")})})};$.fn.isDeviceFailBulletin=function(){return this.each(function(){var A=$(this);var B=A.find("a.hide-fail-notice, a.close, a.hide");var C=B.attr("id").replace("hide_device_","");B.click(function(){$.ajax({type:"POST",dataType:"text",url:"/devices/update/"+C,data:{authenticity_token:twttr.form_authenticity_token,"device[fail_alert]":"0",twttr:true},success:function(D){if(D.match(/success/)){A.fadeOut(200)}else{twttr.error()}},beforeSend:null,complete:null});return false})})};$.fn.isDeviceBouncingBulletin=function(){return this.each(function(){var A=$(this);var B=A.find("a.hide-fail-notice, a.close, a.hide");B.click(function(){A.fadeOut(200);return false})})};$.fn.isBouncingEmailBulletin=function(){return this.each(function(){var A=$(this);A.find("a.close, a.hide").click(function(){$.ajax({type:"POST",dataType:"text",url:"/bouncers/reset",data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:null,complete:function(){(new InfoNotification()).setMessage(_("Your email notifications should resume shortly.")).show()}});return false})})};$.fn.isNotificationSetting=function(){return this.each(function(){var B=$(this);var A=B.attr("id").replace("notify_on_","").replace("notify_off_","");B.click(function(){var C=B.attr("value");$.ajax({type:"POST",dataType:"text",url:"/friendships/device_"+C+"/"+A,data:{authenticity_token:twttr.form_authenticity_token,twttr:true},success:function(D){if(D.match(/success/)){$(".follow-control").trigger("refresh",["notify_"+(C=="follow"?"on":"off")])}else{twttr.error()}}})})})};$.fn.isNudgable=function(){return this.each(function(){var A=$(this);A.click(function(){var B=A.parents("form");B.find("input[name=authenticity_token]").val(twttr.form_authenticity_token);B.submit();return false})})};$.fn.isSlugField=function(B,A){return this.bind("keyup",function(){var C=slug($(this).val());if(B){B.val(C)}if(A){A.text(C)}})};var slug=function(A){return A.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^[_-]+|[_-]+$/g,"")};$.fn.isDeleteButton=function(A){if(!confirm(A)){return false}};$.fn.disable=function(){$(this).attr("disabled","disabled").addClass("disabled")};$.fn.enable=function(){$(this).removeAttr("disabled").removeClass("disabled")};$.fn.textAreaSizeLimiter=function(C){var D=$(this);var A=C.maxLength;var B=C.infoMessageSelector;var E=D.parents("form").find("input[type=submit]");D.keyup(function(){var F=D.val().length;if(F>A){E.attr("disabled","DISABLED").removeClass("btn").addClass("dbtn");$(B).show()}else{E.removeAttr("disabled").removeClass("dbtn").addClass("btn");$(B).hide()}})};$.fn.isPasswordStrengthField=function(A,B){return this.each(function(){if(!A){return }if(!B){B={}}var H=$(this);var J=$(A);J.append('<span class="pstrength-text"></span>');var F=J.find(".pstrength-text");function E(K){J.children().each(function(){var L=$(this);if(L.hasClass("pstrength-text")){if(K){L.show()}else{L.hide()}}else{if(K){L.hide()}else{L.show()}}})}function I(L){var P=0;var N=B.minlength?B.minlength:6;if(L.length<N){return{score:L.length,message:_("Too short"),className:"password-invalid"}}if(B.username){var Q=(typeof (B.username)=="function")?B.username():B.username;if(Q&&(L.toLowerCase()==Q.toLowerCase())){return{score:0,message:_("Too obvious"),className:"password-invalid"}}}if($.inArray(L.toLowerCase(),twttr.BANNED_PASSWORDS)!=-1){return{score:0,message:_("Too obvious"),className:"password-invalid"}}if(B.requireStrong){size=10;var K="# ` ~ ! @ $ % ^ & * ( ) - _ = + [ ] { }  | ; : ' \" , . < > / ?".split(" ");K=$.map(K,function(R){return"\\"+R}).join("");var M=["\\d","[a-z]","[A-Z]","["+K+"]"];var O=$.map(M,function(R){return"(?=.*"+R+")"}).join("");if(!L.match(new RegExp("("+O+"){10,}"))){return{score:0,message:_("Too Weak"),className:"password-invalid"}}}P+=L.length*4;P+=(D(1,L).length-L.length)*1;P+=(D(2,L).length-L.length)*1;P+=(D(3,L).length-L.length)*1;P+=(D(4,L).length-L.length)*1;if(L.match(/(.*[0-9].*[0-9].*[0-9])/)){P+=5}if(L.match(/(.*[!@#$%^&*?_~].*[!@#$%^&*?_~])/)){P+=5}if(L.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){P+=10}if(L.match(/([a-zA-Z])/)&&L.match(/([0-9])/)){P+=15}if(L.match(/([!@#$%^&*?_~])/)&&L.match(/([0-9])/)){P+=15}if(L.match(/([!@#$%^&*?_~])/)&&L.match(/([a-zA-Z])/)){P+=15}if(L.match(/^\w+$/)||L.match(/^\d+$/)){P-=10}if(P<0){P=0}if(P>100){P=100}if(P<34){return{score:P,message:_("Weak"),className:"password-weak"}}if(P<50){return{score:P,message:_("Good"),className:"password-good"}}if(P<75){return{score:P,message:_("Strong"),className:"password-strong"}}return{score:P,message:_("Very Strong"),className:"password-verystrong"}}function D(L,O){var K="";for(var N=0;N<O.length;N++){var P=true;for(var M=0;M<L&&(M+N+L)<O.length;M++){P=P&&(O.charAt(M+N)==O.charAt(M+N+L))}if(M<L){P=false}if(P){N+=L-1;P=false}else{K+=O.charAt(N)}}return K}function C(K){if(K&&J.hasClass(K)){return false}J.removeClass("password-weak").removeClass("password-good").removeClass("password-strong").removeClass("password-verystrong").removeClass("password-invalid");return true}function G(){var L=H.val();if(L.length==0){C();E(false)}else{if(L.length){E(true)}}if(L.length>0){var K=I(L);F.html(K.message);if(C(K.className)){J.addClass(K.className)}}}H.bind("show-password-meter",function(){J.show()});H.bind("hide-password-meter",function(){J.hide()});H.keyup(function(){G()});H.blur(function(){if(this.value.length==0){C();H.trigger("hide-password-meter")}});if(H.val()){G();J.show()}})};$.fn.isOAuthApplication=function(){return this.each(function(){var C=$(this);var B=C.attr("id").replace("oauth_application_","");var A=C.find(".revoke-access");A.click(function(){$.ajax({type:"POST",dataType:"json",url:"/oauth/revoke",data:{authenticity_token:twttr.form_authenticity_token,token:B,twttr:true},success:function(D){if(D.revoked){C.addClass("revoked")}else{C.removeClass("revoked")}A.text(D.label)}});return false})})};$.fn.screenName=function(){return $(this).find(".screen-name").text()||page.sessionUserScreenName};$.fn.userId=function(){var A;if(A=$(this).attr("id")){return A.replace("user_","")}else{return page.sessionUserId}};twttr.klass("twttr.MinimumDelayCallback",function(A){this.waitUntil=twttr.getTimeMillis()+A}).method("delay",function(C){var A=twttr.getTimeMillis();var B=this.waitUntil-A;if(B>0){setTimeout(function(){this.delay(C)}.pBind(this),B)}else{C.apply()}});twttr.augmentObject(twttr,{getTimeMillis:function(){return new Date().getTime()}});twttr.augmentObject(twttr,{formatPromotedTrend:function(B,C){B.addClass("promoted-trend");B.attr("data",C);var D=JSON.parse(C);var A=$("<span/>");if(D.promoted_content.advertiser_name){A.append(_("Promoted by %{name}",{name:D.promoted_content.advertiser_name}))}else{A.append(_("Promoted"))}B.append(A).promotedTrendsTipsy();return B}});jQuery.fn.pulsate=function(F,C){var D=$(this);var E=1;var A=function(){E=E+0.5;var G=E>F?function(){}:B;D.fadeIn(C,G)};var B=function(){E=E+0.5;D.fadeOut(C,A)};B()};$("html").keypress(function(C){var B=C.charCode?C.charCode:C.keyCode?C.keyCode:0;var A=$(C.target);if(A&&A.hasClass("a-btn")&&B==32){A.click();C.preventDefault()}});$("#status_update_form").isUpdateForm();twttr.reload=function(){window.location.reload()};twttr.ajaxSetup=function(){$.ajaxSetup({data:{twttr:true,authenticity_token:twttr.form_authenticity_token}})};if(!window.SEARCH_CALLBACKS){window.SEARCH_CALLBACKS={summize:"processSummize",load:"pageLoadSearch",searchLink:"processSearchLink",trendLink:"processTrendLink",savedSearchLink:"processSavedSearchLink",searchForm:"processSearchForm",hashtagLink:"processHashtagLink",inResultsLink:"processInResultsLink",more:"processSearchMore",refresh:"processSearchRefresh"}}twttr.addRetweetSearchTipsy=function(){$("a.meta-retweets").tipsy({gravity:"n",html:true,additionalCSSClass:"garuda-tipsy-container",showTimeout:300});$("a.meta-retweets").click(function(A){A.preventDefault();return false})};twttr.decoratePromotedTweets=function(){$("#timeline li.garuda-tweet").bind("hovercard",function(B,A){var C=twttr.createAdHoverTrackingParameters($(B.target),A);twttr.asyncAdsClickCount(C)});$(".garuda-tweet").each(function(){var A=$(this);if(!A.is(":first-child")){A.siblings(":not(.garuda-tweet):first").before(A)}})};twttr.prepareSearchResults=function(){twttr.addRetweetSearchTipsy();twttr.decoratePromotedTweets()};$(twttr.prepareSearchResults);$.Timeline.registerTimelineEvent(twttr.prepareSearchResults);twttr.searchTwitter=function(B,A){A.trigger("loading");var C=$('<a href="search?q='+encodeURIComponent(B)+'" data="{&quot;dispatch_action&quot;:&quot;search&quot;}" />');C.bind("loaded",null,function(E){A.trigger("loaded")});var D=function(){C.isInPageLink().click()};$("#user_search_results").slideUp();$("#heading").removeClass("hide-name-search");if(!A.hasClass("promoted-trend")){twttr.oneboxUserSearch(B,D)}else{D()}};twttr.oneboxUserSearch=function(C,D){var B=$("#user_search_results"),A=3;C=B.length&&C.split(/\s/).length<3?C.replace(/(^|\b)(from\:|to\:|near\:|source\:)/g,""):"";if(C.split(/\:/).length>1){C=""}if(C){$.ajax({type:"POST",url:"/search/namesearch",dataType:"json",data:{q:C,limit:A},success:function(F){var E=Math.min(F.length,A);if(E){var I="",J=[];for(var H=0;H<E;++H){var L=["user"],K=F[H];J.push(K.id);K.escaped_name=K.name?K.name.escapeHTML():K.screen_name;K.profile_url="/"+K.screen_name+"?from_source=onebox";L.push("u-"+K.screen_name);if(!H){L.push("first")}if(H==E-1){L.push("last")}if(K.verified){L.push("verified")}else{if(K["protected"]){L.push("protected")}}I+='<li class="'+L.join(" ")+'" data-position="'+H+'" data-result-user-id="'+K.id+'">';I+=replaceParams('<a class="profilepic" href="%{profile_url}"><img class="fn" src="%{profile_image_url}" alt="%{escaped_name}" /></a><div class="bio"><p class="username"><span><a href="%{profile_url}">%{screen_name}</a></span></p><p class="fullname">%{name}</p></div>',K);I+="</li>"}B.find("ul").attr("class","clearfix size"+E).html(I);B.find("p.seeall a").attr("href","/search/users?q="+encodeURIComponent(C));B.find("h2 strong").html(C.escapeHTML());B.slideDown();$("#heading").addClass("hide-name-search");scribe({event_name:"onebox_search_results",query:C,user_results:J,user_results_count:E},"onebox_user_search",{filter:"onebox_user_search"});var G=function(M){scribe($.extend({event_name:"onebox_click_result"},M),"onebox_user_search",{filter:"onebox_user_search"})};B.find("li a").click(G).bind("hovercard",function(M,N){var P=$(this).parents("li:first"),O={query:C,position:P.attr("data-position"),result_user_id:P.attr("data-result-user-id")};switch(N){case"hovercard-profile-pic":case"hovercard-screen-name":G.call(this,O);break;case"hovercard-follow":scribe($.extend({event_name:"onebox_follow",follow_context:"hovercard"},O),"onebox_user_search",{filter:"onebox_user_search"});break;case"hovercard-show":case"hovercard-loading":setTimeout(function(){$("div.hovercard-inner:first a.tweet-url").each(function(){var Q=$(this);Q.attr("href",Q.attr("href")+"?from_source=onebox")});$("div.hovercard-inner:first a.load-more").click()},5);default:if(N!="hovercard-loading"){scribe($.extend({event_name:"onebox_hovercard_action",hovercard_action:N},O),"onebox_user_search",{filter:"onebox_user_search"})}}})}}})}if(D){D()}};$.fn.isSearchForm=function(){return this.each(function(){var B=$(this);var A=$(B.find('input[type="text"]')[0]);var C=B.find("#sidebar_search_submit");A.Watermark(_("Search")).focus(function(){A.select();return true});C.click(function(){B.submit()});B.submit(function(E){E.preventDefault();var D=A.val();page.query=D;page.prettyQuery=D;page.placeDetails="";if(D!=""){C.addClass("loading");twttr.searchTwitter(D,B)}$("#side ul.sidebar-menu li").removeClass("active");$("#side #custom_search").addClass("active");return false});B.bind("loaded",null,function(D){C.removeClass("loading")})})};$.fn.isSearchLink=function(A){return this.each(function(){var B=$(this);B.click(function(C){C.preventDefault();page.prettyQuery=B.attr("name")||B.attr("title");page.query=B.attr("_query")||page.prettyQuery;page.placeDetails=B.attr("_place_details");page.placeMapLink=B.attr("_place_map_link");twttr.searchTwitter(page.query,B);if(B.parents("#side").length>0){$("#side ul.sidebar-menu li").removeClass("active");B.parent("li").addClass("active")}$("#trends_list li.active a").removeClass("active")})})};var LIST_PUBLIC_MODE="public";var LIST_PRIVATE_MODE="private";var LIST_MAX_NAME_LENGTH=25;var LIST_MAX_DESCRIPTION_LENGTH=100;var numeric_mode=function(A){switch(A){case"public":return 0;case"private":return 1;default:return 0}};var updateListFollowersCount=function(A){return updateCount("#subscribers_tab .stat-count",A)};var updateListFollowingCount=function(A){return updateCount("#members_tab .stat-count",A)};var fadeUserOnListUnfollow=function(A){A.fadeOut("medium",function(){A.remove()})};var onListMembersPage=function(A){return $("body").hasClass("lists_members")&&$('.list-header h2 a[href="'+A.uri+'"]').length==1};var linkToList=function(A,B){A.dispatch_action="list";return'<li><a class="list_'+A.id+'" href="'+A.uri+'" data="'+h(JSON.stringify(A))+'">'+(B?"<em />":"")+"<span>"+listDisplayName(A)+"</span></a></li>"};var listDisplayName=function(A){return(page.sessionUserScreenName&&page.sessionUserScreenName==A.user?h(A.slug):"<b>@</b>"+h(A.user)+"/<wbr/>"+h(A.slug))+lockIconForList(A)};var lockIconForList=function(A){return(A.mode==LIST_PRIVATE_MODE)?'<span class="lock-icon" title="Private List"></span>':""};var findListIndexBySlug=function(A,B){return jQuery.map(A,function(D,C){if(D.slug==B){return C}else{return null}})};$.fn.isUserListMenu=function(){var A=$("#list_menu");return this.one("click",function(){var D=$(this);var E=D.parents(".user");var C={};$.map(E.meta().lists,function(F){C[F.slug]=true});$("body").click();D.addClass("clicked").after(A.html());var B=D.siblings("ul");if(B.find("li:not(.new-list)").size()>=twttr.ListPerUserLimit){B.find(".new-list").remove()}B.find("li").each(function(){var F=$(this);if(F.hasClass("new-list")){F.isNewListLink()}else{F.isUserListItem(C[F.find('input[type="checkbox"]').meta().slug])}});$("html").one("click",function(){D.removeClass("clicked").blur().siblings("ul").remove().end().isUserListMenu();return false});return false})};$.fn.isUserListItem=function(D){var A=function(I,H,F,G){I.show();H.hide();var E=(G=="POST");H.attr("checked",E);F.unbind("click.checkbox");F.bind("click.while-processing",function(){return false})};var C=function(H,G,F,E){H.hide();G.show();F.unbind("click.while-processing");F.bind("click.checkbox",function(I){B.call(this,F,G,H,E);return false})};var B=function(M,F,I,L){var H=L?"DELETE":"POST";var G=M.parents(".user");var K=G.attr("id").replace("user_","");var J={authenticity_token:twttr.form_authenticity_token,twttr:true};var E=M.find('input[type="checkbox"]').meta().uri+"/members";if(H=="POST"){J["member[id]"]=K}else{E+="/"+K}$.ajax({type:H,dataType:"json",url:E,data:J,beforeSend:function(){A(I,F,M,H)},complete:function(){C(I,F,M,L)},success:function(N){L=(H=="POST");F.attr("checked",L);if(H=="POST"){addListToUser(G,N);if(onListMembersPage(N)){updateListFollowingCount(1)}}else{removeListFromUser(G,N);if(onListMembersPage(N)){fadeUserOnListUnfollow(G);updateListFollowingCount(-1)}}},error:function(){F.attr("checked",L)}})};return this.each(function(){var E=$(this);var F=E.find('input[type="checkbox"]');var H=E.find(".loading-spinner");var G=false;if(D){G=F.attr("checked",true)}E.bind("click.checkbox",function(I){B.call(this,E,F,H,G);return false})})};$.fn.isNewListLink=function(){return this.click(function(){var A=$(this).parents(".user");if(A.length==0){A=null}$(this).parent(".ul").remove();openListDialog(true,{userObject:A});return false})};$.fn.isEditListLink=function(){return this.click(function(){openListDialog(false,$(this).meta());return false})};var openListDialog=function(D,F){if(!F){F={}}var G=$("#list_dialog");var B=$(G.html());var A=new twttr.dialog({closeButton:true,content:B,heading:$($("#list_dialog_header").html()),modal:true,width:"405px"});A.bind("close",function(){A.$root.remove()});var E="";A.$root.addClass("list-dialog");if(D){A.$root.addClass("create-list-dialog")}else{E=F.description;A.$root.addClass("update-list-dialog").find('input[type="submit"]').val(_("Update list")).end().find(".list-name").val(F.name).end().find(".list-slug-title-and-slug").show().end().find(".list-description").val(E).end().find(".list-link span").text(F.slug).end().find('input[name="list[mode]"][value="'+numeric_mode(F.mode)+'"]').attr("checked",true);var C=A.find(".private-warning");A.find('input[name="list[mode]"]').change(function(){if(this.value==numeric_mode(LIST_PRIVATE_MODE)&&this.checked){C.show()}else{C.hide()}})}$(".list-description",A.$root).maxLength(LIST_MAX_DESCRIPTION_LENGTH-2);A.find(".list-name").focus();A.$root.isListDialog(D,F,A);A.open()};$.fn.isListDialog=function(C,A,B){return this.each(function(){var G=$(this);var F=A.userObject;var D=G.find("form");D.find(".list-name").one("keyup",function(){console.log("keyup");$(this).siblings(".list-slug-title-and-slug").show()}).isSlugField(D.find(".list-slug-field"),D.find(".list-link span"));if(F){D.find(".list-member-id").val(F.userId())}var E=$(this).find('input[type="submit"]');D.submit(function(I){var H=D.serialize();if(!C){H+="&"+$('<input type="hidden" name="_method" value="PUT" />').serialize()}$.ajax({type:"POST",dataType:"json",url:C?D.attr("action"):A.uri,data:H,beforeSend:function(){E.attr("disabled","disabled")},success:function(J){B.close();B.$root.remove();if(C){addListToMenu(J);if(F){addListToUser(F,J)}addListToLists(J);(new ShortNotification()).setMessage(_("Yay! Your list was created.")).show()}else{window.location=J.uri}},error:function(J){(new InfoNotification()).setMessage(J.responseText).show()},complete:function(){E.removeAttr("disabled","disabled")}});I.preventDefault()})})};$.fn.isDestroyListLink=function(){return this.click(function(D){var C=$(this);var A=C.next("form");var B=A.attr("action");if(confirm(_("Are sure you want to delete this list? There is NO undo!"))){$.ajax({url:B,type:"POST",dataType:"json",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){C.disable()},success:function(){document.location="/"},error:function(){C.enable()}})}return false})};$.fn.isSubscribeListLink=function(){return this.click(function(B){var A=$(this);$.ajax({url:A.attr("href"),type:"POST",dataType:"json",data:{authenticity_token:twttr.form_authenticity_token,twttr:true},beforeSend:function(){A.disable()},complete:function(){A.enable()},success:function(){A.parents(".list").addClass("subscriber");updateListFollowersCount(1)},error:function(){A.parents(".list").removeClass("subscriber")}});return false})};$.fn.isUnsubscribeListLink=function(){return this.click(function(B){var A=$(this);$.ajax({url:A.attr("href"),type:"POST",dataType:"json",data:{_method:"delete",authenticity_token:twttr.form_authenticity_token,twttr:true},success:function(){A.parents(".list").removeClass("subscriber");var C=$("#lists_subscribers #follow_grid #user_"+page.sessionUserId);fadeUserOnListUnfollow(C);updateListFollowersCount(-1)},error:function(){A.parents(".list").addClass("subscriber")}});B.preventDefault()})};$.fn.isListInPageLink=function(){return this.each(function(){var A=$(this);A.isInPageLink(setTimelineForListInPageLink)})};var setTimelineForListInPageLink=function(A){$("#timeline_heading").show();var E=$("#timeline_heading h1");var D=$("#timeline_heading h2");var C=A.meta();var B=h(C.uri);var F=listDisplayName(C);D.remove();E.html(F);E.after('<h2 class="list-subheading"><p class="list-numbers"><a href="'+B+'/members">'+_("Following:")+" <span>"+h(C.member_count)+"</span></a>"+(C.mode==LIST_PRIVATE_MODE?"":'<a href="'+B+'/subscribers">'+_("Followers:")+" <span>"+h(C.subscriber_count)+"</span></a>")+'</p><p class="list-link"><a href="'+B+'">'+_("View list page")+"<span> ›</span></a></p></h2>");if(C.member_count==0){$("#timeline_heading h2").append($(C.user==page.sessionUserScreenName?"#list_no_members_owner":"#list_no_members").html())}setDocumentTitle("Twitter / "+C.full_name)};var addListToUser=function(B,A){return B.each(function(){if(findListIndexBySlug(B.meta().lists,A.slug).length==0){B.meta().lists.push(A);if(B.find(".list-tags").length>0){B.find(".list-tags-outer:hidden").show();B.find(".list-tags").append(linkToList(A))}}})};var removeListFromUser=function(B,A){$.each(findListIndexBySlug(B.meta().lists,A.slug),function(){Array.remove(B.meta().lists,this);B.find(".list-tags .list_"+A.id).each(function(){$(this).parent("li").remove()});if(B.meta().lists.length==0){B.find(".list-tags-outer:visible").hide()}})};var addListToMenu=function(B){var A=$("#list_menu");A.find(".new-list").before('<li><img class="loading-spinner" src="https://web.archive.org/web/20101024100018/http://s.twimg.com/a/1287774835/images/spinner.gif" style="display: none;" alt="waiting" title="waiting" height="14" width="14"/><input type="checkbox" id="list_'+B.id+'" data="'+h(JSON.stringify(B))+'" /> <label for="list_'+B.id+'">'+h(B.name)+lockIconForList(B)+"</label></li>")};var isInPageLists=function(){return $("#side_lists.in-page-lists").length==1};var addListToLists=function(C){var B=isInPageLists();var A=$("ul.lists-links").siblings(".no-lists").remove().end().append(linkToList(C,B)).find(".list_"+C.id);if(B){A.addClass("in-page-list-link").isListInPageLink().isSidebarTab().click()}};var bindAdminListActions=function(){$("#admin_list a.destroy-list").isDestroyListLink();$("#admin_list a.edit-list").isEditListLink()};var isMoreButton=function(){$("#lists_pagination #more").live("click",basicMoreButtonHandler({beforeSend:function(){$("#more").addClass("loading").html("")},success:function(A){$("#lists_table tbody").append($(A["#lists"]));$("#lists_pagination").html(A["#pagination"])},error:function(){$("#more").removeClass("loading").text(_("more"));(new ShortNotification()).setMessage(_("Whoops! Something went wrong. Please try again!")).show()}}))};$.fn.equals=function(A){return this.length==1&&A.length==1&&this.get(0)==A.get(0)};$.fn.hasParent=function(A){return jQuery.inArray(A[0],this.parents())>-1};function InlineForm(A){this.initialize(A)}jQuery.extend(InlineForm.prototype,{defaultOptions:{title:"",submitBtnValue:"",showCancel:true,closeOnOutsideClick:true,formClass:"",timelineChangedEvents:false,pageHeightChangedEvents:false},overrideDefaultOptions:{},initialize:function(A){this.options=jQuery.extend({},this.defaultOptions);jQuery.extend(this.options,this.overrideDefaultOptions);jQuery.extend(this.options,A);this.$form=$('<div class="inline-form '+this.options.formClass+'"></div>');this.$buttonParent=$('<div class="inline-form-buttons"></div>');this.$button=$('<button type="button" class="btn">'+this.options.submitBtnValue+"</button>");if(this.options.showCancel){this.$cancel=$('<span class="cancel">&nbsp;</span>')}this.$form_inner=$('<div class="inline-form-inner"></div>');this.$input=$('<textarea class="inline-form-input"></textarea>');this.$inputsPrompt=$('<div class="inline-inputs-prompt"></div>');this.$title=$('<div class="title">'+this.options.title+"</div>");this.$body=$('<div class="body">'+(this.options.body||"")+"</div>");this.initEvents()},initEvents:function(){this.buttonEvent=this.submitForm.pBind(this);this.closeEvent=this.close.pBind(this);this.outsideClickEvent=this.destroyFromEvent.pBind(this);this.timelineEvent=this.timelineEvent.pBind(this);if(this.options.timelineChangedEvents){$.Timeline.registerTimelineEvent(this.timelineEvent)}if(this.options.pageHeightChangedEvents){this.pageHeightChangedEvent=this.pageHeightChangedEvent.pBind(this);$.Timeline.registerPageHeightChangedEvent(this.pageHeightChangedEvent)}},addEvents:function(){this.$button.click(this.buttonEvent);if(this.options.showCancel){this.$cancel.click(this.closeEvent)}if(this.options.closeOnOutsideClick){$(window).click(this.outsideClickEvent)}},removeEvents:function(){this.$button.unbind("click",this.buttonEvent);if(this.options.showCancel){this.$cancel.unbind("click",this.closeEvent)}if(this.options.closeOnOutsideClick){$(window).unbind("click",this.outsideClickEvent)}if(this.options.timelineChangedEvents){$.Timeline.unregisterTimelineEvent(this.timelineEvent)}$.Timeline.unregisterPageHeightChangedEvent(this.pageHeightChangedEvent)},onSendError:function(A){if(this.sendNotification){this.sendNotification.cancel()}(new InfoNotification()).setMessage(_("Whoops! Something went wrong. Please refresh the page and try again!")).show();this.close()},onSendSuccess:function(A){},formAction:function(){},timelineEvent:function(){},pageHeightChangedEvent:function(){this.positionForm()},postData:function(){},beforePost:function(){},onComplete:function(){},submitForm:function(){this.$button.disable();var A={authenticity_token:twttr.form_authenticity_token};jQuery.extend(A,this.postData());if(this.progressNotificationText){this.sendNotification=(new ProgressNotification()).setProgressMessage(this.progressNotificationText).setCompletedMessage(_("Ok, done.")).show()}this.beforePost();$.ajax({type:"POST",dataType:"json",dataFilter:function(B){if(!jQuery.trim(B)){return null}return B},url:this.formAction(),data:A,error:function(B){this.onSendError(B)}.pBind(this),success:function(B){this.onSendSuccess(B);this.close();if(this.sendNotification){this.sendNotification.done()}}.pBind(this),beforeSend:twttr.loading,complete:function(){twttr.loaded();this.onComplete()}.pBind(this)})},arrange:function(){var A=$('<div class="inline-form-inputs"></div>');if(this.options.showCancel){this.$buttonParent.append(this.$cancel)}this.$buttonParent.append(this.$button);this.$form_inner.append(A.append(this.$title).append(this.$body).append(this.$inputsPrompt).append(this.$input)).append(this.$buttonParent);this.$form.append(this.$form_inner);this.$form.hide();this.baseElement().append(this.$form)},baseElement:function(){return this.$parentNode||$(document.body)},show:function(A){this.addEvents();this.$targetNode=A.targetNode;this.$parentNode=A.parentNode;this.positionForm();this.arrange();this.$form.fadeIn(100);this.currentlyShown=true;this.afterShow()},afterShow:function(){},positionForm:function(){if(this.$targetNode&&this.$targetNode.width()>0){var C=this.position();var B=C[0];var A=C[1];this.$form.css("top",B).css("left",A)}else{this.close()}},close:function(){this.removeEvents();this.$form.remove();this.currentlyShown=false;this.afterClose()},afterClose:function(){},destroyFromEvent:function(B){var A=$(B.target);if(A.equals(this.$targetNode)||jQuery.inArray(this.$targetNode.get(0),A.parents())!=-1||A.equals(this.$form)||A.hasParent(this.$form)){return }this.close()},position:function(){var A=this.$targetNode.offset();return[A.top,A.left]}});RetweetInlineForm=function(){var A=_("Yes");var B=_("Retweet to your followers?");this.initialize({title:B,submitBtnValue:A})};RetweetInlineForm.prototype=new InlineForm();jQuery.extend(RetweetInlineForm.prototype,{overrideDefaultOptions:{formClass:"retweet-dlg",pageHeightChangedEvents:true},formAction:function(){var B=getListItemFromChild(this.$targetNode);var A=getStatusIdFromListItem(B);return"/statuses/"+A+"/retweet"},postData:function(){return{controller_name:page.controller_name,action_name:page.action_name}},beforePost:function(){this.close();twttr.setRetweetingStyles(this.$targetNode,_("Updating..."))},onSendSuccess:function(A){twttr.animateStatusReplacement(this.$targetNode,A);twttr.countAds(this.$targetNode)},onComplete:function(){twttr.unsetRetweetingStyles(this.$targetNode)},afterShow:function(){getListItemFromChild(this.$targetNode).addClass("perma-hover");this.$targetNode.find("a").blur()},afterClose:function(){getListItemFromChild(this.$targetNode).removeClass("perma-hover")},position:function(){var A=this.$targetNode.offset();return[parseInt(A.top)+20,parseInt(A.left)-220]}});RetweetContextDlgForm=function(){var B=_("Close");var C=_("Wondering who this is?");var A=_('Someone you follow thought this was worth retweeting, which is why you are seeing it in your Home timeline. <a target="_blank" href="%{help_url}">Learn more</a>.',{help_url:"https://web.archive.org/web/20101024100018/http://support.twitter.com/articles/77606-what-is-retweet-rt"});this.initialize({title:C,body:A,submitBtnValue:B})};RetweetContextDlgForm.prototype=new InlineForm();jQuery.extend(RetweetContextDlgForm.prototype,{overrideDefaultOptions:{showCancel:false,closeOnOutsideClick:false,formClass:"retweet-ctx-dlg",timelineChangedEvents:true},formAction:function(){return"/users/"+page.sessionUserId},postData:function(){return{_method:"put","user[has_dismissed_retweet_contextual_dialog]":"1"}},position:function(){return[this.$parentNode.height(),-9]},timelineEvent:function(){if(!this.currentlyShown){this.showIfElementExists()}},afterShow:function(){this.$targetNode.css("z-index","300");var A=parseInt($.cookie("retweet_contextual_count"))||0;if(A<5){$.cookie("retweet_contextual_count",A+1)}else{this.close();this.submitForm();$.cookie("retweet_contextual_count",null)}},afterClose:function(){this.$targetNode.css("z-index",null)},showIfElementExists:function(){var A=$(".rt-dlg");if(A.length){this.show({targetNode:A,parentNode:A})}}});$(document).ready(function(){new RetweetContextDlgForm().showIfElementExists()});$(document).ready(function(){try{var A="share-text-active";$(".status").each(function(){var E=$(this);var C=E.find(".retweet-link");var D=E.find(".share-text");C.hover(function(){D.addClass(A)},function(){D.removeClass(A)})})}catch(B){}});(function(){jQuery.inherits=function(A,C){function B(){}B.prototype=C.prototype;A.prototype=new B();A.prototype.constructor=A}})();(function(){jQuery.fn.equals=function(A){return this.get(0)==A.get(0)}})();(function(){jQuery.fn.hasParent=function(A){var B=false;this.parents().map(function(){if($(this).equals(A)){B=true}});return B}})();function Notification(B){this.$bar=jQuery('<div class="notification-bar"></div>');this.$barContainer=jQuery('<div class="notification-bar-container"></div>');this.$barContents=jQuery('<div class="notification-bar-contents"></div>');this.$barBackground=jQuery('<div class="notification-bar-bkg"></div>');this.$message=jQuery('<div class="message"></div>');this.$bar.hide();this.$barBackground.hide();var A=this;this.$bar.click(function(C){A.removeAfterEvent(C)});this.className=B}Notification.SLIDE_SPEED_IN_MS=300;Notification.prototype.remove=function(){var A=this;this.slideUp(function(){A.$bar.remove();A.$barBackground.remove();window.clearTimeout(A.timeout)})};Notification.prototype.removeAfterEvent=function(B){var A=$(B.target);if(A.get(0).nodeName.toLowerCase()=="a"&&A.hasParent(this.$message)){return }this.remove()};Notification.prototype.setMessage=function(A){this.msg=A;return this};Notification.prototype.show=function(){this.$message.addClass(this.className).html(this.msg);this.$barContainer.append(this.$barBackground).append(this.$bar.append(this.$barContents.append(this.$message)));jQuery("#notifications").append(this.$barContainer);this.$barBackground.height(this.$bar.height());this.showBar();if(this.onShow){this.onShow()}return this};Notification.prototype.removeInMilliseconds=function(){var A=this;this.timeout=window.setTimeout(function(){A.remove()},A.timeoutInMilliseconds)};Notification.prototype.showBar=function(){this.$bar.show();this.$barBackground.show()};Notification.prototype.onShow=function(){this.removeInMilliseconds()};Notification.prototype.slideUp=function(A){this.$bar.slideUp(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideUp(Notification.SLIDE_SPEED_IN_MS,A)};function ShortNotification(){Notification.call(this,"message-info");this.timeoutInMilliseconds=3000}jQuery.inherits(ShortNotification,Notification);ShortNotification.prototype.showBar=function(){this.$bar.slideDown(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideDown(Notification.SLIDE_SPEED_IN_MS)};function InfoNotification(){Notification.call(this,"message-info");this.timeoutInMilliseconds=6000}jQuery.inherits(InfoNotification,Notification);InfoNotification.prototype.showBar=function(){this.$bar.slideDown(Notification.SLIDE_SPEED_IN_MS);this.$barBackground.slideDown(Notification.SLIDE_SPEED_IN_MS)};function ProgressNotification(){Notification.call(this,"message-progress");this.timeoutInMilliseconds=1000}jQuery.inherits(ProgressNotification,Notification);ProgressNotification.prototype.setProgressMessage=function(A){return this.setMessage(A)};ProgressNotification.prototype.setCompletedMessage=function(A){this.completedMsg=A;return this};ProgressNotification.prototype.onShow=function(){};ProgressNotification.prototype.cancel=function(){this.timeoutInMilliseconds=0;this.removeInMilliseconds()};ProgressNotification.prototype.done=function(){this.$message.addClass("message-progress-done").removeClass(this.className).html(this.completedMsg);this.removeInMilliseconds()};function ErrorNotification(){Notification.call(this,"message-error");this.timeoutInMilliseconds=8000}jQuery.inherits(ErrorNotification,Notification);function Occasionally(A,D,C,B,E){this.interval=A;this.maxDecayTime=D;this.job=C;this.decayCallback=B;this.timesRun=0;this.decayRate=1;this.decayMultiplier=E||1.25;this.maxRequests=360}Occasionally.prototype.start=function(){this.stop();this.run()};Occasionally.prototype.stop=function(){if(this.worker){window.clearTimeout(this.worker)}};Occasionally.prototype.run=function(){var A=this;this.decayRate=this.decayCallback()?Math.max(1,this.decayRate/this.decayMultiplier):this.decayRate*this.decayMultiplier;var B=this.interval*this.decayRate;B=(B>=this.maxDecayTime)?this.maxDecayTime:B;this.worker=window.setTimeout(function(){A.execute()},Math.floor(B))};Occasionally.prototype.execute=function(){this.job();if(++this.timesRun<this.maxRequests){this.run()}};twttr.countClick=function(){var A=twttr.createTrackingParameters(this);twttr.asyncClickCount(A)};twttr.countAds=function(A){if(A.parents(".garuda-tweet").get(0)){var B=twttr.createAdLinkTrackingParameters(A);twttr.asyncAdsClickCount(B)}};twttr.countPromotedTrends=function(B,A){var C=twttr.createPromoteTrendTrackingParameters(B,A);twttr.asyncPromotedTrendEventLog(C)};twttr.asyncClickCount=function(A){(new Image()).src="/abacus?"+$.param(A)};twttr.asyncAdsClickCount=function(A){(new Image()).src="/abacus/garuda_click?"+$.param(A)};twttr.asyncPromotedTrendEventLog=function(A){(new Image()).src="/abacus/promoted_trend_event?"+$.param(A)};twttr.createAdHoverTrackingParameters=function(A,B){var C=twttr.createAdTrackingParameters(A);return $.extend({},C,{linkType:B})};twttr.createAdLinkTrackingParameters=function(B){var A=twttr.identifyLinkType(B,["retweet-link","reply","entry-meta","fav","non-fav"]);var C=twttr.createAdTrackingParameters(B);return $.extend({},C,{linkType:A})};twttr.identifyLinkType=function(A,E){var C=["web","profile-pic","screen-name","hashtag","username"];if(typeof (E)!="undefined"){C=C.concat(E)}for(var B=0;B<C.length;B++){var D=C[B];if(A.hasClass(D)){if(D=="fav"){return"non-fav"}else{if(D=="non-fav"){return"fav"}else{return D}}}}};twttr.countAdsReplies=function(A){var B=$("#content li.garuda-tweet");if(B.length>0){if(twttr.tweetIdForStatus(B)==A){twttr.countAds(B.find(".reply"))}}};twttr.tweetIdForStatus=function(A){return A.find(".meta a").attr("href").match(/\/(\d+)$/)[1]};twttr.createAdTrackingParameters=function(G){var N=G.closest(".status");var K=twttr.tweetIdForStatus(N);var M=$('meta[name="session-userid"]');var F=M.attr("content")||-1;var E=$('meta[name="client-ip"]');var D=E.attr("content")||-1;var C=JSON.parse(N.attr("data"));var B=C.advertiser_id;var J=C.campaign_id;var I=C.ad_id;var A=C.impression_id;var H=page.query;var L=twttr.form_authenticity_token||$('input[name="authenticity_token"]').attr("value");return{url:G.attr("href"),tweetId:K,userId:F,userIP:D,advertiserId:B,campaignId:J,adId:I,impressionId:A,query:H,authenticity_token:L}};twttr.createTrackingParameters=function(F){var B=$(F);var A=twttr.identifyLinkType(B);var E=B.closest(".status").find(".meta").children("a").get(0).href.split("/");var G=E[E.length-1];var H=$('meta[name="session-userid"]');var D=H.attr("content")||-1;var C=twttr.form_authenticity_token||$('input[name="authenticity_token"]').attr("value");return{url:F.href,linkType:A,tweetId:G,userId:D,authenticity_token:C}};twttr.createPromoteTrendTrackingParameters=function(C,D){var A=$(C);var B=twttr.form_authenticity_token;return{event_name:D,url:A.attr("href"),promoted_trend_id:JSON.parse(A.attr("data")).promoted_content.id,authenticity_token:B}};twttr.registerTracker=function(C,A,B){C.live(A,B)};twttr.setupTracking=function(){twttr.registerTracker($("#content li.status").find("a.tweet-url"),"mousedown",function(){if($(this).parents("li.garuda-tweet").length==0){twttr.countClick.pBind(this)()}});var A=$("#content li.garuda-tweet").find("a.tweet-url, .entry-meta, .fav-action.non-fav, .fav-action.fav, .meta");twttr.registerTracker(A,"mousedown",function(){twttr.countAds($(this))});var B=$("a.promoted-trend");twttr.registerTracker(B,"click",function(){twttr.countPromotedTrends($(this),"c")})};twttr.logPromotedTrendImpression=function(){var A=$("a.promoted-trend");if(A.length>0){twttr.countPromotedTrends(A,"i")}};$(document).ready(function(){twttr.setupTracking();twttr.logPromotedTrendImpression()});/*
    http://www.JSON.org/json2.js
    2009-09-21

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html

    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*jslint evil: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
var scrobject={scribeHost:window.location.hostname,toScribeParams:function(A){var B=[];for(var C in A){B[B.length]=encodeURIComponent(C)+"="+encodeURIComponent(A[C])}return B.join("&")},scribeUrl:function(C,B){var A="/scribe?";if(B.host){A="http://"+B.host+A}else{if(!/[\/\.]twitter\.com/.test(scrobject.scribeHost)&&!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(scrobject.scribeHost)&&scrobject.scribeHost!="localhost"){A="https://web.archive.org/web/20101024100018/http://twitter.com"+A}}return A+scrobject.toScribeParams(C)}};function scribe(A,D,C,B){C=C||{};if(window.DARKMODE_SCRIBE){return this}if(!D){console.warn("You must specify a category in order to use scribe");return this}if(typeof (A)=="function"){A=A.call(this,B)}if(A==null){console.warn("You must provide logged data in order to use scribe");return this}if(!A.event_name){console.warn('You must include an "event_name" field in your logged data in order to use scribe');return this}var E={log:JSON.stringify(A),ts:(new Date()).getTime()};if(C.filter){E.filter=C.filter}if(D){E.category=D}(new Image()).src=scrobject.scribeUrl(E,C);return this}function scribeAB(A){scribe(A,"www_ab_testing")}function watchABEvent(C,B,D,A){if(C){var E=$(C);if(!D&&E.attr("abdata")){D=JSON.parse(E.attr("abdata"))}args={experimentData:D,handler:A};$(C).bind(B,args,function(F){scribeAB(F.data.experimentData);continuePropogation=true;if(F.data.handler){continuePropogation=F.data.handler();if(!continuePropogation){F.stopPropagation()}}return(continuePropogation)})}}function watchReloadingABLink(B){var A=$(B);if(A&&A.attr("abdata")){var C=JSON.parse(A.attr("abdata"));watchABEvent(A,"click",C,function(){setTimeout('document.location = "'+A.attr("href")+'"',100);return(false)})}}if(!window.console){window.console={warn:function(A){}}}if(window.jQuery){(function(A){A.extend(A.fn,{scribe:function(B,D,C){C=C||{};A(this).bind(C.clientEvent||"mousedown",function(E){window.scribe.call(this,B,D,C,E)});return this}})})(jQuery);(function(B){var A=B("a.ab-reloading");if(typeof A.livequery=="function"){A.livequery(function(){watchReloadingABLink(B(this))})}})(jQuery)};twttr.position={adjacent:function(I,H,A){var F,G;A=(A||{});F=G=H.offset();G.gravity=A.gravity;G.weight=A.weight;var D={height:H.outerHeight(),width:H.outerWidth()};var B={height:I.outerHeight(),width:I.outerWidth()};var C={height:$(window).height(),width:$(window).width()};var E={height:$("body").height(),width:$("body").width()};if(!G.gravity){G.gravity="vertical"}if("vertical,north,south".indexOf(G.gravity)!=-1){if("right,left,center".indexOf(G.weight)==-1){G.weight=(F.left>C.width/2)?"right":"left"}if(G.gravity=="vertical"){G.gravity=((F.top+B.height)>($(window).scrollTop()+C.height))?"south":"north"}if(A.position=="relative"){F={left:0,top:0};G.left=0}if(G.weight=="right"){G.left=F.left-B.width+D.width}else{if(G.weight=="center"){G.left=F.left-((B.width-D.width)/2)}}G.top=(G.gravity=="north")?(F.top+D.height):(F.top-B.height)}if("horizontal,east,west".indexOf(G.gravity)!=-1){if("top,bottom,center".indexOf(G.weight)==-1){if((F.top-(B.height/2))<0){G.weight="top"}else{if((F.top+(B.height/2))>Math.max(C.height,E.height)){G.weight="bottom"}else{G.weight="center"}}}if(G.gravity=="horizontal"){G.gravity=((F.left+(D.width/2))>C.width/2)?"east":"west"}if(A.position=="relative"){F={left:0,top:0};G.top=0}if(G.weight=="center"){G.top=F.top+(D.height/2)-(B.height/2)}else{if(G.weight=="bottom"){G.top=F.top-B.height+D.height}}G.left=(G.gravity=="west")?(F.left+D.width):(F.left-B.width)}return G},center:function(A){var C=$(window);var B={top:parseInt((C.height()-A.outerHeight())/2),left:parseInt((C.width()-A.outerWidth())/2)};if($("body.ie6").length){B.top+=C.scrollTop();B.left+=C.scrollLeft()}return B}};twttr.klass("twttr.dialog",function(A){this.opts=A;this.$heading=A.heading?$(A.heading):false;this.$footer=A.footer?$(A.footer):false;this.$content=$(A.content);this.createShell();this.bindEvents()}).widget().method("getHeaderHTML",function(){if(this.$heading&&this.$heading.length){return"<h2><span>"+this.$heading.html()+"</span>"+(this.opts.closeButton?'<a href="#" class="modal-close">&times;</a>':"")+"</h2>"}else{return(this.opts.closeButton?'<span class="no-heading"><a href="#" class="modal-close right">&times;</a></span>':"")}}).method("getShellHTML",function(){var A=(this.opts.modal===false);return['<div class="twttr-dialog'+(this.opts.cssClass?" "+this.opts.cssClass:"")+'" style="display: none;">','<div class="hanging"'+(this.opts.zIndex?' style="z-index: '+this.opts.zIndex+' !important;"':"")+">",'<div class="modal">','<div class="modal-inner">',this.getHeaderHTML(),'<div class="modal-content"> </div>',"</div>","</div>","</div>",(A?"":'<div class="modal-overlay"></div>'),"</div>"].join("")}).method("createShell",function(){var C=this;this.$root=$(this.getShellHTML());if(this.opts.width){this.find(".hanging").css({width:this.opts.width})}var D=this.$content.parent().length?this.$content.parent():$(document.body);this.$content.move(this.find(".modal-content"));if(this.$footer.length){this.find(".modal-content").after('<div class="footer"></div>');this.$footer.move(this.find(".footer"))}if(this.opts.renderInline){D.append(this.$root)}else{$(document.body).append(this.$root)}if(this.opts.fixed===false){this.find(".hanging").css({position:"absolute"})}var B=this.$root.find(".modal-submit");if(B.length>0){if(C.opts.noajax){B.bind("click",function(E){B.closest("form").submit()});return }var A=C.opts.ajax.complete;B.bind("click",function(F){F.preventDefault();B.attr("disabled",true);B.addClass("dbtn").removeClass("btn");var E=$(this).closest("form");$.ajax($.extend((C.opts.ajax||{}),{type:E.attr("method"),url:E.attr("action"),data:E.serialize(),complete:function(G){B.attr("disabled",false);B.addClass("btn").removeClass("dbtn");if(A){A(G)}}}))})}}).method("bindEvents",function(){var A=this;this.find(".modal-close").click(function(B){B.preventDefault();A.close()});if(this.find(".modal-close").length){$(document).keydown(function(B){if(B.which==27){B.preventDefault();A.close()}})}if(this.opts.popup){$(document).click(function(B){if(A.opened&&!$(B.target).parents(".modal").length){A.close()}})}}).method("windowHeight",function(){return $(window).height()}).method("scrollTop",function(){return $(window).scrollTop()}).method("open",function(){this.$root.fadeIn("fast");var A=this.find(".hanging");var B=this.center(A);if(this.opts.top){B.top=this.opts.top}if(this.opts.left){B.left=this.opts.left}if(this.opts.maxTop){B.top=Math.min(B.top,this.opts.maxTop)}if(this.opts.maxLeft){B.left=Math.min(B.left,this.opts.maxLeft)}A.css({top:B.top,left:B.left});this.$root.trigger("open");this.opened=true;if(this.windowHeight()<A.outerHeight()){A.css("position","absolute");A.css("top",this.scrollTop()+"px")}else{if(this.opts.fixed===false){A.css("top",B.top+this.scrollTop())}}this.$root.find("input[type=text]:first").focus()}).method("close",function(){this.$root.fadeOut("fast");this.opened=false;this.$root.trigger("close")}).method("toggle",function(){this.opened?this.close():this.open()});twttr.augmentObject(twttr.dialog.prototype,twttr.position);twttr.auxo("AttachedDialog",twttr.dialog).method("open",function(){this.$root.addClass("attached");this.$root.fadeIn("fast");this.opened=true;if(!this.positioned){var A=this.find(".hanging");var D=this.adjacent(this.find(".hanging"),$(this.opts.handle),this.opts);if(this.opts.offsetX){D.left+=this.opts.offsetX}if(this.opts.offsetY){D.top+=this.opts.offsetY}twttr.augmentObject(this.opts,D);var B=this.opts.gravity;if(B&&("horizontal,vertical".indexOf(B)==-1)){if("north,south".indexOf(B)==-1){var C=parseInt(this.find(".hanging").height());this.find(".modal-inner").prepend('<div class="'+B+'" style="height:'+C+'px;"></div>');D.left+=this.nudge(B);D.top+=this.nudge(this.opts.weight)}else{this.find(".modal")[(B=="north"?"before":"after")]('<div class="'+B+'"></div>');D.top+=this.nudge(B);D.left+=this.nudge(this.opts.weight)}}this.find(".hanging").css({top:D.top,left:D.left});if(this.opts.weight&&this.opts.weight!="auto"){this.find(".hanging").addClass("weight-"+this.opts.weight)}if(this.opts.modal){this.find(".modal-overlay").height(Math.max($(window).height(),$("body").height())+25)}this.positioned=true}}).method("nudge",function(A){return(twttr.AttachedDialog.offsets[A]||0)});twttr.AttachedDialog.offsets={top:-15,bottom:30,east:-10,west:10,south:-10,north:4};$.extend($.fn,{hoverTip:function(A,E){E=(E||{});var F=false;var B=$(this);var G=$(A);var D=document.all&&($.browser.version<8);var C=false;if(D){$("body").append(G);G.hover(function(H){clearTimeout(C)},function(H){G.fadeOut("fast")})}else{E.position="relative";B.prepend(G)}B.hover(function(H){F=setTimeout(function(){clearTimeout(F);pos=twttr.position.adjacent(G,B,E);var I=pos.top;G.css({left:pos.left,top:I}).fadeIn("fast")},400)},function(I){var H=$(I.target);clearTimeout(F);if(!H.is(B)){C=setTimeout(function(){G.fadeOut("fast")},(D?200:0))}})}});(function(A){A.fn.extend({isSigninMenu:function(){return this.each(function(){var D=A(this),B=A(".signin"),C=D.find(".textbox input"),E=true;B.bind("click focus",function(G){G.preventDefault();if(!E){return }E=false;setTimeout(function(){E=true},500);var F=A(this);F.toggleClass("menu-open");D.toggleClass("offscreen");if(F.hasClass("menu-open")){A(document).trigger("signinMenu.show");setTimeout(function(){A("#username").focus()},50)}else{A(document).trigger("signinMenu.hide");C.val("");setTimeout(function(){A("#home_search_q, #searchform_q").focus()},0)}});C.bind("focus keydown",function(F){if((F.type=="keydown"&&F.keyCode==27)||(F.type=="focus"&&!B.hasClass("menu-open"))){B.trigger("click")}});D.mouseup(function(){return false});A(document).mouseup(function(F){if(A(F.target).parent("a.signin").length==0&&B.hasClass("menu-open")){B.trigger("click")}})})}})})(jQuery);


}
/*
     FILE ARCHIVED ON 10:00:18 Oct 24, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:36:16 Nov 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.475
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 6.966
  LoadShardBlock: 124.126 (3)
  PetaboxLoader3.datanode: 154.103 (4)
  load_resource: 86.253
  PetaboxLoader3.resolve: 47.737
*/