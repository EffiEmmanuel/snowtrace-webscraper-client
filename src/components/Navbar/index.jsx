import React from "react";

// Images
import rnsidLogo from "../../assets/logos/effiemmanuel-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img
        src={rnsidLogo}
        className="max-w-16 min-w-16 object-contain"
        alt="RND ID Full Stack Developer Trial Task By Effi Emmanuel"
      />
      <p className="text-sm text-rnsidBlue font-semibold">
        effiemmanuel.jobs@gmail.com
      </p>
    </nav>
  );
}
