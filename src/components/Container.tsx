import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Container = ({children, className = ''}: Props) => {
  return (
    <div className={classNames('w-full max-w-4xl mx-auto', className)}>
      {children}
    </div>
  );
};

export default Container;
