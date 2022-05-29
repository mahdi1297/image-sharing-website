import styles from "./style.module.scss";

type ErrorIndicatorProps = {
  errors: any;
  maximumFileSize: number;
  acceptedFileTypes: any;
};

type error = {
  message: string;
};

const Error = ({ message }: error) => {
  return <p className={styles.error}>{message}</p>;
};

const ErrorsIndicator: React.FC<ErrorIndicatorProps> = ({
  errors,
  maximumFileSize,
  acceptedFileTypes,
}) => {
  return (
    <>
      {errors && (
        <div>
          {errors.maxNumber && (
            <Error message="Number of selected images exceed maxNumber" />
          )}

          {errors.acceptType && (
            <Error
              message={`Your selected file type is not allow. Only select ${acceptedFileTypes}`}
            />
          )}

          {errors.maxFileSize && (
            <Error
              message={`Selected file size exceed ${Math.round(
                maximumFileSize / 1000000
              )} mb`}
            />
          )}

          {errors.resolution && (
            <Error message="Selected file is not match your desired resolution" />
          )}
        </div>
      )}
    </>
  );
};

export default ErrorsIndicator;
