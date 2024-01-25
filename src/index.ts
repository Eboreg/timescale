import { Example, getTimescaleData, yearsToSeconds } from "./data";

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

let currentZoomLevel = 0;

function reverseArray<T>(arr: T[]): T[] {
    const out: T[] = [];

    for (let i = arr.length - 1; i >= 0; --i) {
        out.push(arr[i]);
    }
    return out;
}

function getMagnitudeByZoomLevel(zoomLevel: number): number | undefined {
    return Object.keys(timescaleData)
        .map((m) => parseFloat(m))
        .filter((m) => m <= zoomLevel)
        .sort((a, b) => b - a)
        .at(0);
}

function drawExampleBackground(width: number, index: number, prepend: boolean = false): HTMLDivElement | undefined {
    if (timeline) {
        const bg = document.createElement("div");
        const greenBlue = Math.min(index * 5, 255);
        bg.className = "timeline-bg";
        bg.style.width = `${width}%`;
        bg.style.backgroundColor = `rgb(255, ${greenBlue}, ${greenBlue})`;
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
    // const interval = formatInterval(example.multiplier * Math.pow(10, magnitude));

    container.className = "tooltip-container hidden";
    text.className = "tooltip-text";
    arrow.className = "tooltip-arrow";
    text.textContent = example.text;
    // tooltipText.textContent = `${example.text} (${interval})`;
    if (left > 90) {
        container.classList.add("reversed");
        container.style.right = `${100 - left}%`;
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

            if (width < 1) {
                scaleLegend.textContent = `100 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = `${width * 100}%`;
            } else if (width < 10) {
                scaleLegend.textContent = `10 ${timescaleData[magnitude].plural}`;
                scaleLegend.style.width = `${width * 10}%`;
            } else {
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

function draw(zoomLevel: number) {
    const magnitude = getMagnitudeByZoomLevel(zoomLevel);

    if (magnitude != undefined) {
        drawScale(magnitude, zoomLevel);
        drawTimeline(magnitude, zoomLevel);
    }
}

function zoomBy(zoomLevel: number, delta: number): number {
    const magnitude = getMagnitudeByZoomLevel(zoomLevel);
    const newZoomLevel = parseFloat((zoomLevel + (delta / 1000)).toPrecision(12));

    if (magnitude != undefined) {
        if (newZoomLevel > magnitude + 3 && timescaleData[magnitude + 3] == undefined) {
            // We're at the right end of the scale, don't zoom out further.
            return magnitude + 3;
        } else if (timescaleData[magnitude - 3] != undefined) {
            return newZoomLevel;
        }
    } else if (newZoomLevel >= currentZoomLevel) {
        return newZoomLevel;
    }
    return zoomLevel;
}

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

window.onload = () => {
    draw(currentZoomLevel);
};
