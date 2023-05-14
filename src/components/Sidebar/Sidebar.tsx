import React, { ReactNode, useState } from "react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ReactText } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import LoginSidebar from "./LoginSidebar";
import AuthSidebar from "./AuthSidebar";
import RecommendedAccounts from "./RecommendedAccounts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const activeLink =
  "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

const normalLink =
  "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";

const Sidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const [user, loading, error] = useAuthState(auth);
  // console.log(":::::>" + user?.email);
  return (
    <div className="">
      <div>
        <div>
          <div className="relative w-16 lg:w-60">
            <div className="h-[92vh] overflow-x-hidden  hover:overflow-y-auto overscroll-y-contain w-16 lg:w-60 z-50 fixed  pr-1 bg-white">
              <div className="pt-5 pl-2 pb-6 flex flex-col items-stretch min-h-full ">
                <LoginSidebar />
                <AuthSidebar user={user} />
                <RecommendedAccounts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
