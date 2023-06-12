import React from 'react';
import useMyClass from '../../../hooks/useMyClass';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyClasses = () => {
    const [myClasses, refetch] = useMyClass();
    return (
        <div>
          <Helmet>
            <title>Music Universe | My Classes</title>
          </Helmet>
            <h1 className="text-3xl font-bold text-center py-5">
        My Classes
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-[#F65209] border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Class Image
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Class Name
                      </th>
                      
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Available Seats
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Total Enrolled
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4  text-center"
                      >
                        FeedBack
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4  text-center"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myClasses.map((item, index) => (
                      <tr
                        className="bg-white border-b border-[#F65209] transition duration-300 ease-in-out hover:bg-gray-100"
                        key={item._id}
                      >
                        <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {index + 1}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        <img src={item.image} className="h-10 w-10" alt="" />
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {item.className}
                      </td>
                      
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {item.availableSeats}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {item.totalStudent}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {item.price}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {item.status}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                      >
                        {item.feedback}
                      </td>
                      <td
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4  text-center"
                      >
                        <Link to={`/dashboard/updateClass/${item._id}`}>
                        <button className='bg-emerald-600 text-white  font-semibold p-1 rounded-2xl'>Update</button>
                        </Link>
                      </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Toaster/>
        </div>
      </div>
        </div>
    );
};

export default MyClasses;