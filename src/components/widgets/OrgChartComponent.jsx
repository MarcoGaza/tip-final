import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3-selection';
import OrgChart from '~/utils/moduleBridge.mjs';
import FacultyModal from '~/components/widgets/FacultyModal.jsx'; // Adjust the import path if needed

function OrgChartComponent({ facultyData }) {
  const chartContainerRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (data) => {
    setSelectedMember(data);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    const transformedData = facultyData.map((faculty) => ({
      ...faculty,
      id: faculty.name,
      parentId: faculty.parent,
    }));

    const chart = new OrgChart()
      .nodeHeight((d) => 110)
      .nodeWidth((d) => 300)
      .childrenMargin((d) => 40)
      .compactMarginBetween((d) => 25)
      .compactMarginPair((d) => 20)
      .neighbourMargin((a, b) => 15)
      .nodeContent((d, i, arr, state) => {
        return `
          <div class="w-[${d.width}px] h-[${d.height}px] cursor-pointer glass p-2.5 border border-gray-300 rounded-md flex flex-col items-center" onclick="handleCardClick(${JSON.stringify(d.data)})">
            <img src="${d.data.image}" class="w-12 h-12 rounded-full" />
            <h5 class="text-large text-center text-bold">${d.data.name}</h5>
            <p class="text-center text-primary">${d.data.position}</p>
          </div>
        `;
      })
      .container(chartContainerRef.current)
      .data(transformedData)
      .render();
  }, [facultyData]);

  return (
    <div>
      <div ref={chartContainerRef} />
      {selectedMember && <FacultyModal member={selectedMember} onClose={handleCloseModal} />}
    </div>
  )
}

export default OrgChartComponent;
