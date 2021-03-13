import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SubHeaderNav = () => {
  const router = useRouter();

  const menuLink = router?.pathname?.includes("restaurant")
    ? "/restaurant/menu"
    : "/bakery/menu";
  return (
    <>
      <nav>
        <Link href={menuLink}>
          <a
            className={
              router && router.pathname.includes("menu")
                ? "venue_active venue"
                : "venue"
            }
          >
            <img src="/svg/menu.svg" />
          </a>
        </Link>
      </nav>
      <style jsx>{`
        img {
          height: 1rem;
        }
        nav {
          margin-top: 1rem;
        }
        .venue {
          margin-right: 2rem;
        }
        .venue:hover {
          opacity: 0.7;
        }
        .venue_active {
          border-bottom: 3px solid black;
        }
      `}</style>
    </>
  );
};

export default SubHeaderNav;
