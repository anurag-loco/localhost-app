import { FunctionComponent, type ChangeEvent } from "react";

export type UserDetailInputProps = {
  label: string;
  placeholder: string;
  iconSrc: string;
  className?: string;
  inputType?: string;
  name?: string;
  value?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

/** Labelled personal-detail field with a trailing icon and optional validation. */
const UserDetailInput: FunctionComponent<UserDetailInputProps> = ({
  label,
  placeholder,
  iconSrc,
  className = "",
  inputType = "text",
  name,
  value,
  required = false,
  error,
  autoComplete,
  onChange,
}) => {
  const inputId = name ? `user-detail-${name}` : undefined;
  const errorId = error && name ? `${name}-error` : undefined;

  return (
    <label className={`flex min-w-num-290 flex-1 flex-col items-start gap-2 ${className}`} htmlFor={inputId}>
      <span className="self-stretch leading-[100%]">{label}</span>
      <span className={`flex self-stretch items-center gap-2.5 overflow-hidden rounded-num-6 bg-protelco-field p-num-12 ${error ? "ring-1 ring-[#d40a0d]" : ""}`}>
        <input
          id={inputId}
          name={name}
          value={value}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className="h-3.5 min-w-num-150 w-num-calc100-44 flex-1 overflow-hidden text-ellipsis whitespace-nowrap border-none bg-transparent p-0 font-inter text-num-14 leading-[100%] text-protelco-content outline-none"
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
        />
        <img className="size-5 rounded-num-4" src={iconSrc} alt="" />
      </span>
      {error ? (
        <span id={errorId} className="self-stretch text-[11px] leading-[100%] text-[#d40a0d]" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
};

export default UserDetailInput;
