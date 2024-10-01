import Contact from "../contact";
import Form from "./form";

export default function Page() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
                <h4 className="font-bold text-lg mb-3">Send message</h4>
                <Form />
            </div>
            <div>
                <h4 className="font-bold text-lg mb-3">Reach me out</h4>
                <Contact />
            </div>
        </div>
    );
}