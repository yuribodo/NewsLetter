import React from 'react';
import  MailchimpSubscribe  from 'react-mailchimp-subscribe';

interface CustomFormProps {
    status: 'sending' | 'error' | 'success' | null;
    message: string | null | Error; // Corrigido aqui
    onValidated: (formData: { EMAIL: string }) => void;
}

const CustomForm: React.FC<CustomFormProps> = ({ status, message, onValidated }) => {
    let email: HTMLInputElement | null = null;

    const submit = () => {
        if (email && email.value.indexOf('@') > -1) {
            onValidated({ EMAIL: email.value });
        }
    };

    return (
        <div className="newsletter-form">
            {status === 'sending' && <div style={{ color: 'blue' }}>Enviando...</div>}
            {status === 'error' && (
                <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message?.toString() || '' }} /> // Corrigido aqui
            )}
            {status === 'success' && (
                <div style={{ color: 'green' }}>Inscrição realizada com sucesso!</div>
            )}

            <input
                ref={(node) => (email = node)}
                type="email"
                placeholder="Seu e-mail"
            />
            <br />
            <button onClick={submit}>Inscrever-se</button>
        </div>
    );
};

const NewsletterForm: React.FC = () => {
    const url = 'https://gmail.us22.list-manage.com/subscribe?u=d4302f7d81d8ac03785ff3c1c&id=d4042ca44c'; // Substitua pelo seu URL do formulário Mailchimp

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
            )}
        />
    );
};

export default NewsletterForm;
