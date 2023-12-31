import { ReactNode } from "react";

import { Dialog, DialogProps, makeStyles } from "@material-ui/core";
import { White } from "../../assets/colors";

export type TSize = false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;

export interface IBasicDialog extends Omit<DialogProps, "maxWidth"> {
  open: boolean;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  size?: TSize;
  onClose?: () => void;
  alignTop?: boolean;
  children: ReactNode;
  borderRadius?: number | string;
}

const useStyles = makeStyles({
  paper: ({
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    borderRadius = 0,
  }: Partial<IBasicDialog>) => ({
    borderRadius: borderRadius,
    border: "none",
    // boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.2)", // alternate design
    backgroundColor: White,
    ...(minWidth && {
      minWidth,
    }),
    ...(maxWidth && {
      maxWidth,
    }),
    ...(minHeight && {
      minHeight,
    }),
    ...(maxHeight && {
      maxHeight,
    }),
  }),
  scrollPaper: ({ alignTop }: Partial<IBasicDialog>) => ({
    ...(alignTop && {
      alignItems: "flex-start",
    }),
  }),
});

const Modal = ({
  open,
  onClose,
  minWidth,
  maxWidth,
  children,
  alignTop,
  maxHeight,
  minHeight,
  borderRadius,
  size,
  ...props
}: IBasicDialog) => {
  const classes = useStyles({
    minWidth,
    maxWidth,
    maxHeight,
    minHeight,
    alignTop,
    borderRadius,
  });
  return (
    <Dialog
      classes={classes}
      open={open}
      onClose={onClose}
      {...props}
      maxWidth={size}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
