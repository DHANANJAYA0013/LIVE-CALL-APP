import { useWebRTC } from "../hooks/useWebRTC";
import Lobby from "../components/Lobby";
import Room from "../components/Room";
import "../RtcApp.css";

export default function WebRTCPage() {
  const {
    localStream,
    remoteStreams,
    isInCall,
    roomId,
    error,
    startCall,
    leaveCall,
  } = useWebRTC();

  return (
    <div className="app">
      {!isInCall && (
        <Lobby
          onJoin={(room) => {
            if (!room || !room.trim()) return;
            startCall(room.trim());
          }}
          error={error}
        />
      )}

      {isInCall && (
        <Room
          localStream={localStream}
          remoteStreams={remoteStreams}
          roomId={roomId}
          onLeave={() => {
            leaveCall();
          }}
        />
      )}
    </div>
  );
}