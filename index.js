(() => {
    // Utilities //
    /**
     * Prepend logs and minification aid.
     * TODO: Add flag for debug mode only.
     * @param {String} msg - Log message.
     */
    const log = (msg) => {
        console.log('[QuickSpeedTTV]', msg);
    };

    /**
     * Minification aid.
     */
    const dqs = (selector) => document.querySelector(selector);

    // DOM Related Variables.
    const selectorPrefix = '[data-a-target="player-settings-';
    const selectors = {
        btnSettings: `${selectorPrefix}button"]`,
        menuItemSpeed: `${selectorPrefix}menu-item-speed"]`,
        subMenuSpeed: `${selectorPrefix}menu"]`,
    };
    const $btnVodSettings = dqs(selectors.btnSettings);

    // Setup/Config.
    const keyCodePrefix = 'Numpad'; // i.e. Numpad0
    const arrAllowedKeys = Array.from(Array(4).keys()); // 0-3 on numpad
    const speedIndexPadding = 3; // To ignore the slower speed menu items

    // Event Logic //
    // Event Listener
    function addListeners() {
        log('Adding event listeners...');
        document.addEventListener('keyup', (e) => {
            log('Key pressed:', e.code);
            handleKeyup(e.code.split(keyCodePrefix));
        });
    }

    /**
     * Event handler for onKeyup.
     * Initiates action only if a valid key on a numpad was pressed.
     * @param {Array} arrPressed - Pre-split keyCode w/2nd index 2 containing
     *      the desired menu item list location.
     */
    function handleKeyup(arrPressed) {
        if (arrPressed.length !== 2) return false;

        const speed = parseInt(arrPressed[1]);
        if (arrAllowedKeys.includes(speed)) {
            log('Valid key pressed!');
            setSpeed(speed);
        }
    }

    // Action Logic //
    /**
     * Simulates selecting the desired speed setting then closes settings menu.
     * @param {number} speedIndex - Menu item location of desired speed.
     */
    function setSpeed(speedIndex) {
        log(`Setting speed to ${speedIndex}.`);
        speedIndex += speedIndexPadding;
        getSpeeds()[speedIndex].click();
        $btnVodSettings.click();
    }

    /**
     * Retrieves the list of available speeds at which the VOD can be played.
     * @returns {NodeList} - DIVs containing radio buttons for each speed.
     */
    function getSpeeds() {
        log('Getting speeds...');
        openSpeedMenu();
        return dqs(selectors.subMenuSpeed).children;
    }

    // Simulates clicking Settings then Speed.
    function openSpeedMenu() {
        log('Opening speed settings...');
        $btnVodSettings.click();
        dqs(selectors.menuItemSpeed).click();
    }

    // Init.
    addListeners();
})();
