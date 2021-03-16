import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SubHeaderNav = () => {
  const router = useRouter();

  const menuLink = router?.pathname?.includes("restaurant")
    ? "/restaurant/dinner"
    : "/bakery/menu";

  const orderNowLink = router?.pathname?.includes("restaurant")
    ? "/restaurant/order-now"
    : "/bakery/order-now";

  if (
    !router?.pathname.includes("restaurant") &&
    !router?.pathname.includes("bakery")
  ) {
    return null;
  }

  const renderRestaurantMenus = () => {
    if (router?.pathname.includes("restaurant")) {
      return (
        <nav>
          <Link href="/restaurant/dinner">
            <a
              className={
                router && router.pathname.includes("dinner")
                  ? "venue_active venue"
                  : "venue"
              }
            >
              <img src="/svg/dinner.svg" />
            </a>
          </Link>
          <Link href="/restaurant/brunch">
            <a
              className={
                router && router.pathname.includes("brunch")
                  ? "venue_active venue"
                  : "venue"
              }
            >
              <img src="/svg/brunch.svg" />
            </a>
          </Link>
          <style jsx>
            {`
              a {
                margin-bottom: 0.3rem;
              }
              img {
                height: 0.75rem;
              }
              nav {
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
              }
              .venue {
                border-bottom: 3px solid white;
                margin-right: 2rem;
                width: 50px;
              }
              .venue:hover {
                opacity: 0.7;
              }
              .venue_active {
                border-bottom: 3px solid black;
              }
            `}
          </style>
        </nav>
      );
    }
    return null;
  };
  return (
    <>
      <nav>
        <Link href={menuLink}>
          <a
            className={
              (router && router.pathname.includes("menu")) ||
              router.pathname.includes("dinner") ||
              router.pathname.includes("brunch")
                ? "venue_active venue"
                : "venue"
            }
          >
            <img src="/svg/menu.svg" />
          </a>
        </Link>
        <Link href={orderNowLink}>
          <a
            className={
              router && router.pathname.includes("order-now")
                ? "venue_active venue"
                : "venue"
            }
          >
            <img src="/svg/ordernow.svg" />
          </a>
        </Link>
      </nav>
      {renderRestaurantMenus()}
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
