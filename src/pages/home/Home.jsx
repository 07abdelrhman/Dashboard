import Featurerdinfo from "../../components/featuerdinfo/Featurerdinfo";
import Widgetsm from "../../components/widgetsm/Widgetsm";
import WidgetLG from "../../components/widgetLg/WidgetLG";
import Chart from "../../components/chart/Chart";
import "./home.css";
import {userData} from "../../dummyData";
export default function Home() {
  return (
    <div className="home">
      <Featurerdinfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
         <Widgetsm/>
         <WidgetLG/>
      </div>
    </div>
  )
}

