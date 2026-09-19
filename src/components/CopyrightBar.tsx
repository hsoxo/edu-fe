import React from 'react';

/** 全站统一的版权条，放在 FooterSection 之后 */
const CopyrightBar: React.FC = () => (
  <div className="border-t border-gray-200 py-4">
    <div className="max-w-[1120px] mx-auto px-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} VanLearn International Education. All rights reserved.
    </div>
  </div>
);

export default CopyrightBar;
