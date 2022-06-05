var hash = window.location.hash;
$(hash).parents(".tab").length &&
    !$(hash).parents(".tab").hasClass(".active") &&
    ($(".tabs-elements .tab").removeClass("active"),
    $(hash).parents(".tab").addClass("active"),
    $(hash).is(".acordeon") &&
        ($(hash).parents(".acordeon").length && ($(hash).parents(".acordeon").find("> .tag").addClass("active"), $(hash).parents(".acordeon").find("> .acordeon-box").slideDown(300)),
        $(hash).find("> .tag").addClass("active"),
        $(hash).find("> .acordeon-box").slideDown(300))),
    $('a[href^="#"]').on("click", function (e) {
        window.location.reload();
    });
var showSubmenu = 1,
    initialWindowWidth = window.innerWidth;
jQuery(document).ready(function (e) {
    function t() {
        var t = e(window).scrollTop();
        window.innerWidth;
        if ((t >= 140 ? e("header").addClass("fixed animated half fadeInDownBig") : e("header").hasClass("activeSubmenu") || e("header").removeClass("fixed animated half fadeInDownBig"), e(".information-block").length)) {
            e(".back-menu .add-elements").css("bottom", -e(".back-menu .add-elements").outerHeight());
            var a = e(".information-block").offset().top - 56;
            t >= a
                ? (e(".back-menu .add-elements").show().addClass("animated half flipInX"), e("header.fixed .menu-header").css("box-shadow", "none"))
                : a > t && (e(".back-menu .add-elements").hide().removeClass("animated half flipInX"), e("header.fixed .menu-header").removeAttr("style"));
        }
    }
    function a() {
        h = new IScroll(".Iscroll", { scrollX: !0, freeScroll: !0, click: !0 });
    }
    function i() {
        h = new IScroll(".cover-calendar .cover-days", { scrollX: !0, freeScroll: !0, click: !0 });
    }
    function s() {
        var e = { scaleControl: !0, scrollwheel: !1, zoom: 17, center: new google.maps.LatLng(39.547248, -0.386797), mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"] } };
        map = new google.maps.Map(document.getElementById("maps-luis-campos"), e);
        var t = "img/map-icon.png";
        new google.maps.Marker({ map: map, icon: t, scale: 1, position: new google.maps.LatLng(39.547248, -0.386797) });
        (panorama = map.getStreetView()), panorama.setPosition(new google.maps.LatLng(39.547248, -0.386797)), panorama.setPov({ heading: 265, pitch: 0 });
    }
    function n(e, t) {
        (e = Number(e)), (t = Number(t));
        var a = { scaleControl: !0, scrollwheel: !1, zoom: 17, center: new google.maps.LatLng(e, t), mapTypeControlOptions: { mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"] } };
        map = new google.maps.Map(document.getElementById("gmaps"), a);
        var i = "img/map-icon.png";
        new google.maps.Marker({ map: map, icon: i, scale: 1, position: new google.maps.LatLng(e, t) });
        (panorama = map.getStreetView()), panorama.setPosition(new google.maps.LatLng(e, t)), panorama.setPov({ heading: 265, pitch: 0 });
    }
    e(document).on("click", function (t) {
        var a = window.innerWidth;
        if (0 == e(t.target).closest(".submenu").length && 1024 > a && 0 == e(t.target).closest("header").length) {
            var i = e(window).scrollTop();
            140 > i && e(".submenu").parents("header").removeClass("fixed"),
                e(".submenu")
                    .stop()
                    .animate({ right: -400 }, 500, function () {
                        e(this).hide();
                    }),
                e(".ctrl-menu").removeClass("active"),
                e(".submenu").parents("header").removeClass("activeSubmenu"),
                (showSubmenu = 1);
        }
    }),
        e(".next-module").on("click", function (t) {
            t.preventDefault();
            var a = e(this).parents(".module").next(".module");
            e("html, body")
                .stop()
                .animate({ scrollTop: a.offset().top - e(".menu-header").innerHeight() }, 700, "swing");
        }),
        e(".menu li[data-menu]").on("mouseenter", function (t) {
            var a = window.innerWidth;
            if (a > 1024 && !e(this).hasClass("active")) {
                e(this).addClass("active"), e(this).siblings("li").removeClass("active"), e(this).parents(".menu").find(".search-icon").addClass("active");
                var i = e(this).attr("data-menu");
                if (
                    (e(this).parents(".back-menu").addClass("back-color"),
                    e(this).parents(".back-menu").next(".submenu").removeAttr("style"),
                    e('.submenu div[data-menu="' + i + '"]')
                        .siblings("div")
                        .stop()
                        .hide(),
                    "" == i || void 0 == i)
                )
                    return;
                e(this).parents(".back-menu").next(".submenu").stop().fadeIn(300),
                    e('.submenu div[data-menu="' + i + '"]')
                        .stop()
                        .fadeIn(500),
                    "busqueda" == i && e(".search-btn").focus();
            }
        }),
        e(".back-menu").on("mouseleave", function (t) {
            var a = e(this).find("li.active").attr("data-menu");
            ("" == a || void 0 == a) && (e(".menu li[data-menu],.menu .search-icon").removeClass("active"), e(this).removeClass("back-color"));
        }),
        e(".submenu").on("mouseleave", function (t) {
            var a = window.innerWidth;
            a > 1024 &&
                (e(this)
                    .stop()
                    .slideUp(500, function () {
                        e(this).removeAttr("style");
                    }),
                e(this).find("div[data-menu]").stop().fadeOut(500),
                e(this).prev(".back-menu").find(".menu li[data-menu],.menu .search-icon").removeClass("active"),
                e(this).prev(".back-menu").removeClass("back-color"));
        }),
        e(".ctrl-menu").on("click", function (t) {
            t.preventDefault(), e(this).toggleClass("active");
            var a = window.innerHeight,
                i = e(window).scrollTop();
            140 > i && e(this).parents("header").toggleClass("fixed"), e(this).parents("header").toggleClass("activeSubmenu");
            var s = e(".back-menu").outerHeight();
            e(".submenu").css({ height: a - s }),
                1 == showSubmenu
                    ? (e(".submenu").show(), e(".submenu").stop().animate({ right: 0 }, 500), (showSubmenu = 0))
                    : 0 == showSubmenu &&
                      (e(".submenu")
                          .stop()
                          .animate({ right: -400 }, 500, function () {
                              e(this).hide();
                          }),
                      (showSubmenu = 1));
        }),
        e(".submenu .category").on("click", function (t) {
            t.preventDefault(),
                e(this).toggleClass("active"),
                e(this).next(".cover-tags").stop().slideToggle(300),
                e(this).parents("div[data-menu]").siblings("div[data-menu]").find(".category").removeClass("active"),
                e(this).parents("div[data-menu]").siblings("div[data-menu]").find(".cover-tags").stop().slideUp(300);
        }),
        e.each(e("header .top-header ul > li"), function (t, a) {
            e(a).parents(".left").length
                ? e('.submenu .generic-links[data-menu="centros"] ul').append(e(a).clone())
                : e(a).parents(".right").length && (e(a).is(".lang") ? e('.submenu .generic-links[data-menu="idiomas"] ul').append(e(a).find("li").clone()) : e('.submenu .generic-links[data-menu="perfiles"] ul').append(e(a).clone()));
        }),
        e.each(e(".information-block .clone"), function (t, a) {
            e(".add-elements .center").append(e(a).clone());
        }),
        e.each(e(".gallery .slide"), function (t, a) {
            var i = e(a).find("> img").attr("src");
            e(a).css({ "background-image": "url(" + i + ")", "background-size": "cover", "background-position": "center center" }), e(a).find("> img").remove();
        }),

        e.each(e(".chart"), function (t, a) {
            function i() {
                o.clearRect(0, 0, l, r),
                    o.beginPath(),
                    (o.strokeStyle = e(a).attr("data-bgcolor")),
                    (o.lineWidth = 10),
                    o.arc(l / 2, 50, 40, 0, 2 * Math.PI, !1),
                    o.stroke(),
                    o.beginPath(),
                    (o.strokeStyle = e(a).attr("data-bgcolor")),
                    (o.lineWidth = 10),
                    o.arc(l / 2, 155, 65, 0, 2 * Math.PI, !1),
                    o.stroke();
                var t = (d * Math.PI) / 180;
                o.beginPath(),
                    (o.strokeStyle = e(a).attr("data-color")),
                    (o.lineWidth = 10),
                    o.arc(l / 2, 50, 40, 0 - (90 * Math.PI) / 180, t - (90 * Math.PI) / 180, !1),
                    o.stroke(),
                    (o.fillStyle = "#575757"),
                    (o.font = "26px UtopiaBold"),
                    (text = Math.floor((d / 360) * 100) + "%"),
                    (text_width = o.measureText(text).width),
                    o.fillText(text, l / 2 - text_width / 2, r);
            }
            function s() {
                var t = (360 * e(a).attr("data-percent")) / 100,
                    s = t - d;
                setInterval(function () {
                    t > d && d++, i();
                }, 100 / s);
            }
            var n = e(a)[0],
                o = n.getContext("2d"),
                l = n.width,
                r = n.height,
                d = 0;
            s();
        });
    var o = 0;
    (o = window.innerWidth <= 900 ? 2 : 3),
        e.each(e(".module-news .item"), function (t, a) {
            o > t &&
                setTimeout(function () {
                    e(a).css({ display: "inline-block" }).addClass("zoomIn").removeClass("hide");
                }, 400 * t);
        }),
        e(".module-news .plus").on("click", function (t) {
            if ((t.preventDefault(), e(this).hasClass("reverse"))) {
                var a = 0;
                e.each(e(".module-news .item").get().reverse(), function (t, i) {
                    e(i).is(".change") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                                setTimeout(function () {
                                    e(i).addClass("hide");
                                }, 300);
                        }, 300 * (a - 1)));
                }),
                    e(this).removeClass("reverse"),
                    e("html, body")
                        .stop()
                        .animate({ scrollTop: e(this).parents(".module-news").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
            } else {
                var a = 0;
                e.each(e(".module-news .item"), function (t, i) {
                    e(i).is(".hide") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).css({ display: "inline-block" }).removeClass("zoomOut hide").addClass("zoomIn change");
                        }, 300 * (a - 1)));
                }),
                    e(this).addClass("reverse");
            }
        }),
        e(".module-experience").length &&
            (e.each(e(".module-experience"), function (t, a) {
                var i = 0;
                (i =
                    window.innerWidth <= 900
                        ? 3
                        : window.innerWidth <= 550
                        ? 2
                        : "" != e(a).attr("data-showElements") && void 0 != e(a).attr("data-showElements") && 0 == isNaN(e(a).attr("data-showElements"))
                        ? parseInt(e(a).attr("data-showElements"))
                        : 5),
                    e.each(e(a).find(".col"), function (t, a) {
                        i > t &&
                            setTimeout(function () {
                                e(a).css({ display: "inline-block" }).addClass("zoomIn").removeClass("hide"),
                                    setTimeout(function () {
                                        e(a).removeAttr("style");
                                    }, 400);
                            }, 400 * t);
                    });
            }),
            e(".module-experience").on("click", ".plus", function (t) {
                if ((t.preventDefault(), e(this).hasClass("reverse"))) {
                    var a = 0;
                    e.each(e(this).parents(".module-experience").find(".col").get().reverse(), function (t, i) {
                        e(i).is(".change") &&
                            ((a += 1),
                            setTimeout(function () {
                                e(i).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                                    setTimeout(function () {
                                        e(i).addClass("hide");
                                    }, 300);
                            }, 300 * (a - 1)));
                    }),
                        e(this).removeClass("reverse"),
                        e("html, body")
                            .stop()
                            .animate({ scrollTop: e(this).parents(".module-experience").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
                } else {
                    var a = 0;
                    e.each(e(this).parents(".module-experience").find(".col"), function (t, i) {
                        e(i).is(".hide") &&
                            ((a += 1),
                            setTimeout(function () {
                                e(i).css({ display: "inline-block" }).removeClass("zoomOut hide").addClass("zoomIn change"),
                                    setTimeout(function () {
                                        e(i).removeAttr("style");
                                    }, 300);
                            }, 300 * (a - 1)));
                    }),
                        e(this).addClass("reverse");
                }
            }));
    var l = 4;
    (l =
        window.innerWidth <= 900
            ? 2
            : "" != e(".events-section").attr("data-showElements") && void 0 != e(".events-section").attr("data-showElements") && 0 == isNaN(e(".events-section").attr("data-showElements"))
            ? parseInt(e(".events-section").attr("data-showElements"))
            : 4),
        e.each(e(".events-section .item"), function (t, a) {
            l > t &&
                setTimeout(function () {
                    e(a).css({ display: "inline-block" }).addClass("zoomIn").removeClass("hide"),
                        setTimeout(function () {
                            e(a).removeAttr("style");
                        }, 400);
                }, 400 * t);
        }),
        e(".module-events .plus").on("click", function (t) {
            if ((t.preventDefault(), e(this).hasClass("reverse"))) {
                var a = 0;
                e.each(e(".events-section .item").get().reverse(), function (t, i) {
                    e(i).is(".change") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                                setTimeout(function () {
                                    e(i).addClass("hide");
                                }, 300);
                        }, 300 * (a - 1)));
                }),
                    e(this).removeClass("reverse"),
                    e("html, body")
                        .stop()
                        .animate({ scrollTop: e(this).parents(".module-events").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
            } else {
                var a = 0;
                e.each(e(".events-section .item"), function (t, i) {
                    e(i).is(".hide") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).css({ display: "inline-block" }).removeClass("zoomOut hide").addClass("zoomIn change"),
                                setTimeout(function () {
                                    e(i).removeAttr("style");
                                }, 300);
                        }, 300 * (a - 1)));
                }),
                    e(this).addClass("reverse");
            }
        });
    var r = 0;
    if (
        ((r = window.innerWidth <= 900 ? 2 : 3),
        e.each(e(".division-section .item"), function (t, a) {
            r > t &&
                setTimeout(function () {
                    e(a).css({ display: "block" }).addClass("zoomIn").removeClass("hide"),
                        setTimeout(function () {
                            e(a).removeAttr("style");
                        }, 400);
                }, 400 * t);
        }),
        e(".division-section .plus").on("click", function (t) {
            if ((t.preventDefault(), e(this).hasClass("reverse"))) {
                var a = 0;
                e.each(e(".division-section .item").get().reverse(), function (t, i) {
                    e(i).is(".change") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                                setTimeout(function () {
                                    e(i).addClass("hide");
                                }, 300);
                        }, 300 * (a - 1)));
                }),
                    e(this).removeClass("reverse"),
                    e("html, body")
                        .stop()
                        .animate({ scrollTop: e(this).parents(".division-section").parents(".module").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
            } else {
                var a = 0;
                e.each(e(".division-section .item"), function (t, i) {
                    e(i).is(".hide") &&
                        ((a += 1),
                        setTimeout(function () {
                            e(i).css({ display: "block" }).removeClass("zoomOut hide").addClass("zoomIn change"),
                                setTimeout(function () {
                                    e(i).removeAttr("style");
                                }, 300);
                        }, 300 * (a - 1)));
                }),
                    e(this).addClass("reverse");
            }
        }),
        e(".division-section").length && initialWindowWidth > 900)
    ) {
        var d = e(".list-information .top-block").offset().top - e(".division-section").offset().top;
        e(".division-section").find(".block").css({ "margin-top": d });
    }
    e.each(e(".accordeon-list .accordeon-item"), function (t, a) {
        var i = e(a).attr("data-background");
        e(a).css({ background: "url('" + i + "') 50% 50% no-repeat", "background-size": "cover" });
    }),
        e(".accordeon-list .accordeon-item").on("mouseenter", function (t) {
            window.innerWidth > 750 && (e(this).removeClass("small").addClass("big"), e(this).siblings(".accordeon-item").removeClass("big").addClass("small"), e(e(this).find(".box")[0]).addClass("animated fadeInUp"));
        }),
        e(".accordeon-list .accordeon-item").on("mouseleave", function (t) {
            window.innerWidth > 750 && (e(this).removeClass("small big"), e(this).siblings(".accordeon-item").removeClass("small big"), e(e(this).find(".box")[0]).removeClass("animated fadeInUp"));
        });
    var c = 4;
    (c =
        window.innerWidth <= 900
            ? 2
            : "" != e(".activities-section").attr("data-showElements") && void 0 != e(".activities-section").attr("data-showElements") && 0 == isNaN(e(".activities-section").attr("data-showElements"))
            ? parseInt(e(".activities-section").attr("data-showElements"))
            : 4),
        e.each(e(".activities-section .box"), function (t, a) {
            c > t &&
                setTimeout(function () {
                    e(a).removeClass("hide").css({ display: "inline-block" }).addClass("zoomIn"),
                        setTimeout(function () {
                            e(a).removeAttr("style");
                        }, 400);
                }, 400 * t);
        }),
        e(".activities-section .plus").on("click", function (t) {
            if ((t.preventDefault(), isNaN(parseFloat(e(".activities-section").attr("data-showNextElements")))))
                if (e(this).hasClass("reverse")) {
                    var a = 0;
                    e.each(e(".activities-section .box.change").get().reverse(), function (t, i) {
                        (a += 1),
                            setTimeout(function () {
                                e(i).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                                    setTimeout(function () {
                                        e(i).addClass("hide");
                                    }, 300);
                            }, 300 * (a - 1));
                    }),
                        e(this).removeClass("reverse"),
                        e("html, body")
                            .stop()
                            .animate({ scrollTop: e(this).parents(".module-events").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
                } else {
                    var a = 0;
                    e.each(e(".activities-section .box.hide"), function (t, i) {
                        (a += 1),
                            setTimeout(function () {
                                e(i).css({ display: "inline-block" }).removeClass("zoomOut hide").addClass("zoomIn change"),
                                    setTimeout(function () {
                                        e(i).removeAttr("style");
                                    }, 300);
                            }, 300 * (a - 1));
                    }),
                        e(this).addClass("reverse");
                }
            else {
                var i = parseFloat(e(".activities-section").attr("data-showNextElements"));
                if (e(".activities-section .box.hide").length > 0) {
                    e(".activities-section .box.hide").length <= i && e(this).addClass("reverse");
                    var a = 0;
                    e.each(e(".activities-section .box.hide"), function (t, s) {
                        i > t &&
                            ((a += 1),
                            setTimeout(function () {
                                e(s).css({ display: "inline-block" }).removeClass("zoomOut hide").addClass("zoomIn change"),
                                    setTimeout(function () {
                                        e(s).removeAttr("style");
                                    }, 300);
                            }, 300 * (a - 1)));
                    });
                } else
                    e.each(e(".activities-section .box.change").get().reverse(), function (t, a) {
                        e(a).removeAttr("style").removeClass("change zoomIn").addClass("zoomOut"),
                            setTimeout(function () {
                                e(a).addClass("hide");
                            }, 300);
                    }),
                        e(this).removeClass("reverse"),
                        e("html, body")
                            .stop()
                            .animate({ scrollTop: e(this).parents(".module-events").offset().top - e(".menu-header").innerHeight() }, 700, "swing");
            }
        }),
        e.each(e(".video-section"), function (t, a) {
            var i = e(a).find(".back-video").attr("src");
            e(a).find(".back-video").remove(), e(a).css({ background: "url(" + i + ") no-repeat", "background-position": "center", "background-size": "cover" });
        }),
        e(".open-modal").on("click", function (t) {
            t.preventDefault();
            var a = e(this).attr("data-modal");
            if ((e('.modalbox[data-modal="' + a + '"]').fadeIn(300), "video" == a)) {
                var i = e(this).attr("data-uri"),
                    s = '<iframe class="iframe" src="' + i + '" frameborder="0" allowfullscreen></iframe>';
                e('.modalbox[data-modal="video"]').find(".video").append(s);
            }
            if ("modalImg" == a) {
                var i = e(this).attr("data-bigImg");
                e('.modalbox[data-modal="modalImg"]').find(".cover-img img").attr("src", i);
            }
            if (
                "modalImgSlide" == a ||
                "modalImgSlide1" == a ||
                "modalImgSlide2" == a ||
                "modalImgSlide3" == a ||
                "modalImgSlide4" == a ||
                "modalImgSlide5" == a ||
                "modalImgSlide6" == a ||
                "modalImgSlide7" == a ||
                "modalImgSlide8" == a ||
                "modalImgSlide9" == a ||
                "modalImgSlide10" == a
            ) {
                var n = e(this).parents(".thumbs").index();
            }
        }),
        e(".open-internal").on("click", function (t) {
            t.preventDefault(), e(this).parents(".modalbox").find(".internal-modal").fadeIn(300);
        }),
        e(window).scroll(t);
    var m = window.innerWidth;
    if (900 > m && e(".Iscroll").length) {
        var h;
        a();
    }
    if (e(".cover-calendar .cover-days").length) {
        var h;
        i(), console.log("asd");
    }
    var u = e(".input-file-picker").text();
    if (
        (e(".input-file-picker").on("click", function (t) {
            t.preventDefault(), e(this).prev('input[type="file"].form-ctrl').trigger("click");
        }),
        e('input[type="file"].form-ctrl').on("change", function (t) {
            t.preventDefault();
            var a = e(this).next(".input-file-picker");
            e(a).html(e(this)[0].files[0].name + '<i class="remove"></i>');
        }),
        e(".input-file-picker").on("click", ".remove", function (t) {
            t.preventDefault(), e(".input-file-picker").html(u + "<i></i>");
        }),
        e(".cover-calendar .cover-days").on("click", "li", function (t) {
            e(this).siblings("li").removeClass("active"), e(this).addClass("active");
        }),
        e(document).on("click", ".cover-acordeon .tag", function (t) {
            t.preventDefault(),
                e(this).toggleClass("active"),
                e(this).next(".acordeon-box").stop().slideToggle(300),
                e(this).closest(".acordeon").siblings(".acordeon").find(".tag").removeClass("active"),
                e(this).closest(".acordeon").siblings(".acordeon").find(".acordeon-box").removeClass("active").slideUp(300);
        }),
        e(".cover-acordeon .tag").is(".active") && e(".cover-acordeon .tag.active").next(".acordeon-box").slideDown(300),
        e(".tabs-navigation .tab-ctrl").on("click", function (t) {
            if ((t.preventDefault(), !e(this).hasClass("active"))) {
                e(this).addClass("active"), e(this).siblings(".tab-ctrl").removeClass("active");
                var a = e(this).index(),
                    i = e(this).parents(".tabs-navigation").attr("data-action");
                e('.tabs-elements[data-action="' + i + '"]')
                    .find(".tab:eq(" + a + ")")
                    .addClass("active"),
                    e('.tabs-elements[data-action="' + i + '"]')
                        .find(".tab:eq(" + a + ")")
                        .siblings(".tab")
                        .removeClass("active");
                var s = e('.tabs-elements[data-action="' + i + '"] .tab.active');
                if (/*e("html, body").stop().animate({ scrollTop: s.offset().top - e(".menu-header").innerHeight() }, 700, "swing"), */ e(".dynamic-title").length) {
                    var n = e(this).find("span").text();
                    e(".dynamic-title").text(n);
                }
            }
        }),
        e(".view-code").on("click", function (t) {
            t.preventDefault(), e(this).next("code").stop().slideToggle();
        }),
        e(".block-hover-info").on("mouseenter", ".box-hov", function (t) {
            t.preventDefault(), e(this).find(".front-info").addClass("fadeOut"), e(this).find(".back-info").removeClass("fadeOut").addClass("flipInX");
        }),
        e(".block-hover-info").on("mouseleave", ".box-hov", function (t) {
            t.preventDefault(), e(this).find(".front-info").removeClass("fadeOut"), e(this).find(".back-info").removeClass("flipInX").addClass("fadeOut");
        }),
        e(".areas li").hover(
            function () {
                e(this).siblings("li").addClass("opacity"), e(this).siblings("li.active").removeClass("opacity"), e(".areas .active").length && e(this).removeClass("opacity");
            },
            function () {
                e(".areas .active").length ? e(this).hasClass("active") || e(this).addClass("opacity") : e(this).siblings("li").removeClass("opacity");
            }
        ),
        e(".areas li").on("click", function (t) {
            if ((t.preventDefault(), e(this).hasClass("active"))) e(this).removeClass("active opacity"), e(this).siblings("li").removeClass("opacity"), e(".areas-content [data-area]").hide();
            else {
                e(this).siblings("li").removeClass("active").addClass("opacity"), e(this).removeClass("opacity").addClass("active").removeAttr("style");
                var a = e(this).attr("data-area");
                e(".areas-content [data-area]").hide(), e('.areas-content [data-area="' + a + '"]').fadeIn();
            }
        }),
        e(".description-table").length &&
            (e.each(e(".description-table .body-info .cdu"), function (t, a) {
                e(a).prepend(e(".description-table .head-info .cdu .show").clone(!0));
            }),
            e.each(e(".description-table .body-info .content"), function (t, a) {
                e(a).prepend(e(".description-table .head-info .content .show").clone(!0));
            }),
            e.each(e(".description-table .body-info .room"), function (t, a) {
                e(a).prepend(e(".description-table .head-info .room .show").clone(!0));
            })),
        e(document).on("mouseleave", ".clone", function (t) {
            t.preventDefault(), e(this).find(".links-elements").stop().hide();
        }),
        e(document).on("mouseleave", ".links-elements", function (t) {
            t.preventDefault(), e(this).stop().hide();
        }),
        e(document).on("mouseenter", ".hover-action", function (t) {
            t.preventDefault(), e(t.target).is(".hover-action") && (e(".links-elements").hide(), e(this).next(".links-elements").stop().show());
        }),
        e(".results-box .box").length &&
            e.each(e(".results-box .box"), function (t, a) {
                var i = e(a).find("img").attr("src");
                e(a)
                    .find("figure")
                    .css({ background: "url(" + i + ")", "background-position": "center center", "background-size": "cover" }),
                    e(a).find("img").remove();
            }),
        e(".portlet .portlet-title .collapse").on("click", function (t) {
            t.preventDefault(), e(this).parents(".portlet-title").next(".portlet-body").slideToggle(300);
        }),
        e('[data-toggle="tooltip"]').tooltip(),
        e(".form-ctrl.multiselect").length && e(".form-ctrl.multiselect").multiselect(),
        e(".form-steps").length &&
            (e(".form-steps").css("width", 100 * e(".form-steps .step").length + "%"),
            e(".form-steps .step").each(function (t, a) {
                var i = 100 / e(".form-steps .step").length;
                e(a).css({ width: i + "%" });
            }),
            e(".form-steps .next-step").on("click", function (t) {
                t.preventDefault(), e(this).parents(".form-steps").animate({ left: "-=100%" }, 300), console.log(e(this).parents(".form-steps"));
            }),
            e(".form-steps .prev-step").on("click", function (t) {
                t.preventDefault(), e(this).parents(".form-steps").animate({ left: "+=100%" }, 300);
            })),
        e(document).on("click", ".residence-list .residence-box .btn", function (t) {
            if (!e(this).hasClass("link")) {
                t.preventDefault();
                var a = e(this).parents(".residence-box").index();
                e(this).parents(".residence-list").hide(),
                    e(this).parents(".residence-list").next(".residence-detail").show(),
                    e(".residence-detail")
                        .find(".detail-box:eq(" + a + ")")
                        .fadeIn(300);
            }
        }),
        e(".residence-detail .back").on("click", function (t) {
            t.preventDefault(), e(this).parents(".residence-detail").hide().find(".detail-box").hide(), e(this).parents(".residence-detail").prev(".residence-list").fadeIn(300);
        }),
        e(".select-panel-admission").on("click", ".next-step", function (t) {
            if ((t.preventDefault(), "" != e(".dni").val() || "" != e(".passport").val())) {
                if ("" != e(".dni").val()) var a = "nacional";
                else if ("" != e(".passport").val()) var a = "internacional";
                else var a = "";
                e(".nav-admission").find(".step.active").removeClass("active").next().addClass("active"),
                    e(this).parents(".step").removeClass("active"),
                    e(this).parents(".step").next().is(".nacional") || e(this).parents(".step").next().is(".internacional")
                        ? "nacional" == a
                            ? (console.log(a), e(".select-panel-admission .step.nacional").addClass("active"))
                            : "internacional" == a
                            ? e(".select-panel-admission .step.internacional").addClass("active")
                            : e(".select-panel-admission .step:eq(0)").addClass("active")
                        : e(this).parents(".step").next().addClass("active");
            }
        }),
        e("#maps-luis-campos").length && s(),
        e("#gmaps").length)
    ) {
        var v = e("#gmaps").attr("data-lat"),
            p = e("#gmaps").attr("data-lng");
        n(v, p);
        var f = !0;
        e(document).on("click", function (t) {
            e("#gmaps").length && e("#gmaps").is(":visible") && 1 == f && (n(v, p), (f = !1));
        });
    }
    e(".acordeon-box.hide-acordeon").length &&
        (e.each(e(".acordeon-box.hide-acordeon"), function (t, a) {
            var i = e(a).attr("data-acordeonShow");
            e.each(e(a).find(".acordeon"), function (t, a) {
                i > t && e(a).show();
            });
        }),
        e(".acordeon-box.hide-acordeon .plus").on("click", function (t) {
            t.preventDefault();
            var a = Number(e(this).parents(".acordeon-box.hide-acordeon").attr("data-acordeonShow")) + Number(e(this).parents(".acordeon-box.hide-acordeon").find(".acordeon:visible").length);
            console.log(a),
                e.each(e(this).parents(".acordeon-box.hide-acordeon").find(".acordeon"), function (t, i) {
                    e(i).is(":visible") || (a > t && e(i).show());
                });
        })),
        e(".mask-chronology").length,
        e(".mask-chronology").on("click", ".point", function (t) {
            t.preventDefault(), e(this).parents("li").siblings("li").removeClass("active"), e(this).parents("li").addClass("active");
            var a = e(this).parents("li").index() * e(this).parents("li").innerWidth();
            e(".mask-chronology").animate({ scrollLeft: a }, 300);
        }),
        e(".chronology .arrow-right").on("click", function (t) {
            t.preventDefault();
            var a = e(this).prev(".mask-chronology").innerWidth();
            e(this).prev(".mask-chronology").scrollLeft() + a > e(this).prev(".mask-chronology").find("li").length * e(this).prev(".mask-chronology").find("li").innerWidth() ||
                e(this)
                    .prev(".mask-chronology")
                    .animate({ scrollLeft: "+=" + a }, 300);
        }),
        e(".chronology .arrow-left").on("click", function (t) {
            t.preventDefault();
            var a = e(this).next(".mask-chronology").innerWidth();
            e(this)
                .next(".mask-chronology")
                .animate({ scrollLeft: "-=" + a }, 300);
        });
}),
    $(window).on("load", function (e) {}),
    $(window).on("resize", function (e) {
        var t = window.innerWidth;
        if (initialWindowWidth != t)
            if (t >= 1024) $("header, header *, header .submenu").removeAttr("style"), $("header .ctrl-menu").removeClass("active"), $("header").removeClass("activeSubmenu"), (showSubmenu = 1);
            else {
                $("header .ctrl-menu").removeClass("active"), $("header, header *").removeAttr("style"), $("header").removeClass("activeSubmenu"), (showSubmenu = 1);
                var a = $(window).scrollTop();
                140 > a && $("header").removeClass("fixed animated half fadeInDownBig");
            }
    });
