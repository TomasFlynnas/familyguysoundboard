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
        
    },
    
};

function getPhoneGapPath() {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return 'file://' + path;
}

function playsound (id)
{
    var atag = document.getElementById(id);
    var mp3file = atag.getElementsByTagName('source')[0].src;
    var mediapath = getPhoneGapPath() + mp3file;

    console.log('MP3 file is ' + mp3file);
    console.log('PG Path is ' + getPhoneGapPath());
    console.log('MEDIA PATH is ' + mediapath);

    var media = new Media(mp3file);
    media.play();    
    //var audio = document.getElementById(id);
    //audio.addEventListener('touchstart', function() { audio.play(); }, false);
}
