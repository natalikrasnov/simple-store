import { CustomInput } from "./CustomInput.component";

export function Footer({ }) {
     
    return (
        <div className="footer">
            <CustomInput
                buttonTitle="הרשם כמנוי"
                title="הוסף מייל וקבל הנחה מיידית לכתובת המייל שלך"
            />
            <img src="./assets/group-9.png"/>
        </div>
    )
 }