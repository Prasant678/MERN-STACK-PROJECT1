import { Massage } from '../models/MassageSchema.js';

export const sendMassage = async (req, res) => {
    try {
        const { name, email, subject, massage } = req.body;
        if (!name || !email || !subject || !massage) {
            return res.status(400).json({
                sucess: false,
                massage: "all fields are required"
            });
        }
        await Massage.create({ name, email, subject, massage });
        res.status(200).json({
            sucess: true,
            massage: "Massage sent Sucessfully"
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
              errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
              errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
              errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
              errorMessage += error.errors.message.message + " ";
            }
            return res.status(400).json({
              success: false,
              message: errorMessage,
            });
          }
        res.status(500).json({
            sucess: false,
            massage: "Unknown Error"
        });
    };
};

export  default sendMassage;