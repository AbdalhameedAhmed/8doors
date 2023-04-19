import React from "react"

import classNames from "classnames"

import useOnClickOutside from "hooks/useOnClickOutside"

import SearchIcon from "assets/search.svg"

type searchBarTypes = {
  searchBarState: boolean
  changeSearchBarState: Function
}

export default function SearchBar({ searchBarState, changeSearchBarState }: searchBarTypes) {

  const serachBarRef = React.useRef(null)
  const [resultsMenu,isReasultsMenuOpened] = React.useState(false)

  const closeSearchBar = () => {
    changeSearchBarState(false)
  }

  useOnClickOutside(serachBarRef, closeSearchBar)

const searchHandler = ()=>{
  isReasultsMenuOpened(!resultsMenu)
  console.log(resultsMenu);
  
}

  return (
    <div className={classNames("absolute overflow-hidden bg-[#ffffffc4] transition-all duration-300 max-h-[100px]top-0 scale-y-100 origin-top p-8 left-o w-full z-50 backdrop-blur-[6px] shadow-md", {
      "scale-y-0 ": !searchBarState
    })} ref={serachBarRef}>
      <div className="flex justify-start gap-2 items-center ">
      <SearchIcon className="w-[20px] h-[20px]" />
      <input type="text" className="w-full bg-transparent focus:outline-none placeholder:text-xl placeholder:font-bold text-xl font-bold " placeholder="Search..." onClick={()=>{searchHandler()}}/>
      </div>

    </div>
  )
}