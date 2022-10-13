import Dropzone from "react-dropzone-uploader";
import "./style.scss";

const FileUploader = ({ content, handleChangeStatus }) => {
  // called every time a file's `status` changes

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      accept=".csv, .xlsx, .xls"
      inputContent={(files, extra) =>
        extra.reject ? (
          "Maximium file size is 5mb"
        ) : (
          <div className="">
            <p style={{ color: "#699334", fontSize: "14px" }}>{content}</p>
          </div>
        )
      }
      styles={{
        dropzoneReject: {
          borderColor: "#F19373",
          backgroundColor: "#F1BDAB",
        },
      }}
      autoUpload={false}
      maxFiles={1}
      canRemove={true}
      canCancel={true}
      multiple={false}
    />
  );
};

export default FileUploader;
