import { MovementVideo } from '../components/video';

export function HomePage() {
  return (
    <div style={{ backgroundColor: 'da' }}>
      <h1>
        Design Parameters for Movement{' '}
        <span style={{ fontWeight: 'normal' }}>(A Living Library)</span>{' '}
      </h1>

      <h4>
        {' '}
        A working library of design parameters for movement based on an
        iterative process of movement, observation, and analysis to catalog the
        ways that people can intentionally vary their movements. This has been
        created with the goal of developing a shared language for body-centered
        design and to establish an embodied baseline understanding of movement
        for future design work.
      </h4>

      <p>
        Hover over the titles below for a visual demonstration of each
        parameter. Click to be taken to a more detailed description of that
        parameter.
      </p>
      {/* 3 column grid of videos */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
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
          title="body angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/angles.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="body angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/shape.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="body angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/scale.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="body angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/exertion.jpeg"
        />
        <MovementVideo
          videoSrc="https://uibyme.blob.core.windows.net/movement/Timeline 1.mp4"
          title="body angles"
          description="test"
          pausedOverlay="https://uibyme.blob.core.windows.net/movement/fluidity.jpeg"
        />
      </div>
    </div>
  );
}

export default HomePage;
