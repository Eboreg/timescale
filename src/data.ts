export interface Example {
    multiplier: number;
    text: string;
    index: number;
}

interface RawExample {
    seconds: number;
    text: string;
}

export interface Magnitude {
    singular: string;
    plural: string;
    examples?: Example[];
}

interface Timescale {
    [magnitude: number]: Magnitude;
}

const now = new Date();
const currentYear = now.getFullYear();

function absoluteYearToSeconds(year: number): number {
    const yearsAgo = currentYear - year;
    return yearsAgo * 365.25 * 24 * 60 * 60;
}

export function yearsToSeconds(years: number): number {
    return years * 365.25 * 24 * 60 * 60;
}

const rawExamples: RawExample[] = [
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
        seconds: absoluteYearToSeconds(-10_000),
        text: "Time since end of ice age (~10 000 BC)",
    },
    {
        seconds: yearsToSeconds(35_000),
        text: "Time since the domestication of dogs",
    },
    {
        seconds: yearsToSeconds(40_000),
        text: "Time since the extinction of Homo neanderthalensis",
    },
    {
        seconds: yearsToSeconds(300_000),
        text: "Time since the earliest Homo sapiens",
    },
    {
        seconds: yearsToSeconds(1_000_000),
        text: "One million years",
    },
    {
        seconds: yearsToSeconds(2_500_000),
        text: "Time since earliest Australopithecus",
    },
    {
        seconds: yearsToSeconds(4_120_000),
        text: "The typical lifetime of a biological species on Earth",
    },
    {
        seconds: yearsToSeconds(65_000_000),
        text: "Time since the extinction of dinosaurs",
    },
    {
        seconds: yearsToSeconds(65_000_000),
        text: "Time since the first primates",
    },
    {
        seconds: yearsToSeconds(180_000_000),
        text: "Time since the first mammals",
    },
    {
        seconds: yearsToSeconds(500_000_000),
        text: "Time since the Cambrian explosion",
    },
    {
        seconds: yearsToSeconds(650_000_000),
        text: "Time since the first animals",
    },
    {
        seconds: yearsToSeconds(700_000_000),
        text: "The approximate half-life of the uranium isotope 235U",
    },
    {
        seconds: yearsToSeconds(4_000_000_000),
        text: "Time since the origin of life",
    },
    {
        seconds: yearsToSeconds(4_500_000_000),
        text: "The age of Earth",
    },
    {
        seconds: yearsToSeconds(13_800_000_000),
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

const emptyTimescale: Timescale = {
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

export function getTimescaleData(): Timescale {
    const timescaleData: Timescale = JSON.parse(JSON.stringify(emptyTimescale)); // ugly cloning method
    let index = 0;

    for (const rawExample of rawExamples.sort((a, b) => a.seconds - b.seconds)) {
        let magnitude = Math.floor(Math.log10(rawExample.seconds));
        while (magnitude % 3 != 0) magnitude--;
        if (timescaleData[magnitude].examples == undefined) timescaleData[magnitude].examples = [];
        timescaleData[magnitude].examples?.push({
            multiplier: rawExample.seconds / Math.pow(10, magnitude),
            text: rawExample.text,
            index: index++,
        });
    }

    return timescaleData;
}
