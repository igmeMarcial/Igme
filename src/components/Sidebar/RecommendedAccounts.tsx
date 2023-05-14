import { Avatar, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type RecommendedAccountsProps = {};

interface UserSuggest {
  id: string;
  username: string;
  name: string;
  urlAvatar: string;
}

const usersSuggest: UserSuggest[] = [
  {
    id: "1",
    username: "marcial234",
    name: "Marcil Igme",
    urlAvatar:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    id: "2",
    username: "linucha34",
    name: "Lino Igme",
    urlAvatar:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    id: "3",
    username: "tewesss",
    name: "Masrall ss",
    urlAvatar:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    id: "4",
    username: "lucero123",
    name: "usuario 34",
    urlAvatar:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
  {
    id: "5",
    username: "Rikita",
    name: "User Five",
    urlAvatar:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg",
  },
];

const RecommendedAccounts: React.FC = () => {
  return (
    <div className="py-4 text-gray-700 font-semibold text-sm relative before:content-[''] before:absolute before:left-2 before:right-2 before:top-0 before:h-px before:bg-gray-300 before:transform-scale-y-0.5 ">
      <h2 className="lg:block hidden px-8 mb-8 font-semibold text-sm">
        Cuentas recomendadas
      </h2>
      <ul className="p-0 m-0">
        {usersSuggest.map((user) => (
          <li key={user.id}>
            <div
              role="link"
              className=" p-2 flex flex-row items-center relative rounded-md transition duration-200 ease-in-out hover:bg-gray-100"
            >
              <a
                data-e2e="suggest-user-avatar"
                className="tiktok-22xkqc-StyledLink er1vbsz0"
                href="/@abuelito13"
              >
                <div
                  className="lg:mr-3 relative flex items-center justify-center mr-0 ml-[1px] "
                  style={{ width: "32px", height: "32px" }}
                >
                  <span
                    data-e2e=""
                    className="inline-block box-border m-0 p-0 font-tnum relative overflow-hidden text-white whitespace-nowrap text-center align-middle leading-8 rounded-full border border-gray-300 cursor-pointer bg-opacity-50 bg-gray-500"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <Image
                      className="object-cover w-full h-full"
                      width="100"
                      height="100"
                      alt="test"
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--i96Gcbyf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/50592/f46e43c2-f4f0-4787-b34e-a310cecc221a.jpg"
                    ></Image>
                  </span>
                </div>
              </a>
              <a className="lg:block hidden flex-1 h-8" href="/@abuelito13">
                <div className="flex flex-row items-center">
                  <span
                    data-e2e="suggest-user-title"
                    className="text-gray-700 font-bold text-base  mt-[-2px]  truncate leading-5"
                    style={{ maxWidth: "145px" }}
                  >
                    {user.username}
                  </span>
                </div>
                <p
                  data-e2e="suggest-user-desc"
                  className="text-gray-700 text-opacity-75 font-normal text-xs leading-4 overflow-hidden whitespace-nowrap truncate"
                  style={{ maxWidth: "145px" }}
                >
                  {user.name}
                </p>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-transparent border-none px-8 mt-8 cursor-pointer">
        <p className="lg:block hidden text-red-500 font-semibold text-base leading-5">
          Ver todo
        </p>
      </button>
    </div>
  );
};
export default RecommendedAccounts;
