import "./style.scss";
import { useState, useRef } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Input, Form, Button, message, Upload } from "antd";
const { Dragger } = Upload;
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const formRef = useRef();

  const props = {
    name: "file",
    multiple: true,
    accept: ".csv, .xls, .xlsx",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setLoading(false);
  };
  return (
    <div className="dashboard">
      <Form
        form={form}
        onFinish={onFinish}
        ref={formRef}
        hideRequiredMark={true}
      >
        <div className="dashboard_upper">
          <div className="dashboard_left">
            <Form.Item
              label="License Number"
              name="licenseNumber"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your license number!",
                },
              ]}
            >
              <Input
                placeholder="License number"
                className="input_license"
                type="text"
              />
            </Form.Item>
          </div>
        </div>
        <div className="dashboard_lower_container">
          <div className="dashboard_lower">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: "#699334" }} />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: "#699334" }} />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
          <div className="dashboard_save">
            {!loading && (
              <Button type="primary" htmlType="submit" className="submit_btn">
                Upload
              </Button>
            )}
            {loading && (
              <Button type="primary" htmlType="button" className="submit_btn">
                Uploading...
              </Button>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Dashboard;
