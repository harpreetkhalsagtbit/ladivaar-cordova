/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        $(document).ready(function() {
            if (typeof localStorage !== 'undefined') {
                try {
                    localStorage.setItem('feature_test', 'yes');
                    if (localStorage.getItem('feature_test') === 'yes') {
                        var user_theme = localStorage.getItem('theme');
                        less.modifyVars(themes[user_theme]);
                        // localStorage is enabled
                    } else {
                        // localStorage is disabled
                    }
                } catch(e) {
                    // localStorage is disabled
                }
            } else {
                // localStorage is not available
            }

			$(".list-group-home .list-item").click(function(e) {
				// $(".list-group-home").removeClass(" list-group-center")
				// $(".list-group-2").removeClass("list-group-right")
				// $(".list-group-3").removeClass("list-group-left")

				// $(".list-group-home").addClass("list-group-left")
				// $(".list-group-2").addClass("list-group-center")
				// $(".list-group-3").addClass("list-group-right")
			})

			$(".list-group-2 .list-item").click(function(e) {
				$(".list-group-2").removeClass(" list-group-center")
				$(".list-group-3").removeClass("list-group-right")
				$(".list-group-home").removeClass("list-group-left")

				$(".list-group-2").addClass("list-group-left")
				$(".list-group-3").addClass("list-group-center")
				$(".list-group-home").addClass("list-group-right")
			})

			$(".list-group-3 .list-item").click(function(e) {
				$(".list-group-3").removeClass(" list-group-center")
				$(".list-group-home").removeClass("list-group-right")
				$(".list-group-2").removeClass("list-group-left")

				$(".list-group-3").addClass("list-group-left")
				$(".list-group-home").addClass("list-group-center")
				$(".list-group-2").addClass("list-group-right")
			})

			// $("footer").hide()
			$(".menu").hide();

			// hack - to show hide modal on load
			$(".hideModal").addClass("goToAngModalContainer").removeClass("hideModal");
			$(".hideMenu").removeClass("hideModal");

			$(".hideModalSettings").addClass("settingsModalContainer").removeClass("hideModalSettings");
			$(".hideMenu").removeClass("hideModalSettings");

            $(".goToAngModalContainer").hide();
			$(".goToAngModalContainer").on("click", function(evt) {
				evt.stopPropagation();
				$(".goToAngModalContainer").hide();
			})

            $(".settingsModalContainer").hide();
			$(".settingsModalContainer").on("click", function(evt) {
				evt.stopPropagation();
				$(".settingsModalContainer").hide();
			})

            // $("[data-attr='srigurugranthsahib_ang']").hide()
            $(window).on('hashchange', function() {
            	console.log("haschange", window.location.hash)
                $(".goToAngModalContainer").hide();
                $(".settingsModalContainer").hide();

                // hack
                $(".nitnem_listX").css("display", "none");

                if (window.location.hash == "") {
                    // showMe('homeList')
                    // $(".headerTitle").html("Ladivaar.com")


                    $(".main_screen_list").removeClass("list-group-left")
                    $(".tatkra_list").removeClass("list-group-center")  

                    // hack by harpreet to reset when back pressed multiple times
                    // from nitnem_bani page and gurbani page
                    $(".main_screen_list").removeClass("list-group-center")
					$(".nitnem_list").removeClass("list-group-right")
					$(".nitnem_list").removeClass("list-group-left")
					$(".nitnem_baani_page").removeClass("list-group-center")
					$(".nitnem_baani_page").addClass("list-group-right")
                    $(".guru_granth_sahib_baani").removeClass("list-group-center")
                    $(".guru_granth_sahib_baani").addClass("list-group-right")

                    // handle both cases for back
                    $(".main_screen_list").addClass("list-group-center")
                    $(".tatkra_list").addClass("list-group-right")

					$(".main_screen_list").addClass("list-group-center")
					$(".nitnem_list").addClass("list-group-right")
					$(".title").html("ਲੜੀਵਾਰ")
		            // $("footer").hide()
		            setTimeout(function() {
		            	$(".menu").hide();
		            }, 100)

                }
                if (window.location.hash == "#srigurugranthsahibjee") {
                    // showMe('tatkra')
                    // $(".headerTitle").html("ਤਤਕਰਾ ਰਾਗਾਂ ਕਾ")

					$(".main_screen_list").removeClass("list-group-center")
					$(".tatkra_list").removeClass("list-group-right")
                    $(".guru_granth_sahib_baani").removeClass("list-group-center")


                    // handle both cases for back
                    $(".tatkra_list").removeClass("list-group-left")

                    $(".guru_granth_sahib_baani").addClass("list-group-right")
					$(".main_screen_list").addClass("list-group-left")
					$(".tatkra_list").addClass("list-group-center")

					$(".guru_granth_sahib_baani").css("display", "none")
		            // $("footer").show()
					$(".title").html("ਤਤਕਰਾ ਰਾਗਾਂ ਕਾ")
					setTimeout(function() {
						$(".menu").hide();
					}, 100)

                } else if (window.location.hash == "#nitnem") {
                    // showMe('nitnem_tatkra')
                    // $(".headerTitle").html("ਨਿਤਨੇਮ")

					$(".main_screen_list").removeClass("list-group-center")
					$(".nitnem_list").removeClass("list-group-right")
					$(".nitnem_list").removeClass("list-group-left")
					$(".nitnem_baani_page").removeClass("list-group-center")


					$(".main_screen_list").addClass("list-group-left")
					$(".nitnem_list").addClass("list-group-center")
					$(".nitnem_baani_page").addClass("list-group-right")
					$(".title").html("ਨਿਤਨੇਮ")
					setTimeout(function() {
						$(".menu").hide();
					}, 100)

                } else if (window.location.hash.match(/nitnem_.*/)) {
					$(".nitnem_list").removeClass("list-group-center")
					$(".nitnem_list").addClass("list-group-left")

					$(".nitnem_baani_page").removeClass("list-group-right")
					$(".nitnem_baani_page").addClass("list-group-center")

                    var _res = window.location.hash.split(/nitnem_/)
                    if (_res.length) {
                        var _baaniName = _res[1]
                        var _baani = nitnemBaani[_baaniName];
                        $(".title").html(nitnemBaniList[_baaniName])
                        ladivaarGenerator(_baani, $("#nitnem_baani_container"), true)
                        $(".nitnem_baani_page").scrollTop(0);
                    }
					setTimeout(function() {
						$(".menu").hide();
                        // $(".highlightH1").removeClass('highlightH1')
                        // $(".highlightP").removeClass('highlightP')
					}, 100)
                    // showMe('nitnem_gurbani')
                } else if (window.location.hash.match(/_ang_\d{1,4}/)) {
                	setTimeout(function() {
						$(".guru_granth_sahib_baani").css("display", "block")
                	},1000)

					$(".tatkra_list").removeClass("list-group-center")
					$(".tatkra_list").addClass("list-group-left")

					$(".guru_granth_sahib_baani").removeClass("list-group-right")
					$(".guru_granth_sahib_baani").addClass("list-group-center")
                    // $(".headerTitle").html("ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ")
                    var _res = window.location.hash.match(/_ang_\d{1,4}/);
                    if (_res.length) {
                        var _angString = _res[0]
                        if (_angString.match(/\d+/)) {
                            ang = _angString.match(/\d+/)[0]
                            ang--;
                            window.angNo = ang;
                            var _angData = data[ang];
                            var _baani = _angData.baani
                            // baani_container
                            var center = $(".list-group-center-on-next").length?$(".list-group-center-on-next"):$(".list-group-center-on-prev")
                            ladivaarGenerator(_baani, center, false)
                            $(".title").html((ang + 1) + "/1430")
                            // $("footer").show()

							// $("#angNo").html("ਅੰਗ - " + (ang + 1) + "/1430")
                            // $('#angPositionFooter').html((ang + 1) + "/1430")
                        }
                        $(".nitnem_listX").show();
                        setTimeout(function() {
							$(".menu").hide();
                            $(".highlightH1").removeClass('highlightH1')
                            $(".highlightP").removeClass('highlightP')
                        }, 100)

                        // showMe('srigurugranthsahib_ang')
                    }
                }
            })

        });
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", function() {
        	console.log("back button presed")
			if (window.location.hash.match(/_ang_\d{1,4}/)) {
				window.location.hash = "srigurugranthsahibjee"
			} else if(window.location.hash.match(/nitnem_.*/)) {
				window.location.hash = "nitnem"
			} else if(window.location.hash.match(/nitnem/)) {
				window.location.hash = ""
			} else if(window.location.hash.match(/srigurugranthsahibjee/)) {
				window.location.hash = ""
			}

        }, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    onBackKeyDown:function() {
        console.log("hello back")
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

var nitnemBaniList = {
    "japjeesahib": "ਜਪੁਜੀ ਸਾਹਿਬ",
    "jaapsahib": "ਜਾਪੁ ਸਾਹਿਬ",
    "tavprasadsavaiye": "ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸ੍ਵਯੇ",
    "chaupaisahib": "ਚੌਪਈ ਸਾਹਿਬ",
    "anandsahib": "ਅਨੰਦੁ ਸਾਹਿਬ",
    "rehrassahib": "ਰਹਰਾਸਿ ਸਾਹਿਬ",
    "sohilasahib":"ਸੋਹਿਲਾ ਸਾਹਿਬ"
}

var themes = [{
    "@backgroundColor":"#171233",
    "@primaryColor":"#C9A758",
    "@secondaryColor":"#49B8D1",
    "@highlightPrimary":"#f9f8f8",
    "@highlightSecondary":"#f9f8f8"
}, {
    "@backgroundColor":"#32313B",
    "@primaryColor":"#EC3F8C",
    "@secondaryColor":"#39B1C6",
    "@highlightPrimary":"#f9f8f8",
    "@highlightSecondary":"#f9f8f8"
}]

function ladivaarGenerator(baani, element, singleNumber) {
    $('h1 span').unbind("mouseover");
    $('h1 span').unbind("mouseout");
    $('p span').unbind("mouseover");
    $('p span').unbind("mouseout");

    // baani_container
    var _htmlString = "";
    var _paragraphStringHTMLArr = [];
    if (baani) {
        for (var i = 0; i < baani.length; i++) {
            var _paragraphsStr = null;
            if (singleNumber) {
                _paragraphsStr = baani[i].baani_content.replace(/([੦-੯]+॥){1,}/g, function($0) {
                    return $0 + "\n"
                })
            } else {
                _paragraphsStr = baani[i].baani_content.replace(/([੦-੯]+॥){2,}/g, function($0) {
                    return $0 + "\n"
                })
            }
            var _paragraphsArr = _paragraphsStr.trim().split(/\n/);
            if (_paragraphsArr && _paragraphsArr.length) {
                for (var paragraph = 0; paragraph < _paragraphsArr.length; paragraph++) {
                    var _wordsArr = _paragraphsArr[paragraph].split(/\s+/g);
                    if (_wordsArr.length) {
                        if (baani[i].bold || baani[i].tab) {
                            _paragraphStringHTMLArr.push("<h1 class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></h1>")
                        } else {
                            _paragraphStringHTMLArr.push("<p class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></p>")
                        }
                    }
                }
            } else {
                console.log("Error", baani[i].baani_content)
                var _wordsArr = baani[i].baani_content.split(/\s+/g);
                if (_wordsArr.length) {
                    _paragraphStringHTMLArr.push("<p class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></p>")
                }
            }
        }
        _htmlString = "<div class='baaniFormatting'>" + _paragraphStringHTMLArr.join("</div><div class='baaniFormatting'>") + "</div>"
        $(element).html(_htmlString)
        setTimeout(function() {
            $(element).scrollTop(0);
        }, 1000)

        // $("[data-attr='homeList']").hide();
        // $("[data-attr='tatkra']").hide()
        // $("[data-attr='srigurugranthsahib_ang']").show()

        $('h1 span').mouseover(function() {
            $(this).addClass('highlightH1')
        });
        $('h1 span').mouseout(function() {
            $(this).removeClass('highlightH1')
        });
        $('p span').mouseover(function() {
            $(this).addClass('highlightP')
        });
        $('p span').mouseout(function() {
            $(this).removeClass('highlightP')
        });
    }
}

var pageList = ['homeList', 'tatkra', 'srigurugranthsahib_ang', 'nitnem_tatkra', 'nitnem_gurbani']

function showMe(me) {
    for (var i = 0; i < pageList.length; i++) {
        $("[data-attr='" + pageList[i] + "']").hide()
    }
    $("[data-attr='" + me + "']").show()
}

$(".menu_control").bind("click", function() {
    $(".menu").show();
})

$("#goTo").bind("click", function() {
	setTimeout(function() {
		$(".menu").hide();
	}, 100)
	$(".goToAngModalContainer").show();
})

$("#settings").bind("click", function() {
	setTimeout(function() {
		$(".menu").hide();
	}, 100)
	$(".settingsModalContainer").show();
})

$('.goToAngModalChildWrapper').on('click', function(e){
    // stop the event from bubbling.
    e.stopPropagation();
});

$('.settingsModalChildWrapper').on('click', function(e){
    // stop the event from bubbling.
    e.stopPropagation();
});

$("body").bind("click", function(evt) {
    var regEx = /menu_control/;
    var check = (evt.target && evt.target.className && evt.target.className.baseVal) || evt.target.className
    if(!regEx.test(check)){
        $(".menu").hide();
    }
});

$("#goToButton").bind("click", function() {
	var angNo = $("#goToAngText").val()
	$("#goToAngText").val("")

	if(angNo > 0 && angNo <= 1430) {
		if(window.location.hash.match(/_ang_\d{1,4}/)) {
	        window.location.hash = "srigurugranthsahibjee_ang_" + angNo;
		} else if(window.location.hash.match(/nitnem_/)) {
			$(".main").hide()
			$(".title").hide()

	        setTimeout(function() {
	        	window.location.hash = "nitnem";
		        setTimeout(function() {
			        window.location.hash = "";
			        setTimeout(function() {
			        	window.location.hash = "srigurugranthsahibjee";
				        setTimeout(function() {
					        window.location.hash = "srigurugranthsahibjee_ang_" + angNo;
                            $(".main_screen_list").show()
                            setTimeout(function() {
                                $(".main").show()
                                $(".title").show()                    
                            }, 300);
				        }, 300)
			        }, 300)

		        }, 300)
	        }, 300)
		} else if(window.location.hash.match(/nitnem/)) {
			$(".main_screen_list").hide()
			$(".nitnem_list").hide()

	        setTimeout(function() {
		        window.location.hash = "";
		        setTimeout(function() {
		        	window.location.hash = "srigurugranthsahibjee";
			        setTimeout(function() {
				        window.location.hash = "srigurugranthsahibjee_ang_" + angNo;
				        $(".main_screen_list").show()
				        $(".nitnem_list").show()
				        $(".nitnem_baani_page").show()

			        }, 300)
		        }, 300)

	        }, 300)
		} else {
	        setTimeout(function() {
	        	window.location.hash = "srigurugranthsahibjee";
		        setTimeout(function() {
			        window.location.hash = "srigurugranthsahibjee_ang_" + angNo;
		        }, 300)
	        }, 300)
		}
        // window.location.hash = "srigurugranthsahibjee_ang_" + angNo;
		$(".goToAngModalContainer").hide();
		$(".settingsModalContainer").hide();
	}
})

$('#goToAngButton').click(function() {
    var _ang = parseInt($("#goToAngTextBox").val());
    if (!isNaN(_ang) && _ang > 0 && _ang <= 1430) {
        window.location.hash = "srigurugranthsahibjee_ang_" + _ang
    }
    $('#myModal').modal('hide');
    $("#goToAngTextBox").val("")
})

$("#cancel").on("click", function() {
    $(".goToAngModalContainer").hide();
    $("#goToAngText").val("")
})

$(".iOS_navigation").on("click", function() {
    if (window.location.hash.match(/_ang_\d{1,4}/)) {
        window.location.hash = "srigurugranthsahibjee"
    } else if(window.location.hash.match(/nitnem_.*/)) {
        window.location.hash = "nitnem"
    } else if(window.location.hash.match(/nitnem/)) {
        window.location.hash = ""
    } else if(window.location.hash.match(/srigurugranthsahibjee/)) {
        window.location.hash = ""
    }  
})

$('input[name="optionThemeInput"]').on('change', function(e) {
    console.log(e.type, $(this).val());
    var themeIndex = $(this).val();
    console.log(themes[themeIndex])
    less.modifyVars(themes[themeIndex]);
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('feature_test', 'yes');
            if (localStorage.getItem('feature_test') === 'yes') {
                localStorage.setItem('theme', themeIndex);
                localStorage.removeItem('feature_test');
                // localStorage is enabled
            } else {
                // localStorage is disabled
            }
        } catch(e) {
            // localStorage is disabled
        }
    } else {
        // localStorage is not available
    }
});

