import emailjs from 'emailjs-com';

const sendEmail = async (emailName: string, email: string, emailMessage: string) => {
    const templateParams = {
        from_name: emailName,
        message: emailMessage,
        reply_to: email
    };

    emailjs.send(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string,
        templateParams, process.env.REACT_APP_USER_ID as string)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);

            //show success alert
            let alert = document.getElementById("suc-alert") as HTMLElement;
            let alertText = document.getElementById("suc-alert-text") as HTMLElement;
            alert.style.visibility = "visible";
            alertText.innerText = "Message successfully sent!"
            setTimeout(() => {
                alert.style.visibility = "hidden"
            }, 3000);
        }, (err) => {
            console.log('FAILED...', err);

            //show danger alert
            let alert = document.getElementById("dan-alert") as HTMLElement;
            let alertText = document.getElementById("dan-alert-text") as HTMLElement;
            alert.style.visibility = "visible";
            alertText.innerText = "Oops! Something went wrong."
            setTimeout(() => {
                alert.style.visibility = "hidden"
            }, 3000);
        });
}

export default sendEmail;