// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { MovementVideo } from '../components/video';
import { ParameterPage } from '../components/ParameterPage';
export function App() {
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer imperdiet dolor et mattis dapibus. Phasellus ut
                    maximus lectus. Pellentesque facilisis pretium nibh nec
                    consequat. Cras placerat eleifend sagittis. Duis ligula
                    urna, viverra nec congue sed, facilisis vel est. Proin
                    pellentesque metus sed urna scelerisque placerat. Duis quis
                    commodo nisi. Aenean vestibulum diam nulla, a auctor ligula
                    pretium sit amet. Nam non convallis dui, et ultrices orci.
                    Pellentesque vestibulum molestie imperdiet. Integer maximus
                    tellus imperdiet porta pellentesque. Nunc feugiat urna ac
                    ante commodo, id feugiat odio luctus. Nam venenatis et quam
                    eu accumsan. Donec erat dolor, finibus nec malesuada id,
                    ornare eu lorem. Quisque non posuere dui, et venenatis eros.
                    Nunc pulvinar sed orci sed blandit. Integer viverra, sem
                    eget pharetra facilisis, ipsum massa ullamcorper dolor, et
                    pretium massa metus vitae eros. Phasellus posuere tortor id
                    massa lacinia, vel tristique urna tempus. Mauris mi erat,
                    pellentesque et facilisis non, vulputate nec lacus. In sed
                    sapien dolor.
                  </p>
                  <p>
                    Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                    aliquet, enim turpis cursus sem, quis vestibulum ante risus
                    id arcu. Proin nec augue at magna facilisis rhoncus. Integer
                    non odio rutrum, lobortis sapien vitae, molestie est.
                    Aliquam eget velit semper, interdum justo in, blandit
                    tortor. Aliquam nec pretium dolor, quis porta lectus.
                    Vestibulum urna nunc, congue ac bibendum at, egestas non
                    erat. Donec feugiat finibus dignissim. Donec in purus et ex
                    congue semper ut vitae sapien. Nulla venenatis enim quis
                    congue iaculis. Praesent laoreet ullamcorper diam.
                    Vestibulum porttitor bibendum ipsum vitae semper.lley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </div>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Path">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer imperdiet dolor et mattis dapibus. Phasellus ut
                  maximus lectus. Pellentesque facilisis pretium nibh nec
                  consequat. Cras placerat eleifend sagittis. Duis ligula urna,
                  viverra nec congue sed, facilisis vel est. Proin pellentesque
                  metus sed urna scelerisque placerat. Duis quis commodo nisi.
                  Aenean vestibulum diam nulla, a auctor ligula pretium sit
                  amet. Nam non convallis dui, et ultrices orci. Pellentesque
                  vestibulum molestie imperdiet. Integer maximus tellus
                  imperdiet porta pellentesque. Nunc feugiat urna ac ante
                  commodo, id feugiat odio luctus. Nam venenatis et quam eu
                  accumsan. Donec erat dolor, finibus nec malesuada id, ornare
                  eu lorem. Quisque non posuere dui, et venenatis eros. Nunc
                  pulvinar sed orci sed blandit. Integer viverra, sem eget
                  pharetra facilisis, ipsum massa ullamcorper dolor, et pretium
                  massa metus vitae eros. Phasellus posuere tortor id massa
                  lacinia, vel tristique urna tempus. Mauris mi erat,
                  pellentesque et facilisis non, vulputate nec lacus. In sed
                  sapien dolor.
                </p>
                <p>
                  Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                  aliquet, enim turpis cursus sem, quis vestibulum ante risus id
                  arcu. Proin nec augue at magna facilisis rhoncus. Integer non
                  odio rutrum, lobortis sapien vitae, molestie est. Aliquam eget
                  velit semper, interdum justo in, blandit tortor. Aliquam nec
                  pretium dolor, quis porta lectus. Vestibulum urna nunc, congue
                  ac bibendum at, egestas non erat. Donec feugiat finibus
                  dignissim. Donec in purus et ex congue semper ut vitae sapien.
                  Nulla venenatis enim quis congue iaculis. Praesent laoreet
                  ullamcorper diam. Vestibulum porttitor bibendum ipsum vitae
                  semper.lley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/pathTest.mp4"
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Path">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer imperdiet dolor et mattis dapibus. Phasellus ut
                  maximus lectus. Pellentesque facilisis pretium nibh nec
                  consequat. Cras placerat eleifend sagittis. Duis ligula urna,
                  viverra nec congue sed, facilisis vel est. Proin pellentesque
                  metus sed urna scelerisque placerat. Duis quis commodo nisi.
                  Aenean vestibulum diam nulla, a auctor ligula pretium sit
                  amet. Nam non convallis dui, et ultrices orci. Pellentesque
                  vestibulum molestie imperdiet. Integer maximus tellus
                  imperdiet porta pellentesque. Nunc feugiat urna ac ante
                  commodo, id feugiat odio luctus. Nam venenatis et quam eu
                  accumsan. Donec erat dolor, finibus nec malesuada id, ornare
                  eu lorem. Quisque non posuere dui, et venenatis eros. Nunc
                  pulvinar sed orci sed blandit. Integer viverra, sem eget
                  pharetra facilisis, ipsum massa ullamcorper dolor, et pretium
                  massa metus vitae eros. Phasellus posuere tortor id massa
                  lacinia, vel tristique urna tempus. Mauris mi erat,
                  pellentesque et facilisis non, vulputate nec lacus. In sed
                  sapien dolor.
                </p>
                <p>
                  Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                  aliquet, enim turpis cursus sem, quis vestibulum ante risus id
                  arcu. Proin nec augue at magna facilisis rhoncus. Integer non
                  odio rutrum, lobortis sapien vitae, molestie est. Aliquam eget
                  velit semper, interdum justo in, blandit tortor. Aliquam nec
                  pretium dolor, quis porta lectus. Vestibulum urna nunc, congue
                  ac bibendum at, egestas non erat. Donec feugiat finibus
                  dignissim. Donec in purus et ex congue semper ut vitae sapien.
                  Nulla venenatis enim quis congue iaculis. Praesent laoreet
                  ullamcorper diam. Vestibulum porttitor bibendum ipsum vitae
                  semper.lley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Path">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer imperdiet dolor et mattis dapibus. Phasellus ut
                  maximus lectus. Pellentesque facilisis pretium nibh nec
                  consequat. Cras placerat eleifend sagittis. Duis ligula urna,
                  viverra nec congue sed, facilisis vel est. Proin pellentesque
                  metus sed urna scelerisque placerat. Duis quis commodo nisi.
                  Aenean vestibulum diam nulla, a auctor ligula pretium sit
                  amet. Nam non convallis dui, et ultrices orci. Pellentesque
                  vestibulum molestie imperdiet. Integer maximus tellus
                  imperdiet porta pellentesque. Nunc feugiat urna ac ante
                  commodo, id feugiat odio luctus. Nam venenatis et quam eu
                  accumsan. Donec erat dolor, finibus nec malesuada id, ornare
                  eu lorem. Quisque non posuere dui, et venenatis eros. Nunc
                  pulvinar sed orci sed blandit. Integer viverra, sem eget
                  pharetra facilisis, ipsum massa ullamcorper dolor, et pretium
                  massa metus vitae eros. Phasellus posuere tortor id massa
                  lacinia, vel tristique urna tempus. Mauris mi erat,
                  pellentesque et facilisis non, vulputate nec lacus. In sed
                  sapien dolor.
                </p>
                <p>
                  Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                  aliquet, enim turpis cursus sem, quis vestibulum ante risus id
                  arcu. Proin nec augue at magna facilisis rhoncus. Integer non
                  odio rutrum, lobortis sapien vitae, molestie est. Aliquam eget
                  velit semper, interdum justo in, blandit tortor. Aliquam nec
                  pretium dolor, quis porta lectus. Vestibulum urna nunc, congue
                  ac bibendum at, egestas non erat. Donec feugiat finibus
                  dignissim. Donec in purus et ex congue semper ut vitae sapien.
                  Nulla venenatis enim quis congue iaculis. Praesent laoreet
                  ullamcorper diam. Vestibulum porttitor bibendum ipsum vitae
                  semper.lley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Path">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer imperdiet dolor et mattis dapibus. Phasellus ut
                  maximus lectus. Pellentesque facilisis pretium nibh nec
                  consequat. Cras placerat eleifend sagittis. Duis ligula urna,
                  viverra nec congue sed, facilisis vel est. Proin pellentesque
                  metus sed urna scelerisque placerat. Duis quis commodo nisi.
                  Aenean vestibulum diam nulla, a auctor ligula pretium sit
                  amet. Nam non convallis dui, et ultrices orci. Pellentesque
                  vestibulum molestie imperdiet. Integer maximus tellus
                  imperdiet porta pellentesque. Nunc feugiat urna ac ante
                  commodo, id feugiat odio luctus. Nam venenatis et quam eu
                  accumsan. Donec erat dolor, finibus nec malesuada id, ornare
                  eu lorem. Quisque non posuere dui, et venenatis eros. Nunc
                  pulvinar sed orci sed blandit. Integer viverra, sem eget
                  pharetra facilisis, ipsum massa ullamcorper dolor, et pretium
                  massa metus vitae eros. Phasellus posuere tortor id massa
                  lacinia, vel tristique urna tempus. Mauris mi erat,
                  pellentesque et facilisis non, vulputate nec lacus. In sed
                  sapien dolor.
                </p>
                <p>
                  Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                  aliquet, enim turpis cursus sem, quis vestibulum ante risus id
                  arcu. Proin nec augue at magna facilisis rhoncus. Integer non
                  odio rutrum, lobortis sapien vitae, molestie est. Aliquam eget
                  velit semper, interdum justo in, blandit tortor. Aliquam nec
                  pretium dolor, quis porta lectus. Vestibulum urna nunc, congue
                  ac bibendum at, egestas non erat. Donec feugiat finibus
                  dignissim. Donec in purus et ex congue semper ut vitae sapien.
                  Nulla venenatis enim quis congue iaculis. Praesent laoreet
                  ullamcorper diam. Vestibulum porttitor bibendum ipsum vitae
                  semper.lley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Exertion" next="Fluidity" previous="Scale">
                <div className="info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer imperdiet dolor et mattis dapibus. Phasellus ut
                    maximus lectus. Pellentesque facilisis pretium nibh nec
                    consequat. Cras placerat eleifend sagittis. Duis ligula
                    urna, viverra nec congue sed, facilisis vel est. Proin
                    pellentesque metus sed urna scelerisque placerat. Duis quis
                    commodo nisi. Aenean vestibulum diam nulla, a auctor ligula
                    pretium sit amet. Nam non convallis dui, et ultrices orci.
                    Pellentesque vestibulum molestie imperdiet. Integer maximus
                    tellus imperdiet porta pellentesque. Nunc feugiat urna ac
                    ante commodo, id feugiat odio luctus. Nam venenatis et quam
                    eu accumsan. Donec erat dolor, finibus nec malesuada id,
                    ornare eu lorem. Quisque non posuere dui, et venenatis eros.
                    Nunc pulvinar sed orci sed blandit. Integer viverra, sem
                    eget pharetra facilisis, ipsum massa ullamcorper dolor, et
                    pretium massa metus vitae eros. Phasellus posuere tortor id
                    massa lacinia, vel tristique urna tempus. Mauris mi erat,
                    pellentesque et facilisis non, vulputate nec lacus. In sed
                    sapien dolor.
                  </p>
                  <p>
                    Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                    aliquet, enim turpis cursus sem, quis vestibulum ante risus
                    id arcu. Proin nec augue at magna facilisis rhoncus. Integer
                    non odio rutrum, lobortis sapien vitae, molestie est.
                    Aliquam eget velit semper, interdum justo in, blandit
                    tortor. Aliquam nec pretium dolor, quis porta lectus.
                    Vestibulum urna nunc, congue ac bibendum at, egestas non
                    erat. Donec feugiat finibus dignissim. Donec in purus et ex
                    congue semper ut vitae sapien. Nulla venenatis enim quis
                    congue iaculis. Praesent laoreet ullamcorper diam.
                    Vestibulum porttitor bibendum ipsum vitae semper.lley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
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
              <Link to="/">Click here to go back to root page.</Link>
              <ParameterPage name="Fluidity">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer imperdiet dolor et mattis dapibus. Phasellus ut
                  maximus lectus. Pellentesque facilisis pretium nibh nec
                  consequat. Cras placerat eleifend sagittis. Duis ligula urna,
                  viverra nec congue sed, facilisis vel est. Proin pellentesque
                  metus sed urna scelerisque placerat. Duis quis commodo nisi.
                  Aenean vestibulum diam nulla, a auctor ligula pretium sit
                  amet. Nam non convallis dui, et ultrices orci. Pellentesque
                  vestibulum molestie imperdiet. Integer maximus tellus
                  imperdiet porta pellentesque. Nunc feugiat urna ac ante
                  commodo, id feugiat odio luctus. Nam venenatis et quam eu
                  accumsan. Donec erat dolor, finibus nec malesuada id, ornare
                  eu lorem. Quisque non posuere dui, et venenatis eros. Nunc
                  pulvinar sed orci sed blandit. Integer viverra, sem eget
                  pharetra facilisis, ipsum massa ullamcorper dolor, et pretium
                  massa metus vitae eros. Phasellus posuere tortor id massa
                  lacinia, vel tristique urna tempus. Mauris mi erat,
                  pellentesque et facilisis non, vulputate nec lacus. In sed
                  sapien dolor.
                </p>
                <p>
                  Aenean sed velit urna. Aliquam tempus, enim eu rhoncus
                  aliquet, enim turpis cursus sem, quis vestibulum ante risus id
                  arcu. Proin nec augue at magna facilisis rhoncus. Integer non
                  odio rutrum, lobortis sapien vitae, molestie est. Aliquam eget
                  velit semper, interdum justo in, blandit tortor. Aliquam nec
                  pretium dolor, quis porta lectus. Vestibulum urna nunc, congue
                  ac bibendum at, egestas non erat. Donec feugiat finibus
                  dignissim. Donec in purus et ex congue semper ut vitae sapien.
                  Nulla venenatis enim quis congue iaculis. Praesent laoreet
                  ullamcorper diam. Vestibulum porttitor bibendum ipsum vitae
                  semper.lley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
                <MovementVideo
                  videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
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
