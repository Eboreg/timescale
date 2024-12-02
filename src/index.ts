import { Example, Magnitude, getTimescaleData, yearsToSeconds } from "./data";

interface Tooltip {
    container: HTMLDivElement;
    text: HTMLDivElement;
    arrow: HTMLDivElement;
    isReversed: boolean;
}

interface PlacedTooltip extends Tooltip {
    containerRect: DOMRect;
    textRect: DOMRect;
}

const scale = document.getElementById("scale");
const scaleLegends = document.getElementById("scale-legends");
const timeline = document.getElementById("timeline");
const tooltipContainer = document.getElementById("tooltips");
const timescaleData = getTimescaleData();
const exampleCount = Object.values(timescaleData).flatMap((m: Magnitude) => m.examples || []).length;

let currentZoomLevel = 0;

function reverseArray<T>(arr: T[]): T[] {
    const out: T[] = [];

    for (let i = arr.length - 1; i >= 0; --i) {
        out.push(arr[i]);
    }
    return out;
}

function getMagnitudeByZoomLevel(zoomLevel: number): number | undefined {
    let magnitude = Math.floor(zoomLevel);
    while (magnitude % 3 != 0) magnitude--;
    return magnitude;
}

function drawExampleBackground(width: number, index: number, prepend: boolean = false): HTMLDivElement | undefined {
    if (timeline) {
        const multiplier = exampleCount > 0 ? 255 / exampleCount : 1;
        const bg = document.createElement("div");
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            const red = Math.max(255 - (multiplier * index), 0);
            bg.style.backgroundColor = `rgb(${red}, 0, 0)`;
        } else {
            const greenBlue = Math.min(index * multiplier, 255);
            bg.style.backgroundColor = `rgb(255, ${greenBlue}, ${greenBlue})`;
        }
        bg.className = "timeline-bg";
        bg.style.width = `${width}%`;
        if (prepend) timeline.prepend(bg);
        else timeline.appendChild(bg);
        return bg;
    }
    return undefined;
}

