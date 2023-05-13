import React from "react";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";

function Breadcrumb() {
  // const history = useHistory();
  // const location = useLocation();
  const [breadcrumbList, setBreadcrumbList] = useState([]);

  useEffect(() => {
    const currentUrlPath = location.pathname.replace(/\/+$/, "");
    const breadcrumbArr = currentUrlPath.split("/").slice(1);

    if (breadcrumbArr[0] === "posts") {
      breadcrumbArr.splice(0, 2, `Posts (page ${breadcrumbArr[1] || 1})`);
    }
    // setBreadcrumbList(breadcrumbArr);
  }, []);

  return (
    <nav
      className="@apply mx-auto mt-8 mb-1 w-full max-w-3xl px-4"
      aria-label="breadcrumb"
    >
      <ul>
        <li className=" @apply inline">
          <a className="@apply capitalize opacity-70" href="/">
            Home
          </a>
          <span className="@apply opacity-70" aria-hidden="true">
            &#62;
          </span>
        </li>
        {breadcrumbList.map((breadcrumb, index) =>
          index + 1 === breadcrumbList.length ? (
            <li className=" @apply inline">
              <span
                className={`@apply opacity-70 ${
                  index > 0 ? "lowercase" : "capitalize"
                }`}
                aria-current="page"
              >
                {breadcrumb}
              </span>
            </li>
          ) : (
            <li className=" @apply inline">
              <a
                className="@apply capitalize opacity-70"
                href={`/${breadcrumb}`}
              >
                {breadcrumb}
              </a>
              <span className="@apply opacity-70" aria-hidden="true">
                &#62;
              </span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
