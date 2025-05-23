import React from "react";
import BGVideo from "../assets/sample-vid-chongqing.mp4";
import { Button } from "react-bootstrap";

const VideoSection = () => {
    const containerStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
};

  const foregroundText: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'whitesmoke',
  }

    return (
         <div style={containerStyle}>
            <video src={BGVideo} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
            {/* Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0,0,0,0.1))',
                    pointerEvents: 'none', // allows clicks to pass through
                    zIndex: 1,
                }}
            />
            {/* zIndex set for layers */}
            <div style={{...foregroundText, zIndex: 2}}> 
                <h1>Experience Home Entertainment Like No Other</h1>
                <p>Customizable According to Your Liking</p>
            </div>
        </div>
    )
}

export default VideoSection;