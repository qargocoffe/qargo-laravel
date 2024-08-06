
import { useUIStore } from '@/Store/UIStore';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';



export const Sidebar = ({ items }) => {
    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const isSubcategoryOpen = useUIStore((state) => state.isSubcategoryOpen);
    const toggleSubcategory = useUIStore((state) => state.toggleSubcategory);
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);

    return (
        <>
            {/* Background overlay */}
            {isSideMenuOpen && (
                <div 
                    className="fixed top-0 left-0 z-10 w-full h-full" 
                    onClick={closeSideMenu}
                ></div>
            )}

            {/* Sidemenu */}
            <nav
                className={clsx(
                    "scale-up-right fixed top-[49px] md:top-[79px] right-0 w-1/2 md:w-1/6 h-auto z-20",
                    {
                        "translate-x-0": isSideMenuOpen,
                        "translate-x-full": !isSideMenuOpen
                    }
                )}
            >
                {items.map((item) => (
                    <div
                        key={item.slug}
                        className="p-3 m-1 md:p-5 backdrop-filter backdrop-blur-md bg-white/30"
                        onClick={() => {
                            if (!item.Items || item.Items.length === 0) {
                                closeSideMenu();
                            }
                        }}
                    >
                        {/* Category Link */}
                        {item.Items && item.Items.length > 0 ? (
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => toggleSubcategory(String(item.slug))}
                            >
                                <span className="text-lg font-medium text-focus-in md:text-xl text-lavazzaBlue">
                                    {item.title}
                                </span>
                                <img
                                    src="/logos/arrow-down.png"
                                    width={20}
                                    height={11}
                                    alt="Arrow down"
                                />
                            </div>
                        ) : (
                            <Link
                                href={`/${item.slug}`}
                                className="block text-lg font-medium text-focus-in md:text-xl text-lavazzaBlue"
                                onClick={closeSideMenu}
                            >
                                {item.title}
                            </Link>
                        )}

                        {/* Subcategories */}
                        {item.Items && isSubcategoryOpen[String(item.slug)] && (
                            <div className="mt-2 ml-6">
                                {item.Items.map((subcategory) => (
                                    <Link
                                        key={subcategory.slug}
                                        href={`/${subcategory.slug}`}
                                        className="block mt-2 text-sm tracking-widest md:text-lg text-lavazzaBlue text-focus-in"
                                        onClick={closeSideMenu}
                                    >
                                        {subcategory.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};
