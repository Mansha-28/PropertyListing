import Image from "next/image";

const Card = ({img, name, review}) => {
    return (
        <div className="bg-white grid mb-4 justify-between border-2">

            <Image src={img} alt="agent img" width={240} height={240} />
            <p className="text-2xl mx-4 py-2">{name}</p>

            <button className="inline-flex items-center justify-center px-8 py-4 mx-4 mb-4 border-2 text-black font-sans font-semibold tracking-wide bg-white rounded-lg h-[60px]">
                View Profile
            </button>
        </div>
    )
}

export default Card;