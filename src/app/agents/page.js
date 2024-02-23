import Card from "./card";

export default function AgentsList(){
    return (
        <div className="bg-orange-50 w-full h-auto">
            <div className="py-4 mx-20">
                <p className="text-3xl font-bold py-4">Some Nearby Good Agents</p>
                
                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Enter Your Address"
                    className="w-[60%] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-white"
                />

                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="review"
                    className="w-[20%] border border-slate-200 rounded-lg py-3 px-5 ml-5 outline-none	bg-white"
                />

                <button className="inline-flex items-center justify-center ml-5 px-8 py-3 font-sans font-semibold tracking-wide text-white bg-black rounded-lg h-[48px]">
                    search
                </button>
            </div>

            <div className="flex flex-row flex-wrap py-4 mx-20 justify-between">
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
                <Card img="/images/img_rectangle5615.png" name="Bruno Fernades" reviews="4.5" />
            </div>
        </div>
    )
}