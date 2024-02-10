import useFlag from '../hooks/useFlag';
import TypewriterText from './TypewriterText';

const FlagContainer = () => {
  const { value, loading, error } = useFlag();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Error while loading the flag, try again later.</div>;
  }
  
  return (
      <TypewriterText text={value} />
  );
};

export default FlagContainer;
