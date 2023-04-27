


export default function Layout() {


  return (
    <div className="flex flex-col gap-3 mb-5">
      <p className="text-[0.75rem] font-[600] text-secondary">Layout</p>
      <div className="flex justify-between items-center w-full">

        <button className="w-[68px] h-[54px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
          <span className="flex gap-1">
            <span className="px-[8px] rounded bg-theme-primary py-[20px]"></span>
            <span className="px-[16px] rounded bg-theme-secondary border-[1px] border-dashed border-theme-primary py-[20px]"></span>

          </span>

        </button>

        <button className="w-[68px] h-[54px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
          <span className="flex flex-col gap-1">
            <span className="px-[25px] rounded-[3px] bg-primary py-[6px]"></span>
            <span className="px-[25px] rounded-[3px] bg-primary py-[12px]"></span>

          </span>

        </button>

        <button className="w-[68px] h-[54px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
          <span className="flex gap-1">
            <span className="px-[5px] rounded-[3px] bg-primary py-[20px]"></span>
            <span className="px-[16px] rounded-[3px] bg-primary py-[20px]"></span>

          </span>

        </button>

      </div>
    </div>

  )
}