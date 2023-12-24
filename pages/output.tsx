import { outputStore } from "@/store/atoms/outputStore";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

const Output = () => {
    const outputResponse = useRecoilValue(outputStore);
    console.log(outputResponse.outputValue);
    return (
        <div className="flex flex-col justify-center items-center">
        <div className="my-10 flex flex-row justify-center">
            <span className='text-3xl px-6 py-3 text-white rounded-md bg-gradient-to-r from-blue-700 to-sky-500'>
            Your Ad Campaign Plan
            </span>
        </div>

        <div className="border-2 border-blue-500 w-2/4 rounded-xl p-5">
            {outputResponse.outputValue}
        </div>
</div>

    );
};

export default Output;