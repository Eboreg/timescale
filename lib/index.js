/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTimescaleData = exports.yearsToSeconds = void 0;
const now = new Date();
const currentYear = now.getFullYear();
function absoluteYearToSeconds(year) {
    const yearsAgo = currentYear - year;
    return yearsAgo * 365.25 * 24 * 60 * 60;
}
function yearsToSeconds(years) {
    return years * 365.25 * 24 * 60 * 60;
}
exports.yearsToSeconds = yearsToSeconds;
const rawExamples = [
    {
        seconds: 10 * Math.pow(10, -45),
        text: "One Planck time",
    },
    {
        seconds: 300 * Math.pow(10, -27),
        text: "The mean lifetime of W and Z bosons",
    },
    {
        seconds: 143 * Math.pow(10, -24),
        text: "The half-life of the Nitrogen-10 isotope",
    },
    {
        seconds: 156 * Math.pow(10, -24),
        text: "The mean lifetime of a Higgs Boson",
    },
    {
        seconds: 247 * Math.pow(10, -21),
        text: "The experimentally-measured travel time of a photon across a hydrogen molecule",
    },
    {
        seconds: 43 * Math.pow(10, -18),
        text: "The shortest X-ray laser pulse",
    },
    {
        seconds: 53 * Math.pow(10, -18),
        text: "The shortest electron laser pulse",
    },
    {
        seconds: Math.pow(10, -15),
        text: "The time it takes light to travel a distance of 0.3 micrometres",
    },
    {
        seconds: Math.pow(10, -12),
        text: "The time needed for light to travel 0.3 millimetres",
    },
    {
        seconds: Math.pow(10, -12) * 114.6,
        text: "The time for the fastest overclocked processor as of 2014 to execute one machine cycle",
    },
    {
        seconds: Math.pow(10, -12) * 696,
        text: "How much more a second lasts far away from Earth's gravity due to the effects of " +
            "General Relativity",
    },
    {
        seconds: Math.pow(10, -9),
        text: "The time needed to execute one machine cycle by a 1 GHz microprocessor",
    },
    {
        seconds: Math.pow(10, -9),
        text: "The time light takes to travel 30 cm",
    },
    {
        seconds: Math.pow(10, -6),
        text: "The time needed to execute one machine cycle by an Intel 80186 microprocessor",
    },
    {
        seconds: 0.001,
        text: "The time for a neuron in the human brain to fire one impulse and return to rest",
    },
    {
        seconds: 0.015,
        text: "The human reflex response to visual stimuli",
    },
    {
        seconds: 0.25,
        text: "The length of a single blink of an eye",
    },
    {
        seconds: 710,
        text: "The time for a human walking at average speed of 1.4 m/s to walk 1 kilometre",
    },
    {
        seconds: 2772,
        text: "The length of an average Prisoner: Cell Block H episode (46m12s)",
    },
    {
        seconds: (now.getTime() - (new Date(2024, 0, 23, 19, 17)).getTime()) / 1000,
        text: "Time since I started coding this thing",
    },
    {
        seconds: 2629800,
        text: "The average length of a month",
    },
    {
        seconds: 23 * Math.pow(10, 6),
        text: "Length of typical human gestational period",
    },
    {
        seconds: absoluteYearToSeconds(1945),
        text: "Time since end of WWII (1945)",
    },
    {
        seconds: yearsToSeconds(83.47),
        text: "The life expectancy in Sweden 2024",
    },
    {
        seconds: absoluteYearToSeconds(1918),
        text: "Time since end of WWI (1918)",
    },
    {
        seconds: absoluteYearToSeconds(1523),
        text: "Time since the coronation of Gustav Vasa (1523)",
    },
    {
        seconds: absoluteYearToSeconds(1227),
        text: "Time since the death of Gengis Khan (1227)",
    },
    {
        seconds: yearsToSeconds(1000),
        text: "One millennium",
    },
    {
        seconds: absoluteYearToSeconds(476),
        text: "Time since the fall of Rome (476)",
    },
    {
        seconds: absoluteYearToSeconds(632),
        text: "Time since the death of Muhammad (632)",
    },
    {
        seconds: absoluteYearToSeconds(-5),
        text: "Time since the birth of Jesus (~5 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-500),
        text: "Time since the Axial Age (Buddha, Konfucius, Plato, Zarathustra, etc.) (~500 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-1200),
        text: "Time since the Late Bronze Age Collapse (~1200 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-2300),
        text: "Time since Sargon of Akkad (~2300 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-2500),
        text: "Time since Gilgamesh and the Great Pyramid of Giza (~2500 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-3100),
        text: "Time since start of Stonehenge construction (~3100 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-3200),
        text: "Time since first writing (~3200 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-3500),
        text: "Time since invention of the wheel (~3500 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-4000),
        text: "Time since the Indo-European expansion (~4000 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-4000),
        text: "Time since domestication of horses (~4000 BC)",
    },
    {
        seconds: absoluteYearToSeconds(-10000),
        text: "Time since end of ice age (~10 000 BC)",
    },
    {
        seconds: yearsToSeconds(35000),
        text: "Time since the domestication of dogs",
    },
    {
        seconds: yearsToSeconds(40000),
        text: "Time since the extinction of Homo neanderthalensis",
    },
    {
        seconds: yearsToSeconds(300000),
        text: "Time since the earliest Homo sapiens",
    },
    {
        seconds: yearsToSeconds(1000000),
        text: "One million years",
    },
    {
        seconds: yearsToSeconds(2500000),
        text: "Time since earliest Australopithecus",
    },
    {
        seconds: yearsToSeconds(4120000),
        text: "The typical lifetime of a biological species on Earth",
    },
    {
        seconds: yearsToSeconds(65000000),
        text: "Time since the extinction of dinosaurs",
    },
    {
        seconds: yearsToSeconds(65000000),
        text: "Time since the first primates",
    },
    {
        seconds: yearsToSeconds(180000000),
        text: "Time since the first mammals",
    },
    {
        seconds: yearsToSeconds(500000000),
        text: "Time since the Cambrian explosion",
    },
    {
        seconds: yearsToSeconds(650000000),
        text: "Time since the first animals",
    },
    {
        seconds: yearsToSeconds(700000000),
        text: "The approximate half-life of the uranium isotope 235U",
    },
    {
        seconds: yearsToSeconds(4000000000),
        text: "Time since the origin of life",
    },
    {
        seconds: yearsToSeconds(4500000000),
        text: "The age of Earth",
    },
    {
        seconds: yearsToSeconds(13800000000),
        text: "The age of the universe",
    },
    {
        seconds: 9.85 * Math.pow(10, 21),
        text: "The entire lifetime of Brahma in Hindu mythology",
    },
    {
        seconds: 69 * Math.pow(10, 30),
        text: "The radioactive half-life of tellurium-128",
    },
];
const emptyTimescale = {
    "-45": {
        singular: "* 10^-45 seconds",
        plural: "* 10^-45 seconds",
    },
    "-42": {
        singular: "* 10^-42 seconds",
        plural: "* 10^-42 seconds",
    },
    "-39": {
        singular: "* 10^-39 seconds",
        plural: "* 10^-39 seconds",
    },
    "-36": {
        singular: "* 10^-36 seconds",
        plural: "* 10^-36 seconds",
    },
    "-33": {
        singular: "* 10^-33 seconds",
        plural: "* 10^-33 seconds",
    },
    "-30": {
        singular: "quectosecond",
        plural: "quectoseconds",
    },
    "-27": {
        singular: "rontosecond",
        plural: "rontoseconds",
    },
    "-24": {
        singular: "yoctosecond",
        plural: "yoctoseconds",
    },
    "-21": {
        singular: "zeptosecond",
        plural: "zeptoseconds",
    },
    "-18": {
        singular: "attosecond",
        plural: "attoseconds",
    },
    "-15": {
        singular: "femtosecond",
        plural: "femtoseconds",
    },
    "-12": {
        singular: "picosecond",
        plural: "picoseconds",
    },
    "-9": {
        singular: "nanosecond",
        plural: "nanoseconds",
    },
    "-6": {
        singular: "microsecond",
        plural: "microseconds",
    },
    "-3": {
        singular: "millisecond",
        plural: "milliseconds",
    },
    "0": {
        singular: "second",
        plural: "seconds",
    },
    "3": {
        singular: "kilosecond",
        plural: "kiloseconds",
    },
    "6": {
        singular: "megasecond",
        plural: "megaseconds",
    },
    "9": {
        singular: "gigasecond",
        plural: "gigaseconds",
    },
    "12": {
        singular: "terasecond",
        plural: "teraseconds",
    },
    "15": {
        singular: "petasecond",
        plural: "petaseconds",
    },
    "18": {
        singular: "exasecond",
        plural: "exaseconds",
    },
    "21": {
        singular: "zettasecond",
        plural: "zettaseconds",
    },
    "24": {
        singular: "yottasecond",
        plural: "yottaseconds",
    },
    "27": {
        singular: "ronnasecond",
        plural: "ronnaseconds",
    },
    "30": {
        singular: "quettasecond",
        plural: "quettaseconds",
    },
};
function getTimescaleData() {
    var _a;
    const timescaleData = JSON.parse(JSON.stringify(emptyTimescale)); // ugly cloning method
    let index = 0;
    for (const rawExample of rawExamples.sort((a, b) => a.seconds - b.seconds)) {
        let magnitude = Math.floor(Math.log10(rawExample.seconds));
        while (magnitude % 3 != 0)
            magnitude--;
        if (timescaleData[magnitude].examples == undefined)
            timescaleData[magnitude].examples = [];
        (_a = timescaleData[magnitude].examples) === null || _a === void 0 ? void 0 : _a.push({
            multiplier: rawExample.seconds / Math.pow(10, magnitude),
            text: rawExample.text,
            index: index++,
        });
    }
    return timescaleData;
}
exports.getTimescaleData = getTimescaleData;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const data_1 = __webpack_require__(/*! ./data */ "./src/data.ts");
const scale = document.getElementById("scale");
const scaleLegends = document.getElementById("scale-legends");
const timeline = document.getElementById("timeline");
const tooltipContainer = document.getElementById("tooltips");
const timescaleData = (0, data_1.getTimescaleData)();
let currentZoomLevel = 0;
function reverseArray(arr) {
    const out = [];
    for (let i = arr.length - 1; i >= 0; --i) {
        out.push(arr[i]);
    }
    return out;
}
function getMagnitudeByZoomLevel(zoomLevel) {
    return Object.keys(timescaleData)
        .map((m) => parseFloat(m))
        .filter((m) => m <= zoomLevel)
        .sort((a, b) => b - a)
        .at(0);
}
function drawExampleBackground(width, index, prepend = false) {
    if (timeline) {
        const bg = document.createElement("div");
        const greenBlue = Math.min(index * 5, 255);
        bg.className = "timeline-bg";
        bg.style.width = `${width}%`;
        bg.style.backgroundColor = `rgb(255, ${greenBlue}, ${greenBlue})`;
        if (prepend)
            timeline.prepend(bg);
        else
            timeline.appendChild(bg);
        return bg;
    }
    return undefined;
}
function drawExample(left, index) {
    if (timeline) {
        const vr = document.createElement("div");
        vr.className = "timeline-vr";
        vr.style.left = `${left}%`;
        timeline.appendChild(vr);
        drawExampleBackground(left, index);
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formatInterval(seconds) {
    let unit = "seconds";
    let amount = seconds;
    if (seconds >= 60 * 60 * 24 * 365.25) {
        amount = seconds / (60 * 60 * 24 * 365.25);
        unit = "years";
    }
    else if (seconds >= 60 * 60 * 24) {
        amount = seconds / (60 * 60 * 24);
        unit = "days";
    }
    else if (seconds >= 60 * 60) {
        amount = seconds / (60 * 60);
        unit = "hours";
    }
    return amount.toLocaleString(undefined, {
        notation: amount > Math.pow(10, 20) || amount < Math.pow(10, -10) ? "engineering" : "standard",
        useGrouping: true,
        maximumFractionDigits: amount > 10 || amount < Math.pow(10, -10) ? 0 : amount > 1 ? 2 : 20,
    }) + ` ${unit}`;
}
function createTooltip(example, magnitude, left) {
    const container = document.createElement("div");
    const text = document.createElement("div");
    const arrow = document.createElement("div");
    // const interval = formatInterval(example.multiplier * Math.pow(10, magnitude));
    container.className = "tooltip-container hidden";
    text.className = "tooltip-text";
    arrow.className = "tooltip-arrow";
    text.textContent = example.text;
    // tooltipText.textContent = `${example.text} (${interval})`;
    if (left > 90) {
        container.classList.add("reversed");
        container.style.right = `${100 - left}%`;
    }
    else {
        container.style.left = `${left}%`;
    }
    container.appendChild(text);
    container.appendChild(arrow);
    tooltipContainer === null || tooltipContainer === void 0 ? void 0 : tooltipContainer.appendChild(container);
    return {
        container: container,
        arrow: arrow,
        text: text,
        isReversed: left > 90,
    };
}
function drawTimeline(magnitude, zoomLevel) {
    var _a;
    if (tooltipContainer)
        tooltipContainer.innerHTML = "";
    if (timeline) {
        timeline.innerHTML = "";
        const relativeMax = Math.pow(10, zoomLevel - magnitude);
        const tooltips = [];
        const placedTooltips = [];
        let currentMagnitude = magnitude;
        let previousMagnitudesTooltipCount = 0;
        let highestIndex = -1;
        do {
            for (const example of reverseArray(((_a = timescaleData[currentMagnitude]) === null || _a === void 0 ? void 0 : _a.examples) || [])) {
                const left = example.multiplier / relativeMax * Math.pow(10, currentMagnitude - magnitude) * 100;
                if (left <= 100) {
                    if (left >= 0.00001) {
                        const tooltip = createTooltip(example, currentMagnitude, left);
                        drawExample(left, example.index);
                        tooltips.push(Object.assign({ containerRect: tooltip.container.getBoundingClientRect(), textRect: tooltip.text.getBoundingClientRect() }, tooltip));
                        if (currentMagnitude - magnitude < 0)
                            previousMagnitudesTooltipCount++;
                    }
                    if (example.index > highestIndex)
                        highestIndex = example.index;
                }
            }
            currentMagnitude -= 3;
        } while (timescaleData[currentMagnitude] != undefined && previousMagnitudesTooltipCount <= 10);
        if (highestIndex > -1) {
            drawExampleBackground(100, highestIndex + 1, true);
        }
        for (const tooltip of tooltips.sort((a, b) => b.isReversed ? a.containerRect.x - b.containerRect.x : b.containerRect.x - a.containerRect.x)) {
            for (const otherTooltip of placedTooltips) {
                if (otherTooltip.containerRect.left < tooltip.containerRect.right + 10 &&
                    otherTooltip.textRect.top < tooltip.textRect.bottom + 10) {
                    tooltip.arrow.style.height = `${otherTooltip.containerRect.height + 10}px`;
                    tooltip.containerRect = tooltip.container.getBoundingClientRect();
                    tooltip.textRect = tooltip.text.getBoundingClientRect();
                }
            }
            if (tooltip.container.offsetTop >= 0)
                tooltip.container.classList.remove("hidden");
            placedTooltips.push(tooltip);
        }
    }
}
function drawScale(magnitude, zoomLevel) {
    if (scale) {
        const scaleHrRest = document.createElement("div");
        scale.innerHTML = "";
        if (scaleLegends)
            scaleLegends.innerHTML = "";
        scaleHrRest.className = "scale-hr scale-hr-rest";
        const width = 100 / Math.pow(10, zoomLevel - magnitude);
        const scaleHr = document.createElement("div");
        const scaleVr = document.createElement("div");
        if (width < 1)
            scaleHr.style.width = `${width * 100}%`;
        else if (width < 10)
            scaleHr.style.width = `${width * 10}%`;
        else
            scaleHr.style.width = `${width}%`;
        scaleHr.className = "scale-hr";
        scaleVr.className = "scale-vr";
        scale.appendChild(scaleHr);
        scale.appendChild(scaleVr);
        if (scaleLegends) {
            const scaleLegend = document.createElement("div");
            if (width < 1) {
                scaleLegend.textContent = `100 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = `${width * 100}%`;
            }
            else if (width < 10) {
                scaleLegend.textContent = `10 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = `${width * 10}%`;
            }
            else {
                scaleLegend.textContent = `1 ${timescaleData[magnitude].singular}`;
                scaleLegend.style.width = `${width}%`;
            }
            scaleLegend.className = "scale-legend";
            scaleLegends.innerHTML = "";
            scaleLegends.appendChild(scaleLegend);
        }
        scale.appendChild(scaleHrRest);
    }
}
function draw(zoomLevel) {
    const magnitude = getMagnitudeByZoomLevel(zoomLevel);
    if (magnitude != undefined) {
        drawScale(magnitude, zoomLevel);
        drawTimeline(magnitude, zoomLevel);
    }
}
function zoomBy(zoomLevel, delta) {
    const magnitude = getMagnitudeByZoomLevel(zoomLevel);
    const newZoomLevel = parseFloat((zoomLevel + (delta / 1000)).toPrecision(12));
    if (magnitude != undefined) {
        if (newZoomLevel > magnitude + 3 && timescaleData[magnitude + 3] == undefined) {
            // We're at the right end of the scale, don't zoom out further.
            return magnitude + 3;
        }
        else if (timescaleData[magnitude - 3] != undefined) {
            return newZoomLevel;
        }
    }
    else if (newZoomLevel >= currentZoomLevel) {
        return newZoomLevel;
    }
    return zoomLevel;
}
addEventListener("keydown", (event) => {
    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && ["PageUp", "PageDown"].includes(event.key)) {
        event.preventDefault();
        if (event.key == "PageUp")
            currentZoomLevel = zoomBy(currentZoomLevel, -138);
        if (event.key == "PageDown")
            currentZoomLevel = zoomBy(currentZoomLevel, 138);
        draw(currentZoomLevel);
    }
    console.log(event.key);
});
(_a = document.getElementById("container")) === null || _a === void 0 ? void 0 : _a.addEventListener("wheel", (event) => {
    event.preventDefault();
    currentZoomLevel = zoomBy(currentZoomLevel, event.deltaY);
    draw(currentZoomLevel);
});
(_b = document.getElementById("reset-button-1ns")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    currentZoomLevel = -9;
    draw(currentZoomLevel);
});
(_c = document.getElementById("reset-button-1s")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    currentZoomLevel = 0;
    draw(currentZoomLevel);
});
(_d = document.getElementById("reset-button-1y")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    currentZoomLevel = Math.log10((0, data_1.yearsToSeconds)(1));
    draw(currentZoomLevel);
});
(_e = document.getElementById("reset-button-1000y")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    currentZoomLevel = Math.log10((0, data_1.yearsToSeconds)(1000));
    draw(currentZoomLevel);
});
window.onload = () => {
    draw(currentZoomLevel);
};

})();

/******/ })()
;
//# sourceMappingURL=index.js.map