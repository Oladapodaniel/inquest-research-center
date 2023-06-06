import emailjs from 'emailjs-com';

let emailservice = {

    async sendEMail(recipient, message) {
        const serviceID = 'service_g6u3t95';
        const templateID = 'template_y7y3elt';
        const userID = '6nfjGI-Q5L8U97Jz6';

        const params = {
            to_name: recipient.full_name,
            from_name: "Inquest Research Center",
            reply_to: recipient.email,
            message: message,
        };

        let response = await emailjs.send(serviceID, templateID, params, userID);
        return response
    }

}
export default emailservice