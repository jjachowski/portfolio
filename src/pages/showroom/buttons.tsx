import React from 'react';
import { Layout } from '../../components/Layout';
import { Button, ButtonType } from '../../components/Button';
import { Title } from '../../components/typography/Title';
import { useComponentPainText } from '../../hooks/useComponentPlainText';
import { Code } from '../../components/Code';

type ButtonsProps = {};

const Buttons: React.FC<ButtonsProps> = () => {
  const { data, loading } = useComponentPainText('Button.tsx');
  const buttons: ButtonType[] = ['accent', 'danger', 'default', 'submit'];
  return (
    <Layout>
      <Title className='mt-10'>Buttons showcase 🥸</Title>
      <p className='my-6'>
        Here I present my set of buttons. The goal was to create pretty looking
        buttons with some animations. In the code section below you can preview
        Button component code.
      </p>
      <div className='flex flex-col'>
        {buttons.map((x) => (
          <div className='mb-10 flex flex-row justify-around' key={x}>
            <Button type={x}>{x}</Button>
            <Button type={x} animated>
              {x} animated
            </Button>
          </div>
        ))}
      </div>
      {data && <Code>{data}</Code>}
    </Layout>
  );
};

export default Buttons;
