
import { useState, useEffect } from 'react';


import { Link } from '@inertiajs/react';
import { useUIStore } from '@/Store/UIStore';
import { Sidebar } from './Sidebar';


export const Menu = () => {
  const [menu, setMenu] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);

  const getMenu = () => {
    const data = {
      "data": {
        "id": 1,
        "attributes": {
          "title": "Menu",
          "menu": [
            {
              "id": 6,
              "title": "VISIT US",
              "slug": "visit-us",
              "Items": []
            },
            {
              "id": 7,
              "title": "ORDER",
              "slug": "order-pickup",
              "Items": []
            },
            {
              "id": 8,
              "title": "OUR MENU",
              "slug": "our-menus",
              "Items": []
            },
            {
              "id": 9,
              "title": "ABOUT",
              "slug": "#",
              "Items": [
                { "id": 9, "title": "Our History", "slug": "about" },
                { "id": 10, "title": "Our Mission", "slug": "abouts" },
                { "id": 17, "title": "About", "slug": "abouts" },
                { "id": 11, "title": "Our Vision", "slug": "about" },
                { "id": 12, "title": "Sustainability", "slug": "sustainabilities" },
                { "id": 13, "title": "Team", "slug": "teams" },
                { "id": 14, "title": "Partners", "slug": "partners" },
                { "id": 14, "title": "Lotus", "slug": "campaign/lotus-campaign" },
                { "id": 14, "title": "Summer", "slug": "campaign/summer-campaign" },
                { "id": 15, "title": "Careers", "slug": "careers" },
                { "id": 16, "title": "Contact", "slug": "contact" }
              ]
            },
            {
              "id": 10,
              "title": "FRANCHISES",
              "slug": "franchises",
              "Items": []
            },
            {
              "id": 11,
              "title": "BLOG & NEWS",
              "slug": "blogs",
              "Items": []
            }
          ],
          "logo": {
            "data": {
              "id": 205,
              "attributes": {
                "name": "logo.png",
                "url": "/uploads/logo_6fdfd9a15a.png",
                "width": 44,
                "height": 44
              }
            }
          },
          "company": {
            "data": {
              "id": 222,
              "attributes": {
                "name": "Group.png",
                "url": "/uploads/Group_915b00099c.png",
                "width": 567,
                "height": 84
              }
            }
          }
        }
      },
      "meta": {}
    };

    const { data: { attributes: { logo, company, menu } } } = data;
    setMenu({ logo, company, menu });
    setLoading(false);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full px-3 py-3 fade-in backdrop-filter backdrop-blur-md bg-white/30 md:p-4">
        <div className="flex items-center justify-between h-6 gap-3 slide-in-right" onClick={() => closeSideMenu()}>
          <Link href="/">
            <img
              src="/menu/blue/logo.png"
              alt="QargoCoffee Logo"
              width={230}
              height={38}
              className="lg:w-[15rem] h-[28px] w-auto cursor-pointer lg:h-auto"
            />
          </Link>
        </div>

        <div className="flex gap-4 slide-in-left">
          {isSideMenuOpen ? (
            <img
              onClick={closeSideMenu}
              className="z-20 cursor-pointer md:h-auto"
              src="/menu/blue/close.png"
              alt="Close Menu"
              width={24}
              height={24}
            />
          ) : (
            <img
              onClick={openSideMenu}
              className="z-20 cursor-pointer md:h-auto"
              src="/menu/blue/squads.png"
              alt="Open Menu"
              width={24}
              height={24}
            />
          )}
        </div>
      </nav>
      {menu && isSideMenuOpen && (
        <Sidebar items={menu.menu} />
      )}
    </>
  );
};
