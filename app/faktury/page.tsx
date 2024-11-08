"use client"

import { memo, useMemo, useState } from "react";

export default function Page() {

  // Data {{{
  type T_order = {
    faktura: number,
    objednavka: number,
    amount: number
  }
  const data: T_order[] = [
    { objednavka: 100548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 200548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 300548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 400548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 500548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 600548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 700548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 800548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 900548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 110548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 120548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 130548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 140548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 150548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 160548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 170548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 180548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 190548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 200548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 210548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 220548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 140548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 150548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 160548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 170548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 180548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 190548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 200548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 210548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 220548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 140548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 150548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 160548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 170548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 180548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 190548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 200548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 210548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 220548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 140548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 150548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 160548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 170548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 180548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 190548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 200548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 210548784515487, faktura: 121548784515487, amount: 1500 },
    { objednavka: 220548784515487, faktura: 121548784515487, amount: 1500 },
  ];
  const sortedData = data.sort((a, b) => (b.faktura - a.faktura));
  // }}}
  const bottomBorder = "border-b border-b-black/10";

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => {
    return Math.ceil(data.length / rowsPerPage);
  }, [rowsPerPage]);
  const groupedData = useMemo(() => {
    const lastItem = rowsPerPage * (currentPage > totalPages ? totalPages : currentPage);;
    const firstItem = lastItem - rowsPerPage <= 0 ? 0 : lastItem - rowsPerPage;
    console.log(firstItem, lastItem)
    const _data = sortedData.slice(firstItem, lastItem);
    return _data;
  }, [currentPage, totalPages]);

  const [input, setInput] = useState<number | "">("")
  const inputHandler = (value: string) => {
    let testValue = Number(value);
    if (isNaN(testValue) || value === "")
      return setInput("")
    if (testValue > totalPages) {
      setInput(totalPages);
      return setCurrentPage(totalPages)
    }
    setInput(testValue);
    setCurrentPage(testValue);
  }

  return (
    <main className="w-full max-w-[1200px] h-fit relative text-nowrap">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto bg-container rounded-lg text-left border-separate">
          <thead>
            <tr className="">
              <th className={`${bottomBorder} p-md`}>Číslo faktury</th>
              <th className={`${bottomBorder}`}>Číslo objednávky</th>
              <th className={`${bottomBorder}`}>Cena celkem</th>
              <th className={`${bottomBorder} p-md text-right`}>Stažení</th>
            </tr>
          </thead>
          <tbody>
            {groupedData.map((row, i) => {
              return (
                <tr key={"trow:" + i}>
                  <td className="p-md">{row.faktura}</td>
                  <td className="">{row.objednavka}</td>
                  <td className="">-{row.amount} Kč</td>
                  <td className="p-md text-right">
                    <div className="inline-flex gap-xs text-active">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[20px] w-[20px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                      </svg>
                      <p>Stáhnout</p>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="absolute -bottom-[12px] translate-y-[100%] flex flex-row right-[0px] justify-end gap-xs mt-[32px] z-20">
        {Array.from({ length: totalPages > 3 ? 3 : totalPages }, (_, i) => i + 1).map((pageNumber, _i) => {
          return (
            <div onClick={() => setCurrentPage(pageNumber)} className={`bg-container rounded-md aspect-square w-[32px] text-center p-xs cursor-pointer ${pageNumber === currentPage && "text-active"}`} key={"pageNumber:" + _i}>
              {pageNumber}
            </div>
          )
        })}
        {totalPages > 4 && (
          <input placeholder="..." onChange={(e) => inputHandler(e.target.value)} value={input} className="appearance-none focus:outline-none bg-container rounded-sm aspect-square w-[32px] text-center p-xs placeholder:text-black" />
        )}
        {totalPages > 3 && (
          <div onClick={() => setCurrentPage(totalPages)} className={`bg-container rounded-md aspect-square w-[32px] text-center p-xs cursor-pointer ${currentPage === totalPages && "text-active"}`}>
            {totalPages}
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        {
          rowsPerPage < data.length && (
            <button onClick={() => setRowsPerPage(rowsPerPage + 9)} className="appearance-none absolute z-10 -bottom-[12px] translate-y-[100%] bg-active text-bg font-bold p-sm rounded-md">Načíst další</button>
          )
        }
      </div>
    </main>
  )
}
