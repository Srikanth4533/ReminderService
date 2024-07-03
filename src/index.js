const express = require("express")
const bodyParser = require("body-parser")

const  { PORT } = require("./config/serverConfig")
const  { sendBasicEmail } = require("./services/email-service")

const setupAndStartServer = async () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)

        sendBasicEmail(
            'support@sri.com',
            'srikanthsri4533@gmail.com',
            'From Srikanth',
            'Hello Namaste anna! baagunnavey'
        )
        console.log("email sent")
    })
}

setupAndStartServer()