import { MovementVideo } from '../components/video';
import '../styles.scss';
export function HomePage() {
  return (
    <div className="root">
      <span className="h1">
        Design Parameters for Movement{' '}
        <span className="span">(Living Library)</span>{' '}
      </span>

      {/* 3 column grid of videos */}
      <div style={{ display: 'grid', gridTemplateColumns: ' 1fr 1fr 1fr' }}>
        <span className="body">
          <br />A working library of parameters for movement based on an{' '}
          <span className="bold">
            iterative process of movement, observation, and analysis
          </span>{' '}
          to catalog the ways that people{' '}
          <span className="bold">intentionally vary their movements</span>. This
          has been created with the goal of developing a{' '}
          <span className="bold">
            {' '}
            shared language for body-centered design
          </span>{' '}
          and to establish an embodied baseline understanding of movement for
          future design work.
        </span>
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/speed.mp4"
          title="speed"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/speedThumbnail.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/path.mp4"
          title="path"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/pathThumbnail.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/angles.mp4"
          title="angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/angles.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/shape.mp4"
          title="shape"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/shape.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/scale.mp4"
          title="scale"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/scale.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/exertion.mp4"
          title="exertion"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/exertion.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/fluidity.mp4"
          title="fluidity"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/fluidity.jpeg"
        />
        <p style={{ opacity: 0.8 }}>
          Hover over each title for a visual demonstration of the parameter.
          Click for more detailed information. <br /> <br />
          Scroll to see how all of these parameters may relate.
        </p>
      </div>
      <img
        src="public/movementparameters.png"
        alt=""
        style={{ width: '100%', backgroundColor: 'white' }}
      />
      <div className="credits">
        <span>
          <span>Work by: </span>
          <span className="name">Azza Borovicka-Swanson</span>
          {', '}
          <span className="name">Jude Jarrar</span>
          {', '}
          <span className="name">Matty Tanios</span>
          {', '}
          <span className="name">Megan Lam </span>
          {'& '}
          <span className="name">Stevie Sheldon</span>{' '}
        </span>
      </div>
    </div>
  );
}

export default HomePage;
