import { FunctionComponent, useCallback, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Sidemenu from "./protelco/Sidemenu";
import SubscriptionField from "./protelco/SubscriptionField";
import UserDetailInput from "./protelco/UserDetailInput";

export type UserDetailsProps = {
  className?: string;
};

type UserStatus = "ACTIVE" | "EXPIRED" | "PAUSED";

type UserFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress: string;
  internet: string;
  calls: string;
  roamingInternet: string;
  roamingCalls: string;
  status: UserStatus;
};

type FormErrors = Partial<Record<keyof UserFormState, string>>;

const userDetailsCopy = {
  editUser: "Edit User",
  personalDetails: "Personal Details",
  proSupport: "Pro Support",
  saveChanges: "Save Changes",
  status: "Status:",
  subscriptions: "Subscriptions",
};

const internetPlans = ["All 100 COMBO", "All 50 COMBO", "Basic 20"];
const callPlans = ["N/A", "Unlimited", "100 min"];
const roamingPlans = ["FREE", "Paid", "N/A"];
const statusOptions: UserStatus[] = ["ACTIVE", "EXPIRED", "PAUSED"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const defaultForm: UserFormState = {
  firstName: "Lisa",
  lastName: "James",
  email: "lisa.james@gmail.com",
  phone: "+1 9300 3478",
  billingAddress: "49 Featherstone Street, LONDON, EC1Y 8SY ",
  internet: "All 100 COMBO",
  calls: "N/A",
  roamingInternet: "FREE",
  roamingCalls: "FREE",
  status: "ACTIVE",
};

/** Protelco Edit User screen converted from Figma via Locofy (node 11677:2540). */
const UserDetails: FunctionComponent<UserDetailsProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<UserFormState>(defaultForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [photoPreview, setPhotoPreview] = useState("/Ellipse-1@2x.jpg");
  const [saved, setSaved] = useState(false);

  const handleSidebarNavigation = useCallback(
    (item: string) => {
      if (item === "user-data") {
        navigate("/all-users");
      }
    },
    [navigate],
  );

  const updateField = useCallback(<K extends keyof UserFormState>(key: K, value: UserFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSaved(false);
  }, []);

  const validate = useCallback((values: UserFormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.firstName.trim()) next.firstName = "First name is required.";
    if (!values.lastName.trim()) next.lastName = "Last name is required.";
    if (!values.email.trim()) next.email = "Email address is required.";
    else if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.billingAddress.trim()) next.billingAddress = "Billing address is required.";
    return next;
  }, []);

  const handleSave = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const nextErrors = validate(form);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) {
        setSaved(false);
        return;
      }
      setSaved(true);
    },
    [form, validate],
  );

  const handlePhotoChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setPhotoPreview(objectUrl);
    setSaved(false);
  }, []);

  return (
    <div className={`flex min-h-screen w-full max-w-full items-stretch overflow-hidden bg-protelco-page leading-[normal] tracking-[normal] ${className}`}>
      {/* Dashboard navigation stays full-height beside the editor */}
      <Sidemenu activeItem="user-data" onNavigate={handleSidebarNavigation} />

      <main className="flex flex-1 flex-col items-start gap-3 p-num-24 text-left font-inter text-[24px] text-black mq800:box-border mq800:py-num-20">
        {/* Page chrome: back control, title, alerts, and account menu */}
        <header className="flex self-stretch flex-wrap content-center items-center gap-x-5 gap-y-2.5 pb-2.5">
          <div className="flex min-w-num-290 flex-1 items-center gap-2">
            <button type="button" onClick={() => navigate("/all-users")} className="size-5 rounded-num-4" aria-label="Return to all users">
              <img className="size-5 rounded-num-4" src="/Back-Icon.svg" alt="" />
            </button>
            <h1 id="edit-user-heading" className="m-0 flex-1 text-[length:inherit] font-bold leading-[100%] mq450:text-[19px] mq450:leading-[19px]">{userDetailsCopy.editUser}</h1>
          </div>
          <div className="flex items-center gap-3 text-num-14">
            <button type="button" className="relative isolate flex size-[42px] items-center justify-center gap-2.5 rounded-[25px] bg-protelco-accent/[0.06]" aria-label="Notifications">
              <img className="size-6 rounded-num-4" loading="lazy" src="/Bell-Icon.svg" alt="" />
              <span className="absolute right-[9.2px] top-[7px] size-[9.6px] rounded-full bg-protelco-accent" />
            </button>
            <button type="button" className="flex items-center gap-1.5 rounded-[34px] p-1.5" aria-label="Pro Support menu">
              <span className="leading-[100%]">{userDetailsCopy.proSupport}</span>
              <img className="size-[30px] rounded-full object-cover" src="/User-Avatar@2x.jpg" alt="" />
              <img className="w-3 rounded-num-4" loading="lazy" src="/Down-Icon.svg" alt="" />
            </button>
          </div>
        </header>

        <div className="flex self-stretch flex-col items-center">
          <form
            onSubmit={handleSave}
            noValidate
            aria-labelledby="edit-user-heading"
            className="flex w-full max-w-[800px] flex-col items-start gap-5 rounded-[10px] bg-white px-num-20 py-num-24 mq800:box-border mq800:max-w-full mq800:py-num-20"
          >
            {/* Profile photo and account status */}
            <section className="flex self-stretch flex-wrap content-start items-start justify-between gap-x-5 gap-y-2.5 text-left font-inter text-num-14 text-black">
              <div className="relative isolate flex w-[180px] items-center justify-between gap-2.5">
                <img className="size-[180px] rounded-full object-cover" src={photoPreview} alt="Lisa James" />
                <label className="absolute bottom-[13px] right-[14px] size-6 cursor-pointer rounded-[15px]" aria-label="Change profile photo">
                  <img className="size-6 rounded-[15px]" src="/Edit-Icon.svg" alt="" />
                  <input className="sr-only" type="file" accept="image/*" onChange={handlePhotoChange} />
                </label>
              </div>
              <label className="flex items-center gap-[5.5px] overflow-x-auto rounded-[34px] px-[13px] py-2.5">
                <span className="leading-[100%]">{userDetailsCopy.status}</span>
                <select
                  aria-label="User status"
                  className="appearance-none border-none bg-transparent p-0 font-inter text-xs font-medium leading-[100%] text-protelco-status outline-none"
                  value={form.status}
                  onChange={(event) => updateField("status", event.target.value as UserStatus)}
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <img className="size-3 shrink-0 rounded-num-4" src="/Down-Icon.svg" alt="" />
              </label>
            </section>

            {/* Personal contact fields from the Figma card */}
            <section className="flex self-stretch flex-col items-start gap-3.5 text-left font-inter text-num-14 text-protelco-content">
              <h3 className="m-0 self-stretch text-[length:inherit] font-semibold">{userDetailsCopy.personalDetails}</h3>
              <div className="flex self-stretch flex-col items-start gap-3 text-xs text-protelco-muted">
                <div className="flex self-stretch flex-wrap content-center items-center gap-3">
                  <UserDetailInput
                    label="First Name"
                    name="firstName"
                    placeholder="Lisa"
                    iconSrc="/First-Name-Icon.svg"
                    value={form.firstName}
                    required
                    autoComplete="given-name"
                    error={errors.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                  />
                  <UserDetailInput
                    label="Last Name"
                    name="lastName"
                    placeholder="James"
                    iconSrc="/First-Name-Icon.svg"
                    value={form.lastName}
                    required
                    autoComplete="family-name"
                    error={errors.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                  />
                </div>
                <div className="flex self-stretch flex-wrap content-center items-center gap-3">
                  <UserDetailInput
                    label="Email Address"
                    name="email"
                    placeholder="lisa.james@gmail.com"
                    iconSrc="/Email-Icon.svg"
                    inputType="email"
                    value={form.email}
                    required
                    autoComplete="email"
                    error={errors.email}
                    onChange={(event) => updateField("email", event.target.value)}
                  />
                  <UserDetailInput
                    label="Phone Number"
                    name="phone"
                    placeholder="+1 9300 3478"
                    iconSrc="/Phone-Icon.svg"
                    inputType="tel"
                    value={form.phone}
                    required
                    autoComplete="tel"
                    error={errors.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                  />
                </div>
                <UserDetailInput
                  label="Billing Address"
                  name="billingAddress"
                  placeholder="49 Featherstone Street, LONDON, EC1Y 8SY "
                  iconSrc="/Billing-Address-Icon.svg"
                  value={form.billingAddress}
                  required
                  autoComplete="street-address"
                  error={errors.billingAddress}
                  onChange={(event) => updateField("billingAddress", event.target.value)}
                />
              </div>
            </section>

            {/* Plan dropdowns: internet, calls, and roaming */}
            <section className="flex self-stretch flex-col items-start gap-3.5 text-left font-inter text-xs text-protelco-muted">
              <h3 className="m-0 self-stretch text-num-14 font-semibold leading-[100%] text-protelco-content">{userDetailsCopy.subscriptions}</h3>
              <div className="flex self-stretch flex-wrap content-center items-center gap-2.5">
                <SubscriptionField
                  label="Internet"
                  name="internet"
                  value={form.internet}
                  options={internetPlans}
                  iconSrc="/Down-Icon.svg"
                  onChange={(event) => updateField("internet", event.target.value)}
                />
                <SubscriptionField
                  label="Calls"
                  name="calls"
                  value={form.calls}
                  options={callPlans}
                  iconSrc="/Down-Icon.svg"
                  onChange={(event) => updateField("calls", event.target.value)}
                />
              </div>
              <div className="flex self-stretch flex-wrap content-center items-center gap-2.5">
                <SubscriptionField
                  label="Roaming Internet"
                  name="roamingInternet"
                  value={form.roamingInternet}
                  options={roamingPlans}
                  iconSrc="/Down-Icon.svg"
                  onChange={(event) => updateField("roamingInternet", event.target.value)}
                />
                <SubscriptionField
                  label="Roaming Calls"
                  name="roamingCalls"
                  value={form.roamingCalls}
                  options={roamingPlans}
                  iconSrc="/Down-Icon.svg"
                  onChange={(event) => updateField("roamingCalls", event.target.value)}
                />
              </div>
            </section>

            <div className="flex self-stretch flex-col items-start pt-4">
              <button
                type="submit"
                className="w-full max-w-[300px] rounded-lg bg-protelco-save px-2.5 py-[18px] text-center font-inter text-base font-semibold leading-[140%] text-white"
              >
                {userDetailsCopy.saveChanges}
              </button>
              {saved ? (
                <p className="mt-2 text-xs font-medium text-protelco-status" role="status">
                  Changes saved.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UserDetails;
