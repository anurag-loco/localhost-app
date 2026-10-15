import { FunctionComponent, useMemo, useState } from "react";
import Sidemenu from "../components/protelco/Sidemenu";
import UserCard, { UserStatus } from "../components/protelco/UserCard";

type FilterOption = "all" | "active" | "expired" | "paused";

type UserRecord = {
  id: string;
  name: string;
  avatar: string;
  status: UserStatus;
};

const users: UserRecord[] = [
  { id: "1", name: "Lisa James", avatar: "/protelco/avatar-01.png", status: "ACTIVE" },
  { id: "2", name: "Wayne Johnson", avatar: "/protelco/avatar-02.png", status: "ACTIVE" },
  { id: "3", name: "Rob Heart", avatar: "/protelco/avatar-03.png", status: "ACTIVE" },
  { id: "4", name: "James Scott", avatar: "/protelco/avatar-04.png", status: "ACTIVE" },
  { id: "5", name: "Allan Peterson", avatar: "/protelco/avatar-05.png", status: "ACTIVE" },
  { id: "6", name: "Lance Marx", avatar: "/protelco/avatar-06.png", status: "ACTIVE" },
  { id: "7", name: "Jessie Swan", avatar: "/protelco/avatar-07.png", status: "EXPIRED" },
  { id: "8", name: "Connor Hayward", avatar: "/protelco/avatar-08.png", status: "ACTIVE" },
  { id: "9", name: "Tessa DeAmilio", avatar: "/protelco/avatar-09.png", status: "PAUSED" },
  { id: "10", name: "Henry Mckinnon", avatar: "/protelco/avatar-10.png", status: "ACTIVE" },
  { id: "11", name: "Cleo Manon", avatar: "/protelco/avatar-11.png", status: "ACTIVE" },
  { id: "12", name: "Luke James", avatar: "/protelco/avatar-12.png", status: "ACTIVE" },
  { id: "13", name: "Lisa James", avatar: "/protelco/avatar-13.png", status: "PAUSED" },
  { id: "14", name: "Homer Sanchez", avatar: "/protelco/avatar-14.png", status: "EXPIRED" },
  { id: "15", name: "Melanie Palao", avatar: "/protelco/avatar-15.png", status: "ACTIVE" },
  { id: "16", name: "Laura Aimes", avatar: "/protelco/avatar-16.png", status: "ACTIVE" },
  { id: "17", name: "Joseph Bernard", avatar: "/protelco/avatar-17.png", status: "ACTIVE" },
  { id: "18", name: "Ashley Richards", avatar: "/protelco/avatar-18.png", status: "ACTIVE" },
  { id: "19", name: "Will Jocic", avatar: "/protelco/avatar-19.png", status: "ACTIVE" },
  { id: "20", name: "Hanna Swan", avatar: "/protelco/avatar-20.png", status: "ACTIVE" },
];

const filters: { id: FilterOption; label: string }[] = [
  { id: "all", label: "All Users" },
  { id: "active", label: "Active" },
  { id: "expired", label: "Expired" },
  { id: "paused", label: "Paused" },
];

/**
 * Protelco All Users dashboard page.
 * Lists user profile cards with status filters and search.
 */
const AllUsersPage: FunctionComponent = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [query, setQuery] = useState("");

  const visibleUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return users.filter((user) => {
      const matchesFilter =
        activeFilter === "all" || user.status.toLowerCase() === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        user.name.toLowerCase().includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="flex min-h-screen w-full items-stretch bg-[#f0f0f0] !font-inter ![box-sizing:border-box] [&_*]:!font-inter [&_*]:![box-sizing:border-box]">
      <Sidemenu activeItem="user-data" />

      <main className="flex min-w-0 flex-1 flex-col items-center gap-3 p-6">
        <header className="flex w-full flex-wrap items-center gap-x-5 gap-y-2.5 border-b border-solid border-[#eae9e9] pb-2.5">
          <div className="flex min-w-[290px] flex-1 items-center gap-2">
            <button
              type="button"
              className="relative size-5 shrink-0 overflow-hidden rounded"
              aria-label="Go back"
            >
              <img
                className="absolute inset-0 size-full object-contain"
                src="/protelco/icon-back.svg"
                alt=""
              />
            </button>
            <h1 className="min-w-0 flex-1 font-inter text-2xl font-bold leading-none text-black">
              All Users
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative flex size-[42px] items-center justify-center rounded-[25px] bg-[rgba(212,10,13,0.06)]"
              aria-label="Notifications"
            >
              <span className="relative size-6 overflow-hidden rounded">
                <img
                  className="absolute inset-0 size-full object-contain"
                  src="/protelco/icon-bell.svg"
                  alt=""
                />
              </span>
              <img
                className="absolute right-[9px] top-[7px] size-[10px]"
                src="/protelco/badge-dot.svg"
                alt=""
              />
            </button>

            <button
              type="button"
              className="flex items-center gap-1.5 rounded-[34px] border border-solid border-[#f3f0f0] p-1.5"
            >
              <span className="whitespace-nowrap font-inter text-sm leading-none text-black">
                Pro Support
              </span>
              <img
                className="size-[30px] rounded-full object-cover"
                src="/protelco/avatar-support.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="relative size-3 overflow-hidden rounded">
                <img
                  className="absolute inset-0 size-full object-contain"
                  src="/protelco/icon-chevron-down.svg"
                  alt=""
                />
              </span>
            </button>
          </div>
        </header>

        <section className="flex w-full flex-wrap items-center gap-3">
          <div className="flex min-w-[290px] flex-1 flex-wrap items-center gap-5">
            <p className="whitespace-nowrap font-inter text-sm leading-none text-[#373737]">
              Show:
            </p>
            <div className="flex min-w-[290px] flex-1 flex-wrap items-center gap-1.5">
              {filters.map((filter) => {
                const isSelected = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-[14px] border border-solid px-4 py-1.5 font-inter text-[13px] leading-none ${
                      isSelected
                        ? "border-[#d40a0d] text-[#d40a0d]"
                        : "border-[#eae9e9] text-[#a6a6a6]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="flex max-w-[290px] min-w-[270px] flex-1 items-center justify-between overflow-hidden rounded-md bg-white px-3.5 py-2.5">
            <span className="sr-only">Search users</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className="min-w-0 flex-1 border-none bg-transparent font-inter text-xs leading-none text-[#373737] outline-none placeholder:text-[#a6a6a6]"
            />
            <span className="relative size-4 shrink-0">
              <img
                className="absolute inset-0 size-full object-contain"
                src="/protelco/icon-search.svg"
                alt=""
              />
            </span>
          </label>
        </section>

        <section className="flex w-full flex-col items-center gap-3.5">
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] content-start items-start gap-3">
            {visibleUsers.map((user) => (
              <UserCard
                key={user.id}
                name={user.name}
                avatar={user.avatar}
                status={user.status}
              />
            ))}
          </div>

          {visibleUsers.length === 0 ? (
            <p className="py-10 font-inter text-sm text-[#797b7d]">
              No users match the current filters.
            </p>
          ) : (
            <button
              type="button"
              className="rounded-lg bg-[rgba(212,10,13,0.06)] px-5 py-2.5 font-inter text-sm leading-[1.4] text-[#d40a0d]"
            >
              Show more
            </button>
          )}
        </section>
      </main>
    </div>
  );
};

export default AllUsersPage;
