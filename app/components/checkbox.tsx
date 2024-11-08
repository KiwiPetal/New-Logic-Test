export default function Checkbox() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <input type="checkbox" className="appearance-none checked:bg-active rounded-sm transition-all cursor-pointer h-[20px] w-[20px] border border-black/5" />
      <img src="/check.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
