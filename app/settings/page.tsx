import Checkbox from "../components/checkbox";
import Input from "../components/input";

export default function Page() {
  return (
    <main className="w-full max-w-[1200px] p flex bg-container rounded-lg flex-col gap-[32px]">
      <p className="font-bold text-lg">Kontaktní údaje</p>
      <div className="fulltables:grid fulltables:grid-cols-2 flex flex-col gap-sm">
        <Input required title="Jméno" type="text" />
        <Input required title="Příjmení" type="text" />
        <Input title="Telefon" placeholder="+420" type="tel" />
        <Input required title="E-mail" type="email" />
      </div>
      <div className="w-full h-[1px] bg-black/15" />
      <p className="font-bold text-lg">Fakturační údaje</p>
      <div className="fulltables:grid fulltables:grid-cols-2 flex flex-col gap-sm">
        <Input required title="Jméno" type="text" />
        <Input required title="Příjmení" type="text" />
        <Input required title="Název firmy" type="text" />
        <div className="flex flex-row w-full gap-sm flex-grow">
          <Input required title="IČ" type="number" />
          <Input title="DIČ" type="number" />
        </div>
        <Input title="Ulice a číslo popisné" type="text" />
        <Input title="Město" type="text" />
        <Input title="PSČ" type="number" />
        <Input title="Země" type="text" />
      </div>
      <div className="w-full h-[1px] bg-black/15" />
      <div className="flex flex-col w-full gap-sm">
        <div className="inline-flex flex-row items-center gap-xs">
          <Checkbox />
          <p>Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky</p>
        </div>
        <div className="inline-flex flex-row items-center gap-xs">
          <Checkbox />
          <p>Přeji si dostávat informace o novinkách a slevách nebo inspiraci</p>
        </div>
      </div>
      <div className="flex fulltables:flex-row flex-col items-center justify-between gap-sm">
        <div className="flex fulltables:flex-row flex-col gap-sm items-center">
          <button className="appearance-none bg-active text-container px-[24px] py-[12px] transition-all rounded-md active:opacity-70 font-bold">Uložit změny</button>
          <button className="appearance-none bg-transparent text-black border border-active px-[24px] py-[12px] transition-all rounded-md active:opacity-70 font-bold">Změnit heslo</button>
        </div>
        <button className="appearance-none bg-transparent text-error border border-error px-[24px] py-[12px] transition-all rounded-md active:opacity-70 font-bold">Zrušit účet</button>
      </div>
    </main>
  )
}
