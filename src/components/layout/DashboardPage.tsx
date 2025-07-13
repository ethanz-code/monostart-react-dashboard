import React from 'react';

interface DashboardPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ title, description, children }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary/98">{title}</h1>
      {description && <p className="text-muted-foreground mt-2">{description}</p>}
      {children}
    </div>
  );
};

export default DashboardPage;
