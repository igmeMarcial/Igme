import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiUsers, HiVideoCamera } from "react-icons/hi";
import { IconType } from "react-icons";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/AuthModalApp";

type LoginSidebarProps = {};
interface LinkItemProps {
  name: string;
  iconNav: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Par ti", iconNav: AiFillHome },
  { name: "Siguiendo", iconNav: HiUsers },
  { name: "LIVE", iconNav: HiVideoCamera },
];

const LoginSidebar: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <div className="p-0 mb-2">
      <ul>
        {LinkItems.map((link) => (
          <li key={link.name}>
            <div>
              <Link
                href="/"
                className="lg:justify-start hover:bg-gray-200 relative flex justify-center  items-center p-3 box-border rounded-md text-2xl transition duration-200 ease-in-out bg-rgba(22, 24, 35, 1) "
              >
                <span>{React.createElement(link.iconNav)}</span>
                <span className="hidden lg:block text-rgba(254, 44, 85, 1) font-proxima-nova font-bold text-lg leading-6 ml-2">
                  {link.name}
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LoginSidebar;
