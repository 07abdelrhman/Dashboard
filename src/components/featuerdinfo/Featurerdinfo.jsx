import "./featuerdinfo.css"
import {ArrowDownward,ArrowUpward} from "@material-ui/icons";
export default function Featurerdinfo() {
  return (
    <div className="featurerd">
        <div className="featuerdItem">
            <span className="featuerdTitle">Revanue</span>
            <div className="featuerdMoneyContainer">
                <span className="featuerdMoney">5.89 $</span>
                <span className="featuerdMoneyRate">-11.2 <ArrowDownward className="featuredIcon negative" /></span>
            </div>
            <span className="featuerdsub"> Compared of last month</span>
        </div>

        <div className="featuerdItem">
            <span className="featuerdTitle">sales</span>
            <div className="featuerdMoneyContainer">
                <span className="featuerdMoney">19.3 $</span>
                <span className="featuerdMoneyRate">6.7 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuerdsub"> Compared of last month</span>
        </div>

        <div className="featuerdItem">
            <span className="featuerdTitle">cost</span>
            <div className="featuerdMoneyContainer">
                <span className="featuerdMoney">15.35 $</span>
                <span className="featuerdMoneyRate">2.1 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuerdsub"> Compared of last month</span>
        </div>
    </div>
  )
}
