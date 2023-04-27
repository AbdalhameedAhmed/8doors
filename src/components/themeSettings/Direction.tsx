

export default function Direction () {




  return (

    <div className="flex flex-col gap-3 mb-5">
    <p className="text-[0.75rem] font-[600] text-secondary">Direction</p>
    <div className="flex justify-between items-center w-full">
      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
        <span className="flex gap-[2px] justify-start">
          <span className="px-[2px] rounded-lg py-3 bg-theme-primary"></span>
          <span className="flex flex-col items-start gap-1">
            <span className="bg-theme-secondary px-[6px] py-[4px] rounded-[2px] mt-[1.5px]"></span>
            <span className="bg-theme-secondary px-[9px] py-[4px] rounded-[2px] mt-[1.5px]"></span>
          </span>
        </span>

      </button>

      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
        <span className="flex flex-row-reverse gap-[2px] justify-start">
          <span className="px-[2px] rounded-lg py-3 bg-primary"></span>
          <span className="flex flex-col items-end gap-1">
            <span className="bg-theme-secondary px-[6px] py-[4px] bg-primary rounded-[2px] mt-[1.5px]"></span>
            <span className="bg-theme-secondary px-[9px] py-[4px] bg-primary rounded-[2px] mt-[1.5px]"></span>
          </span>
        </span>
      </button>
    </div>
  </div>


  )
}