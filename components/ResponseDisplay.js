import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock, dracula } from 'react-code-blocks';

const ResponseDisplay = ({ responseData }) => {
  if (!responseData || !responseData.chunks || !responseData.results) {
    return null;
  }

  const factualResponses = [];
  const otherResponses = [];

  responseData.chunks.forEach((chunk, index) => {
    const result = responseData.results[index];
    const score = responseData.search_scores[index];

    if (score === "factual") {
      factualResponses.push({ chunk, result, score });
    } else {
      otherResponses.push({ chunk, result, score });
    }
  });

  return (
    <div className="response-container my-6">
      {/* Factual Responses */}
      {factualResponses.length > 0 && (
        <div className="factual-box mb-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-600">Factual Information</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            {factualResponses.map((item, idx) => (
              <div key={`factual-${idx}`} className={idx > 0 ? "mt-4 pt-4 border-t border-blue-200" : ""}>
                <b><p className="item-chunk">{item.chunk}</p></b>
                <p className="text-gray-700">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Responses */}
      {otherResponses.length > 0 && (
        <div className="other-box">
          <h3 className="text-lg font-semibold mb-2 text-purple-600">AI-Generated Responses</h3>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            {otherResponses.map((item, idx) => (
              <div key={`other-${idx}`} className={idx > 0 ? "mt-4 pt-4 border-t border-purple-200" : ""}>
                <div className="flex items-center mb-2">
                <b><p className="item-chunk">{item.chunk}</p></b>
                  <span className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                  </span>
                </div>
                <div className="markdown-content">
                  <ReactMarkdown
                    components={{
                      code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                          <CodeBlock
                            key={Math.random()}
                            text={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            showLineNumbers={false}
                          />
                        ) : (
                          <code 
                            key={Math.random()} 
                            className={`bg-gray-100 px-1 rounded text-red-600 ${className}`} 
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {item.result}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;