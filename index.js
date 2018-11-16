// ==UserScript==
// @name         Enhanced Gitlab
// @namespace    https://github.com/dzikismigol/enhanced-gitlab
// @version      0.1
// @description  try to take over the world!
// @author       dzikismigol
// @match        https://gitlab.com/*
// @grant        none
// ==/UserScript==

(function(gitlabData, document) {
    'use strict';

    let userId = gitlabData.current_user_id;
    let topMenu = document.querySelector(".navbar  .title-container ul");

    var li = document.createElement("LI");
    li.className += "d-none d-lg-block d-xl-block";
    var link = document.createElement("A");
    link.href = "/dashboard/merge_requests?state=opened&utf8=✓&author_id=" + userId;
    var text = document.createTextNode("My MRs");

    li.appendChild(link);
    link.appendChild(text);
    topMenu.appendChild(li);
})(window.gon, document);
