"use client";

import {
  Box,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Divider,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Modal from "../ui/Modal";
import Cross from "/public/icons/cross.svg";

type DeleteModalProps = {
  name: string;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  text?: string;
};

const defaultText =
  "Lorem ipsum dolor sit amet cosectetur. Sed imerdient tempor facilisi massa aliquet sit habitant. Lorem ipsum dolor amet consectetur.";

const DeleteModal = ({
  name,
  open,
  onClose,
  onSubmit,
  text = defaultText,
}: DeleteModalProps) => {
  const theme = useTheme();

  const Content = () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          padding: 0,
          fontSize: { xs: "30px", md: "45px" },
          lineHeight: { xs: "35px", md: "53px" },
        }}
      >
        Are you sure you want to delete {name}?
        <Image
          src={Cross}
          alt="close"
          width={20}
          height={20}
          onClick={onClose}
          style={{
            filter:
              theme.palette.mode === "dark"
                ? "brightness(10)"
                : "brightness(1)",
            alignSelf: "start",
            cursor: "pointer",
          }}
        />
      </DialogTitle>
      <DialogContentText variant="body1" sx={{ fontWeight: 300, padding: 0 }}>
        {text}
      </DialogContentText>
      <Divider />
      <DialogActions
        sx={{
          display: "flex",
          padding: 0,
          "& > *": { flexGrow: "1", height: { xs: "40px", md: "61px" } },
        }}
      >
        <Button variant="outlined" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onSubmit();
            onClose();
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Box>
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      paperStyle={{
        display: "flex",
        justifyContent: "space-between",
        gap: { xs: "24px", md: "56px" },
        boxSizing: "border-box",
        borderRadius: theme.spacing(),
        width: { xs: "320px", md: "656px" },
      }}
    >
      <Content />
    </Modal>
  );
};

export default DeleteModal;
