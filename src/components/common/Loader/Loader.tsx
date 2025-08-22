import type { CSSProperties } from 'react';
import { BeatLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
};

const Loader = () => {
  return (
    <div>
      <BeatLoader
        color='#e44848'
        cssOverride={override}
        size={16}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loader;
