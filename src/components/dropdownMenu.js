import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownMenu = ({ name, content, onSelect, isShort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const handleItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium 
        rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto w-full justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem : name}
        <IoMdArrowDropdown className="ml-3" />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div className={isMobile ? "fixed inset-0 flex items-center justify-center bg-gray-800 backdrop-blur-sm bg-opacity-50 z-50" : "dropdown-menu origin-top-left absolute left-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto"}>
          <div className={isMobile ?`md:max-w-md mx-4 ${isShort?'h-auto':'h-[350px]'} m-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto` : `py-1 ${isShort?'h-auto':'h-[350px]'}`}>
            {content.map((element, index) => (
              <a
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleItemClick(element)}
              >
                {element}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
