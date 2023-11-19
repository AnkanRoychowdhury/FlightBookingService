const { StatusCodes } = require("http-status-codes");
const {BookingService} = require("../services/index");
const { createChannel, publishMessage } = require("../utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("../config/serverConfig");

const bookingService = new BookingService();
class BookingController {

    constructor() {
        
    }

    async sendMessageToQueue (req,res) {
        const channel = await createChannel();
        const payload = {
            data: {
                subject: 'Notification from queue',
                content: 'Content which queue will get to subscribe',
                recepientEmail: 'roychowdhuryankan0@gmail.com',
                notificationTime: '2023-11-17T15:26:15'
            },
            service: 'CREATE_TICKET'
        };
        publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(payload));
        return res.status(StatusCodes.OK).json({
            message: 'Successfully published the event'
        })
    }

    async create (req,res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                data: response,
                success: true,
                message: 'Successfully completed booking',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode).json({
                data: {},
                success: false,
                message: error.message,
                err: error.explanation
            });
        }
    }
}

module.exports = BookingController;