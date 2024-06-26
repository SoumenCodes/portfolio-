import React from "react";
import "../css/Style.css";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  let colors = {
    bgColor: "#b2bec3",
  };
  let socail = [
    { name: "facebook", logo: "src/assets/facebook.png", link: "" },
    { name: "Linkedin", logo: "src/assets/linkedin.png", link: "" },
    { name: "Instagram", logo: "src/assets/instagram.png", link: "" },
    {
      name: "Github",
      logo: "src/assets/github.png",
      link: "",
    },
  ];
  let menu = [
    {
      option: "Home",
      logo: "",
    },
    {
      option: "Resume",
      logo: "",
    },
    {
      option: "Work",
      logo: "",
    },
    {
      option: "Conatact",
      logo: "",
    },
  ];

  return (
    <div className="flex row justify-between">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "85vh",
          padding: "20px 0",
          width: "20vw",
          border: "2px solid blue",
        }}
      >
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            border: "2px solid black",
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png"
            alt=""
            srcSet=""
            width={"150px"}
            style={{ border: "2px solid green" }}
          />
          <h1 className="paprika-regular text-4xl font-bold">Ckryo Action</h1>
        </div>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <h6 className="text-center text-  xl font-bold">
            FullStack Developer
          </h6>
          <div
            style={{
              width: "80%",
              // border: "2px solid red",
              flexDirection: "row",
              display: "flex",
              margin: "0 auto",
              gap: 10,
            }}
          >
            {socail.map((item) => (
              <div
                style={{
                  flexGrow: 1,
                  // width: "50px",
                  height: "50px",
                  // border: "2px solid blue",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.bgColor,
                  borderRadius: "8px",
                }}
                key={item.name}
              >
                <img
                  src={item.logo}
                  alt="social"
                  style={{ padding: "15px" }}
                  srcSet=""
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            flexGrow: 3,
            border: "2px solid red",
            margin: "20px",
          }}
          className="mx-5 book"
        >
          <div
            className="h-full font-bold"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 30px",
              backgroundColor: colors.bgColor,
              borderRadius: "10px",
              fontSize: "12px",
            }}
          >
            <div className="flex row" style={{ flexGrow: 1, gap: 10 }}>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                style={{
                  flexGrow: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <div>Phone</div>
                <div>7209907203</div>
              </div>
            </div>
            <div
              className="flex row"
              style={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                gap: 25,
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <div style={{ flexGrow: 4 }}>
                <div>Email</div>
                <div>Soumen19j@gmail.com</div>
              </div>
            </div>
            <div className="flex row" style={{ flexGrow: 1, gap: 10 }}>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                style={{
                  flexGrow: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>Location</div>
                <div>India</div>
              </div>
            </div>
            <div
              className="flex row justify-around items-center"
              style={{
                flexGrow: 1,
                //  border: "2px solid black"
              }}
            >
              <div className="flex row text-lg">
                <button>
                  <span></span>----------------
                </button>
              </div>
            </div>
          </div>
          <div class="cover">
            <p style={{ fontSize: 18 }}>Hover me To get my info</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-blue-700" style={{ width: "72vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "20px",
            border: "2px solid green",
            padding: "20px",
            gap: 20,
          }}
        >
          {menu.map(({ option }) => (
            <NavLink
              to={`Soumen/${option}`}
              style={{
                border: "2px solid black",
                width: "80px",
                height: "80px",
              }}
            >
              {option}
            </NavLink>
          ))}
        </div>
        <div style={{ border: "2px solid blue" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
