export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-[#d9d9d9] h-[34px] left-[10px] top-[8px] w-[146px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[28px] not-italic text-[12px] text-black top-[17.5px] whitespace-nowrap">Upcomming events</p>
      <div className="absolute bg-[#d9d9d9] h-[195px] left-[13px] top-[60px] w-[143px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[46.5px] not-italic text-[12px] text-black top-[157.5px] whitespace-nowrap">list of events</p>
      <div className="absolute bg-[#d9d9d9] h-[57px] left-[209.5px] top-[8px] w-[193.5px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[282.75px] not-italic text-[12px] text-black top-[25px] whitespace-nowrap">Register</p>
    </div>
  );
}