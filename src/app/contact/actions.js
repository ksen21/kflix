




'use server'

import dbConnect from '../../utils/dbConnect'
import Contact from '../../models/Contact'

const submitContact = async(data) => {
    try {
        await dbConnect()
        await Contact.create(data)
        return {status:"ok",message: "Message sent successfully"}
        
    } catch (error) {
        return {status:"ERROR",message: "SERVER ERROR "}

    }
}

export default submitContact;