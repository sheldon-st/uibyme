// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MovementVideo } from '../components/video';
import { ParameterPage } from '../components/ParameterPage';
export function App() {
  const [userIsDesktop, setUserIsDesktop] = useState(true);

  useEffect(() => {
    window.innerWidth > 1280 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  }, [userIsDesktop]);

  useEffect(() => {
    function handleResize() {
      // Update the state or perform any other actions when the
      // browser is resized
      window.innerWidth > 1280
        ? setUserIsDesktop(true)
        : setUserIsDesktop(false);
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!userIsDesktop) {
    return (
      <div className="mobile">
        <h1 className="mobile-h1">This site is not optimized for mobile.</h1>
        <h2 className="mobile-h2">
          Please visit on a device with a larger screen for the best experience.
        </h2>
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NxWelcome />
            </div>
          }
        />

        <Route
          path="/speed"
          element={
            <div>
              <ParameterPage name="Speed" previous="Fluidity" next="Path">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/speeds.mp4"
                  title="Speed"
                  // description=''
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/speedThumbnail.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/path"
          element={
            <div>
              <ParameterPage name="Path" previous="Speed" next="Angles">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/path.mp4"
                  title="path"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/pathThumbnail.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/angles"
          element={
            <div>
              <ParameterPage name="Angles" previous="Path" next="Shape">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/angles.mp4"
                  title="angles"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/angles.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/shape"
          element={
            <div>
              <ParameterPage name="Shape" previous="Angles" next="Scale">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/shape.mp4"
                  title="shape"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/shape.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/scale"
          element={
            <div>
              <ParameterPage name="Scale" previous="Shape" next="Exertion">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/scale.mp4"
                  title="scale"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/scale.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/exertion"
          element={
            <div>
              <ParameterPage name="Exertion" next="Fluidity" previous="Scale">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                  <p>
                    A high exertion movement can be described as energetic,
                    powerful, or intense. A low exertion movement can be
                    described as calm, gentle, or relaxed.
                  </p>
                  <p>
                    The level of exertion used in a movement may vary depending
                    on both the task and the individual. For example, a movement
                    that is high exertion for one person may be low exertion for
                    another. Exertion can be varied by changing the speed of the
                    movement, or by changing the amount of energy used to
                    perform the movement. For example, a movement with high
                    exertion can be performed slowly, but with a lot of energy,
                    or quickly, but with less energy.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/exertion.mp4"
                  title="exertion"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/exertion.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
        <Route
          path="/fluidity"
          element={
            <div>
              <ParameterPage name="Fluidity" next="Speed" previous="Exertion">
                <div className="info">
                  {/* What does each design parameter mean? How can it vary?
Convey this through short text description */}
                  <p>
                    Exertion describes an individual’s percieved or actual use
                    of energy throughout a movement. It is a combination of the
                    amount of energy used and the speed at which it is used.
                    Exertion can be used to convey the amount of energy required
                    to perform a movement, or the amount of energy that the
                    movement itself conveys.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/fluidity.mp4"
                  title="fluidity"
                  description="test"
                  pausedOverlay="https://uibyme.blob.core.windows.net/movement/fluidity.jpeg"
                />
              </ParameterPage>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
