import { FilterContext } from "@/context/filterContext";
import { Genre } from "@/types/filterContextData";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Fragment, ReactNode, useContext } from "react";

interface Props {
  name: string;
  function: any;
  items?: [];
  title: string;
}

const DropMenu = ({ items, title }: any) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-paragraph shadow-sm hover:bg-lightBackground focus:outline-none focus:ring-2 focus:ring-greenText'>
          {title}
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1 rounded-md border-2 border-greenText'>
            {items?.map((item: any, i: number) => (
              <Menu.Item key={i}>
                <Link
                  onClick={item.function}
                  href='/movies'
                  as={`/movies/${item.name}`}
                  className='text-paragraph
                    block px-4 py-2 text-sm'>
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropMenu;
