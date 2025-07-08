import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user: '72062.priya@gmail.com',
        pass : 'sqea ssqz mrnw mpxa' // use the 16-digit password
    }
});
const sender = '72062.priya@gmail.com';

export const sendVerificationEmail = async (email, verificationToken)=>{
    console.log(email,'======+++++++')
    try{
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: 'Verify your email',
            html: `${verificationToken}`
            // html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
        })
        console.log("Email sent successfully",info.messageId);
    }
    catch (error){
        console.log(`Error sending verification`,error);
        throw new Error(`Error Sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async(name,email)=>{
    try{
        const info = await transporter.sendMail({
            from:sender,
            to: email,
            subject: 'Welcome email',
            html: `Hello ${name} ${email}`
            // html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
        })
        console.log("Email sent successfully",info.messageId);
        return info;
    }catch(error){
        console.log(error);
    }
}

export const sendPasswordResetEmail = async(email,resetToken)=>{
    try{
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: 'Reset your password',
            html: `Reset your password using this token ${resetToken}`
        })
        console.log("Email sent successfully",info.messageId);
        return info;
    }catch(error){
        console.log(`Error sending password reset email`,error);
        throw new Error(`Error sending password reset email: ${error}`)
    }
}