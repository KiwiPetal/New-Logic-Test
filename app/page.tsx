import Image from "next/image";
import OpenableImage from "./components/openableImage";

export default function Objednavky() {
  // Data {{{
  type T_status = "Zaplaceno" | "Nezaplaceno" | "V procesu";
  type T_item = {
    id: number;
    date: Date;
    amount: number;
    status: T_status;
    pics?: string[];
  };
  const items: T_item[] = [
    { id: 2200245834, date: new Date(1730996984000), amount: 1500, status: "Zaplaceno", pics: ["/pic-placeholder.png", "/pic-placeholder.png", "/pic-placeholder.png"] },
    { id: 2200245833, date: new Date(1730896984000), amount: 1500, status: "Nezaplaceno", pics: ["/pic-placeholder.png", "/pic-placeholder.png", "/pic-placeholder.png"] },
    { id: 2200245832, date: new Date(1730796984000), amount: 1500, status: "V procesu", pics: ["/pic-placeholder.png", "/pic-placeholder.png", "/pic-placeholder.png"] },
  ]
  const sorted_items = items.sort((a, b) => (b.id - a.id));
  // }}}
  return (
    <main className="w-full max-w-[1200px] flex flex-col gap">
      {sorted_items.map((item, i) => {
        const status_style = () => {
          switch (item.status) {
            case "Zaplaceno":
              return "bg-new/20 text-new"
            case "Nezaplaceno":
              return "bg-error/20 text-error"
            case "V procesu":
              return "bg-active/20 text-active"
          }
        }
        return (
          <div key={"order:" + i} className="flex flex-col gap bg-container p rounded-lg ">
            <div className="flex flex-row justify-between gap-sm">
              <p className="font-bold tablet:text-xl">
                Číslo objednávky: {item.id}
              </p>
              <div className={`rounded-sm py-[4px] px-[8px] h-fit text-nowrap ${status_style()}`}>
                {item.status}
              </div>
            </div>
            {item.pics && (
              <div className="flex flex-row gap-[8px]">
                {item.pics.map((pic, _i) => (
                  <OpenableImage key={`openable:${i}:${_i}`} src={pic} />
                ))}
              </div>
            )}
            <div className="flex flex-col desktop:flex-row w-full desktop:justify-between gap-sm justify-center">
              <div className="flex flex-col">
                <div className="flex flex-row flex-wrap tablet:gap-xs">
                  <p>Datum objednávky: </p>
                  <p className="text-black/60">{item.date.toLocaleDateString("en-GB").replace(/\//g, ". ")}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-xs">
                  <p>Cena celkem: </p>
                  <p className="text-black/60">{item.amount} Kč</p>
                </div>
              </div>
              <div className="flex flex-col desktop:text-right">
                <p className="text-active cursor-pointer hover:underline">Potřebujete poradit?</p>
                <p className="font-bold">314 004 540 (po-pá 8:00-16:00)</p>
              </div>
            </div>
            <div className="flex tablet:flex-row flex-col items-center gap justify-between">
              <button className="appearance-none rounded-md bg-active text-bg py-sm px-lg w-fit h-fit cursor-pointer font-bold active:opacity-70 transition-all">Detail</button>
              <div className="flex desktop:flex-row flex-col gap">
                <div className="inline-flex gap-xs items-center cursor-pointer">
                  <p>Zopakovat</p>
                  <Image src={"/back.svg"} width={20} height={20} alt="Return" />
                </div>
                <div className="inline-flex gap-xs items-center cursor-pointer">
                  <p>Stornovat</p>
                  <Image src={"/cancel.svg"} width={20} height={20} alt="Cancel" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </main>
  );
}
