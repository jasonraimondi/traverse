module.exports = {
    globals: {
        'ts-jest': {
          diagnostics: false,
        },
    },
    preset: "ts-jest",
    collectCoverage: true,
    collectCoverageFrom: ["src/{renderer}/**/*.{js,jsx,ts,tsx}"],
    coverageReporters: ["lcov"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    setupFiles: [
        "<rootDir>/test/setupTests.ts"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/fileMock.ts",
        "\\.(css|pcss)$": "<rootDir>/test/styleMock.ts",
        "@/(.*)$": "<rootDir>/src/$1"
    }
};
