export const codeSample = `<Layout>
  <Header />
  <CommitStreak />
  <div className='flex flex-col space-y-4'>
    <code>
      <SyntaxHighlighter language='typescript'>{text}</SyntaxHighlighter>
    </code>
    <TodoList
      items={blogTodo}
      title='next cool feature - blog posts'
      superCool
    />
    <TodoList
      items={thingsToTry}
      title='list of cool things I wanna try!'
    />
    <TodoList items={todoList} title='todo list on this page' />
  </div>
</Layout>`;