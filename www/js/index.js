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
            $("[data-attr='tatkra']").hide()
            $("[data-attr='srigurugranthsahib_ang']").hide()
            $(window).on('hashchange', function() {
                if (window.location.hash == "") {
                    showMe('homeList')
                }
                if (window.location.hash == "#srigurugranthsahibjee") {
                    showMe('tatkra')
                } else if (window.location.hash == "#nitnem") {
                    showMe('nitnem_tatkra')
                } else if (window.location.hash.match(/nitnem_.*/)) {
                    var _res = window.location.hash.split(/nitnem_/)
                    if (_res.length) {
                        var _baaniName = _res[1]
                        var _baani = nitnemBaani[_baaniName];
                        ladivaarGenerator(_baani, $("#nitnem_baani_container"), true)
                    }
                    showMe('nitnem_gurbani')
                } else if (window.location.hash.match(/_ang_\d{1,4}/)) {
                    var _res = window.location.hash.match(/_ang_\d{1,4}/);
                    if (_res.length) {
                        var _angString = _res[0]
                        if (_angString.match(/\d+/)) {
                            ang = _angString.match(/\d+/)[0]
                            ang--;
                            var _angData = data[ang];
                            var _baani = _angData.baani
                                // baani_container
                            ladivaarGenerator(_baani, $(".active [data-content]"), false)
                            $('#angPositionFooter').html((ang + 1) + "/1430")
                        }
                        showMe('srigurugranthsahib_ang')
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
        $("html, body").animate({ scrollTop: 0 }, "slow");

        $("[data-attr='homeList']").hide();
        $("[data-attr='tatkra']").hide()
        $("[data-attr='srigurugranthsahib_ang']").show()

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

var ang = 1
var click = ""
$('#carousel-example-generic').on('slide.bs.carousel', function() {
    setTimeout(function() {
        var _angData = data[ang];
        if (_angData) {
            var _baani = _angData.baani
                // baani_container
            ladivaarGenerator(_baani, $(".active [data-content]"), false)
            // jQuery("div.item.active [data-content]").html(demo_data[ang-1]["content"])
            jQuery("div.item:not(.active) [data-content]").html("")
        }
        $('#angPositionFooter').html((ang + 1) + "/1430")
    }, 1000)
})

// jQuery(".active [data-content]").html(da[0]["content"])

$('a[data-slide="prev"]').click(function() {
    if (ang > 0) {
        ang = ang - 1
    }
})

$('a[data-slide="next"]').click(function() {
    if (ang == data.length) {
        ang = 1
    } else {
        ang = ang + 1
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

function minmax(value, min, max) {
    if (parseInt(value) < min || isNaN(value))
        return 0;
    else if (parseInt(value) > max)
        return 1430;
    else return value;
}