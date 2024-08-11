import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Canales", href: "/channels", current: false },
    { name: "Contacto", href: "/contact", current: false },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-teal-800 to-sky-700">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Iptv Premium"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => (document.title = "IPTV Premium")}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white hover:ring-sky-400 hover:ring-1 hover:shadow-green-700 hover:shadow-lg duration-300"
                        : "text-gray-300 hover:ring-sky-400 hover:ring-1 hover:shadow-green-700 hover:shadow-lg hover:text-white duration-300",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <UserCircleIcon className="h-9 w-9 text-indigo-500" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute -right-4 z-10 mt-2 w-32 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in font-semibold"
              >
                <MenuItem>
                  <button
                    className="w-full px-4 py-2 text-sm text-gray-300 data-[focus]:bg-slate-900 duration-300"
                    onClick={() => navigate("/")}
                  >
                    Perfil
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="w-full px-4 py-2 text-sm text-red-600 data-[focus]:bg-slate-900 duration-300"
                    onClick={handleLogout}
                  >
                    Salir
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col gap-1 px-2 pb-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <DisclosureButton
                key={item.name}
                as="div"
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
