// ==UserScript==
// @name         Custom CSS Injector
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Inject domain-specific custom CSS with menu options to modify or export styles
// @author       You
// @match        *://*/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @icon         data:image/png;base64,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
// ==/UserScript==

(function() {
    'use strict';

    const domain = window.location.hostname;
    const storageKey = `customCSS_${domain}`;
    let customCSS = GM_getValue(storageKey, '');

    function injectCSS(css) {
        if (!css) return;
        GM_addStyle(css);
    }

    injectCSS(customCSS);

    // Edit CSS for current domain
    GM_registerMenuCommand(`Edit Custom CSS for ${domain}`, function() {
        showModalEditor();
        setTimeout(() => {
            const exists = document.querySelector('#custom-css-editor-modal');
            const hasSize = exists && exists.offsetHeight > 0 && exists.offsetWidth > 0;
            if (!exists || !hasSize) fallbackPromptEditor();
        }, 500);
    });

    // Export all CSS
    GM_registerMenuCommand(`Export All Custom CSS`, async function() {
        const keys = await GM_listValues();
        const exportData = [];

        for (const key of keys) {
            if (key.startsWith("customCSS_")) {
                const dom = key.replace("customCSS_", "");
                const css = GM_getValue(key, "");
                if (css.trim()) {
                    exportData.push(`${dom}:\n${css}\n`);
                }
            }
        }

        const exportText = exportData.join("\n---\n");
        // Show export in prompt for copy
        const modal = document.createElement('textarea');
        Object.assign(modal.style, {
            position: 'fixed',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            zIndex: 2147483647,
            background: '#fff',
            padding: '10px',
            fontFamily: 'monospace',
            fontSize: '14px',
            border: '1px solid #ccc'
        });
        modal.value = exportText || 'No custom CSS saved.';
        document.body.appendChild(modal);
        modal.select();
        alert("All custom CSS is displayed in the textarea. Copy it, then close.");
    });

    function showModalEditor() {
        const modal = document.createElement('div');
        modal.id = 'custom-css-editor-modal';
        const container = document.createElement('div');
        const textarea = document.createElement('textarea');
        const saveButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        Object.assign(modal.style, {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2147483647
        });

        Object.assign(container.style, {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '80%',
            height: '600px',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
            position: 'relative',
            cursor: 'move'
        });

        Object.assign(textarea.style, {
            width: '100%',
            height: '520px',
            fontSize: '14px',
            fontFamily: 'monospace',
            resize: 'vertical',
            marginBottom: '15px'
        });
        textarea.value = customCSS;

        [saveButton, cancelButton].forEach(btn => {
            Object.assign(btn.style, {
                padding: '10px 15px',
                fontSize: '14px',
                marginRight: '10px',
                cursor: 'pointer'
            });
        });

        saveButton.textContent = 'Save';
        cancelButton.textContent = 'Cancel';

        saveButton.onclick = () => {
            const newCSS = textarea.value;
            GM_setValue(storageKey, newCSS);
            customCSS = newCSS;
            injectCSS(newCSS);
            document.body.removeChild(modal);
        };

        cancelButton.onclick = () => {
            document.body.removeChild(modal);
        };

        let isDragging = false, offsetX = 0, offsetY = 0;
        container.onmousedown = (e) => {
            isDragging = true;
            offsetX = e.clientX - container.offsetLeft;
            offsetY = e.clientY - container.offsetTop;
            document.onmousemove = (e) => {
                if (isDragging) {
                    container.style.left = `${e.clientX - offsetX}px`;
                    container.style.top = `${e.clientY - offsetY}px`;
                    container.style.position = 'absolute';
                }
            };
            document.onmouseup = () => {
                isDragging = false;
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };

        const buttonWrapper = document.createElement('div');
        buttonWrapper.appendChild(saveButton);
        buttonWrapper.appendChild(cancelButton);

        container.appendChild(textarea);
        container.appendChild(buttonWrapper);
        modal.appendChild(container);
        document.body.appendChild(modal);
    }

    function fallbackPromptEditor() {
        const newCSS = prompt(`Edit Custom CSS for ${domain}`, customCSS);
        if (newCSS !== null) {
            GM_setValue(storageKey, newCSS);
            customCSS = newCSS;
            injectCSS(newCSS);
        }
    }
})();
