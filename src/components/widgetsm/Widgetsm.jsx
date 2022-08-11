import "./widgetsm.css";
 import {Visibility} from "@material-ui/icons";
export default function Widgetsm() {
  return (
    <div className="WidgetSm">
        
        <span className="WidgetSmtitle"> NEW MEMBERS</span>
        <ul className="WidgetSmList">
            <li className="WidgetSmListItem">
                <img src="assets/person/8.jpeg" alt="" className="WidgetsmImg"/>
                <div className="widgetsmUsers">
                  <span className="widgetsmUserName"> Mai helmey</span>
                  <span className="widgetsmUserTittle"> Doctor</span>
                </div>
                <button className="WidgitsmBTN">
                    <Visibility className="widgetsmIcon"/>
                    Display
                </button>
            </li>

            <li className="WidgetSmListItem">
                <img src="assets/person/6.jpeg" alt="" className="WidgetsmImg"/>
                <div className="widgetsmUsers">
                  <span className="widgetsmUserName"> alaa essam</span>
                  <span className="widgetsmUserTittle"> actor</span>
                </div>
                <button className="WidgitsmBTN">
                <Visibility className="widgetsmIcon"/>
                    Display
                </button>
            </li>

            <li className="WidgetSmListItem">
                <img src="assets/person/7.jpeg" alt="" className="WidgetsmImg"/>
                <div className="widgetsmUsers">
                  <span className="widgetsmUserName"> mowafi bek</span>
                  <span className="widgetsmUserTittle"> accountant</span>
                </div>
                <button className="WidgitsmBTN">
                <Visibility className="widgetsmIcon"/>
                    Display
                </button>
            </li>

            <li className="WidgetSmListItem">
                <img src="assets/person/5.jpeg" alt="" className="WidgetsmImg"/>
                <div className="widgetsmUsers">
                  <span className="widgetsmUserName"> menna emad</span>
                  <span className="widgetsmUserTittle"> Doctor</span>
                </div>
                <button className="WidgitsmBTN">
                <Visibility className="widgetsmIcon"/>
                    Display
                </button>
            </li>


            <li className="WidgetSmListItem">
                <img src="assets/person/4.jpeg" alt="" className="WidgetsmImg"/>
                <div className="widgetsmUsers">
                  <span className="widgetsmUserName"> salma walied</span>
                  <span className="widgetsmUserTittle"> singer</span>
                </div>
                <button className="WidgitsmBTN">
                <Visibility className="widgetsmIcon"/>
                    Display
                </button>
            </li>

        </ul>
    </div>
  )
}
