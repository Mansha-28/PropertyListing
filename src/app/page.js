import Textbox from "@/components/Textbox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-50 w-full flex flex-col items-start justify-start pb-[50px] md:pl-10 pt-[50px]">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="mx-10 w-[40%]">
          <p className="text-4xl my-5 flex-wrap font-semibold">Find a perfect property Where you&apos;ll love to live</p>
          <p className="text-xl text-gray-600 mb-5">We helps businesses customize, automate and scale up their ad production and delivery.</p>

          <form className="form-container bg-white p-5 rounded" action="" method="">
            <Textbox 
              placeholder="City/Street"
              type="text"
              name="street address"
              className="rounded p-2"
            />

            <Textbox 
              placeholder="Property Type"
              type="text"
              name="street address"
            />

            <Textbox 
              placeholder="Price Range"
              type="text"
              name="street address"
            />
          </form>
        </div>

        <div className="w-[50%] h-auto">
          <Image src="/images/img_image.png" alt="Home Image" width={800} height={600} />
        </div>

      </div>
      <div className=""></div>
    </div>
  );
}
