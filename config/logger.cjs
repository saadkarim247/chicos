const {
    createLogger,
    transports,
    format
} = require('winston');

const Timezone = () =>{
    return new Date().toUTCString()
}
const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp({format: Timezone}), format.json())
        })
    ]
})

module.exports = logger;