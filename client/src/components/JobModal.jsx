import React, { useState } from "react";
import ApplicationFormModal from "./ApplicationFormModal";
const JobModal = ({ show, onClose, jobs }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-3/4">
        <h2 className="text-xl font-bold mb-4">3 Công việc đã tìm thấy</h2>
        <div>
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <h3 className="font-bold">
                  {job.title} | {job.titleVietnamese}
                </h3>
                <p>{job.postedDate}</p>
              </div>
              <div className="text-center">
                <p>{job.location}</p>
                <p>{job.type}</p>
              </div>
              <button
                className="bg-yellow-500 text-white py-1 px-4 rounded"
                onClick={() => setIsFormModalOpen(true)}
              >
                Ứng tuyển
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-5 bg-red-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
      {/* Hiển thị Modal Đơn Ứng Tuyển */}
      <ApplicationFormModal
        show={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </div>
  );
};

export default JobModal;