function minmax(value, min, max) {
    if (parseInt(value) < min || isNaN(value))
        return 0;
    else if (parseInt(value) > max)
        return 1430;
    else return value;
}

var resim = $(".swipe-gesture");
resim.hammer().on("swipeleft", function(ev) {
    console.log('left: ', ev);
    var center = $(".list-group-center-on-next").length?$(".list-group-center-on-next"):$(".list-group-center-on-prev")
    var left = $(".list-group-left-on-next").length?$(".list-group-left-on-next"):$(".list-group-left-on-prev")
    var right = $(".list-group-right-on-next").length?$(".list-group-right-on-next"):$(".list-group-right-on-prev")

    $(right).html("")
    $(center).removeClass("list-group-center-on-next list-group-center-on-prev").addClass("list-group-left-on-next")
    $(left).removeClass("list-group-left-on-next list-group-left-on-prev").addClass("list-group-right-on-next")
    $(right).removeClass("list-group-right-on-next list-group-right-on-prev").addClass("list-group-center-on-next")

	setTimeout(function() {
        window.angNo++;
        var _angData = data[window.angNo];
        var _baani = _angData.baani
            // baani_container
	    let center = $(".list-group-center-on-next").length?$(".list-group-center-on-next"):$(".list-group-center-on-prev")
        ladivaarGenerator(_baani, center, false)
        $(".title").html((window.angNo + 1) + "/1430")
        
        // $("#angNo").html("ਅੰਗ - " + (window.angNo + 1) + "/1430")
	}, 600)


});

