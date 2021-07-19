import SWorkInProgress from './style';

export default function WorkInProgress() {
  return (
    <SWorkInProgress>
      <div className="container">
        <img
          src="/image/road-work.svg"
          alt="En travaux"
          title="WorkInProgress"
          className="imgDisconnected"
        />
        <p>Application en cours de développement</p>
      </div>
    </SWorkInProgress>
  );
}
