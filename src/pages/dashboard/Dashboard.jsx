import "./style.scss";
import { useState, useRef, useContext } from "react";
import { Input, Form, Button, message, Upload } from "antd";
import FileUploader from "../../components/file-uploader/FileUploader";
import AuthContext from "../../contexts/auth-context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../utils/baseUrl";

const Dashboard = () => {
  const { userToken } = useContext(AuthContext);
  const [cloading, setCLoading] = useState(false);
  const [ploading, setPLoading] = useState(false);
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const categoriesChange = (meta, status) => {
    setCategories(meta?.file);
  };

  const productsChange = (meta, status) => {
    setProducts(meta?.file);
  };

  const onCategoriesUpload = async () => {
    if (!categories) {
      message.error("Please select a file");
      return;
    } else {
      setCLoading(true);
      const formData = new FormData();
      formData.append("file", categories);
      try {
        const res = await axios.post(
          `${BASE_URL}/api/v1/company/categories`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (res.status === 200) {
          message.success("Categories uploaded successfully!");
          setCLoading(false);
        }
      } catch (error) {
        message.error("Categories upload failed!");
        setCLoading(false);
      }
    }
  };

  const onProductsUpload = async () => {
    if (!products) {
      message.error("Please select a file");
      return;
    } else {
      setPLoading(true);
      const formData = new FormData();
      formData.append("file", products);
      try {
        const res = await axios.post(
          `${BASE_URL}/api/v1/company/products`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (res.status === 200) {
          message.success("Products uploaded successfully!");
          setPLoading(false);
        }
      } catch (error) {
        message.error("Products upload failed!");
        setPLoading(false);
      }
    }
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
              {!cloading && (
                <Button
                  type="primary"
                  htmlType="button"
                  className="submit_btn"
                  onClick={onCategoriesUpload}
                >
                  Upload
                </Button>
              )}
              {cloading && (
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
              {!ploading && (
                <Button
                  type="primary"
                  htmlType="button"
                  className="submit_btn"
                  onClick={onProductsUpload}
                >
                  Upload
                </Button>
              )}
              {ploading && (
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
