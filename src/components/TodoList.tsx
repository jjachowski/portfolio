import React from 'react';
import { Card } from './Card';
import { List, ListItem } from './List';
interface TodoListProps {
  title: string;
  items: ListItem[];
  superCool?: boolean;
}

// *magic* sort expects negative value when first item is lesser than second
// so we parse boolean nullable values to boolean then to 0 or 1,
// then we perform subtraction
const sortItems = (a: ListItem, b: ListItem) => +!!b.done - +!!a.done;

export const TodoList: React.FC<TodoListProps> = ({
  title,
  items,
  superCool,
}) => {
  return (
    <Card title={title} isSpecial={superCool}>
      <List
        items={items.sort((a, b) => sortItems(a, b))}
        className='text-xl'
        superCool={superCool}
      />
    </Card>
  );
};
