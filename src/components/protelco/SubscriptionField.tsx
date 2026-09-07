import { FunctionComponent, type ChangeEvent } from "react";

export type SubscriptionFieldProps = {
  label: string;
  value: string;
  iconSrc: string;
  className?: string;
  name?: string;
  options?: string[];
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

/** Subscription plan picker styled as a filled select with a trailing chevron. */
const SubscriptionField: FunctionComponent<SubscriptionFieldProps> = ({
  label,
  value,
  iconSrc,
  className = "",
  name,
  options,
  onChange,
}) => {
  const selectId = name ? `subscription-${name}` : undefined;
  const choices = options && options.length > 0 ? options : [value];

  return (
    <div className={`flex h-16 min-w-num-290 flex-1 flex-col items-start gap-2 ${className}`}>
      <label className="self-stretch leading-[100%]" htmlFor={selectId}>
        {label}
      </label>
      <div className="relative flex h-11 shrink-0 self-stretch items-center overflow-hidden rounded-num-6 bg-protelco-field p-num-12 text-num-14 text-protelco-content">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          className="h-full w-full appearance-none border-none bg-transparent p-0 pr-6 font-inter text-num-14 leading-[100%] text-protelco-content outline-none"
        >
          {choices.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img className="pointer-events-none absolute right-3 size-3 rounded-num-4" src={iconSrc} alt="" />
      </div>
    </div>
  );
};

export default SubscriptionField;
