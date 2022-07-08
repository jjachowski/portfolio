import React from 'react';
import { Card } from './Card';
import { List, ListItem } from './List';
interface TodoListProps {
  title: string;
  items: ListItem[];
  superCool?: boolean;
}

const sortItems = (a: ListItem, b: ListItem) => {
  if (a.done) return -1;
  if (b.done === a.done) return 0;
  return 1;
};

export const TodoList: React.FC<TodoListProps> = ({
  title,
  items,
  superCool,
}) => {
  return (
    <Card title={title}>
      <List
        items={items.sort((a, b) => sortItems(a, b))}
        className='text-xl'
        superCool={superCool}
      />
    </Card>
  );
};
