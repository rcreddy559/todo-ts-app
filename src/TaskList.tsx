import React from 'react';

type TaskListProps = {
  header?: React.ReactNode;
};
export default function TaskList({
  children,
  header,
}: React.PropsWithChildren<TaskListProps>) {
  return (
    <>
      {header}
      <ul>{children}</ul>
    </>
  );
}