function drawExample(left: number, index: number) {
    if (timeline) {
        const vr = document.createElement("div");
        vr.className = "timeline-vr";
        vr.style.left = `${left}%`;
        timeline.appendChild(vr);
        drawExampleBackground(left, index);
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formatInterval(seconds: number) {
    let unit: string = "seconds";
    let amount: number = seconds;

    if (seconds >= 60 * 60 * 24 * 365.25) {
        amount = seconds / (60 * 60 * 24 * 365.25);
        unit = "years";
    } else if (seconds >= 60 * 60 * 24) {
        amount = seconds / (60 * 60 * 24);
        unit = "days";
    } else if (seconds >= 60 * 60) {
        amount = seconds / (60 * 60);
        unit = "hours";
    }
    return amount.toLocaleString(
        undefined,
        {
            notation: amount > Math.pow(10, 20) || amount < Math.pow(10, -10) ? "engineering" : "standard",
            useGrouping: true,
            maximumFractionDigits: amount > 10 || amount < Math.pow(10, -10) ? 0 : amount > 1 ? 2 : 20,
        },
    ) + ` ${unit}`;
}

function createTooltip(example: Example, magnitude: number, left: number): Tooltip {
    const container = document.createElement("div");
    const text = document.createElement("div");
    const arrow = document.createElement("div");

    container.className = "tooltip-container hidden";
    text.className = "tooltip-text";
    arrow.className = "tooltip-arrow";
    text.textContent = example.text;
    if (left > 90) {
        container.classList.add("reversed");
        container.style.right = `calc(${100 - left}% - 2px)`;
    } else {
        container.style.left = `${left}%`;
    }
    container.appendChild(text);
    container.appendChild(arrow);
    tooltipContainer?.appendChild(container);

    return {
        container: container,
        arrow: arrow,
        text: text,
        isReversed: left > 90,
    };
}

function drawTimeline(magnitude: number, zoomLevel: number) {
    if (tooltipContainer) tooltipContainer.innerHTML = "";

    if (timeline) {
        timeline.innerHTML = "";
        const relativeMax = Math.pow(10, zoomLevel - magnitude);
        const tooltips: PlacedTooltip[] = [];
        const placedTooltips: PlacedTooltip[] = [];

        let currentMagnitude = magnitude;
        let previousMagnitudesTooltipCount = 0;
        let highestIndex = -1;

        do {
            for (const example of reverseArray(timescaleData[currentMagnitude]?.examples || [])) {
                const left = example.multiplier / relativeMax * Math.pow(10, currentMagnitude - magnitude) * 100;

                if (left <= 100) {
                    if (left >= 0.00001) {
                        const tooltip = createTooltip(example, currentMagnitude, left);

                        drawExample(left, example.index);
                        tooltips.push({
                            containerRect: tooltip.container.getBoundingClientRect(),
                            textRect: tooltip.text.getBoundingClientRect(),
                            ...tooltip,
                        });
                        if (currentMagnitude - magnitude < 0) previousMagnitudesTooltipCount++;
                    }
                    if (example.index > highestIndex) highestIndex = example.index;
                }
            }
            currentMagnitude -= 3;
        } while (timescaleData[currentMagnitude] != undefined && previousMagnitudesTooltipCount <= 10);

        if (highestIndex > -1) {
            drawExampleBackground(100, highestIndex + 1, true);
        }

        for (const tooltip of tooltips.sort((a, b) =>
            b.isReversed ? a.containerRect.x - b.containerRect.x : b.containerRect.x - a.containerRect.x
        )) {
            for (const otherTooltip of placedTooltips) {
                if (
                    otherTooltip.containerRect.left < tooltip.containerRect.right + 10 &&
                        otherTooltip.textRect.top < tooltip.textRect.bottom + 10
                ) {
                    tooltip.arrow.style.height = `${otherTooltip.containerRect.height + 10}px`;
                    tooltip.containerRect = tooltip.container.getBoundingClientRect();
                    tooltip.textRect = tooltip.text.getBoundingClientRect();
                }
            }
            if (tooltip.container.offsetTop >= 0) tooltip.container.classList.remove("hidden");
            placedTooltips.push(tooltip);
        }
    }
}

function drawScale(magnitude: number, zoomLevel: number) {
    if (scale) {
        const scaleHrRest = document.createElement("div");

        scale.innerHTML = "";
        if (scaleLegends) scaleLegends.innerHTML = "";
        scaleHrRest.className = "scale-hr scale-hr-rest";

        const width = 100 / Math.pow(10, zoomLevel - magnitude);
        const scaleHr = document.createElement("div");
        const scaleVr = document.createElement("div");

        if (width < 1) scaleHr.style.width = `${width * 100}%`;
        else if (width < 10) scaleHr.style.width = `${width * 10}%`;
        else scaleHr.style.width = `${width}%`;
        scaleHr.className = "scale-hr";
        scaleVr.className = "scale-vr";
        scale.appendChild(scaleHr);
        scale.appendChild(scaleVr);

        if (scaleLegends) {
            const scaleLegend = document.createElement("div");
            const longformSeconds = document.createElement("div");

            const zeros = magnitude > 0
                ? Array(magnitude / 3).fill("000")
                : magnitude < -3
                    ? Array((Math.abs(magnitude) - 3) / 3).fill("000")
                    : [];

            if (width < 1) {
                scaleLegend.textContent = `100 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = longformSeconds.style.width = `${width * 100}%`;
                if (magnitude >= 0) longformSeconds.textContent = `(100 ${zeros.join(" ")} s)`;
                else if (magnitude == -3) longformSeconds.textContent = "(0,1 s)";
                else longformSeconds.textContent = `(0,${zeros.join(" ")} 1 s)`;
            } else if (width < 10) {
                scaleLegend.textContent = `10 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = longformSeconds.style.width = `${width * 10}%`;
                if (magnitude >= 0) longformSeconds.textContent = `(10 ${zeros.join(" ")} s)`;
                else if (magnitude == -3) longformSeconds.textContent = "(0,01 s)";
                else longformSeconds.textContent = `(0,${zeros.join(" ")} 01 s)`;
            } else {
                scaleLegend.textContent = `1 ${timescaleData[magnitude].singular}`;
                scaleLegend.style.width = longformSeconds.style.width = `${width}%`;
                if (magnitude >= 0) longformSeconds.textContent = `(1 ${zeros.join(" ")} s)`;
                else if (magnitude == -3) longformSeconds.textContent = "(0,001 s)";
                else longformSeconds.textContent = `(0,${zeros.join(" ")} 001 s)`;
            }
            scaleLegend.className = "scale-legend";
            longformSeconds.className = "scale-legend";
            scaleLegends.innerHTML = "";
            scaleLegends.appendChild(scaleLegend);
            scaleLegends.appendChild(longformSeconds);
        }

        scale.appendChild(scaleHrRest);
    }
}

function draw(zoomLevel: number) {
    const magnitude = getMagnitudeByZoomLevel(zoomLevel);

    if (magnitude != undefined) {
        drawScale(magnitude, zoomLevel);
        drawTimeline(magnitude, zoomLevel);
    }
}

function zoomBy(zoomLevel: number, delta: number): number {
    const newZoomLevel = parseFloat((zoomLevel + (delta / 1000)).toPrecision(12));
    const magnitude = getMagnitudeByZoomLevel(newZoomLevel);

    if (magnitude != undefined) {
        // Positive delta = zoom out
        if (
            (delta > 0 && timescaleData[magnitude] != undefined) ||
            (delta < 0 && timescaleData[magnitude - 3] != undefined)
        ) return newZoomLevel;
    }

    return zoomLevel;
}

addEventListener("keydown", (event) => {
    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && ["PageUp", "PageDown"].includes(event.key)) {
        event.preventDefault();
        if (event.key == "PageUp") currentZoomLevel = zoomBy(currentZoomLevel, -138);
        if (event.key == "PageDown") currentZoomLevel = zoomBy(currentZoomLevel, 138);
        draw(currentZoomLevel);
    }
});

document.getElementById("container")?.addEventListener("wheel", (event) => {
    event.preventDefault();
    currentZoomLevel = zoomBy(currentZoomLevel, event.deltaY);
    draw(currentZoomLevel);
});

document.getElementById("reset-button-1ns")?.addEventListener("click", () => {
    currentZoomLevel = -9;
    draw(currentZoomLevel);
});

document.getElementById("reset-button-1s")?.addEventListener("click", () => {
    currentZoomLevel = 0;
    draw(currentZoomLevel);
});

document.getElementById("reset-button-1y")?.addEventListener("click", () => {
    currentZoomLevel = Math.log10(yearsToSeconds(1));
    draw(currentZoomLevel);
});

document.getElementById("reset-button-1000y")?.addEventListener("click", () => {
    currentZoomLevel = Math.log10(yearsToSeconds(1000));
    draw(currentZoomLevel);
});

window.onload = () => { draw(currentZoomLevel) };

if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { draw(currentZoomLevel) });
}
