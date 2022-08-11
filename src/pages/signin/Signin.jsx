import { useState, useRef, useContext, useEffect } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import BackgroundCover from "../../assets/images/signin_bg.png";
import { Form, Input, Button, Checkbox, message } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { DASHBOARD_PAGE } from "../../routes";
import AuthContext from "../../contexts/auth-context/AuthContext";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const { userToken, login } = useContext(AuthContext);
  const formRef = useRef();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;
    const result = await login(email, password);
    if (result) {
      message.success("Login success!");
      setLoading(false);
      navigate(DASHBOARD_PAGE);
    } else {
      message.error(
        "The login details you entered does not match any of our records"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userToken) {
      navigate(DASHBOARD_PAGE);
    } else return;
  }, [userToken, navigate]);
  return (
    <div className="signin_container">
      <div className="signin_left">
        <img src={BackgroundCover} alt="backgroundcover" />
      </div>
      <div className="signin_right">
        <h1>Sign In</h1>
        <Form
          form={form}
          ref={formRef}
          onFinish={onFinish}
          hideRequiredMark={true}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Email address is required" }]}
            label="Email address"
            labelCol={{ span: 24 }}
          >
            <Input
              prefix={<AiOutlineMail color="#ddd" size={20} />}
              placeholder="Email Address"
              className="signin_input"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
            label="Password"
            labelCol={{ span: 24 }}
          >
            <Input
              prefix={<RiLockPasswordLine color="#ddd" size={20} />}
              placeholder="Password"
              className="signin_input"
              type="password"
            />
          </Form.Item>
          {!loading && (
            <Button htmlType="submit" className="submit_btn">
              Login
            </Button>
          )}
          {loading && (
            <Button loading className="submit_btn">
              Please wait...
            </Button>
          )}
        </Form>
        <div className="form_extras">
          <p>
            <Checkbox /> Keep me logged in
          </p>
          <p>
            <Link to="/">Forgot your password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
