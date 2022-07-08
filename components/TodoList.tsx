import React from 'react';
import { Card } from './Card';
import { List, ListItem } from './List';
interface TodoListProps {
  title: string;
  items: ListItem[];
  superCool?: boolean;
}

export const TodoList: React.FC<TodoListProps> = ({
  title,
  items,
  superCool,
}) => {
  return (
    <Card title={title}>
      <List items={items} className='text-xl' superCool={superCool} />
    </Card>
  );
};