resim.hammer().on("swiperight", function(ev) {
    console.log('right: ', ev);
    var center = $(".list-group-center-on-next").length?$(".list-group-center-on-next"):$(".list-group-center-on-prev")
    var left = $(".list-group-left-on-next").length?$(".list-group-left-on-next"):$(".list-group-left-on-prev")
    var right = $(".list-group-right-on-next").length?$(".list-group-right-on-next"):$(".list-group-right-on-prev")

    $(left).html("")
    $(center).removeClass("list-group-center-on-prev list-group-center-on-next").addClass("list-group-right-on-prev")
    $(left).removeClass("list-group-left-on-prev list-group-left-on-next").addClass("list-group-center-on-prev")
    $(right).removeClass("list-group-right-on-prev list-group-right-on-next").addClass("list-group-left-on-prev")

	setTimeout(function() {
	    window.angNo--;
	    var _angData = data[window.angNo];
	    var _baani = _angData.baani
	        // baani_container
	    let center = $(".list-group-center-on-next").length?$(".list-group-center-on-next"):$(".list-group-center-on-prev")
	    ladivaarGenerator(_baani, center, false)
        $(".title").html((window.angNo + 1) + "/1430")
		// $("#angNo").html("ਅੰਗ - " + (window.angNo + 1) + "/1430")
	}, 600)
});

