const Header = () => {
  return (
    <div>
      <header className="mx-24 px-80 flex justify-between items-center py-2 ">
        <div className="flex">
          <img src="https://www.testvalley.kr/logo/logo-new.svg" alt="logo" />
          <div className="space-y-1 pl-5 pt-1 pr-2">
            <span className="block w-4 h-0.5 p-0 m-0 bg-[#00D094]"></span>
            <span className="block w-4 h-0.5 p-0 m-0 bg-[#00D094]"></span>
            <span className="block w-4 h-0.5 p-0 m-0 bg-[#00D094]"></span>
          </div>
          <div className="text-[#00D094]">카테고리</div>
        </div>
        <div className="w-2/4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-3 ps-10 text-sm border w-1/2 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="살까말까 고민된다면 검색해보세요!"
              required
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <img src="https://www.testvalley.kr/common/home-event.svg" alt="" />{" "}
          <span className="p-4"> | 카테고리</span>
        </div>
      </header>
      <hr className="border-t border-gray-300" />
    </div>
  );
};

export default Header;
