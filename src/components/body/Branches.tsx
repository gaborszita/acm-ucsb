"use client"
import branch_data from "../../../public/data/branch_data";
import Image from 'next/image';

const Branches = () => {
    console.log(branch_data);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Branches</h1>
            <div className = "flex flex-row flex-wrap">
                {branch_data.map((branch, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center m-6">
                            <Image 
                                src={branch.img}
                                alt={branch.name} 
                                width = {300}
                            />
                            <h2>{branch.description}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Branches;