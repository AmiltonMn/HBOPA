import Image from "next/image";
import HomeIco from "@/assets/home.png"
import UserIco from "@/assets/user.png"
import SaveIco from "@/assets/save.png"
import SearchIco from "@/assets/search.png"
import fundo from "@/assets/Hobbit.jpg"

export default function Home() {

  const style = 
  {
    fundo: "flex justify-around direction-column relative",
    fundoImg: "-z-10 w-full",
    tituloPag: "w-full flex p-1 text-white bg-gradient-to-b from-black from-45% to transparent absolute top-0 flex-col",
  }

  return (
    <>
      
      <header className={style.tituloPag}>
        <div className="flex flex-row justify-between p-1">
          <h1>Max</h1>
          <Image src={UserIco} width={25} alt="" />
        </div>
        <div className="flex flex-row justify-between p-1">
          <p>Home</p>
          <p>Series</p>
          <p>Movies</p>
          <p>HBO</p>
          <p>News</p>
        </div>
      </header>

      <div className={style.fundo}>
        <Image className={style.fundoImg} src={fundo} alt=""/>
        <div className="w-full flex absolute bottom-0 bg-gradient-to-t from-black from-70% to transparent h-20 text-white items-end justify-center pb-5">
          <h1>sahdugusadguas</h1>
        </div>
      </div>

      <span className="flex justify-center bg-gradient-to-b from-black from-70% to-indigo-950 h-20 text-white"/>

      <div className="flex bg-indigo-950 h-20 text-white items-center justify-center">
        <h1>AAAA</h1>
      </div>


      <footer className="absolute flex inset-x-0 bottom-0 direction-row justify-evenly p-6 bg-blackTransparent">
        <Image src={HomeIco} height={27} alt="" />
        <Image src={SaveIco} height={25} alt=""/>
        <Image src={SearchIco} alt=""/>
      </footer>
    </>
  );
}
