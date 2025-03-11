import Spline from '@splinetool/react-spline';

export default function SplineBMO() {

  return (
    <div className="spline">
      <Spline scene="/assets/scene.splinecode" />
      {/* <Spline scene="https://prod.spline.design/9RfB1Sy8AuFtZSVR/scene.splinecode" /> */}
    </div>
  );
}