// ==UserScript==
// @name         Add Code Execution Shortcuts
// @namespace    utsavsingh899
// @version      2025-03-29
// @description  Adding ctrl + ' for run and ctrl + enter for submitting code on takeuforward.org
// @author       Utsav Singh
// @match        https://takeuforward.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        // Shortcut for "Run Code" (Ctrl + ')
        if (event.ctrlKey && event.key === "'") {
            const runButton = document.querySelector('button[data-tooltip-id="Run-Code"]');
            if (runButton) {
                runButton.click();
            }
            event.preventDefault(); // Prevent default browser behavior for this shortcut
        }

        // Shortcut for "Submit" (Ctrl + Enter)
        if (event.ctrlKey && event.key === 'Enter') {
            const submitButton = document.querySelector('button[data-tooltip-id="Submit"]');
            if (submitButton) {
                submitButton.click();
            }
            event.preventDefault(); // Prevent default browser behavior for this shortcut
        }
    });
})();