interface MessageContentProps {
  content: string;
}

const MessageContent = ({ content }: MessageContentProps) => {
  // Function to convert markdown-style formatting to JSX
  const formatText = (text: string) => {
    // Split the text into segments to handle different formatting
    return text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((segment, index) => {
      // Handle bold text (**text**)
      if (segment.startsWith('**') && segment.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold">
            {segment.slice(2, -2)}
          </strong>
        );
      }
      // Handle italic text (*text*)
      if (segment.startsWith('*') && segment.endsWith('*')) {
        return (
          <em key={index} className="italic">
            {segment.slice(1, -1)}
          </em>
        );
      }
      // Handle lists
      if (segment.includes('\n- ')) {
        return (
          <ul key={index} className="list-disc list-inside my-2 space-y-1">
            {segment.split('\n- ').map((item, i) => (
              item.trim() && <li key={i}>{formatText(item.trim())}</li>
            ))}
          </ul>
        );
      }
      // Handle numbered lists
      if (segment.match(/^\d+\./)) {
        return (
          <ol key={index} className="list-decimal list-inside my-2 space-y-1">
            {segment.split('\n').map((item, i) => (
              item.trim() && (
                <li key={i}>
                  {formatText(item.replace(/^\d+\.\s/, ''))}
                </li>
              )
            ))}
          </ol>
        );
      }
      // Return regular text
      return segment;
    });
  };

  return (
    <div className="text-sm space-y-2">
      {content.split('\n').map((paragraph, index) => (
        <div key={index} className="min-h-[1.5em]">
          {formatText(paragraph)}
        </div>
      ))}
    </div>
  );
};

export default MessageContent; 