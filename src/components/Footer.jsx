import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
 
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-footer">
      <ul class="nav justify-content-center">
        <li class="nav-item m-3">
          <a href="">
            <AiFillLinkedin style={{ color: "#040f0f", fontSize: "20px" }} />
          </a>
        </li>
        <li class="nav-item m-3">
          <a href="">
            <AiFillGithub style={{ color: "#040f0f", fontSize: "20px" }} />
          </a>
        </li>
        <li class="nav-item m-3">
          <a href="">
            <AiFillTwitterCircle
              style={{ color: "#040f0f", fontSize: "20px" }}
            />
          </a>
        </li>
      </ul>
      <p class="text-center pb-3 small">© 2022 BENNETH NOBLE.</p>
    </footer>
  );
}

export default Footer;
