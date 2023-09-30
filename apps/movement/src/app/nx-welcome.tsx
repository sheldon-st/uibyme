import { MovementVideo } from '../components/video';
import '../styles.scss';
export function HomePage() {
  return (
    <div style={{ backgroundColor: 'da' }}>
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
          to catalog the ways that people can{' '}
          <span className="bold">intentionally vary their movements</span>. This
          has been created with the goal of developing a shared language for
          body-centered design and to establish an embodied baseline
          understanding of movement for future design work.
        </span>
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/speedTest.mp4"
          title="speed"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/speedThumbnail.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/pathTest.mp4"
          title="path"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/pathThumbnail.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/angles.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="shape"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/shape.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="scale"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/scale.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="exertion"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/exertion.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="fluidity"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/fluidity.jpeg"
        />
        <p>
          Hover over the titles below for a visual demonstration of each
          parameter. Click to be taken to a more detailed description of that
          parameter.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
