import axios from "axios";
import { redirect, Form,  } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";


const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
      const response = await axios.post(newsletterUrl, data);
      toast.success("you have successfully suscribed to our mailing list");
      console.log(response);
      return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    console.log(error);
    return error
  }

}
const Newsletter = () => {
  const navigate = useNavigation()
  
  const isSubmitting = navigate.state === 'submitting'
  return (
    <Form className="form" method='post'>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" name="name" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" className="form-input" name="email" id="email" />
      </div>
      <button className="btn" type="submit" disabled={isSubmitting} >{isSubmitting? 'submitting' : 'submit'}</button>
    </Form>
  );
};
export default Newsletter;
