import React from 'react';

const StructuredText = ({ text }) => {
  // Function to parse and structure the text
  const parseText = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    let steps = [];
    let additionalInfo = [];
    let title = '';
    let isStep = false;

    if (lines.length > 0) {
      title = lines[0]; // Set the first line as the title
      lines.slice(1).forEach(line => {
        if (line.match(/^\d+\)/)) {
          isStep = true;
          steps.push(line);
        } else {
          if (isStep) {
            isStep = false;
          } else {
            additionalInfo.push(line);
          }
        }
      });
    }

    return { title, steps, additionalInfo };
  };

  const { title, steps, additionalInfo } = parseText(text);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {steps.length > 0 && (
        <ol className="list-decimal list-inside mb-4">
          {steps.map((step, index) => (
            <li key={index} className="mb-1">
              {step.replace(/^\d+\)/, '')}
            </li>
          ))}
        </ol>
      )}
      {additionalInfo.length > 0 && (
        <div className="text-gray-700">
          {additionalInfo.map((info, index) => (
            <p key={index} className="mb-2">
              {info}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default StructuredText;
