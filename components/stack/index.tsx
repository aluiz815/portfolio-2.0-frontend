import Image from "next/image";
import HtmlLogo from '../../assets/vscode-icons_file-type-html.svg'
import CssLogo from '../../assets/vscode-icons_file-type-css.svg'
import JsLogo from '../../assets/vscode-icons_file-type-js-official.svg'
import TailwindLogo from '../../assets/vscode-icons_file-type-tailwind.svg'
import ReduxLogo from '../../assets/Vector.png'
import ReactLogo from '../../assets/logos_react.svg'
import BootstrapLogo from '../../assets/logos_bootstrap.svg'
import SalesforceApex from '../../assets/apexLogo.png'
import SalesforceLWC from '../../assets/lwcLogo.png'
import SalesforceMKT from '../../assets/Sf-marketingcloud-logo.png'
import ReactNative from '../../assets/rn.png'
import MongoLogo from '../../assets/mongoLogo.png'
export default function Stack() {
  return (
    <>
    <section className="mt-28 items-center flex flex-col justify-center">
        <div className="font-poppins text-center">
            <h1 className="font-bold text-5xl text-rocket-700 mb-10">Minha stack de Tecnologias</h1>
            <span className="font-medium text-3xl text-gray-500"> Tecnologias que eu já trabalhei ou estudei</span>
        </div>
        </section>
        <div className="grid grid-cols-6 mt-5 items-center justify-between">
            <div className="w-28">
                <Image src={HtmlLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={CssLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={JsLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={ReactLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={ReactNative}/>
            </div>
            <div className="w-28 ml-4">
                <Image src={ReduxLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={TailwindLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={BootstrapLogo} />
            </div>
            <div className="w-28 ml-4">
                <Image src={SalesforceApex} />
            </div>
            <div className="w-28 ml-4">
                <Image src={SalesforceLWC} />
            </div>
            <div className="w-28 ml-4">
                <Image src={SalesforceMKT} />
            </div>
            <div className="w-28 ml-4">
                <Image src={MongoLogo} />
            </div>
        </div>
        </>
  )
}
