import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownMenu = ({ name, content, maxHeight = 150 , onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [named, setName] = useState(name)
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (item) =>{
    setSelectedItem(item)
    onSelect(item)
    setIsOpen(false)
    setName(item)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium 
        rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto w-full justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {named?named:name}
        <IoMdArrowDropdown className="ml-3"/>
      </button>

      {/* Dropdown panel */}
      {isOpen && (

        <div className="origin-top-left sm:h-[150px] h-[350px] sm:absolute left-0 mt-2 sm:w-auto w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
          <div className="py-1">
            {content.map((element, index) => (
              <a
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 z-100 hover:bg-gray-100"
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
