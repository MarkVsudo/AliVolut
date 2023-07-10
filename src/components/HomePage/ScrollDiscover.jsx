import '../../App.css';
import '../../styles/ScrollDiscover.css';

const ScrollDiscover = () => {
  return (
    <div className="moving-mouse-holder">
      <div className="mouse">
        <div className="mouse-button">&nbsp;</div>
      </div>
      <span className="discover">Scroll to discover</span>
    </div>
  );
};

export default ScrollDiscover;
