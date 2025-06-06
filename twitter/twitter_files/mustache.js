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
  Shamless port of http://github.com/defunkt/mustache
  by Jan Lehnardt <jan@apache.org>, Alexander Lang <alex@upstream-berlin.com>,
     Sebastian Cohnen <sebastian.cohnen@googlemail.com>

  Thanks @defunkt for the awesome code.

  See http://github.com/defunkt/mustache for more info.
*/

var Mustache = function() {
  var Renderer = function() {};

  Renderer.prototype = {
    otag: "{{",
    ctag: "}}",

    render: function(template, context, partials) {
      // fail fast
      if (template.indexOf(this.otag) == -1) {
        return template;
      }

      var html = this.render_section(template, context, partials);
      html = this.render_i18n(html);
      return this.render_tags(html, context, partials);
    },

    /*
      Tries to find a partial in the global scope and render it
    */
    render_partial: function(name, context, partials) {
      if(typeof(context[name]) != "object") {
        throw({message: "subcontext for '" + name + "' is not an object"});
      }
	    if(!partials || !partials[name]) {
        throw({message: "unknown_partial"});
      }
      return this.render(partials[name], context[name], partials);
    },

    /*
      Renders boolean and enumerable sections
    */
    render_section: function(template, context, partials) {
      var hasConditional = (template.indexOf(this.otag + "#") == -1)
      var hasNegation = (template.indexOf(this.otag + "!") == -1)
      if(!hasConditional && !hasNegation) {
        return template;
      }
      var that = this;

      // CSW - Added "+?" so it finds the tighest bound, not the widest
      var regex = new RegExp(this.otag + "(\\#|\\~)(.+)" + this.ctag +
              "\\s*([\\s\\S]+?)" + this.otag + "\\/\\2" + this.ctag + "\\s*", "mg");

      // for each {{#foo}}{{/foo}} section do...
      // and will also render negated sections with {{~foo}}{{/foo}}
      return template.replace(regex, function(match, operation, name, content) {
        var value = that.find(name, context);
        if(that.is_array(value)) { // Enumerable, Let's loop!
          return that.map(value, function(row) {
            return that.render(content, that.merge(context,
                    that.create_context(row)), partials);
          }).join('');
        } else if(operation == "#" && !twttr.is.falsy(value)) { // boolean section
          return that.render(content, context, partials);
        }  else if(operation == "~" && twttr.is.falsy(value)) {
          return that.render(content, context, partials);
        } else {
          return "";
        }
      });
    },

    render_i18n: function(html) {
      if (html.indexOf(this.otag + "_i") == -1) {
        return html;
      }
      var that = this;
      var regex = new RegExp(this.otag + "\\_i" + this.ctag +
              "\\s*([\\s\\S]+?)" + this.otag + "\\/i" + this.ctag + "\\s*", "mg");
      // for each {{_i}}{{/i}} section do...
      return html.replace(regex, function(match, content) {
        return _(content);
      });
    },

    /*
      Replace {{foo}} and friends with values from our view
    */
    render_tags: function(template, context, partials) {
      var lines = template.split("\n");

      var new_regex = function() {
        return new RegExp(that.otag + "(=|!|<|\\{)?([^\/#]+?)\\1?" +
          that.ctag + "+", "g");
      };

      // tit for tat
      var that = this;

      var regex = new_regex();
      for (var i=0; i < lines.length; i++) {
        lines[i] = lines[i].replace(regex, function (match, operator, name) {
          switch(operator) {
            case "!": // ignore comments
              return match;
            case "=": // set new delimiters, rebuild the replace regexp
              that.set_delimiters(name);
              regex = new_regex();
              // redo the line in order to get tags with the new delimiters
              // on the same line
              i--;
              return "";
            case "<": // render partial
              return that.render_partial(name, context, partials);
            case "{": // the triple mustache is unescaped
              var value = that.find(name, context);
              return twttr.is.def(value) ? value : "";
            default: // escape the value
              var value = that.find(name, context);
              return twttr.is.def(value) ? that.escape(value) : "";
          }
        },this);
      };
      return lines.join("\n");
    },

    set_delimiters: function(delimiters) {
      var dels = delimiters.split(" ");
      this.otag = this.escape_regex(dels[0]);
      this.ctag = this.escape_regex(dels[1]);
    },

    escape_regex: function(text) {
      // thank you Simon Willison
      if(!arguments.callee.sRE) {
        var specials = [
          '/', '.', '*', '+', '?', '|',
          '(', ')', '[', ']', '{', '}', '\\'
        ];
        arguments.callee.sRE = new RegExp(
          '(\\' + specials.join('|\\') + ')', 'g'
        );
      }
    return text.replace(arguments.callee.sRE, '\\$1');
    },

    /*
      find `name` in current `context`. That is find me a value
      from the view object
    */
    find: function(name, context) {
      name = this.trim(name);
      if (twttr.is.def(context) && typeof context[name] === "function") {
        return context[name].apply(context);
      }
      if (context && context[name] !== undefined && context[name] !== null) {
        return context[name];
      } else {
        return undefined;
      }
    },

    i18n: function(name, context) {
      console.log("i18n", name, context);
      return _(this.trim(name));
    },

    // Utility methods

    /*
      Does away with nasty characters
    */
    escape: function(s) {
      return s.toString().replace(/[&"<>\\]/g, function(s) {
        switch(s) {
          case "&": return "&amp;";
          case "\\": return "\\\\";;
          case '"': return '\"';;
          case "<": return "&lt;";
          case ">": return "&gt;";
          default: return s;
        }
      });
    },

    /*
      Merges all properties of object `b` into object `a`.
      `b.property` overwrites a.property`
    */
    merge: function(a, b) {
      var _new = {};
      for(var name in a) {
        if(a.hasOwnProperty(name)) {
          _new[name] = a[name];
        }
      };
      for(var name in b) {
        if(b.hasOwnProperty(name)) {
          _new[name] = b[name];
        }
      };
      return _new;
    },

    create_context: function(_context) {
      if(this.is_object(_context)) {
        return _context;
      } else {
        return {'.': _context};
      }
    },

    is_object: function(a) {
      return a && typeof a == 'object'
    },

    /*
      Thanks Doug Crockford
      JavaScript — The Good Parts lists an alternative that works better with
      frames. Frames can suck it, we use the simple version.
    */
    is_array: function(a) {
      return (a &&
        typeof a === 'object' &&
        a.constructor === Array);
    },

    /*
      Gets rid of leading and trailing whitespace
    */
    trim: function(s) {
      return s.replace(/^\s*|\s*$/g, '');
    },

    /*
      Why, why, why? Because IE. Cry, cry cry.
    */
    map: function(array, fn) {
      if (typeof array.map == "function") {
        return array.map(fn)
      } else {
        var r = [];
        var l = array.length;
        for(i=0;i<l;i++) {
          r.push(fn(array[i]));
        }
        return r;
      }
    }
  };

  return({
    name: "mustache.js",
    version: "0.1",

    /*
      Turns a template and view into HTML
    */
    to_html: function(template, view, partials) {
      return new Renderer().render(template, view, partials);
    }
  });
}();


}
/*
     FILE ARCHIVED ON 10:00:25 Oct 24, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:36:17 Nov 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.716
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.014
  esindex: 0.015
  cdx.remote: 46.838
  LoadShardBlock: 406.752 (3)
  PetaboxLoader3.datanode: 191.973 (4)
  PetaboxLoader3.resolve: 309.273 (3)
  load_resource: 121.004
*/