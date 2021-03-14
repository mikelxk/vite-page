import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaBroadcastTower,
  FaEnvelope,
} from "react-icons/fa";

const Badge = (href, Icon) => (
  <a
    href={href}
    target="_blank"
    aria-label={Icon.name}
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
  >
    <Icon size="24" />
  </a>
);
export default () => (
  <div className="mt-10 flex gap-x-16">
    {Badge("https://github.com/mikelxk", FaGithub)}
    {Badge("https://twitter.com/mike_lxk", FaTwitter)}
    {Badge("mailto:mike.lxk@gmail.com", FaEnvelope)}
    {Badge("https://mikelxk.github.io/", FaBroadcastTower)}
  </div>
);
