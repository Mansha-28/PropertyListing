const Card = ({img, name, review}) => {
    return (
        <div className="bg-white grid mb-4 justify-between border-2">
            <img className="w-60 h-60 mb-2"  src={img} alt="" />
            <p className="text-2xl mx-4 py-2">{name}</p>

            <button className="inline-flex items-center justify-center px-8 py-4 mx-4 mb-4 border-2 text-black font-sans font-semibold tracking-wide bg-white rounded-lg h-[60px]">
                View Profile
            </button>
        </div>
    )
}

export default Card;