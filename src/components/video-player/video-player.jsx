import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isLoading: true,
      isVideoPlaying: false
    };
  }

  render() {
    const {movie} = this.props;

    return <React.Fragment>

      <video
        width="280"
        height="175"
        poster={`${movie.src}`}
        muted={true}
        ref={this._videoRef}
      >
        <source src={movie.preview} type="video/mp4"/>
      </video>

    </React.Fragment>;
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    video.onplay = () => this.setState({
      isVideoPlaying: true
    });

    video.onpause = () => this.setState({
      isVideoPlaying: false
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isHovered) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

}

VideoPlayer.propTypes = {
  movie: movieType,
  isHovered: PropTypes.bool
};

export default VideoPlayer;
