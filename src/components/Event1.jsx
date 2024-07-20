export function Event1() {
  return (
    <div className="w-96 h-auto p-6 bg-slate-900 rounded-3xl border border-blue-950 flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-10 h-10 p-1 flex justify-center items-center bg-blue-950 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0-1.38-.56-2.63-1.46-3.54a5.002 5.002 0 000 7.08A5.002 5.002 0 0012 11zm0 0v.01"
          />
        </svg>
      </div>
      <div className="w-full text-slate-200 text-4xl font-black font-['Poppins'] leading-snug">
        EVENT 1 - Blockchain
      </div>
      <div className="w-full text-gray-300 text-lg font-normal font-['Poppins'] leading-snug overflow-hidden">
        Services are geared to the purchasing, transactional, and fulfillment
        needs of event attendees, such as the buying of food and drink without
        the need to stand in long lines, event promotion programs (free tickets
        to future events, etc.), as well as purchasing event memorabilia and
        souvenirs.
      </div>
    </div>
  );
}
