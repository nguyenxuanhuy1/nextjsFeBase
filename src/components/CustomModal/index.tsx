import { Modal } from "antd";
import React from "react";
import CustomButton from "../CustomButton";

interface CustomModalSectionProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
  typeModal?: React.ReactNode;
  onConfirm?: () => void;
}

const CustomModal: React.FC<CustomModalSectionProps> = ({
  open,
  onClose,
  title,
  children,
  width,
  typeModal,
  onConfirm,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={null}
      width={width || 800}
      centered
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: "#7d0c0c",
            color: "white",
            height: "38px",
            fontWeight: 600,
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            padding: "1rem 1rem",
            overflowY: "auto",
            maxHeight: "calc(100vh - 38px - 100px)",
          }}
        >
          {children}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: ".7rem",
            flexWrap: "wrap",
          }}
        >
          {typeModal ? (
            typeModal
          ) : (
            <>
              <CustomButton
                label="Đóng"
                onClick={onClose}
                className="custom_button_cancel"
              />
              <CustomButton label="Xác nhận" onClick={onConfirm} />
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
