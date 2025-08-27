const error = (...parms: any[]) => {
    console.error(...parms)
}

const warn = (...parms: any[]) => {
    console.warn(...parms)
}

const info = (...parms: any[]) => {
    console.log(...parms)
}

export default { error, warn, info }