import { ReactNode, Children, cloneElement, isValidElement } from 'react';

interface StaggeredContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredContainer({ 
  children, 
  staggerDelay = 100,
  className = '' 
}: StaggeredContainerProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              animationDelay: `${index * staggerDelay}ms`,
            },
          } as any);
        }
        return child;
      })}
    </div>
  );
}

