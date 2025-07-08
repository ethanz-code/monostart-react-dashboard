import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">统计信息</h2>
            <p className="text-gray-600">这里可以展示统计数据。</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h2 className="text-xl font-semibold mb-2">快捷操作</h2>
            <p className="text-gray-600">这里可以放置常用操作入口。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
