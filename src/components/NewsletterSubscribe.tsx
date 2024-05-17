import React from 'react';
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

const url = "https://gmail.us22.list-manage.com/subscribe/post?u=d4302f7d81d8ac03785ff3c1c&amp;id=226d559836&amp;f_id=00e1c8e1f0";

// simplest form (only email)
const SimpleForm = ({ onSubmitted }: { onSubmitted: (formData: EmailFormFields) => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const email = formData.get('email') as string;
      onSubmitted({ EMAIL: email });
    }}
  >
    <input type="email" name="email" required />
    <button type="submit">Subscribe</button>
  </form>
);

// use the render prop and your custom form
const CustomForm: React.FC = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }: {
      subscribe: (data: EmailFormFields) => void;
      status: "sending" | "error" | "success" | null;
      message: string | Error | null;
    }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message as string }} />}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
);

export default CustomForm;
