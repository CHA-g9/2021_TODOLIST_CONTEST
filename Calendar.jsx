import React, {PureComponent} from "react";
import Calendar_show from "./Calendar_show";

class Calendar extends PureComponent {

    render() {
        return (
            <div className = "Total">
                <Calendar_show />
            </div>
        )
    }

};

export default Calendar;