import { FunctionComponent } from "react";

export type UserStatus = "ACTIVE" | "EXPIRED" | "PAUSED";

export type UserCardProps = {
  className?: string;
  name: string;
  avatar: string;
  status: UserStatus;
  onEdit?: () => void;
};

const statusStyles: Record<UserStatus, { bg: string; text: string }> = {
  ACTIVE: { bg: "bg-[rgba(79,199,134,0.1)]", text: "text-[#4fc786]" },
  EXPIRED: { bg: "bg-[rgba(244,89,108,0.1)]", text: "text-[#f4596c]" },
  PAUSED: { bg: "bg-[rgba(195,89,244,0.1)]", text: "text-[#c359f4]" },
};

/**
 * User profile card with avatar, name, status pill, and edit action.
 */
const UserCard: FunctionComponent<UserCardProps> = ({
  className = "",
  name,
  avatar,
  status,
  onEdit,
}) => {
  const styles = statusStyles[status];

  return (
    <article
      className={`relative flex min-w-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border-r border-solid border-[#f3f0f0] bg-white px-3.5 pb-4 pt-[18px] ${className}`}
    >
      <button
        type="button"
        onClick={onEdit}
        className="absolute right-[9px] top-2.5 flex size-6 items-center justify-center overflow-hidden rounded-[15px] bg-[rgba(212,10,13,0.06)] hover:bg-[rgba(212,10,13,0.12)]"
        aria-label={`Edit ${name}`}
      >
        <span className="relative size-[12px] overflow-hidden">
          <img
            className="absolute inset-0 size-full object-contain"
            src="/protelco/icon-edit.svg"
            alt=""
          />
        </span>
      </button>

      <div className="relative size-[60px] overflow-hidden rounded-full">
        <img
          className="absolute inset-0 size-full object-cover"
          src={avatar}
          alt=""
          width={60}
          height={60}
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h3 className="w-full text-center font-inter text-base font-semibold leading-[1.4] text-[#373737]">
          {name}
        </h3>
        <span
          className={`rounded-2xl px-[7px] py-1 font-inter text-xs font-medium leading-none ${styles.bg} ${styles.text}`}
        >
          {status}
        </span>
      </div>
    </article>
  );
};

export default UserCard;
