import "./style.scss";
import { useState, useRef } from "react";
import { Input, Form, Button, message, Upload } from "antd";
import FileUploader from "../../components/file-uploader/FileUploader";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const categoriesChange = (meta, status) => {
    console.log(meta?.file);
  };

  const productsChange = (meta, status) => {
    console.log(meta?.file);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_upper">
        <div className="dashboard_left">
          <Form.Item
            label="License Number"
            name="licenseNumber"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: false,
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
          <div className="categories__uploader">
            <FileUploader
              content="Click to upload categories"
              handleChangeStatus={categoriesChange}
            />
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
          <div className="products__uploader">
            <FileUploader
              content="Click to upload products"
              handleChangeStatus={productsChange}
            />
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
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
