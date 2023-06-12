import React from 'react';
import useSelectClass from '../../../hooks/useSelectClass';
import { Helmet } from 'react-helmet';

const MyEnrolledClasses = () => {
    const [selectClass, refetch] = useSelectClass();
    return (
        <div>
          <Helmet>
            <title>Music Universe | My Enrolled Classes</title>
          </Helmet>
      <h1 className="text-4xl font-bold text-center py-5">
        My Enrolled Class
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
                        Instructor Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Instructor Email
                      </th>
                      
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                      selectClass.filter(item => item.status === 'paid')
                      .map((item, index) => (
                        <tr
                        className="bg-white border-b border-[#F65209] transition duration-300 ease-in-out hover:bg-gray-100"
                        key={item._id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img src={item.image} className="h-10 w-10" alt="" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.className}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.instructorName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.instructorEmail}
                        </td>
                       
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.price}
                        </td>
                        
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyEnrolledClasses;