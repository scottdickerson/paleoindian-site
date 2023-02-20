import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import styles from "@/styles/Slider.module.scss";

export const Slider = ({
  img1Src,
  img2Src,
}: {
  img1Src: string;
  img2Src: string;
}) => (
  <ReactCompareSlider
    className={styles.slider}
    itemOne={<ReactCompareSliderImage src={img1Src} alt="Image one" />}
    itemTwo={<ReactCompareSliderImage src={img2Src} alt="Image two" />}
    onlyHandleDraggable
    position={0}
    handle={
      <img
        alt="slider"
        src="../images/slider/sliderHandle.svg"
        className={styles.handle}
      />
    }
  />
);
