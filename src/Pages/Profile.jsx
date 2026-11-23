import React, { useState } from "react";

function Profile() {
  const [fullName, setFullName] = useState("Ada Okafor");
  const [email, setEmail] = useState("ada@documind.app");
  const [saved, setSaved] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="bg-[#fbfbfd] font-[Arial,sans-serif]">
      <div className="mt-8 w-full max-w-[940px] bg-[#fbfbfd]  font-[Arial,sans-serif]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold tracking-[-1.2px] text-[#080d1b]">
            Profile
          </h1>

          <p className="mt-2 text-[14px] text-[#87909d]">
            Manage your personal information and workspace preferences.
          </p>
        </div>

        {/* Profile Card */}
        <div className="w-full rounded-[18px] border border-[#e8e8ed] bg-white p-6 sm:p-8">
          {/* User Information */}
          <div className="flex items-center gap-[18px]">
            <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#f0eafd] text-[20px] font-bold text-[#7624c6]">
              AO
            </div>

            <div className="min-w-0">
              <h3 className="mb-1 text-[16px] font-bold text-[#202633]">
                {fullName}
              </h3>

              <p className="break-all text-[14px] text-[#9aa3ae]">{email}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-7 h-px bg-[#f0f1f3]" />

          {/* Profile Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#343d4b]">
                  Full name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="h-[51px] w-full rounded-[14px] border border-[#e5e6e9] bg-white px-4 text-left text-[14px] text-[#555d68] outline-none focus:border-[#8b35e8]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="mb-2 block text-[14px] font-semibold text-[#343d4b]">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-[51px] w-full rounded-[14px] border border-[#e5e6e9] bg-white px-4 text-left text-[14px] text-[#555d68] outline-none focus:border-[#8b35e8]"
                />
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="h-[43px] rounded-[13px] bg-[#8524e8] px-[18px] text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#7620d2]"
              >
                Save changes
              </button>

              {saved && (
                <span className="text-[12px] text-[#6b7280]">
                  Changes saved.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
