/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    job_title,
    deadlines,
    description,
    min_price,
    max_price,
    categories,
    _id,
  } = job;
  return (
    <Link
      to={`/jobDetails/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all my-10"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Deadline : {deadlines}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {categories}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>

        <p className="mt-2 text-sm text-gray-600 ">{description}</p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${min_price} - ${max_price}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
