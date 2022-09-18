import { AboutAnswer } from "./AboutAnswer.component";

export function About({ }) {
     
    return (
        <div className="about">
            <div className="content">
                <div >
                    <label className="title">למה כמיפל?</label>
                    <div className="line"></div>
                    <p>
                        something something something something something something 
                        something something something something something something 
                        something something something something something something 
                    </p>
                </div>
                <AboutAnswer
                    img="../assets/box-icon.svg"
                    title="משלוח מהיר"
                />
                <AboutAnswer
                    img="../assets/chat-icon.svg"
                    title="שירות"
                />
                <AboutAnswer
                    img="../assets/safe-sheald-icon.svg"
                    title="מהימן"
                />
            </div>
        </div>
    )
 }