/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/popup/popup.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/popup/popup.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var i;
  var overflow = document.html || document.getElementsByTagName("html")[0];
  var popup = document.getElementsByClassName("popup");
  var buttons = document.getElementsByClassName("popup-button");
  var span = document.getElementsByClassName("close");

  for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var id = this.getAttribute("data-popup");
      var popup = document.getElementById(id);
      popup.style.display = "block";
      overflow.style.overflowY = "hidden";
    };
  }

  for (i = 0; i < span.length; i++) {
    span[i].onclick = function () {
      var id = this.getAttribute("data-popup");
      var popup = document.getElementById(id);
      popup.style.display = "none";
      overflow.style.overflowY = "visible";
    };
  }

  window.onclick = function (event) {
    var isModal = (" " + event.target.className + " ").indexOf(" popup ") > -1;

    if (isModal) {
      event.target.style.display = "none";
      overflow.style.overflowY = "visible";
    }
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
      $(".gotoTop").fadeIn();
    } else {
      $(".gotoTop").fadeOut();
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
      jQuery(".header__navigate").addClass("n-fixed");
      jQuery(".header__info-line").addClass("mg-fixed");
    } else {
      jQuery(".header__navigate").removeClass("n-fixed");
      jQuery(".header__info-line").removeClass("mg-fixed");
    }
  });
  $(".gotoTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});
var sections = $(".anchor");
var nav = $(".nav-primary");
var nav_height = nav.outerHeight();
$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop() + 50;
  sections.each(function () {
    var top = $(this).offset().top - nav_height;
    var bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("nav-primary__link--active");
      sections.removeClass("active");
      $(this).addClass("active");
      nav.find("a[href=\"#" + $(this).attr("id") + "\"]").addClass("nav-primary__link--active");
    }
  });
});
$("#header").find("a").on("click", function () {
  var $el = $(this);
  var id = $el.attr("href");
  $("html, body").animate({
    scrollTop: $(id).offset().top - nav_height
  }, 600);
  return false;
});
$("a").click(function () {
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  $('html, body').animate({
    scrollTop: destination
  }, 600);
  return false;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/packing/packing.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/packing/packing.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $(".item__item--plus").click(function (e) {
    e.preventDefault();
    $(".item__item--none").toggleClass('item__item--block');
    $(".item__item--hidden").toggleClass('item__item--visible');
    $(".item__list--starndart").toggleClass('item__item--scroll');
    $(".item__plus-more").toggleClass('item__plus-more--minus');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/portfolio/portfolio.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/portfolio/portfolio.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-thumb', {
    spaceBetween: 20,
    slidesPerView: 7,
    freeMode: true,
    grabCursor: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-default', {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
});
$("[data-fancybox=\"video\"]").fancybox({
  vimeo: {
    color: 'f00'
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/production/production.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/production/production.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _node_modules_swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/swiper/js/swiper */ "./node_modules/swiper/js/swiper.js");
/* harmony import */ var _node_modules_swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fancyapps_fancybox_dist_jquery_fancybox__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  var accordion_Swiper = new _node_modules_swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default.a(".production__slider .swiper-container", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    //centeredSlides: true,
    grabCursor: true,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.slider-arrow-right',
      prevEl: '.slider-arrow-left'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    }
  });
});
$("[data-fancybox=\"video\"]").fancybox({
  vimeo: {
    color: 'f00'
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/popup/popup */ "./src/blocks/components/popup/popup.js");
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_popup_popup__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_packing_packing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/packing/packing */ "./src/blocks/modules/packing/packing.js");
/* harmony import */ var _modules_packing_packing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_packing_packing__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_production_production__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/production/production */ "./src/blocks/modules/production/production.js");
/* harmony import */ var _modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/portfolio/portfolio */ "./src/blocks/modules/portfolio/portfolio.js");





/***/ }),

