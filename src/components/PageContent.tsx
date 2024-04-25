// PageContent.tsx
import React from 'react';

interface PageContentProps {
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <div className="container mt-4">{children}</div>;
};

export default PageContent;
