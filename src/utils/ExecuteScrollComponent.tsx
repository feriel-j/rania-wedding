import React, { useEffect} from 'react';

// Define the prop types for the ExecuteScrollComponent
interface ScrollComponentProps {
  scrollRef: React.RefObject<HTMLElement> |null;
}

const ExecuteScrollComponent: React.FC<ScrollComponentProps> = ({ scrollRef }) => {
    const executeScroll = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  };


  // Call executeScroll when the scrollRef changes------------
  useEffect(() => { 
    executeScroll();
  }, [scrollRef]);

  return null; // Return null as this component doesn't render any content
};

export default ExecuteScrollComponent;