/***/ "./src/js/import/simple_form.js":
/*!**************************************!*\
  !*** ./src/js/import/simple_form.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  "use strict";

  function use_recaptcha() {
    var site_key = '6Lek4_EUAAAAABoxVZ3m-i_pewGZB8ECu3pwfBZ3';

    if ((typeof grecaptcha === "undefined" ? "undefined" : _typeof(grecaptcha)) !== ( true ? "undefined" : undefined)) {
      grecaptcha.ready(function () {
        grecaptcha.execute(site_key, {
          action: 'homepage'
        }).then(function (token) {
          $('form[data-use-recaptcha="true"]').each(function () {
            $(this).find('.g_response_field').remove();
            $(this).prepend('<input class="g_response_field" type="hidden" name="g-recaptcha-response" value="' + token + '" > ');
          });
        });
      });
    }
  }

  if ($('form[data-use-recaptcha="true"]').length > 0) {
    use_recaptcha();
    $(document).on('change', 'form[data-use-recaptcha="true"] input, form[data-use-recaptcha="true"] select, form[data-use-recaptcha="true"] textarea', function () {
      use_recaptcha();
    });
  }

  if (_typeof($.fn.selectric) !== ( true ? "undefined" : undefined)) {
    $('.simple_select').selectric({
      maxHeight: 250,
      disableOnMobile: false,
      nativeOnMobile: false
    });
  }

  if (_typeof($.fn.datepicker) !== ( true ? "undefined" : undefined)) {
    $.fn.datepicker.language['en'] = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yyyy',
      timeFormat: 'hh:ii aa',
      firstDay: 0
    };
    setTimeout(function () {
      $('.js_date_field').datepicker({
        startDate: new Date(),
        dateFormat: 'dd/mm/yyyy',
        language: 'en',
        autoClose: true,
        minDate: new Date()
      });
    }, 500);
  }

  if (_typeof(jQuery.validator) !== ( true ? "undefined" : undefined)) {
    jQuery.extend(jQuery.validator.messages, {
      required: "Это поле обязательно к заполнению.",
      remote: "Пожалуйста, исправьте это поле.",
      email: "Пожалуйста, введите действительный адрес электронной почты.",
      url: "Пожалуйста, введите правильный URL.",
      date: "Пожалуйста, введите правильную дату.",
      dateISO: "Пожалуйста, введите правильную дату (ISO).",
      number: "Пожалуйста введите правильное число.",
      digits: "Пожалуйста, вводите только цифры.",
      creditcard: "Пожалуйста, введите действительный номер кредитной карты.",
      equalTo: "Пожалуйста, введите то же значение снова.",
      accept: "Пожалуйста, введите значение с допустимым расширением.",
      maxlength: jQuery.validator.format("Пожалуйста, введите не более {0} символов."),
      minlength: jQuery.validator.format("Пожалуйста, введите не менее {0} символов."),
      rangelength: jQuery.validator.format("Пожалуйста, введите значение от {0} до {1} символов."),
      range: jQuery.validator.format("Пожалуйста, введите значение между {0} и {1}."),
      max: jQuery.validator.format("Пожалуйста, введите значение, меньшее или равное {0}."),
      min: jQuery.validator.format("Пожалуйста, введите значение, большее или равное {0}.")
    });
    $('form[data-validate="true"]').each(function () {
      $(this).validate({
        rules: {
          name: {
            minlength: 2
          },
          email: {
            email: true
          },
          phone: {
            minlength: 9
          },
          message: {
            required: true
          },
          url: {
            url: true,
            normalizer: function normalizer(value) {
              var url = value;

              if (url && url.substr(0, 7) !== "http://" && url.substr(0, 8) !== "https://" && url.substr(0, 6) !== "ftp://") {
                url = "http://" + url;
              }

              return url;
            }
          }
        },
        ignore: ".no_validate",
        focusInvalid: false,
        onkeyup: function onkeyup(element) {
          checkField(element);
        },
        errorPlacement: function errorPlacement(error, element) {
          element.parents('label').append(error);
          checkField(element, true);
        },
        invalidHandler: function invalidHandler(event, validator) {
          if (validator.numberOfInvalids() === 1) {
            $(event.target).find('.invalid_field').addClass('boxed_tooltip always_show');
          }
        },
        success: function success(label, element) {
          $(element).parents('label').removeClass("invalid_field boxed_tooltip always_show");
        }
      });
    });
    $('form[data-validate="true"] select').on('change', function () {
      checkField(this);
    });
  }

  function checkField(element, wrap) {
    if (wrap) {
      var parent_label = element.parents('label');
      if (element.hasClass('error')) parent_label.addClass("invalid_field");else parent_label.removeClass("invalid_field");
    } else {
      $(element).valid();
      var parent = $(element).parents('label');
      if ($(element).hasClass('error')) parent.addClass("invalid_field");else parent.removeClass("invalid_field");
    }
  }

  if (_typeof($.fn.inputmask) !== ( true ? "undefined" : undefined)) {
    $('.simple_form input[name="phone"]').inputmask(" +7 (999) 999-9999", {
      clearMaskOnLostFocus: true,
      "clearIncomplete": true
    }); // Clear the incomplete input on blur
    // $('.simple_form input[name="email"]').inputmask('email');
    //$('.simple_form input[name="name"]').inputmask({mask:'a{1,}', placeholder: ''});
  }

  $('form[data-ajax-submit="true"]').on('submit', function () {
    var el = this,
        form = $(this),
        has_errors = false,
        redirect = form.data('redirect'),
        submit_button = form.find('.submit_button'),
        fields_errors = form.find('input.error'),
        textarea_errors = form.find('textarea.error'),
        select_errors = form.find('select.error'),
        server_response = form.find('.server_response');

    if (fields_errors.length > 0 || textarea_errors.length > 0 || select_errors.length > 0) {
      has_errors = true;
    }

    var form_data = new FormData(el);

    if (!has_errors) {
      if (submit_button.length > 0 && _typeof(submit_button.data('original-text')) !== ( true ? "undefined" : undefined) && _typeof(submit_button.data('submit-text')) !== ( true ? "undefined" : undefined)) {
        submit_button.addClass('sending');
        submit_button.html('<span class="button-elit__text">' + submit_button.data('submit-text') + '</span>');
      }

      submit_button.addClass('no_pointer');
      form.addClass('no_pointer');
      submit_button.find('.upload_progress').remove();
      submit_button.append('<span class="upload_progress"></span>');
      submit_button.find('.upload_progress').addClass('active');
      $.ajax({
        type: "POST",
        url: form.attr('action'),
        enctype: 'multipart/form-data',
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function success(data) {
          if (isJSON(data)) {
            var response = jQuery.parseJSON(data);

            if (response.status === 'success') {
              form.trigger("reset");
              resetFiles(form);
              checkSubmitButton(el);

              if (form.hasClass('form-download')) {
                $('.button-elit').addClass('download__button'); //ADD Downloads button
              }

              if (submit_button.hasClass('sending')) {
                submit_button.html('<span class="button-elit__text">' + submit_button.data('original-text') + '</span>');
                submit_button.removeClass('sending');
              } // server_response.html('<div class="success_response"> <h4> '+ response.info.title +' </h4> <p> '+ response.info.message +'</p> <p> <span class="close_server_response">Закрыть</span> </p></div>');
              // server_response.addClass('active');


              $('#thanks').css('display', 'block');
              submit_button.removeClass('no_pointer');
              form.removeClass('no_pointer');
              setTimeout(function () {
                // server_response.removeClass('active');
                $('#thanks').css('display', 'none');
              }, 5000);
            } else if (response.status === 'error') {
              if (submit_button.hasClass('sending')) {
                submit_button.html('<span class="button-elit__text">' + submit_button.data('original-text') + '</span>');
                submit_button.removeClass('sending');
              }

              var all_errors = '';
              $.each(response.errors, function (index, value) {
                all_errors += '<div class="error_description"> ' + value + '</div>';
              });
              server_response.html('<div class="error_response"> <h4> ' + response.info.title + ' </h4> ' + all_errors + ' <p><span class="close_server_response">Close</span> </p></div>');
              server_response.addClass('active');
              submit_button.removeClass('no_pointer');
              form.removeClass('no_pointer');
            }
          } else {
            if (submit_button.hasClass('sending')) {
              submit_button.html('<span class="button-elit__text">' + submit_button.data('original-text') + '</span>');
              submit_button.removeClass('sending');
            }

            server_response.html('<div class="error_response"> <h4> Unknown error! </h4> <p>Please check server response.</p> <p> <span class="close_server_response">Close</span> </p></div>');
            server_response.addClass('active');
            submit_button.removeClass('no_pointer');
            form.removeClass('no_pointer');
          }

          if (_typeof(redirect) !== ( true ? "undefined" : undefined) && redirect !== false) {
            setTimeout(function () {
              location.replace(redirect);
            }, 0);
          }

          console.log(data);
        },
        error: function error(data) {
          if (submit_button.hasClass('sending')) {
            submit_button.html('<span class="button-elit__text">' + submit_button.data('original-text') + '</span>');
            submit_button.removeClass('sending');
          }

          server_response.html('<div class="error_response"> <h4> ' + data.status + ' </h4> <p>' + data.statusText + '</p> <p><span class="close_server_response">Close</span> </p></div>');
          server_response.addClass('active');
          submit_button.removeClass('no_pointer');
          form.removeClass('no_pointer');
          console.log(data);
        },
        xhr: function xhr() {
          var xhr = $.ajaxSettings.xhr();

          if (xhr.upload) {
            xhr.upload.addEventListener('progress', function (e) {
              if (e.lengthComputable) {
                submit_button.find('.upload_progress').css({
                  'width': Math.floor(e.loaded / e.total * 100) + '%'
                });
              }
            }, false);
          }

          return xhr;
        }
      });
    }

    return false;
  });
  $(document).on('click touch', '.close_server_response', function (e) {
    e.preventDefault();
    $(this).parents('.server_response').removeClass('active');
  });
  $('form.simple_form').on('reset', function () {
    if (_typeof($.fn.selectric) !== ( true ? "undefined" : undefined)) {
      $(this).find('.simple_select').prop('selectedIndex', 0).selectric('refresh');
    }
  });
  $('form input[type="file"]').on("change", handleFileSelect);
  $(document).on("click touch", ".delete_file", removeFiles);

  function handleFileSelect(e) {
    var el = $(e.target),
        form = el.parents('form'),
        files = e.target.files,
        filesArr = Array.prototype.slice.call(files),
        selected_files_container = el.parents('label').find('.selected_files_info'),
        files_count_limit = el.data('max-files') || 5,
        files_amount = 0,
        files_total_size = 0,
        selected_files = '';

    if (parseInt(el.get(0).files.length) > files_count_limit) {
      return alert("Files limit exceeded! Max: " + files_count_limit);
    }

    selected_files_container.empty();
    filesArr.forEach(function (f, index) {
      if (f.size > 24000 * 1000) {
        return alert("File size limit 24MB!");
      }

      var ext = f.name.split('.').pop(),
          accept_array = el.data('accept').split("|"),
          parent_label = el.parents('label');
      parent_label.addClass('active');

      if ($.inArray(ext, accept_array) === -1) {
        return alert(ext + " files not allowed! ");
      }

      files_total_size += f.size;
      files_amount++;
      selected_files += '<div class="sp_filename">' + truncateName(f.name, 15) + '</div>';
    });

    if (files_amount > 0) {
      selected_files_container.append('<div class="file_item prevent_default delete_file" title="Click to remove"> <strong>' + files_amount + '</strong> file(s) selected <span class="file_size">' + getFileSize(files_total_size) + '</span></span> <span class="file_image">' + selected_files + '</span></div>');
      form.find('.simple_progress').removeClass('active');
      form.find('.simple_progress .bar').css({
        'width': 0
      });
    }
  }

  function removeFiles(e) {
    var el = $(e.target),
        file_label = el.parents('.file_label');
    file_label.find('input[type="file"]').val('');
    $(this).remove();
  }

  function getFileSize(file_size) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB'];

    do {
      file_size = file_size / 1024;
      i++;
    } while (file_size > 1024);

    return Math.max(file_size, 0.1).toFixed(1) + byteUnits[i];
  }

  function truncateName(n, len) {
    var ext = n.substring(n.lastIndexOf(".") + 1, n.length).toLowerCase();
    var filename = n.replace('.' + ext, '');

    if (filename.length <= len) {
      return n;
    }

    filename = filename.substr(0, len) + (n.length > len ? '...' : '');
    return filename + '.' + ext;
  }

  function resetFiles(form) {
    var file_label = form.find('label.file_label');
    file_label.each(function () {
      var el = $(this),
          file_input = el.find('input[type=file]');
      file_label.find('.file_item ').remove();
      file_input.val('');
      el.removeClass('active');
    });
  }

  function isJSON(something) {
    if (typeof something != 'string') something = JSON.stringify(something);

    try {
      JSON.parse(something);
      return true;
    } catch (e) {
      return false;
    }
  }

  $(document).on('click touch', '.prevent_default', function (e) {
    e.preventDefault();
  });

  function checkSubmitButton(form) {
    form = $(form);

    if (form.find('.accept_terms').prop('checked') === true) {
      form.find('.enable_when_agree').removeClass('disabled');
    } else {
      form.find('.enable_when_agree').addClass('disabled');
    }
  }

  $('.simple_form').each(function () {
    checkSubmitButton(this);
  });
  $(document).on('keyup change paste blur', '.simple_form input, .simple_form select, .simple_form textarea', function () {
    var form = $(this).parents('form');
    checkSubmitButton(form);
  });
  jQuery.extend(jQuery.expr[':'], {
    focusable: function focusable(el, index, selector) {
      return $(el).is('a, button, :input, [tabindex]');
    }
  });
  $(document).on('keypress', '.simple_form input, .simple_form select', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      var $canfocus = $(':focusable'),
          index = $canfocus.index(this) + 1;
      if (index >= $canfocus.length) index = 0;
      $canfocus.eq(index).focus();
    }
  });

  if (_typeof($.fn.magnificPopup) !== ( true ? "undefined" : undefined)) {
    $(".pop").magnificPopup({
      type: "inline",
      midClick: true,
      mainClass: 'default'
    });
  }
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/inputmask/dist/jquery.inputmask */ "./node_modules/inputmask/dist/jquery.inputmask.js");
/* harmony import */ var _node_modules_inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_jquery_validation_dist_jquery_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/jquery-validation/dist/jquery.validate */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var _node_modules_jquery_validation_dist_jquery_validate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_validation_dist_jquery_validate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_selectric_public_jquery_selectric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/selectric/public/jquery.selectric */ "./node_modules/selectric/public/jquery.selectric.js");
/* harmony import */ var _node_modules_selectric_public_jquery_selectric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_selectric_public_jquery_selectric__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_simple_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/simple_form */ "./src/js/import/simple_form.js");
/* harmony import */ var _import_simple_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_import_simple_form__WEBPACK_IMPORTED_MODULE_7__);








jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  console.log(jQuery.fn.jquery);
  svg4everybody__WEBPACK_IMPORTED_MODULE_4___default()();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.policy-button').click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.policy-button__input').is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.submit').prop("disabled", false);
    } else {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.policy-button__input').filter(':checked').length < 1) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.submit').attr('disabled', true);
      }
    }
  });
});

function loadTheImgs(e) {
  if (e.hasAttribute('data-lzbgimg')) {
    var bgImg = e.dataset.lzbgimg;
    e.style.backgroundImage = 'url(' + bgImg + ')';
  }

  if (e.hasAttribute('data-lzimg')) {
    e.setAttribute('src', e.getAttribute('data-lzimg'));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var obsrvConfig = {
    rootMargin: '50px 0px',
    threshold: 0.01
  }; //get images wish to be lazyloaded

  var lazyImages = document.querySelectorAll('.lazyloadimg'); //make sure they are really there

  if (lazyImages.length > 0) {
    //if IntersectionObserver not supported load all images
    if (!window.IntersectionObserver) {
      lazyImages.forEach(function (lazyImage) {
        return loadTheImgs(lazyImage);
      });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            loadTheImgs(entry.target);
          }
        });
      }, obsrvConfig);
      lazyImages.forEach(function (lazyImage) {
        observer.observe(lazyImage);
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map