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
                    A measure of the rate of movement over time. Speed can vary
                    from still (absence of movement) to slow (gradual movement)
                    to fast (rapid movement).
                  </p>
                  <p>
                    A movement with a fast speed can be described as quick,
                    rapid, or sudden. A movement with a slow speed can be
                    described as slow, gradual, or gentle.
                  </p>
                  <p>
                    The change in speed throughout a movement can be described
                    as acceleration or deceleration.
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
                    The specific course or direction taken by the body when you
                    engage in motion or physical motion activity.
                  </p>
                  <p>
                    Consciously directing bodily movement through a physical
                    environment and its obstacles. It requires the coordination
                    of sensory input, spatial awareness, kinesthetic feedback,
                    and the feng shui of a space to adapt and make decisions
                    regarding movement.
                  </p>
                  <p>
                    Path can be used to convey the direction of a movement, or
                    the course over time. A movement with a straight path can be
                    described as linear, direct, or straight. A movement with a
                    curved path can be described as indirect.
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
                    Body angles describe the position or direction of different
                    body parts relative to each other as an individual moves
                    through space. This can include the angle of the arms, legs,
                    torso, or head, etc or posture of the body as a whole.
                  </p>
                  <p>
                    For example, a movement with a large angle can be described
                    as extended or stretched. A movement with a smaller angle
                    can be described as compact or compressed. An individuals
                    posture coule be described as open, closed, or neutral.
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
                    Shape describes the form of a movement. It can be used to
                    describe the shape of the body, or the shape of the movement
                    itself. In contrast to Body Angles, which describes the
                    angles of the body, Shape describes the overall form of the
                    body. This can be thought of as an outline or silhouette.
                  </p>
                  <p>
                    When considered in combination with external factors like
                    lighting or weather, this can produce a variety of intesting
                    effects. Shape as a movement parameter explores light play
                    as the dynamic movement of our body's shadow shapes. Viewing
                    how these can be different than what is seen without light
                    interference.
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
                    Comparing the size, effort, and appearance differential
                    between actions.
                  </p>
                  <p>
                    As a movement parameter scale exhibits space taken up by the
                    body through large and small actions. Viewing changing
                    patterns and effort exerted into each action.
                  </p>
                  <p>
                    Scale can be used to convey the size of or the amount of
                    space taken up by a movement. A large scale movement could
                    be described as big, wide, long or grand. A small scale
                    movement can be described as small, compact, or intimate.
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
                    How smoothly, gracefully, or naturally, or efficiently an
                    individual performs a movement.
                  </p>
                  <p>
                    Fluidity can be used to convey the comfortability an
                    individual appears to have with a movement. A movement with
                    high fluidity can be described as smooth, graceful, or
                    natural. A movement with low fluidity can be described as
                    rigid, stiff, or forced.
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
