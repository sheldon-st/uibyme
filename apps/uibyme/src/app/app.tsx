// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div style={{ backgroundColor: '#171717' }}>
      <NxWelcome title="uibyme" />
    </div>
  );
}

export default App;
