import { RefObject, useEffect } from 'react';


export default function useRemoveScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
) {

  useEffect(() => {
    
    const ele = ref.current as HTMLElement

    const handelScroll = ()=>{
      if (ele.scrollHeight > ele.clientHeight) {
        ele.classList.add("showScroll")
        setTimeout(() => ele.classList.remove("showScroll"), 500);
      }
    }

    ele.classList.add("scrollbar-custom")
    
    ele?.addEventListener("scroll",()=>{handelScroll()})

    return ele?.removeEventListener("scroll",handelScroll)
    
  }, [ref])

}