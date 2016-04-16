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
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event) {
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
            $("[data-attr='tatkra']").hide()
            $("[data-attr='srigurugranthsahib_ang']").hide()
            $(window).on('hashchange', function() {
                if (window.location.hash == "") {
                    $("[data-attr='homeList']").show();
                    $("[data-attr='tatkra']").hide()
                    $("[data-attr='srigurugranthsahib_ang']").hide()
                }
                if (window.location.hash == "#srigurugranthsahibjee") {
                    $("[data-attr='homeList']").hide();
                    $("[data-attr='tatkra']").show()
                    $("[data-attr='srigurugranthsahib_ang']").hide()
                } else if (window.location.hash.match(/_ang_\d{1,4}/)) {
                    var _res = window.location.hash.match(/_ang_\d{1,4}/);
                    if (_res.length) {
                        var _angString = _res[0]
                        if (_angString.match(/\d+/)) {
                            var _ang = _angString.match(/\d+/)[0]
                            var _angData = data[0];
                            var _baani = _angData.baani

                            // baani_container
                            var _htmlString = "";
                            var _paragraphStringHTMLArr = [];
                            for (var i = 0; i < _baani.length; i++) {
                                var _paragraphsStr = _baani[i].baani_content.replace(/([੦-੯]+॥){2,}/g, function($0) {
                                    return $0 + "\n"
                                })
                                var _paragraphsArr = _paragraphsStr.trim().split(/\n/);
                                if(_paragraphsArr && _paragraphsArr.length) {
                                    for (var paragraph = 0; paragraph < _paragraphsArr.length; paragraph++) {
                                        var _wordsArr = _paragraphsArr[paragraph].split(/\s+/g);
                                        if (_wordsArr.length) {
                                            if(_baani[i].bold || _baani[i].tab) {
                                                _paragraphStringHTMLArr.push("<h1 class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></h1>")
                                            } else {
                                                _paragraphStringHTMLArr.push("<p class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></p>")
                                            }
                                        }
                                    }
                                } else {
                                    console.log("Error", _baani[i].baani_content)
                                    var _wordsArr = _baani[i].baani_content.split(/\s+/g);
                                    if (_wordsArr.length) {
                                        _paragraphStringHTMLArr.push("<p class='text-center'><span>" + _wordsArr.join("</span><span>") + "</span></p>")
                                    }
                                }
                            }
                            _htmlString = "<div class='baaniFormatting'>" + _paragraphStringHTMLArr.join("</div><div class='baaniFormatting'>") + "</div>"
                            $("#baani_container").html(_htmlString)
                        }

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

var data = [{
    "page": 1,
    "content": "ਆਦਿਸਚੁਜੁਗਾਦਿਸਚੁ॥ਹੈਭੀਸਚੁਨਾਨਕਹੋਸੀਭੀਸਚੁ॥੧॥ਸੋਚੈਸੋਚਿਨਹੋਵਈਜੇਸੋਚੀਲਖਵਾਰ॥ਚੁਪੈਚੁਪਨਹੋਵਈਜੇਲਾਇਰਹਾਲਿਵਤਾਰ॥ਭੁਖਿਆਭੁਖਨਉਤਰੀਜੇਬੰਨਾਪੁਰੀਆਭਾਰ॥ਸਹਸਸਿਆਣਪਾਲਖਹੋਹਿਤਇਕਨਚਲੈਨਾਲਿ॥ਕਿਵਸਚਿਆਰਾਹੋਈਐਕਿਵਕੂੜੈਤੁਟੈਪਾਲਿ॥ਹੁਕਮਿਰਜਾਈਚਲਣਾਨਾਨਕਲਿਖਿਆਨਾਲਿ॥੧॥ਹੁਕਮੀਹੋਵਨਿਆਕਾਰਹੁਕਮੁਨਕਹਿਆਜਾਈ॥ਹੁਕਮੀਹੋਵਨਿਜੀਅਹੁਕਮਿਮਿਲੈਵਡਿਆਈ॥ਹੁਕਮੀਉਤਮੁਨੀਚੁਹੁਕਮਿਲਿਖਿਦੁਖਸੁਖਪਾਈਅਹਿ॥ਇਕਨਾਹੁਕਮੀਬਖਸੀਸਇਕਿਹੁਕਮੀਸਦਾਭਵਾਈਅਹਿ॥ਹੁਕਮੈਅੰਦਰਿਸਭੁਕੋਬਾਹਰਿਹੁਕਮਨਕੋਇ॥ਨਾਨਕਹੁਕਮੈਜੇਬੁਝੈਤਹਉਮੈਕਹੈਨਕੋਇ॥੨॥ਗਾਵੈਕੋਤਾਣੁਹੋਵੈਕਿਸੈਤਾਣੁ॥ਗਾਵੈਕੋਦਾਤਿਜਾਣੈਨੀਸਾਣੁ॥ਗਾਵੈਕੋਗੁਣਵਡਿਆਈਆਚਾਰ॥ਗਾਵੈਕੋਵਿਦਿਆਵਿਖਮੁਵੀਚਾਰੁ॥ਗਾਵੈਕੋਸਾਜਿਕਰੇਤਨੁਖੇਹ॥ਗਾਵੈਕੋਜੀਅਲੈਫਿਰਿਦੇਹ॥ਗਾਵੈ"
}, {
    "page": 2,
    "content": "ਕੋਜਾਪੈਦਿਸੈਦੂਰਿ॥ਗਾਵੈਕੋਵੇਖੈਹਾਦਰਾਹਦੂਰਿ॥ਕਥਨਾਕਥੀਨਆਵੈਤੋਟਿ॥ਕਥਿਕਥਿਕਥੀਕੋਟੀਕੋਟਿਕੋਟਿ॥ਦੇਦਾਦੇਲੈਦੇਥਕਿਪਾਹਿ॥ਜੁਗਾਜੁਗੰਤਰਿਖਾਹੀਖਾਹਿ॥ਹੁਕਮੀਹੁਕਮੁਚਲਾਏਰਾਹੁ॥ਨਾਨਕਵਿਗਸੈਵੇਪਰਵਾਹੁ॥੩॥ਸਾਚਾਸਾਹਿਬੁਸਾਚੁਨਾਇਭਾਖਿਆਭਾਉਅਪਾਰੁ॥ਆਖਹਿਮੰਗਹਿਦੇਹਿਦੇਹਿਦਾਤਿਕਰੇਦਾਤਾਰੁ॥ਫੇਰਿਕਿਅਗੈਰਖੀਐਜਿਤੁਦਿਸੈਦਰਬਾਰੁ॥ਮੁਹੌਕਿਬੋਲਣੁਬੋਲੀਐਜਿਤੁਸੁਣਿਧਰੇਪਿਆਰੁ॥ਅੰਮ੍ਰਿਤਵੇਲਾਸਚੁਨਾਉਵਡਿਆਈਵੀਚਾਰੁ॥ਕਰਮੀਆਵੈਕਪੜਾਨਦਰੀਮੋਖੁਦੁਆਰੁ॥ਨਾਨਕਏਵੈਜਾਣੀਐਸਭੁਆਪੇਸਚਿਆਰੁ॥੪॥ਥਾਪਿਆਨਜਾਇਕੀਤਾਨਹੋਇ॥ਆਪੇਆਪਿਨਿਰੰਜਨੁਸੋਇ॥ਜਿਨਿਸੇਵਿਆਤਿਨਿਪਾਇਆਮਾਨੁ॥ਨਾਨਕਗਾਵੀਐਗੁਣੀਨਿਧਾਨੁ॥ਗਾਵੀਐਸੁਣੀਐਮਨਿਰਖੀਐਭਾਉ॥ਦੁਖੁਪਰਹਰਿਸੁਖੁਘਰਿਲੈਜਾਇ॥ਗੁਰਮੁਖਿਨਾਦੰਗੁਰਮੁਖਿਵੇਦੰਗੁਰਮੁਖਿਰਹਿਆਸਮਾਈ॥ਗੁਰੁਈਸਰੁਗੁਰੁਗੋਰਖੁਬਰਮਾਗੁਰੁਪਾਰਬਤੀਮਾਈ॥ਜੇਹਉਜਾਣਾਆਖਾਨਾਹੀਕਹਣਾਕਥਨੁਨਜਾਈ॥ਗੁਰਾਇਕਦੇਹਿਬੁਝਾਈ॥ਸਭਨਾਜੀਆਕਾਇਕੁਦਾਤਾਸੋਮੈਵਿਸਰਿਨਜਾਈ॥੫॥ਤੀਰਥਿਨਾਵਾਜੇਤਿਸੁਭਾਵਾਵਿਣੁਭਾਣੇਕਿਨਾਇਕਰੀ॥ਜੇਤੀਸਿਰਠਿਉਪਾਈਵੇਖਾਵਿਣੁਕਰਮਾਕਿਮਿਲੈਲਈ॥ਮਤਿਵਿਚਿਰਤਨਜਵਾਹਰਮਾਣਿਕਜੇਇਕਗੁਰਕੀਸਿਖਸੁਣੀ॥ਗੁਰਾਇਕਦੇਹਿਬੁਝਾਈ॥ਸਭਨਾਜੀਆਕਾਇਕੁਦਾਤਾਸੋਮੈਵਿਸਰਿਨਜਾਈ॥੬॥ਜੇਜੁਗਚਾਰੇਆਰਜਾਹੋਰਦਸੂਣੀਹੋਇ॥ਨਵਾਖੰਡਾਵਿਚਿਜਾਣੀਐਨਾਲਿਚਲੈਸਭੁਕੋਇ॥ਚੰਗਾਨਾਉਰਖਾਇਕੈਜਸੁਕੀਰਤਿਜਗਿਲੇਇ॥ਜੇਤਿਸੁਨਦਰਿਨਆਵਈਤਵਾਤਨਪੁਛੈਕੇ॥ਕੀਟਾਅੰਦਰਿਕੀਟੁਕਰਿਦੋਸੀਦੋਸੁਧਰੇ॥ਨਾਨਕਨਿਰਗੁਣਿਗੁਣੁਕਰੇਗੁਣਵੰਤਿਆਗੁਣੁਦੇ॥ਤੇਹਾਕੋਇਨਸੁਝਈਜਿਤਿਸੁਗੁਣੁਕੋਇਕਰੇ॥੭॥ਸੁਣਿਐਸਿਧਪੀਰਸੁਰਿਨਾਥ॥ਸੁਣਿਐਧਰਤਿਧਵਲਆਕਾਸ॥ਸੁਣਿਐਦੀਪਲੋਅਪਾਤਾਲ॥ਸੁਣਿਐਪੋਹਿਨਸਕੈਕਾਲੁ॥ਨਾਨਕਭਗਤਾਸਦਾਵਿਗਾਸੁ॥ਸੁਣਿਐਦੂਖਪਾਪਕਾਨਾਸੁ॥੮॥ਸੁਣਿਐਈਸਰੁਬਰਮਾਇੰਦੁ॥ਸੁਣਿਐਮੁਖਿਸਾਲਾਹਣਮੰਦੁ॥ਸੁਣਿਐਜੋਗਜੁਗਤਿਤਨਿਭੇਦ॥ਸੁਣਿਐਸਾਸਤਸਿਮ੍ਰਿਤਿਵੇਦ॥ਨਾਨਕਭਗਤਾ"
}, {
    "page": 3,
    "content": "ਸਦਾਵਿਗਾਸੁ॥ਸੁਣਿਐਦੂਖਪਾਪਕਾਨਾਸੁ॥੯॥ਸੁਣਿਐਸਤੁਸੰਤੋਖੁਗਿਆਨੁ॥ਸੁਣਿਐਅਠਸਠਿਕਾਇਸਨਾਨੁ॥ਸੁਣਿਐਪੜਿਪੜਿਪਾਵਹਿਮਾਨੁ॥ਸੁਣਿਐਲਾਗੈਸਹਜਿਧਿਆਨੁ॥ਨਾਨਕਭਗਤਾਸਦਾਵਿਗਾਸੁ॥ਸੁਣਿਐਦੂਖਪਾਪਕਾਨਾਸੁ॥੧੦॥ਸੁਣਿਐਸਰਾਗੁਣਾਕੇਗਾਹ॥ਸੁਣਿਐਸੇਖਪੀਰਪਾਤਿਸਾਹ॥ਸੁਣਿਐਅੰਧੇਪਾਵਹਿਰਾਹੁ॥ਸੁਣਿਐਹਾਥਹੋਵੈਅਸਗਾਹੁ॥ਨਾਨਕਭਗਤਾਸਦਾਵਿਗਾਸੁ॥ਸੁਣਿਐਦੂਖਪਾਪਕਾਨਾਸੁ॥੧੧॥ਮੰਨੇਕੀਗਤਿਕਹੀਨਜਾਇ॥ਜੇਕੋਕਹੈਪਿਛੈਪਛੁਤਾਇ॥ਕਾਗਦਿਕਲਮਨਲਿਖਣਹਾਰੁ॥ਮੰਨੇਕਾਬਹਿਕਰਨਿਵੀਚਾਰੁ॥ਐਸਾਨਾਮੁਨਿਰੰਜਨੁਹੋਇ॥ਜੇਕੋਮੰਨਿਜਾਣੈਮਨਿਕੋਇ॥੧੨॥ਮੰਨੈਸੁਰਤਿਹੋਵੈਮਨਿਬੁਧਿ॥ਮੰਨੈਸਗਲਭਵਣਕੀਸੁਧਿ॥ਮੰਨੈਮੁਹਿਚੋਟਾਨਾਖਾਇ॥ਮੰਨੈਜਮਕੈਸਾਥਿਨਜਾਇ॥ਐਸਾਨਾਮੁਨਿਰੰਜਨੁਹੋਇ॥ਜੇਕੋਮੰਨਿਜਾਣੈਮਨਿਕੋਇ॥੧੩॥ਮੰਨੈਮਾਰਗਿਠਾਕਨਪਾਇ॥ਮੰਨੈਪਤਿਸਿਉਪਰਗਟੁਜਾਇ॥ਮੰਨੈਮਗੁਨਚਲੈਪੰਥੁ॥ਮੰਨੈਧਰਮਸੇਤੀਸਨਬੰਧੁ॥ਐਸਾਨਾਮੁਨਿਰੰਜਨੁਹੋਇ॥ਜੇਕੋਮੰਨਿਜਾਣੈਮਨਿਕੋਇ॥੧੪॥ਮੰਨੈਪਾਵਹਿਮੋਖੁਦੁਆਰੁ॥ਮੰਨੈਪਰਵਾਰੈਸਾਧਾਰੁ॥ਮੰਨੈਤਰੈਤਾਰੇਗੁਰੁਸਿਖ॥ਮੰਨੈਨਾਨਕਭਵਹਿਨਭਿਖ॥ਐਸਾਨਾਮੁਨਿਰੰਜਨੁਹੋਇ॥ਜੇਕੋਮੰਨਿਜਾਣੈਮਨਿਕੋਇ॥੧੫॥ਪੰਚਪਰਵਾਣਪੰਚਪਰਧਾਨੁ॥ਪੰਚੇਪਾਵਹਿਦਰਗਹਿਮਾਨੁ॥ਪੰਚੇਸੋਹਹਿਦਰਿਰਾਜਾਨੁ॥ਪੰਚਾਕਾਗੁਰੁਏਕੁਧਿਆਨੁ॥ਜੇਕੋਕਹੈਕਰੈਵੀਚਾਰੁ॥ਕਰਤੇਕੈਕਰਣੈਨਾਹੀਸੁਮਾਰੁ॥ਧੌਲੁਧਰਮੁਦਇਆਕਾਪੂਤੁ॥ਸੰਤੋਖੁਥਾਪਿਰਖਿਆਜਿਨਿਸੂਤਿ॥ਜੇਕੋਬੁਝੈਹੋਵੈਸਚਿਆਰੁ॥ਧਵਲੈਉਪਰਿਕੇਤਾਭਾਰੁ॥ਧਰਤੀਹੋਰੁਪਰੈਹੋਰੁਹੋਰੁ॥ਤਿਸਤੇਭਾਰੁਤਲੈਕਵਣੁਜੋਰੁ॥ਜੀਅਜਾਤਿਰੰਗਾਕੇਨਾਵ॥ਸਭਨਾਲਿਖਿਆਵੁੜੀਕਲਾਮ॥ਏਹੁਲੇਖਾਲਿਖਿਜਾਣੈਕੋਇ॥ਲੇਖਾਲਿਖਿਆਕੇਤਾਹੋਇ॥ਕੇਤਾਤਾਣੁਸੁਆਲਿਹੁਰੂਪੁ॥ਕੇਤੀਦਾਤਿਜਾਣੈਕੌਣੁਕੂਤੁ॥ਕੀਤਾਪਸਾਉਏਕੋਕਵਾਉ॥ਤਿਸਤੇਹੋਏਲਖਦਰੀਆਉ॥ਕੁਦਰਤਿਕਵਣਕਹਾਵੀਚਾਰੁ॥ਵਾਰਿਆਨਜਾਵਾਏਕਵਾਰ॥ਜੋਤੁਧੁਭਾਵੈਸਾਈਭਲੀਕਾਰ॥ਤੂਸਦਾਸਲਾਮਤਿਨਿਰੰਕਾਰ॥੧੬॥ਅਸੰਖਜਪਅਸੰਖਭਾਉ॥ਅਸੰਖਪੂਜਾਅਸੰਖਤਪਤਾਉ॥ਅਸੰਖਗਰੰਥਮੁਖਿਵੇਦਪਾਠ॥ਅਸੰਖਜੋਗਮਨਿਰਹਹਿ"
}, {
    "page": 4,
    "content": "ਉਦਾਸ॥ਅਸੰਖਭਗਤਗੁਣਗਿਆਨਵੀਚਾਰ॥ਅਸੰਖਸਤੀਅਸੰਖਦਾਤਾਰ॥ਅਸੰਖਸੂਰਮੁਹਭਖਸਾਰ॥ਅਸੰਖਮੋਨਿਲਿਵਲਾਇਤਾਰ॥ਕੁਦਰਤਿਕਵਣਕਹਾਵੀਚਾਰੁ॥ਵਾਰਿਆਨਜਾਵਾਏਕਵਾਰ॥ਜੋਤੁਧੁਭਾਵੈਸਾਈਭਲੀਕਾਰ॥ਤੂਸਦਾਸਲਾਮਤਿਨਿਰੰਕਾਰ॥੧੭॥ਅਸੰਖਮੂਰਖਅੰਧਘੋਰ॥ਅਸੰਖਚੋਰਹਰਾਮਖੋਰ॥ਅਸੰਖਅਮਰਕਰਿਜਾਹਿਜੋਰ॥ਅਸੰਖਗਲਵਢਹਤਿਆਕਮਾਹਿ॥ਅਸੰਖਪਾਪੀਪਾਪੁਕਰਿਜਾਹਿ॥ਅਸੰਖਕੂੜਿਆਰਕੂੜੇਫਿਰਾਹਿ॥ਅਸੰਖਮਲੇਛਮਲੁਭਖਿਖਾਹਿ॥ਅਸੰਖਨਿੰਦਕਸਿਰਿਕਰਹਿਭਾਰੁ॥ਨਾਨਕੁਨੀਚੁਕਹੈਵੀਚਾਰੁ॥ਵਾਰਿਆਨਜਾਵਾਏਕਵਾਰ॥ਜੋਤੁਧੁਭਾਵੈਸਾਈਭਲੀਕਾਰ॥ਤੂਸਦਾਸਲਾਮਤਿਨਿਰੰਕਾਰ॥੧੮॥ਅਸੰਖਨਾਵਅਸੰਖਥਾਵ॥ਅਗੰਮਅਗੰਮਅਸੰਖਲੋਅ॥ਅਸੰਖਕਹਹਿਸਿਰਿਭਾਰੁਹੋਇ॥ਅਖਰੀਨਾਮੁਅਖਰੀਸਾਲਾਹ॥ਅਖਰੀਗਿਆਨੁਗੀਤਗੁਣਗਾਹ॥ਅਖਰੀਲਿਖਣੁਬੋਲਣੁਬਾਣਿ॥ਅਖਰਾਸਿਰਿਸੰਜੋਗੁਵਖਾਣਿ॥ਜਿਨਿਏਹਿਲਿਖੇਤਿਸੁਸਿਰਿਨਾਹਿ॥ਜਿਵਫੁਰਮਾਏਤਿਵਤਿਵਪਾਹਿ॥ਜੇਤਾਕੀਤਾਤੇਤਾਨਾਉ॥ਵਿਣੁਨਾਵੈਨਾਹੀਕੋਥਾਉ॥ਕੁਦਰਤਿਕਵਣਕਹਾਵੀਚਾਰੁ॥ਵਾਰਿਆਨਜਾਵਾਏਕਵਾਰ॥ਜੋਤੁਧੁਭਾਵੈਸਾਈਭਲੀਕਾਰ॥ਤੂਸਦਾਸਲਾਮਤਿਨਿਰੰਕਾਰ॥੧੯॥ਭਰੀਐਹਥੁਪੈਰੁਤਨੁਦੇਹ॥ਪਾਣੀਧੋਤੈਉਤਰਸੁਖੇਹ॥ਮੂਤਪਲੀਤੀਕਪੜੁਹੋਇ॥ਦੇਸਾਬੂਣੁਲਈਐਓਹੁਧੋਇ॥ਭਰੀਐਮਤਿਪਾਪਾਕੈਸੰਗਿ॥ਓਹੁਧੋਪੈਨਾਵੈਕੈਰੰਗਿ॥ਪੁੰਨੀਪਾਪੀਆਖਣੁਨਾਹਿ॥ਕਰਿਕਰਿਕਰਣਾਲਿਖਿਲੈਜਾਹੁ॥ਆਪੇਬੀਜਿਆਪੇਹੀਖਾਹੁ॥ਨਾਨਕਹੁਕਮੀਆਵਹੁਜਾਹੁ॥੨੦॥ਤੀਰਥੁਤਪੁਦਇਆਦਤੁਦਾਨੁ॥ਜੇਕੋਪਾਵੈਤਿਲਕਾਮਾਨੁ॥ਸੁਣਿਆਮੰਨਿਆਮਨਿਕੀਤਾਭਾਉ॥ਅੰਤਰਗਤਿਤੀਰਥਿਮਲਿਨਾਉ॥ਸਭਿਗੁਣਤੇਰੇਮੈਨਾਹੀਕੋਇ॥ਵਿਣੁਗੁਣਕੀਤੇਭਗਤਿਨਹੋਇ॥ਸੁਅਸਤਿਆਥਿਬਾਣੀਬਰਮਾਉ॥ਸਤਿਸੁਹਾਣੁਸਦਾਮਨਿਚਾਉ॥ਕਵਣੁਸੁਵੇਲਾਵਖਤੁਕਵਣੁਕਵਣਥਿਤਿਕਵਣੁਵਾਰੁ॥ਕਵਣਿਸਿਰੁਤੀਮਾਹੁਕਵਣੁਜਿਤੁਹੋਆਆਕਾਰੁ॥ਵੇਲਨਪਾਈਆਪੰਡਤੀਜਿਹੋਵੈਲੇਖੁਪੁਰਾਣੁ॥ਵਖਤੁਨਪਾਇਓਕਾਦੀਆਜਿਲਿਖਨਿਲੇਖੁਕੁਰਾਣੁ॥ਥਿਤਿਵਾਰੁਨਾਜੋਗੀਜਾਣੈਰੁਤਿਮਾਹੁਨਾਕੋਈ॥ਜਾਕਰਤਾਸਿਰਠੀਕਉਸਾਜੇਆਪੇਜਾਣੈਸੋਈ॥ਕਿਵਕਰਿਆਖਾਕਿਵ"
}]

var currentPage = 1
var click = ""
$('#carousel-example-generic').on('slide.bs.carousel', function() {
    setTimeout(function() {
        jQuery("div.item.active [data-content]").html(data[currentPage - 1]["content"])
        jQuery("div.item:not(.active) [data-content]").html("")
    }, 1000)
})

jQuery(".active [data-content]").html(data[0]["content"])

$('a[data-slide="prev"]').click(function() {
    if (currentPage == 1) {
        currentPage = data.length
    } else {
        currentPage = currentPage - 1
    }
})

$('a[data-slide="next"]').click(function() {
    if (currentPage == data.length) {
        currentPage = 1
    } else {
        currentPage = currentPage + 1
    }
})