import React from "react";

interface AvatarInitialsProps {
  name: string;
  size?: number;
}

export function AvatarInitials({ name, size = 48 }: AvatarInitialsProps) {
  function getInitials(fullName: string) {
    if (!fullName) return "?";
    const parts = fullName.split(" ");
    const first = parts[0]?.charAt(0) ?? "";
    const last = parts[parts.length - 1]?.charAt(0) ?? "";
    return (first + last).toUpperCase();
  }

  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg"
    >
      {getInitials(name)}
    </div>
  );
}
