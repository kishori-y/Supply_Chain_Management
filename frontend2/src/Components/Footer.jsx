import { Fot1, Fot2 } from ".";

export default () => {
  const footerNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img
              src="https://5.imimg.com/data5/FF/AS/GLADMIN-49637689/1.png"
              className="w-32"
              alt="Company Logo"
            />
            

            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-800 hover:text-gray-500 duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
             
             
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© {new Date().getFullYear()} Sencio Softcon.</p>
        </div>
      </div>
    </footer>
  );
};
