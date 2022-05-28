import { Snackbar } from "@material-ui/core"

export default function Toast({ open, autoHideDuration, handleClose, message, severity, ...props }) {
  return (
    <Snackbar
        open={open}
        autoHideDuration={autoHideDuration ? autoHideDuration : 6000}
        onClose={handleClose}
        message={message}
        {...props} />
  )
}
